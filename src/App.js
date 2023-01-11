import React, { useEffect, useState } from 'react';
import './App.css';
import PasswordBox from './components/PasswordBox';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
	const title ="Password Generator";
	const [passwordData, setPasswordData] = useState();
	

	useEffect(() => {
		// console.log(passwordData);
	}, [passwordData]);

  	return (
		<div className="App">
			<h4>{title}</h4>
			{/* <div className="password-box-container"> */}
			<PasswordBox myData={passwordData} />
			<PasswordGenerator setPassword={setPasswordData} />
		</div>
  	);
}

export default App;
