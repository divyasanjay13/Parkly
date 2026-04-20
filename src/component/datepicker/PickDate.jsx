
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import './PickDate.css';

const PickDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00 PM');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsPickerOpen(true);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleClick = () => {
    setIsPickerOpen(true);
  };

  const handleClose = () => {
    setIsPickerOpen(false);
  };

  const getDisplayDate = () => {
    if (!selectedDate) return '';
    const isToday = format(selectedDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
    return `${isToday ? 'Today' : format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}`;
  };


  return (
    <div className="custom-date-time-picker dPicker">
      <input 
        type="text" 
        value={getDisplayDate()} 
        onClick={handleClick} 
        readOnly 
      />
      {isPickerOpen && (
        <div className="picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showPopperArrow={false}
            calendarStartDay={1}
            dateFormat="MMMM d, yyyy"
            inline
           
          />
          <div className="TimePickerblock d-flex align-items-center justify-content-between">
<div className="headtime">
  <p>Enter Time :- </p>
</div>          
          <div className="timepicker_dropdown">
          <select onChange={handleTimeChange} value={selectedTime} className="time-picker">
            {Array.from({ length: 24 }, (_, i) => i).map(hour => (
              <option key={hour} value={hour < 12 ? `${hour === 0 ? 12 : hour}:00 AM` : `${hour === 12 ? 12 : hour - 12}:00 PM`}>
                {hour < 12 ? `${hour === 0 ? 12 : hour}:00 AM` : `${hour === 12 ? 12 : hour - 12}:00 PM`}
              </option>
            ))}
          </select>
          </div>
          <div className="confirm_btn">
          <button onClick={handleClose} className="done-button">Done</button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};


export default PickDate;
