import PropType from 'prop-types'
import './Input.css';

const Input = ({ type, placeholder, value, onChange, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`input ${className}`}
        />
    );
};

Input.propTypes = {
    type: PropType.string,
    placeholder: PropType.string,
    value: PropType.string,
    onChange: PropType.func,
    className: PropType.string,
};

export default Input;