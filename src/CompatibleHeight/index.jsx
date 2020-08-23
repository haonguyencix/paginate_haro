import React, { Fragment, useRef, useEffect, Children, useState, createRef, cloneElement } from 'react'
import _ from 'lodash'

const ScrollTableWrapper = (props) => {
  const { children } = props

  const redundancyRef = useRef([])

  if (redundancyRef.current.length !== Children.count(children)) {
    redundancyRef.current = Array(Children.count(children)).fill().map((val, idx) => redundancyRef.current[idx] || createRef())
  }

  const [redundancyHeight, setRedundancyHeight] = useState(0)

  useEffect(() => {
    const redundancyNotNull = redundancyRef.current.filter(val => !_.isNil(val.current))
    const totalRedundancy = _.map(redundancyNotNull, val => val.current.clientHeight).reduce((acc, cur) => acc + cur, 0)
    setRedundancyHeight(totalRedundancy)
  }, [children])

  const findTableTag = (_children) => {
    return _.map(_children, (child, idx) => {
        if (child.type === "table") {
          return (
            <div className='card' style={{ overflow: 'auto', height: `calc(100vh - ${redundancyHeight}px)` }}>
              {child}
            </div>
          )
        }
        return cloneElement(child, { children: findTableTag(Children.toArray(child.props.children)) })
    })
  }

  return (
    <Fragment>
      {Children.map(children, (child, idx) => {
        if (child.key === "flex-height") {
          return findTableTag(Children.toArray(child.props.children))
        }
        return cloneElement(child, { ref: redundancyRef.current[idx] })
      })}
    </Fragment>
  );
}

export default ScrollTableWrapper