import React, { useEffect, useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const title = "Password Generator";
    const [passwordData, setPasswordData] = useState();
	// console.log(passwordData);
    useEffect(() => {
        // console.log(passwordData);
    }, [passwordData]);

	function toastalert() {
        toast.success("Copied");
    }

    return (
        <div>
            <div className="App">
                <div className="main-wrapper">
					<div>
						<div className="main-title"> {title} </div>
						<>
						<PasswordGenerator setData={setPasswordData} toastalert={toastalert} />
						</>
					</div>
                    
                </div>
				<ToastContainer position="top-center" icon={false} draggablePercent={60} autoClose={1000} closeOnClick pauseOnFocusLoss pauseOnHover theme="dark" />

            </div>
        </div>
    );
}

export default App;
