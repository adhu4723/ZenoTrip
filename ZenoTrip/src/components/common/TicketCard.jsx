import React from "react";
import { CalendarDays, Clock, RefreshCcw } from "lucide-react";

const TicketCard = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-black text-white rounded-lg p-4 gap-4 sm:gap-6 shadow-lg">
      {/* Image and title */}
      <div className="flex items-start gap-4 w-full sm:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1601379329548-05f1b6fc6f33" // placeholder
          alt="Wine tasting in Tuscany"
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-200">Wine tasting in Tuscany</h2>
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
            <CalendarDays className="w-4 h-4 text-orange-400" />
            <span>FRI, 23 DEC 2022</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
            <Clock className="w-4 h-4 text-orange-400" />
            <span>15:00</span>
          </div>
        </div>
      </div>

      {/* Payment and price */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
          alt="Paypal"
          className="w-8 h-8"
        />
        <span className="text-gray-400 text-sm">Paypal</span>
      </div>

      {/* Price and status */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <span className="text-gray-300 text-sm">€86.00</span>
        <div className="flex items-center gap-2 text-sm font-medium text-orange-400">
          <RefreshCcw className="w-4 h-4" />
          <span>Upcoming</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
