import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ placeholder, field, value, label, error, type, onChange}) => {

    return (
		<div className="form-group">
			<label htmlFor="username">{label}</label>
			<input
				className="form-control"
				value={value}
				onChange={onChange}
				type={type}
				placeholder={placeholder}
				name={field}
			/>
			{error && <div>{error}</div>}
		</div>
    )
}

FormField.propTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

FormField.defaultProps = {
	type: 'text',
};


export default FormField;