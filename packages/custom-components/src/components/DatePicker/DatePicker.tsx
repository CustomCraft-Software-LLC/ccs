import * as React from 'react';
import './DatePicker.css';

export interface DatePickerProps { 
  /** Selected date in the date picker */
  selectDate?: Date | null;

  /** Callback function triggered when the date is changed */
  onChange?: (date: Date | null) => void;

  /** Minimum allowed date (optional) */
  minDate?: Date | null;

  /** Maximum allowed date (optional) */
  maxDate?: Date | null;

  /** Optional placeholder for the date input */
  placeholder?: string;

  /** Locale string for formatting the date (e.g. 'en-US') */
  locale?: string;

  /** Additional props for the input element */
  [key: string]: any;
}

/**
 * Formats a given date to YYYY-MM-DD format for the input[type="date"].
 */
const formatDateForInput = (date: Date | null | undefined): string => {
  return date ? date.toISOString().split('T')[0] : ''; // Returns the date in YYYY-MM-DD format or empty string
};

/**
 * DatePicker React Component.
 */
const DatePicker: React.FC<DatePickerProps> = ({ 
  selectDate, 
  onChange, 
  minDate, 
  maxDate, 
  placeholder = 'Select date', 
  ...props 
}) => {

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(value ? new Date(value) : null); // Pass null if the input is cleared
    }
  };

  return (
    <div className="datePicker">
      <input 
        className="dateI" 
        type="date" 
        value={formatDateForInput(selectDate)} 
        onChange={handleDateChange} 
        min={minDate ? formatDateForInput(minDate) : undefined}
        max={maxDate ? formatDateForInput(maxDate) : undefined}
        placeholder={placeholder}
        {...props} 
      />
    </div>
  );
};

export default DatePicker;