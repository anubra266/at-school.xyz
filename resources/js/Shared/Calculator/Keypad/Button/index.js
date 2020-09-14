import React from "react";
const button = ({ type = "", onButtonPress, children }) => (
    <button onClick={onButtonPress} className={`calcbtn btn--${type}`}>
        {children}
    </button>
);
export default button;
