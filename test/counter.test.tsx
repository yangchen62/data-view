import * as React from 'react';
import Counter from './counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";


test('the count should be 1 when you click the increase button once', () => {
    // render
    const { getByTestId } = render(<Counter />);
    const increaseButton = getByTestId('increase-button');
    // act
    fireEvent.click(increaseButton);
    // assert
    expect(getByTestId('count-announcement')).toHaveTextContent('1');
});

describe("pages/list/guide",()=>{
    it("should render without throwing an error",()=>{
        const Guide_render = render(
            <Counter />
        );
        // 生成快照
        // expect(toJson(Guide_render)).toMatchSnapshot();
        const Guide_shallow = shallow(
            <Counter />
        );
        expect(Guide_shallow.hasClass("hide")).toEqual(false);
        // expect(Guide_shallow.hasClass("hide")).toEqual(true);
    });
});