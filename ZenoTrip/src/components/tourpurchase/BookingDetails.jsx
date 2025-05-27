import React, { useContext } from 'react';
import TicketSelector from './TicketSelector';
import TicketCard from './TicketCard';
import { TicketContext } from '../../context/TicketContext';

const BookingDetails = ({ onNext }) => {
  const {
    ticket,
    incrementAdult,
    decrementAdult,
    incrementChild,
    decrementChild,
    incrementInfant,
    decrementInfant
  } = useContext(TicketContext);

  console.log(ticket);
  

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='space-y-4'>
        <div>
          <h1 className='font-semibold'>When you will visit?</h1>
          <p className='text-gray-600'>{ticket?.selectedDate || "Not selected"}</p>
        </div>
        <div>
          <h1 className='font-semibold'>Which time?</h1>
          <p className='text-gray-600'>{ticket?.selectedTime || "Not selected"}</p>
        </div>
        <div className=''>
          <h1 className='font-semibold'>Select Your Tickets</h1>
          <div className='bg-blue-200/35 px-4 py-6'>
            <ul className='list-disc ml-2'>
              <li>Free for kids under 6 and disabled visitors (74%+)</li>
              <li>Pregnant women, families with strollers, and visitors on crutches can buy priority tickets at the venue</li>
            </ul>
          </div>
        </div>

        {/* Adult Ticket Selector */}
        <TicketSelector
          title="Adult"
          ageRange="18 +"
          price={ticket.tourdetails?.adultprice||0}
          quantity={ticket?.adult || 0}
          onIncrement={incrementAdult}
          onDecrement={decrementAdult}
        />

        {/* Child Ticket Selector */}
        <TicketSelector
          title="Child"
          ageRange="6–17"
          notes={["With valid ID", "Only in combination with: Adult (18+)"]}
          price={ticket.tourdetails?.childprice||0}
          quantity={ticket?.child||0 }
          onIncrement={incrementChild}
          onDecrement={decrementChild}
        />

        {/* Infant Ticket Selector */}
        <TicketSelector
          title="Infant"
          ageRange="0–5"
          notes={["Only in combination with: Adult (18+)"]}
          price={0}
          quantity={ticket?.infant || 0}
          onIncrement={incrementInfant}
          onDecrement={decrementInfant}
        />

        <button
          onClick={onNext}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Next
        </button>
      </div>
      <div>
        <TicketCard onClick={onNext} />
      </div>
    </div>
  );
};

export default BookingDetails;
