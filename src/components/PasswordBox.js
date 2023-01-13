import React from "react";
import "./PasswordBox.css";

function PasswordBox(props) {
    const password = props.password;

    function handlePasswordCopy() {
        navigator.clipboard.writeText(password);
        props.handleCopy();
    }

    return (
        <>
            <div className="password-box">
                <div className="password-text"> {password} </div>
            </div>
            <div className="clipboard">
                <button className="clipboard-image" onClick={handlePasswordCopy}></button>
            </div>
        </>
    );
}

export default PasswordBox;
