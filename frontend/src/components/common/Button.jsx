import PropType from 'prop-types'
import './Button.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button type={type} onClick={onClick} className={`btn ${className}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropType.node.isRequired,
    onClick: PropType.func.isRequired,
    type: PropType.string,
    className: PropType.string,
};

Button.defaultProps = {
    type: 'button',
    className: '',
};

export default Button;
