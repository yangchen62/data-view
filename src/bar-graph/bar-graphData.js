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
        name: '南阳',
        value: 167,
    },
    {
        name: '周口',
        value: 67,
    },
    {
        name: '漯河',
        value: 123,
    },
    {
        name: '郑州',
        value: 55,
    },
    {
        name: '西峡',
        value: 98,
    },
    {
        name: '南阳',
        value: 167,
    },
    {
        name: '周口',
        value: 67,
    },
    {
        name: '漯河',
        value: 123,
    },
    {
        name: '郑州',
        value: 55,
    },
    {
        name: '西峡',
        value: 98,
    },
];

const barConfig = {
    barWidth: 20,
};

export default { data, barConfig };
