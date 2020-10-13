import React, { Component } from 'react';
import { Container } from '..';
import { AnyComponent } from '../types';
// @ts-ignore
import defaultStyle from './common.module.scss';

interface HProps {
    chartConfig: any;
}

/**
 * 高阶组件封装请求方法和渲染方法
 * @param WrappedComponent 需要渲染的组件
 * @param url 请求的地址
 * @param timer 刷新频率
 * @constructor
 */
function HOC(WrappedComponent: AnyComponent, url: string, timer: number) {
    return class extends Component<HProps> {
        state = {
            data: {},
        };
        timeout: any = null;
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
    getMergeStyle: any = () => {
        const { style } = this.props.config;
        const result = {};
        Object.keys(Object.assign({}, defaultStyle, style)).map(item => {
            let newStyle = { [item]: defaultStyle[item] };
            if (style[item]) newStyle = { [item]: style[item] };
            if (style[item] && defaultStyle[item]) newStyle = { [item]: `${defaultStyle[item]} ${style[item]}` };
            Object.assign(result, newStyle);
        });
        return result;
    };
    render() {
        // cssmodule 地图 是否展示浏览人数 需要渲染的子节点
        const { OneMap, showVisitor, children } = this.props.config;
        const style: any = this.getMergeStyle();
        return (
            <Container timer={this.props.timer} Map={OneMap} containerStyle={style} showVisitor={showVisitor}>
                {/* 对于每个子组件遍历渲染 */}
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
