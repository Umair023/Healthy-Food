import React from 'react'
import moduleCSS from './Container.module.css'
const Container = (props) => {
  return (
    <div className={`${moduleCSS.container}`}>
      {props.children}
    </div>
  )
}

export default Container
