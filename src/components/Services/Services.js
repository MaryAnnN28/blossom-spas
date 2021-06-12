import React from 'react';
import './Services.css'; 

const Services = () => {
	return (
		<div className="services-container">
			
			<div className="services-main-header">
				<h3 className="services-header">Services</h3>
			</div>

			<div className="services-content">
				
				<div className="nails-content">
					{/*<h3 className="nails-header">Nail Care Services</h3>*/}
					<div className="column">
						<ul className="nails-menu">
							<li>
								<div className="key">Signature Manicure w/ Color</div>
								<div className="value">$12</div>
							</li>
							<li>
								<div className="key">Signature Manicure w/ Color</div>
								<div className="value">$12</div>
							</li>
						</ul>

					</div>
				</div>

			</div>


		</div>
	)
}

export default Services
