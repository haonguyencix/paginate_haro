import React, { Fragment, useRef, useEffect, useState } from 'react'

const ScrollTableWrapper = (props) => {
  const { children } = props
  const tableRef = useRef(null)
  const [redundancyHeight, setRedundancyHeight] = useState(0)

  useEffect(() => {
    setRedundancyHeight(document.documentElement.offsetHeight - tableRef.current.clientHeight)
  }, [])

  return (
    <Fragment>
      <div ref={tableRef} className='card' style={{ overflow: 'auto', height: `calc(100vh - ${redundancyHeight}px)` }}>
        {children}
      </div>
    </Fragment>
  )
}

export default ScrollTableWrapper