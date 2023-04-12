import React, { useEffect, useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";

function App() {
    const [passwordData, setPasswordData] = useState();

    useEffect(() => {}, [passwordData]);

    function toastAlert() {
        toast("Password generated!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

    return (
        <div>
            <div className={styles.App}>
                <div className={styles.mainTitle}>Password Generator</div>
                <PasswordGenerator
                    setData={setPasswordData}
                    toastalert={toastAlert}
                />
                <ToastContainer />
            </div>
        </div>
    );
}

export default App;
