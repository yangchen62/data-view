/**
 * @Description:柱状图，支持多图例或单图例数据，需传参config和data配置
 */
import React from 'react';
// @ts-ignore
import echarts from 'echarts';
import './bar.scss';

interface Props {
    config?: {
        title?: {
            text?: string;
            subtext?: string;
        };
        barWidth?:string|number
    };
    data: Array<data>;
}

interface data {
    legendKey?: string;
    dataValue: Array<dataValue>
}

interface dataValue {
    x: string;
    value: number;
}

export class Bar extends React.Component<Props> {
    constructor(props: Readonly<Props>) {
        super(props);
    }

    componentDidMount() {
        const myChart = echarts.init(document.getElementById('main'));
        const data = this.props.data;// 元数据
        const config = this.props.config;// 配置
        const color = [
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#144D95', // 0% 处的颜色
            }, {
                offset: 1,
                color: '#2179e8', // 100% 处的颜色
            }], false),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#0D727C', // 0% 处的颜色
            }, {
                offset: 1,
                color: '#16D8EA', // 100% 处的颜色
            }], false),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#A3862A', // 0% 处的颜色
            }, {
                offset: 1,
                color: '#ecc445', // 100% 处的颜色
            }], false),
        ];
        const legendData: { name: string; }[] = [];
        const series: { name: string; type: string; data: number[]; barWidth?:string|number }[] = [];
        let xAxisData = {};
        data.forEach((item) => {
            const yValueArr: number[] = [];
            const xValueArr: string[] = [];
            if (item.legendKey) {
                legendData.push({
                    name: item.legendKey,
                });
            }
            item.dataValue.forEach((i) => {
                yValueArr.push(i.value);
                xValueArr.push(i.x);
            });
            xAxisData = xValueArr;
            series.push({
                name: item.legendKey || '',
                type: 'bar',
                data: yValueArr,
                barWidth: (config as any).barWidth
            });
        });
        const option = {
            color: color,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            legend: {
                orient: 'horizontal',
                left: 'center',
                top: '5%',
                data: legendData,
            },
            xAxis: {
                data: xAxisData,
            },
            yAxis: {
                axisLine: {
                    show: false,
                },
            },
            series: series,
        };
        myChart.setOption(option);
        window.addEventListener('resize', () => {
            myChart.resize();
        });
    }


    render(): React.ReactNode {
        return (
            <div id="main" style={{ width: '100%', height: '100%' }}/>
        );
    }
}