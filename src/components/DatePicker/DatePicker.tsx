import * as React from 'react';
import './DatePicker.css';

interface DatePickerProps { 
  selectDate?: Date;

}

const DatePicker: React.FC<DatePickerProps> = ({ selectDate = undefined, ...props }) => {
  return (
    <div className="datePicker">
      <input className="dateI" type="date" placeholder="" defaultValue={selectDate ? selectDate.toISOString().split('T')[0] : ''} {...props} />
    </div>
  );
};

export default DatePicker;