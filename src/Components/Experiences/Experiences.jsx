import React, { useContext } from 'react'
import { themeContext } from '../../Context';
import './Experiences.css'
const Experiences = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experiences' id='Experince'>
        <div className="achievements">
          <div className="circle">2+</div>
          <span style={{color: darkMode? 'white': ''}}>Years</span>
          <span> Experiences in WebDev.</span>
        </div>
        <div className="achievements">
          <div className="circle">6+</div>
          <span style={{color: darkMode? 'white': ''}}>completed </span>
          <span>Personal project</span>
        </div>
        <div className="achievements">
          <div className="circle">4+</div>
          <span style={{color: darkMode? 'white': ''}}>Hackerank star</span>
          <span> On DSA</span>
        </div>
    </div>
  )
}

export default Experiences