import React from 'react'
import moduleCSS from './Foodinput.module.css'
const Foodinput = (props) => {
  return (
    <div>
      <input type="text" placeholder='Enter food' className={`${moduleCSS.input}`}
       onKeyDown={props.onEnterFunction}/>
    </div>
  )
}

export default Foodinput
