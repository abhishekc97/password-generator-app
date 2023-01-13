import React, { useEffect, useState } from "react";
import "./App.css";
import PasswordBox from "./components/PasswordBox";
import PasswordGenerator from "./components/PasswordGenerator";
// import Slider from "./components/Slider/Slider";

function App() {
    const title = "Password Generator";
    const [passwordData, setPasswordData] = useState();
	console.log(passwordData);
    useEffect(() => {
        console.log(passwordData);
    }, [passwordData]);

    return (
        <div>
            <div className="App">
                <div className="main-wrapper">
					<div>
						<div className="main-title"> {title} </div>
						<>
						<PasswordGenerator setData={setPasswordData} />
						</>
					</div>
                    
                </div>
            </div>
        </div>
    );
}

export default App;
