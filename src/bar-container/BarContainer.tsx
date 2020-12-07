import React from 'react';
// @ts-ignore
import './BarContainer.scss';

interface ItemConfig {
    className?: string;
    style?: React.CSSProperties;
}

interface Props {
    className?: string;
    style?: React.CSSProperties;
    children?: Array<React.ReactNode>;
    width?: number;
    itemConfig?: Array<ItemConfig>;
}

export class BarContainer extends React.Component<Props> {
    constructor(props: Readonly<Props>) {
        super(props);
    }
    render(): React.ReactNode {
        const { children, width, style, className, itemConfig } = this.props;
        return (
            <div className={`cm-data-view-bar-container ${className}`} style={Object.assign({ width }, style)}>
                {children &&
                    children.map((item, index) => {
                        return (
                            <div
                                className={typeof itemConfig === 'object' ? itemConfig[index].className : ''}
                                style={Object.assign(
                                    { flex: `1 0 calc(100% / ${children.length}` },
                                    itemConfig && itemConfig[index].style,
                                )}
                            >
                                {children[index]}
                            </div>
                        );
                    })}
            </div>
        );
    }
}
