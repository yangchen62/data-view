import React from 'react';
import './bar-graph.scss';
interface Props {
    [propName: string]: any;
}
interface State {
    [propName: string]: any;
}
export class BarGraph extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: this.props.data,
            num: 0,
            linheight: `${100 / this.props.data.length }%`,
        };
    }
    componentDidMount() {
        let bigNum = 0;
        this.state.data.forEach((element: any) => {
            if (element.value > bigNum) {
                bigNum = element.value;
            }
        });
        this.setState({
            num: bigNum,
        });
    }
    render(): React.ReactNode {
        const { data, linheight, num } = this.state;
        return (
            <div className="dom" style={{ width: '100%', height: '100%' }}>
                <div className="li">
                    <div className="tdL">
                        {data.map((item: any, index: number) => (
                            <div style={{ height: linheight }} key={index}>
                                <div className="title">{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="tdC">
                        {data.map((item: any, index: number) => (
                            <div className="tdCLi" style={{ height: linheight }} key={index}>
                                <div className="graphBox">
                                    <div className="boxLang" style={{ width: `${(item.value / num) * 100 }%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="tdR">
                        {data.map((item: any, index: number) => (
                            <div style={{ height: linheight }} key={index}>
                                <div className="value">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
