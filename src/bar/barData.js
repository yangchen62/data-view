/**
 * @Description:柱状图配置项；
 * data：
 *      数据配置，data为数组，用来放置每一个图例有关的数据，
 *      legendKey放置图例，
 *      dataValue放置数据，dataValue为数组，x表示横轴的值，value表示纵轴的值；
 * config：
 *      柱状图配置项，目前可配置柱状图柱条的宽度
 */
const data = [
    {
        legendKey: '工厂1',
        dataValue: [
            { x: '周一', value: 5 },
            { x: '周二', value: 6 },
            { x: '周三', value: 7 },
            { x: '周四', value: 8 },
            { x: '周五', value: 9 },
            { x: '周六', value: 10 },
            { x: '周日', value: 11 },
        ]
    },
    {
        legendKey: '工厂2',
        dataValue: [
            { x: '周一', value: 15 },
            { x: '周二', value: 16 },
            { x: '周三', value: 17 },
            { x: '周四', value: 18 },
            { x: '周五', value: 19 },
            { x: '周六', value: 20 },
            { x: '周日', value: 21 },
        ]
    }
];

const barConfig = {
    barWidth: 20
};

export default { data, barConfig };