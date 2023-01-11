import React, { useEffect, useState } from "react";
import "./App.css";
import PasswordBox from "./components/PasswordBox";
import PasswordGenerator from "./components/PasswordGenerator";
import Slider from "./components/Slider/Slider";

function App() {
    const title = "Password Generator";
    const [passwordData, setPasswordData] = useState();

    useEffect(() => {
        // console.log(passwordData);
    }, [passwordData]);

    return (
        <div>
            <div className="App">
                <div className="main-wrapper">
					<div>
						<div className="main-title"> {title} </div>
						<div className="password-box-container">
							<div className="password-box">
								<PasswordBox myData={passwordData} />
							</div>
							<div className="clipboard">
								<i className="clipboard-image"></i>
							</div>
						</div>
						<div className="second-container">
							<div className="character-size-box">
								<div>Character length</div>
								<div className="length-box">length</div>
							</div>
							<div className="slider-box">
								{/* <Slider /> */}
								Slider
							</div>
							<div className="strength-box">
								<div>Strength</div>
								<div className="strength-bars">
									bars
								</div>
							</div>
							
							{/* <PasswordGenerator setPassword={setPasswordData} /> */}
						</div>
						
					</div>
                    
                </div>
            </div>
        </div>
    );
}

export default App;
