import React, { useLayoutEffect, forwardRef } from 'react';
import useAutoResize from '../use/autoResize';
// @ts-ignore
import './FullScreenContainer.scss';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    screenWH?: {
        width: number;
        height: number;
    };
}

export const FullScreenContainer = forwardRef((props: Readonly<Props>, ref) => {
    const { domRef } = useAutoResize(ref);

    useLayoutEffect(() => {
        const { width, height } = props.screenWH || window.screen;
        Object.assign(domRef.current.style, {
            width: `${width}px`,
            height: `${height}px`,
        });

        const scale = Math.min(window.innerWidth / window.screen.width, window.innerHeight / window.screen.height);

        domRef.current.style.transform = `scale(${scale})`;
    });

    return (
        <div className={`cm-data-view-container ${props.className || ''}`} style={props.style} ref={domRef}>
            {props.children}
        </div>
    );
});
