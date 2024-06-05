import PropType from 'prop-types'
import './Input.css';

const Input = ({ type, placeholder, value, onChange, className = '' }) => {
    return (
        <input
        className={`input ${className}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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