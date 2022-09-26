import React, { useContext } from 'react'
import "./Works.css"


import ReactImg from "../../img/react.png";
import Tensorflow from "../../img/tensorflow.png";
import Django from '../../img/django.png';
import firebase from '../../img/firebase.png'
import { themeContext } from '../../Context';


import {motion} from 'framer-motion'

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='Works'>
         {/* left side  */}
         <div className="awesome">
                <span style={{color: darkMode? 'White': ''}}>Worked with All these</span>
                <span>FrameWorks & libaries</span>
                <spane style={{color: darkMode? 'White': ''}}>Hello everyone Here the some frameworks i have worked in. 
                    <br/>Like i have worked with pandas, Tensoflow, numpy <br/>for the ML modeling.
                </spane>
                
                    <button className="button s-button">Hire me</button>                    
                
                <div className="blur s-blur1" style={{background: '#ABF1FF94' }}></div>
                
        </div>
        {/* right sides */}
        <div className="w-right">
          <motion.div 
          initial ={{rotate: 45}}
          whileInView = {{rotate: 0}}
          viewport = {{margin: '-40px'}}
          transition = {{duration :3.5, type: 'spring'}}
          className="w-mainCircle">
            <div className="w-secondaryCircle">
              <img src={firebase} alt="" />
            </div>
            <div className="w-secondaryCircle">
              <img src={ReactImg} alt="" />
            </div>
            <div className="w-secondaryCircle">
              <img src={Tensorflow} alt="" />
            </div>
            <div className="w-secondaryCircle">
              <img src={Django} alt="" />
            </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
        
    </div>
  )
}

export default Works