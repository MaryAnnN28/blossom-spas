import React from 'react';
import './Appointment.css'; 

const Appointment = () => {
	return (
		<div className="appointment-container">
			<div className="appointment-header-main">
				<h3 className="appointment-header">Appointment</h3>
			</div>

			<div className="appointment-form-container">
				<form className="appointment-form">
					<label className="input-label">First Name: </label>
					<input type="text" name="first_name" className="input" /> <br />

					<label className="input-label">Last Name: </label>
					<input type="text" name="last_name" className="input"/><br />
					
				</form>
			</div>
			
	</div>
	)
}

export default Appointment; 
