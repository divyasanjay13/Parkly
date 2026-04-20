import React, { useState } from 'react';
import './DropRadio.css';

const DropRadio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false); 
    };

    return (
        <div className="dropdowntwo">
            <button onClick={toggleDropdown} className="dropbtn">
                {selectedOption ? selectedOption : '7 days per week'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value="7 days per week"
                            checked={selectedOption === '7 days per week'}
                            onChange={handleOptionChange}
                        />
                        7 days per week
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value="Mon-Fri only"
                            checked={selectedOption === ' Mon-Fri only'}
                            onChange={handleOptionChange}
                        />
                       Mon-Fri only
                    </label>
                </div>
            )}
        </div>
    );
};

export default DropRadio;
