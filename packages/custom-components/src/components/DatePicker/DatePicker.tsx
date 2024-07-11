import * as React from 'react';
import './DatePicker.css';

interface DatePickerProps { 
  selectDate?: Date;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectDate = undefined, onChange, ...props }) => {
  return (
    <div className="datePicker">
      <input 
        className="dateI" 
        type="date" 
        placeholder="" 
        defaultValue={selectDate ? selectDate.toISOString().split('T')[0] : ''} 
        onChange={onChange}
        {...props} 
      />
    </div>
  );
};

export default DatePicker;