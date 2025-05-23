import React from "react";

const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  type = "text" // default to 'text' if not provided
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-800 font-medium mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
      />
    </div>
  );
};

export default TextInput;
