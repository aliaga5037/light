import React from "react";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  inputClass?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  icon,
  inputClass,
  className = "",
}) => {
  return (
    <div className={`input ${className}`}>
      <div className="input__wrapper">
        <label htmlFor="">{label}</label>
        <input
          type="text"
          className={`input__input ${inputClass}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || ""}
          disabled={!!icon}
        />
      </div>
      {icon}
    </div>
  );
};

export default Input;
