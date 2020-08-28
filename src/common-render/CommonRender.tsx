import React, { Component } from 'react';
import { Container } from '../container/container';
import { AnyComponent } from '../types';

interface HProps {
    chartConfig: any;
}

function HOC(WrappedComponent: AnyComponent, url: string, timer: number) {
    return class extends Component<HProps> {
        state = {
            data: {},
        };
        timeout: NodeJS.Timeout | null = null;
        async componentDidMount() {
            const data = await this.getData();
            this.interval();
            this.setState({
                data,
            });
        }
        interval = async () => {
            const { chartConfig } = this.props;
            this.timeout = setInterval(() => {
                this.getData();
            }, chartConfig.timeout || timer);
        };
        getData = async () => {
            // 请求
            console.log('请求');
        };
        componentWillUnmount() {
            if (this.timeout) {
                clearInterval(this.timeout);
            }
        }
        render() {
            return <WrappedComponent data={this.state.data} />;
        }
    };
}

export default class extends Component<{ config: any; timer: number }> {
    render() {
        const { style, OneMap, showVisitor, children } = this.props.config;
        return (
            <Container Map={OneMap} containerStyle={style} showVisitor={showVisitor}>
                {children.map((item: any, index: number) => {
                    const C = HOC(item.component, item.url, this.props.timer);
                    return (
                        <div key={index} className={style[item.className]}>
                            <C chartConfig={item} />
                        </div>
                    );
                })}
            </Container>
        );
    }
}
