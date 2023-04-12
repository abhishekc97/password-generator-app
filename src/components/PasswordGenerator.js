import React, { useEffect, useState } from "react";
import PasswordBox from "./PasswordBox";
import styles from "./PasswordGenerator.module.css";
import ReactSlider from "react-slider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function PasswordGenerator(props) {
    const [password, setPassword] = useState("P4$5W0rD!");
    const [length, setLength] = useState(4);
    let allowedCharacters = "";

    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [special, setSpecial] = useState(false);

    if (uppercase) allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) allowedCharacters += "0123456789";
    if (special) allowedCharacters += "!@#$%^&*()-=_?";

    const [recents, setRecents] = useState({
        recent1: "",
        recent2: "",
        recent3: "",
    });

    function generatePassword(length) {
        let newPassword = "";
        for (var i = 0; i < length; i++) {
            newPassword += allowedCharacters.charAt(
                Math.floor(Math.random() * allowedCharacters.length)
            );
        }
        setPassword(newPassword);
        if (password && password !== "P4$5W0rD!") {
            setRecents({
                recent1: password,
                recent2: recents.recent1,
                recent3: recents.recent2,
            });
        }
    }

    function handleSubmit() {
        if (!uppercase && !lowercase && !numbers && !special) {
            alert("Select at least one condition");
        } else if (length < 4) {
            alert("Password must contain atleast 4 characters");
        } else {
            generatePassword(length);
        }
        props.setData(password);
    }

    function handleChange(val) {
        setLength(val);
    }

    function handleCopyToast() {
        props.toastalert();
    }

    useEffect(() => {}, [uppercase, lowercase, numbers, special]);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.left}>
                <div className={styles.passwordBoxContainer}>
                    <PasswordBox
                        password={password}
                        handleCopy={handleCopyToast}
                    />
                </div>
                <div className={styles.bottom}>
                    <div className={styles.characterSizeBox}>
                        <div>Character length</div>
                        <div className={styles.lengthBox}>{length}</div>
                    </div>
                    <div className={styles.sliderBox}>
                        <ReactSlider
                            className={styles.horizontalSlider}
                            thumbClassName={styles.exampleThumb}
                            trackClassName={styles.exampletrack}
                            min={0}
                            max={15}
                            defaultValue={4}
                            value={length}
                            onChange={(val) => handleChange(val)}
                        />
                    </div>
                    <div className={styles.checkButtonsContainer}>
                        <label className={styles.container}>
                            Include Uppercase letters
                            <input
                                type="checkbox"
                                name="uppercase"
                                id="uppercase"
                                checked={uppercase}
                                onChange={() => setUppercase(!uppercase)}
                            />
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.container}>
                            Include Lowercase letters
                            <input
                                type="checkbox"
                                checked={lowercase}
                                onChange={() => setLowercase(!lowercase)}
                            />
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.container}>
                            Include Numbers
                            <input
                                type="checkbox"
                                checked={numbers}
                                onChange={() => setNumbers(!numbers)}
                            />
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.container}>
                            Include Special characters
                            <input
                                type="checkbox"
                                checked={special}
                                onChange={() => setSpecial(!special)}
                            />
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                    <div className={styles.strengthBox}>
                        <div className={styles.strengthText}>STRENGTH</div>
                        <div className={styles.strengthBars}>
                            <div
                                className={
                                    uppercase
                                        ? `${styles.strengthBar} ${styles.selectedOption}`
                                        : `${styles.strengthBar} ${styles.unselectedOption}`
                                }
                            ></div>
                            <div
                                className={
                                    lowercase
                                        ? `${styles.strengthBar} ${styles.selectedOption}`
                                        : `${styles.strengthBar} ${styles.unselectedOption}`
                                }
                            ></div>
                            <div
                                className={
                                    numbers
                                        ? `${styles.strengthBar} ${styles.selectedOption}`
                                        : `${styles.strengthBar} ${styles.unselectedOption}`
                                }
                            ></div>
                            <div
                                className={
                                    special
                                        ? `${styles.strengthBar} ${styles.selectedOption}`
                                        : `${styles.strengthBar} ${styles.unselectedOption}`
                                }
                            ></div>
                        </div>
                    </div>
                    <button
                        className={styles.submitButton}
                        onClick={() => handleSubmit()}
                    >
                        GENERATE
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightTitle}>Recents</div>
                {Object.values(recents).map((recent, index) => (
                    <div
                        key={index}
                        className={styles.rightPasswordBoxContainer}
                    >
                        <PasswordBox
                            password={recent}
                            handleCopy={handleCopyToast}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PasswordGenerator;
