import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './FloatingDiv.css'

const FloatingDiv = ({image, text1, text2}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(

        <div className="floatingdiv">
            <img src={image} alt="" />
            <span style={{color: darkMode? 'black':''}}>
                {text1}
                <br/>
                {text2}
            </span>
        </div>
    )
}
export default FloatingDiv;