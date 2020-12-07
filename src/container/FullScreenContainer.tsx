import React, { useLayoutEffect, forwardRef } from 'react';
import useAutoResize from '../use/autoResize';
// @ts-ignore
import './style.scss';
import { AnyComponent } from '../types';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    children?: AnyComponent;
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

        domRef.current.style.transform = `scale(${document.body.clientWidth / window.screen.width})`;
    });

    return (
        <div id="cm-data-view-container" className={props.className} style={props.style} ref={domRef}>
            {props.children}
        </div>
    );
});
