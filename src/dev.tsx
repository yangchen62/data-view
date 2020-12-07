import React from 'react';
import ReactDOM from 'react-dom';
import CommonRender from './common-render/CommonRender';
import config from './common-render/config';
import { FullScreenContainer } from './full-screen-container/FullScreenContainer';
import { BarContainer } from './bar-container/BarContainer';

ReactDOM.render(
    <FullScreenContainer>
        <BarContainer
            itemConfig={[
                { style: { flex: '1 0 40%' }},
                { style: { flex: '1 0 40%' }},
                { style: { flex: '1 0 40%' }},
            ]}
        >
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </BarContainer>
    </FullScreenContainer>,
    document.getElementById('root'),
);
