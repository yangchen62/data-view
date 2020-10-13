import React, { Component, createRef } from 'react';

interface State {
    top: number;
}

interface RefObject<T> {
    readonly current: T | null;
}

export default class extends Component<any, State> {
    constructor(props: Readonly<any>) {
        super(props);
        this.marquee = createRef();
        this.img = createRef();
        this.p = createRef();
        this.content = createRef();
        this.state = {
            top: 0,
        };
    }
    marquee: RefObject<any>;
    img: RefObject<any>;
    p: RefObject<any>;
    content: RefObject<any>;

    componentDidMount() {
        const parentHeight = this.marquee.current.clientHeight;
        const childHeight = this.content.current.clientHeight;
        if (parentHeight - childHeight < 10) {
            this.scroll(parentHeight, childHeight);
        }
    }

    scroll = (parent: number, childHeight: number) => {
        setTimeout(() => {
            let { top } = this.state;
            top -= 1;
            if (top <= -childHeight - 50) {
                top = parent;
            }
            this.setState({
                top,
            });
            this.scroll(parent, childHeight);
        }, 50);
    };

    render() {
        const { top } = this.state;
        return (
            <div
                ref={this.marquee}
                style={{
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        top,
                    }}
                    ref={this.content}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
