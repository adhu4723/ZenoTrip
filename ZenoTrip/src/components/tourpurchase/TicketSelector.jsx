// src/components/TicketSelector.jsx
import React, { useContext } from 'react';

const TicketSelector = ({ title, ageRange, notes = [], price, quantity, onIncrement, onDecrement }) => {

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md  ">
      {/* Info Section */}
      <div>
        <h3 className=" font-semibold">
          {title} <span className="text-sm ">({ageRange})</span>
        </h3>
        <ul className="text-sm  mt-1 list-disc ml-5">
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
        <p className="text-orange-500 font-bold mt-2">₹{price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center   rounded ">
        <button
          className="px-3 py-1 border border-gray-200  hover:bg-gray-200 transition"
          onClick={onDecrement}
          disabled={quantity <= 0}
        >
          –
        </button>
        <span className="px-4 py-1 bg-white text-black font-medium">{quantity}</span>
        <button
          className="px-3 py-1 border border-gray-200  hover:bg-gray-200 transition"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TicketSelector;
