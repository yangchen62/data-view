import React from 'react';
import ReactDOM from 'react-dom';
import CommonRender from './common-render/CommonRender';
import config from './common-render/config';
import { FullScreenContainer } from './container/FullScreenContainer';

ReactDOM.render(<FullScreenContainer screenWH={{ width: 200, height: 200 }} />, document.getElementById('root'));
