import { useState } from 'react';
import imgUp from '../assets/chevron-up.svg';
import imgDown from '../assets/chevron-down.svg';
/* import '../styles/ToggleButton.scss'; // si besoin */

function ToggleButton({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="toggle_button_container">
      <div className="toggle_button_header" onClick={toggle}>
        <p>{title}</p>
        <img
          src={imgUp}
          alt="chevron"
          className={`toggle_button_icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="toggle_button_content">
          {children}
        </div>
      )}
    </div>
  );
}

export default ToggleButton;