import React, { useContext } from "react";
import './Services.css';
import Cards from "../Cards/Cards";

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"; 
import AIML from "../../img/AIML.png"

import Resume from "./Resume.docx"
import { themeContext } from "../../Context";

// import {motion} from 'framer-motion'
import {motion} from 'framer-motion'
const Services = ()=> {

    const transition = {duration: 1, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services" id="Service">

            {/* left side  */}
            <div className="awesome">
                <span style={{color: darkMode? 'White': ''}}>My Awesome</span>
                <span>Services</span>
                <spane style={{color: darkMode? 'White': ''}}>Hello everyone Here the some domai adf ha dfhasd fasd j nsjsfnjfn fa sf jnf f fdfsdsj  <br/>I likeasifd efjf fjdf jsdnf fjdf
                    dffg fgnfj to work.
                </spane>
                <a href={Resume}>
                    <button className="button s-button">Download CV</button>                    
                </a>
                <div className="blur s-blur1" style={{background: '#ABF1FF94' }}></div>
                
            </div>
           
            {/* right sides */}
            <div className="cards">
                {/* first card */}
                    <motion.div
                    initial= {{left:'25rem'}}
                    whileInView = {{left: '14rem'}}
                    viewport={{ once: false }}
                    transition = {transition}
                    style={{left: '14rem'}}>
                        <Cards 
                        emoji={HeartEmoji} 
                        head={"Desgin"}
                        details = {"Photoshop, sketch, adobee"} 
                        />
                    </motion.div>
                {/* second card */}
                    <motion.div 
                    initial= {{left:'-10rem'}}
                    whileInView = {{left: '-4rem'}}
                    viewport={{ once: false }}
                    transition = {transition}
                    style={{left: '-4rem', top: '12rem'}}>
                        <Cards 
                        emoji={Glasses} 
                        head={"Developer"}
                        details = {"HTMl, JavaScript, CSS"} 
                        />
                    </motion.div>
                {/* Thrid card */}
                    <motion.div 
                    initial= {{left:'22rem'}}
                    whileInView = {{left: '12rem'}}
                    viewport={{ once: false }}
                    transition = {transition}
                    style={{left: '12rem', top: '19rem'}}>
                        <Cards 
                        emoji={AIML} 
                        head={"Developer"}
                        details = {"Devloped ML models"} 
                        />
                    </motion.div>
                    <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>

            </div>
        </div>
    );
}

export default Services;