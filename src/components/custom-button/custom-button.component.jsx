import React from "react";
import "./custom-button.styles.css";


const CustomButton = ({children, buttonType, ...otherProps}) => {
    
    return (

    <button className={`${
          (buttonType === "Btn1") ? "btn-1" 
        : (buttonType === "Btn2") ? "btn-2" 
        : ''} custom-button`} {...otherProps}>
        { children }
    </button>
)}
export default CustomButton;