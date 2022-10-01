
import React, { useContext } from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassessimoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context';

import { motion, useMotionValue } from "framer-motion"

const Intro = () => {
    const transition = {duration: 2, type: 'spring'};


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}} >Hi! Im</span>
                    <span>Abhay Gupta</span>
                    <span style={{color: darkMode? 'White': ''}}>An independent and self-motivated under graduate with excellent analytical and problem solving skills
                        <br/>Software Developers with the Fresh mind and AIML enthusiastic 
                    </span>
                </div>
                <button className='button i-button'>Hire me!</button>
                <div className="i-icon">
                    
                    <a href="https://github.com/abhay2912">
                    <img src= {Github} alt=" " />
                    </a>
                    <a href="https://www.linkedin.com/in/abhay-gupta-221b36206/">
                        <img src= {LinkedIn} alt=" " />
                    </a>
                    <a href="https://www.linkedin.com/in/abhay-gupta-221b36206/">
                        <img src= {Instagram} alt=" " />
                    </a>
                    
                </div>
            </div>
            {/* Right side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />

                <motion.img
                initial={{left:'-36%'}}
                whileInView ={{left: '-24%'}}
                // onViewportBoxUpdate = {{scale: '0.5'}}
                viewport={{ once: false }}
                transition = {transition}
                 src={glassessimoji} alt="" />

                <motion.div
                    initial={{left:'74%'}}
                    whileInView={{left: '65%'}}
                    viewport={{ once: false }}
                    transition = {transition}
                    style={{top: '-4%', left: '65%'}}
                    className = "Floating-Div">
                    
                    <FloatingDiv image={Crown} text1="Web" text2="Developer" />
                </motion.div>
                <motion.div 
                initial= {{left: '9rem'}}
                whileInView = {{left: '0rem'}}
                viewport={{ once: false }}
                transition = {transition}
                style={{top: '18rem', left: '0rem'}}
                // className = "Floating-Div"
                >
                    <FloatingDiv image={thumbup} text1="Artificial" text2="Intelligence" />
                </motion.div>
                {/* blur div */}
                <div className="blur" 
                style={{background:"rgb(238, 210, 255)"}}>
                </div>
                <div className="blur" 
                style={{
                    background:'#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                    }}></div>
            </div>
        </div>
        );
}
export default Intro;