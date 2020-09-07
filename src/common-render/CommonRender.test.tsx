import * as React from 'react';
import CommonRender from './CommonRender';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, render } from 'enzyme'; // 引入enzyme的渲染方法
import toJson from 'enzyme-to-json';
import config from './config';

// test('the count should be 1 when you click the increase button once', () => {
//     // render
//     const { getByTestId } = render(<CommonRender config={config} timer={10000} />);
//     const increaseButton = getByTestId('increase-button');
//     // act
//     fireEvent.click(increaseButton);
//     // assert
//     expect(getByTestId('count-announcement')).toHaveTextContent('1');
// });

describe('commonrender测试', () => {
    it('千万别出错', () => {
        const Guide_render = render(
            <CommonRender config={config} timer={10000} />, // 直接使用store将引入的store传给待测组件
        );
        expect(toJson(Guide_render)).toMatchSnapshot(); // 生成快照

        const Guide_shallow = shallow(<CommonRender config={config} timer={10000} />);
        console.log(Guide_shallow);
        expect(Guide_shallow.hasClass('itemRight')).toEqual(false);
        // expect(Guide_shallow.hasClass("hide")).toEqual(true);
    });
});
