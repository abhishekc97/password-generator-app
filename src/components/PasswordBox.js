import React from "react";
import styles from "./PasswordBox.module.css";

function PasswordBox(props) {
    const password = props.password;

    function handleCopyPassword() {
        navigator.clipboard.writeText(password);
        props.handleCopy();
    }

    return (
        <>
            <div className={styles.passwordBox}>
                <div className={styles.passwordText}> {password} </div>
            </div>
            <div className={styles.clipboard}>
                <button
                    className={styles.clipboardImage}
                    onClick={handleCopyPassword}
                ></button>
            </div>
        </>
    );
}

export default PasswordBox;
