import React, { Component } from 'react';
import { AnyComponent, ObjectType } from '../types';
// import VisitorCount from "components/VisitorCount";

interface Props {
    children: Array<Component>;
    containerStyle: ObjectType;
    size?: number;
    interval?: number;
    showVisitor?: boolean;
    Map: typeof React.Component;
    OtherNode?: AnyComponent;
}

interface State {
    show: boolean;
}

export class Container extends Component<Props, State> {
    private firstInit: boolean;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            show: true,
        };
        this.firstInit = true;
    }

    componentDidMount() {
        const { children } = this.props;
        if (children.length > 6) {
            this.showChange();
        }
    }

    sliceChildren = () => {
        const { show } = this.state;
        const { children, size = 3 } = this.props;
        const childList = [...children];
        if (!childList || !childList.length) return;
        let { length } = children;
        if (length % 6 !== 0) {
            childList.splice(6, 0, ...childList.slice(0, 3));
        }
        length = childList.length;
        const result = [...new Array(Math.ceil(length / size))].map((item, index) => {
            const position = index % 2 === 0 ? 'Left' : 'Right';
            // 前一半先展示  后一半隐藏   到达切换时间后反转过来
            const showWrapper = length <= 6 || index < length / size / 2 ? show : !show;
            // 要切换时  第一次进来  切换后才战士的项目  隐藏
            const style = length > 6 && this.firstInit && index >= length / size / 2 ? { display: 'none' } : {};
            return (
                <div key={index} style={style} className={this.getClassName(showWrapper, position)}>
                    {childList.slice(index * size, (index + 1) * size)}
                </div>
            );
        });
        this.firstInit = false;
        return result;
    };

    showChange = () => {
        setTimeout(() => {
            this.setState(
                {
                    show: !this.state.show,
                },
                this.showChange,
            );
        }, this.props.interval);
    };

    getClassName = (show: boolean, position: string) =>
        `${this.props.containerStyle[`${position.toLowerCase()}Wrapper`]} ${
            show ? `animate__animated animate__backIn${position}` : `animate__animated animate__backOut${position}`
        }`;

    render() {
        const { OtherNode, containerStyle, Map } = this.props;
        return (
            <div className={containerStyle.container}>
                <Map />
                {this.sliceChildren()}
                {OtherNode && <OtherNode />}
            </div>
        );
    }
}
