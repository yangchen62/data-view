import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, render } from 'enzyme'; // 引入enzyme的渲染方法
import toJson from 'enzyme-to-json';
import Marquee from './Marquee';

describe('marquee测试', () => {
    it('千万别出错', () => {
        const component = (
            <Marquee>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </Marquee>
        );
        const Test_render = render(component);
        expect(toJson(Test_render)).toMatchSnapshot(); // 生成快照

        // const Guide_shallow = shallow(component);
        // console.log(Guide_shallow);
    });
});
