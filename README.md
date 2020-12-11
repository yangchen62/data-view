# data-view
数据大屏展示
### 项目开发
项目使用ts+webpack进行开发，代码提交时有代码扫描，请按照代码规范书写代码。
### 项目依赖
目前项目必须依赖echarts 如果有新的依赖请跟组员沟通
---
### 组件划分
- 全屏容器
```javascript
    // 作为整个大屏的容器组件，也可以作为某个图表的容器，需要提前设置body等的margin为0，
    // screenWH 支持自定义屏幕宽高，如果不设置将自动取整个屏幕的宽高作为容器的宽高
    <FullScreenContainer screenWH={{ width: 200, height: 200 }} ></FullScreenContainer>
```
- 内容组件
```javascript
    // 左边或者右边的总体容器
    // 内部的元素会用flex等分整个容器
    // 可以自定义item的样式等
    // itemconfig的数量要跟children的数量保持一致
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
```
- 统一渲染组件
- 柱状图
- 饼图
- 折线图
- 表格
```javascript
    //header：表头，不使用则不显示
    //data：表格数据
    //rowNum：显示行数，默认5行
let data = {
    data: [['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3']
    ],
    header: ['列1', '列2', '列3'],
}
   <ScrollBoard
            config={data}
            style={{ width: 500, height: 200 }}
        />
- 空白区域
- header
- footer
