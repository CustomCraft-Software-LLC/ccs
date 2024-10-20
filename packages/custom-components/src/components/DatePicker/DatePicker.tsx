import React from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  selectDate?: Date | null;
  onChange?: (date: Date | null) => void;
  minDate?: Date | null;
  maxDate?: Date | null;
  placeholder?: string;
  [key: string]: any;
}

const formatDateForInput = (date: Date | null): string =>
  date ? date.toISOString().split('T')[0] : '';

const DatePicker: React.FC<DatePickerProps> = ({
  selectDate = null,
  onChange,
  minDate = null,
  maxDate = null,
  placeholder = 'Select date',
  ...props
}) => (
  <input
    type="date"
    value={formatDateForInput(selectDate)}
    onChange={(e) => onChange?.(e.target.value ? new Date(e.target.value) : null)}
    min={formatDateForInput(minDate)}
    max={formatDateForInput(maxDate)}
    placeholder={placeholder}
    {...props}
    className="dateI"
  />
);

export default DatePicker;