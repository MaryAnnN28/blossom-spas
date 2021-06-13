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
								<div className="key">Gel Manicure</div>
								<div className="value">$25</div>
							</li>
							<li>
								<div className="key">French Manicure</div>
								<div className="value">$17</div>
							</li>
							<li>
								<div className="key">French Gel Manicure</div>
								<div className="value">$30</div>
							</li>
							<li>
								<div className="key">Children's Manicure (12 yrs & under)</div>
								<div className="value">$10</div>
							</li>
							<li>
								<div className="key">Signature Pedicure w/ color</div>
								<div className="value">$25</div>
							</li>
							<li>
								<div className="key">Children's Pedicure w/ color</div>
								<div className="value">$15</div>
							</li>
							<li>
								<div className="key">Manicure and Pedicure Package</div>
								<div className="value">$35</div>
							</li>
						</ul>

					</div>
				</div>

			</div>


		</div>
	)
}

export default Services
