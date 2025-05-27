import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../../context/TicketContext";

const times = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM"
];

const DateTimePicker = ({tourdetails}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate()
  const {bookticket}=useContext(TicketContext)

  const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : null;
  const bookingdata = { selectedDate: formattedDate, selectedTime, tourdetails,adult:0,child:0 };
  console.log(selectedDate);
  


  const handleBuyNow = () => {

    bookticket(bookingdata)
    navigate('/purchase')
  };

  return (
    <div className="max-w-sm  bg-white rounded-xl  space-y-4">
      <div>
        <h2 className="text-gray-800 font-semibold mb-2">Select a date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          className="w-full"
          
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Time</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select the time</option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

     

      <button
        className={`w-full ${!selectedDate || !selectedTime?'bg-gray-300 text-black cursor-not-allowed':'bg-orange-500 text-white hover:bg-orange-600'}  py-2 rounded-full  transition`}
        onClick={handleBuyNow}
        disabled={!selectedDate || !selectedTime}
      >
        Buy Now
      </button>
    </div>
  );
};

export default DateTimePicker;
