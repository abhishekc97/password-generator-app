import React, { useEffect, useState } from "react";
import PasswordBox from "./PasswordBox";
import "./PasswordGenerator.css";
import Slider from "./Slider/Slider";

function PasswordGenerator(props) {
    const [password, setPassword] = useState("");
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

    function generatePassword() {
        let newPassword = "";

        for (var i = 0; i < length; i++) {
            newPassword += allowedCharacters.charAt(
                Math.floor(Math.random() * allowedCharacters.length));
        }
        setPassword(newPassword);
        console.log(password);
    }

	const handleSubmit = () => {
		// event.preventDefault();
		generatePassword();
		props.setPassword(password);
	}

	const handleChange = (event) => {
		setLength(event.target.value);
	}

    useEffect(() => {
        // generatePassword();
		console.log("uppercase, lowercase, numbers, special: ", uppercase, lowercase, numbers, special);
    }, [uppercase, lowercase, numbers, special]);

    return (
		
        // <div className="main-container">
		<>
            <div className="slider-container">
				<label >Character Length</label>
				<div> {length} </div>
				<Slider   />
				{/* onChange={(e) => setLength(e)} value={length} handleChange={handleChange}*/}
			</div>
            <div className="check-buttons-container">
				<label className="container">Include Uppercase letters
				<input
					type="checkbox"
					checked={uppercase}
					onChange={() => setUppercase(!uppercase)}
					label="Include Uppercase letters" />
				<span className="checkmark"></span>
				</label>
				<label className="container">Include Lowercase letters
				<input
					type="checkbox"
					checked={lowercase}
					onChange={() => setLowercase(!lowercase)}
					label="Include lowercase letters"
				/>
				<span className="checkmark"></span>
				</label>
				<label className="container">Include Numbers
				<input
					type="checkbox"
					checked={numbers}
					onChange={() => setNumbers(!numbers)}
					label="Include Numbers"
				/>
				<span className="checkmark"></span>
				</label>
				<label className="container">Include Special characters
				<input
					type="checkbox"
					checked={special}
					onChange={() => setSpecial(!special)}
					label="Include Special characters"
				/>
				<span className="checkmark"></span>
				</label>
			</div>
			<div className="generate-button-container">
				<button className="submit-button" onClick={() => handleSubmit()}>
				GENERATE
				</button>
			</div>
        </>
    );
}

export default PasswordGenerator;
