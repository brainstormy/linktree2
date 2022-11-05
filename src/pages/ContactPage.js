import React from 'react';
import { useState, useEffect } from 'react';
import '../../src/Contact.css';
// import Footer from '../components/Footer';

const ContactPage = () => {
	const name = 'Adedeji Olalekan';

	const initialValues = { firstname: '', lastname: '', email: '', message: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	// const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		// setIsSubmit(true);
	};
	useEffect(() => {
		// console.log(formErrors);
		// if (Object.keys(formErrors).length === 0 && isSubmit) {
		// 	console.log(formValues);
		// }
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstname) {
			errors.firstname = 'firstname is required';
		}
		if (!values.lastname) {
			errors.lastname = 'lastname is required';
		}
		if (!regex.test(values.email)) {
			errors.email = 'Enter a valid email';
		}
		if (!values.message) {
			errors.message = 'Message is required';
		}
		return errors;
	};

	return (
		<>
			<div className="contact-container">
				<h1 className="contact-header">Contact Me</h1>
				<p>Hi there, contact me to ask me about anything you have in mind.</p>
				<form className="fm-ct" onSubmit={handleSubmit}>
					<div className="input-container">
						<label>First name</label>
						<input
							type="text"
							id="first_name"
							name="firstname"
							placeholder="Enter your first name"
							value={formValues.firstname}
							onChange={handleChange}
						/>
						<div className="error">{formErrors.firstname}</div>
					</div>
					<div className="input-container" id="left-input">
						<label>Last name</label>

						<input
							type="text"
							id="last_name"
							name="lastname"
							placeholder="Enter your last name"
							value={formValues.lastname}
							onChange={handleChange}
						/>
						<div className="error">{formErrors.lastname}</div>
					</div>
					<label>Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="yourname@email.com"
						value={formValues.email}
						onChange={handleChange}
					/>
					<div className="error">{formErrors.email}</div>

					<label>Message</label>
					<textarea
						id="message"
						name="message"
						placeholder="Send me a message and I'll reply you as soon as possible..."
						value={formValues.message}
						onChange={handleChange}
					/>
					<div className="error">{formErrors.message}</div>
					<label>
						<input type="checkbox" name="subscribe" required /> You agree to
						providing your data to {name} who may contact you.
					</label>
					{/* <label>You agree to providing your data to who may contact you.</label> */}
					<button type="submit" id="btn__submit" className="btn">
						Send Message
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactPage;
