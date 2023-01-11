import React, { useState } from "react";
import "./PasswordGenerator.css";

function PasswordBox(props) {
    const [password, setPassword] = useState("xyz");
    // console.log(password);
    const background = `./images/copyclipboard.svg`;
    
    return (
        <div className="password-box-container">
            <input
                type="text"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <span><i style={{ backgroundImage: `url(${background})`}} className="clipboard" > </i></span>
        </div>
    );
}

export default PasswordBox;
