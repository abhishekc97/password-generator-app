import React, { useEffect, useState } from "react";
import PasswordBox from "./PasswordBox";
import "./PasswordGenerator.css";
import ReactSlider from "react-slider";
import { ToastContainer, toast } from "react-toastify";

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

        // console.log(newPassword);
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
            alert("password must contain atleast 4 characters");
        } else {
            generatePassword(length);
        }

        // console.log(password);
        props.setData(password);
    }

    function handleChange(val) {
        setLength(val);
    }

    function handleCopy() {
        // toast.success("Copied");
        props.toastalert();

        // navigator.clipboard.writeText(password);
        // notify();
    }

    // const notify = () => toast("Copied!", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    // });

    useEffect(() => {
        console.log(
            "uppercase, lowercase, numbers, special: ",
            uppercase,
            lowercase,
            numbers,
            special
        );
    }, [uppercase, lowercase, numbers, special]);

    return (
        <>
            <div className="password-box-container">
                <PasswordBox password={password} handleCopy={handleCopy} />
            </div>
            <div className="second-container">
                <div className="character-size-box">
                    <div>Character length</div>
                    <div className="length-box">{length}</div>
                </div>
                <div className="slider-box">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        min={0}
                        max={15}
                        defaultValue={4}
                        value={length}
                        onChange={(val) => handleChange(val)}
                    />
                </div>
                <div className="check-buttons-container">
                    <label className="container">
                        Include Uppercase letters
                        <input
                            type="checkbox"
                            checked={uppercase}
                            onChange={() => setUppercase(!uppercase)}
                            label="Include Uppercase letters"
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        Include Lowercase letters
                        <input
                            type="checkbox"
                            checked={lowercase}
                            onChange={() => setLowercase(!lowercase)}
                            label="Include lowercase letters"
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        Include Numbers
                        <input
                            type="checkbox"
                            checked={numbers}
                            onChange={() => setNumbers(!numbers)}
                            label="Include Numbers"
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">
                        Include Special characters
                        <input
                            type="checkbox"
                            checked={special}
                            onChange={() => setSpecial(!special)}
                            label="Include Special characters"
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="strength-box">
                    <div className="strength-text">STRENGTH</div>
                    <div className="strength-bars">
                        <div
                            className="strength-bar"
                            style={{
                                backgroundColor: uppercase ? "#a4ffaf" : "",
                            }}
                        ></div>
                        <div
                            className="strength-bar"
                            style={{
                                backgroundColor: lowercase ? "#a4ffaf" : "",
                            }}
                        ></div>
                        <div
                            className="strength-bar"
                            style={{
                                backgroundColor: numbers ? "#a4ffaf" : "",
                            }}
                        ></div>
                        <div
                            className="strength-bar"
                            style={{
                                backgroundColor: special ? "#a4ffaf" : "",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="generate-button-container">
                    <button
                        className="submit-button"
                        onClick={() => handleSubmit()}
                    >
                        GENERATE
                    </button>
                </div>
            </div>
            {/* <ToastContainer position="top-center" icon={false} draggablePercent={60} autoClose={1000} closeOnClick pauseOnFocusLoss pauseOnHover theme="dark" /> */}
            <div>
                <div className="password-box-container">
                    <PasswordBox
                        password={recents.recent1}
                        handleCopy={handleCopy}
                    />
                </div>
                <div className="password-box-container">
                    <PasswordBox
                        password={recents.recent2}
                        handleCopy={handleCopy}
                    />
                </div>
                <div className="password-box-container">
                    <PasswordBox
                        password={recents.recent3}
                        handleCopy={handleCopy}
                    />
                </div>
            </div>
        </>
    );
}

export default PasswordGenerator;
