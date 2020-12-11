import { any } from 'prop-types';
import React, { useEffect, useState, useRef, useMemo, forwardRef } from 'react';
import useAutoResize from '../use/autoResize'

import './style.less'

/**
 * 表格实时滚动
 */
interface Props {
  onClick?: any,
  config: {
    /**
     * @description Board header
     * @type {any}
     * @default header = []
     * @example header = ['column1', 'column2', 'column3']
     */
    header: any,
    /**
     * @description Board data
     * @type {Array<Array>}
     * @default data = []
     */
    data: Array<string>,
    /**
     * @description Row num
     * @type {Number}
     * @default rowNum = 5
     */
    rowNum: 5,
    /**
     * @description Header background color
     * @type {String}
     * @default headerBGC = '#00BAFF'
     */
    headerBGC: '#00BAFF',
    /**
     * @description Odd row background color
     * @type {String}
     * @default oddRowBGC = '#003B51'
     */
    oddRowBGC: '#003B51',
    /**
     * @description Even row background color
     * @type {String}
     * @default evenRowBGC = '#003B51'
     */
    evenRowBGC: '#0A2732',
    /**
     * @description Scroll wait time
     * @type {Number}
     * @default waitTime = 2000
     */
    waitTime: 2000,
    /**
     * @description Header height
     * @type {Number}
     * @default headerHeight = 35
     */
    headerHeight: 35,
    /**
     * @description Column width
     * @type {Array<Number>}
     * @default columnWidth = []
     */
    columnWidth: [],
    /**
     * @description Column align
     * @type {Array<String>}
     * @default align = []
     * @example align = ['left', 'center', 'right']
     */
    align: [],
    /**
     * @description Show index
     * @type {Boolean}
     * @default index = false
     */
    index: false,
    /**
     * @description index Header
     * @type {String}
     * @default indexHeader = '#'
     */
    indexHeader: '#',
    /**
     * @description Carousel type
     * @type {String}
     * @default carousel = 'single'
     * @example carousel = 'single' | 'page'
     */
    carousel: 'single',
    /**
     * @description Pause scroll when mouse hovered
     * @type {Boolean}
     * @default hoverPause = true
     * @example hoverPause = true | false
     */
    hoverPause: true
  },
  className?: string,
  style?: any,
  onMouseOver?: any
}
let interval: any = null;
export const ScrollBorad = forwardRef((props: Readonly<Props>, ref) => {
  const { width, height, domRef } = useAutoResize(ref)
  let [state, setState] = useState({
    mergedConfig: {
      mergedConfig: 0,
      headerHeight: 0,
      headerBGC: 0
    },

    header: [],

    rows: [],

    widths: [],

    heights: [],

    aligns: []
  })

  const stateRef = useRef({
    ...state,
    rowsData: [],
    avgHeight: 0,
    animationIndex: 0
  })
  const getBackgroundColor = (rowIndex: any) => {
    return rowIndex % 2 === 0 ? '#0A2732' : '#003B51';
  }
  Object.assign(stateRef.current, props)
  const task = useRef({})
  useEffect(() => {
    let { data, header, rowNum, waitTime } = props.config;
    // Object.assign(rows, data.splice(0, rowNum ? rowNum - 1 : 5))

    let map = {
      rows: [],
      header
    }

    let newData: any = [];
    data.map((item, index) => {
      if ((rowNum || 5) > index) {
        newData[index] = item;
      }
    })
    Object.assign(map.rows, newData)
    let index = 0;
    setState(state => ({ ...state, ...map }))
    clearInterval(interval);
    interval = setInterval(() => {
      if (index + (rowNum || 5) >= data.length) { index = -(rowNum || 5) };
      newData = [...newData, data[index + (rowNum || 5)]]
      Object.assign(map.rows, newData)
      setState(state => ({ ...state, ...map }))
      newData.shift();
      index++;
    }, waitTime ? waitTime : 2000)
    // if (5 >= rowLength) return
  }, [domRef.current]);

  function headerHight(prop: any) {
    let { style, config } = props;
    let height = config.header && typeof Array(config.header) ? config.header.length : 0
    return style?.height
  }
  const { mergedConfig, header, rows } = state;
  const { config, style } = props;
  const rowHeght = ((style?.height - (config.headerHeight ? config.headerHeight : 35)) / (config.rowNum ? config.rowNum : 5));
  const rowWidth = (style?.width / (config.header ? config.header.length : config.data[0].length))
  return (
    <div className="cm-scroll-board" style={props.style} ref={domRef}>
      {!!header && !!mergedConfig && (
        <div
          className='cm-header'
          style={{ backgroundColor: `${"rgb(0, 186, 255)"}` }}
        >
          {header.map((headerItem: any, i: number) => (
            <div
              className='cm-header-item'
              key={`${headerItem}-${i}`}
              style={{
                height: `${config.headerHeight ? config.headerHeight : 35}px`,
                lineHeight: `${config.headerHeight ? config.headerHeight : 35}px`,
                width: `${rowWidth}px`
                // align={aligns[i]}
              }}
              dangerouslySetInnerHTML={{ __html: headerItem }}
            />
          ))}
        </div>
      )}

      {!!mergedConfig && (
        <div
          className='cm-rows'
          style={{
            height: `${style?.height -
              (config.headerHeight ? config.headerHeight : 35)}px`
          }}
        >
          {rows.map((row: any, ri: number) => (
            <div
              className='cm-row-item'
              key={`${row.toString() + "row"}-${row.scroll}`}
              style={{
                height: `${(rows.length === 6 && ri === 0) ? 0 : rowHeght}px`,
                lineHeight: `${(rows.length === 6 && ri === 0) ? 0 : rowHeght}px`,
                backgroundColor: `${getBackgroundColor(ri)}`
              }}
            >
              {row.map((ceil: any, ci: number) => (
                <div
                  className='cm-ceil'
                  key={`${ceil}-${ri + "ceil"}-${ci}`}
                  style={{ width: `${rowWidth}px` }}
                  // align={aligns[ci]}
                  dangerouslySetInnerHTML={{ __html: ceil }}
                // onClick={() => emitEvent(onClick, ri, ci, row, ceil)}
                // onMouseEnter={() => handleHover(true, ri, ci, row, ceil)}
                // onMouseLeave={() => handleHover(false)}
                />
              ))}
            </div>
          ))}
        </div>
      )}

    </div>
  )
})

export default ScrollBorad;
