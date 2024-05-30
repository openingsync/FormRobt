import React, { useState } from 'react'
import Robot from '../Components/Robot'
import '../App.css'

const Form = () => {

    const [valueText, setvalueText] = useState("")

    const handleInputChange = (e) => {
        const text = e.target.value;
        setvalueText(text);
      }; 
 
  return (
    <div>
      <form className='form_rot'>
          <div className='content_rot'>
            <h2 className='subt_rot'>Hello, World! Bienvenido al futuro del código.</h2>
              <Robot value={valueText}/>
              <input type='text' value={valueText} onChange={handleInputChange} className='input_rot' placeholder='write anything...'/>
              
          </div>
          <button className='btn_rot'>Send</button>

      </form>
    </div> 
  )
}

export default Form
