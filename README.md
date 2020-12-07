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
    <FullScreenContainer></FullScreenContainer>
```
- 内容组件
- 统一渲染组件
- 柱状图
- 饼图
- 折线图
- 表格
- 空白区域
- header
- footer
