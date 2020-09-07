import React from 'react';
import ReactDOM from 'react-dom';
import CommonRender from './common-render/CommonRender';
import config from './common-render/config';

ReactDOM.render(<CommonRender config={config} timer={1000000} />, document.getElementById('root'));
