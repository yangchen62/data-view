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
- 空白区域
- header
- footer
