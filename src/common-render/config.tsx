import React from 'react';
// @ts-ignore
import Style from './common.module.scss';
import Marquee from '../marquee/Marquee';

class Class extends React.Component {
    render() {
        return (
            <Marquee>
                <div>456</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>456</div>
            </Marquee>
        );
    }
}
export default {
    style: Style,
    // OneMap: Class,
    showVisitor: true,
    children: [
        {
            component: Class,
            className: 'item',
            url: '',
        },
        {
            component: Class,
            className: 'item',
            url: '',
        },
        {
            component: Class,
            className: 'item',
            url: '',
        },
        {
            component: Class,
            className: 'itemRight',
            url: '',
        },
        {
            component: Class,
            className: 'itemRight',
            url: '',
        },
        {
            component: Class,
            className: 'itemRight',
            url: '',
        },
        {
            component: Class,
            className: 'item',
            url: '',
        },
        {
            component: Class,
            className: 'item',
            url: '',
        },
        {
            component: Class,
            className: 'item',
            url: '',
        },
        {
            component: Class,
            className: 'itemRight',
            url: '',
        },
        {
            component: Class,
            className: 'itemRight',
            url: '',
        },
        {
            component: Class,
            className: 'itemRight',
            url: '',
        },
    ],
};
