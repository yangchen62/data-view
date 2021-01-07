import React from 'react';
import ReactDOM from 'react-dom';
import CommonRender from './common-render/CommonRender';
import config from './common-render/config';
import { FullScreenContainer } from './full-screen-container/FullScreenContainer';
import { BarContainer } from './bar-container/BarContainer';
import { Bar } from './bar/bar';
import barData from './bar/barData';
import { BarGraph } from './bar-graph/bar-graph';
import barGraphData from './bar-graph/bar-graphData';

const data = barData.data;
const barConfig = barData.barConfig;
const barGraph = barGraphData.data;
const barGraphConfig = barGraphData.barConfig;

ReactDOM.render(
    <FullScreenContainer>
        <BarContainer
            itemConfig={[
                { style: { flex: '1 0 40%' }},
                { style: { flex: '1 0 40%' }},
                { style: { flex: '1 0 40%' }},
            ]}
        >
            <Bar data={data} config={barConfig} />
            <BarGraph data={barGraph} config={barGraphConfig} />
            <div>123</div>
        </BarContainer>
    </FullScreenContainer>,
    document.getElementById('root'),
);
