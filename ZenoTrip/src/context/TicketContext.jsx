import { createContext, useState } from "react";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [ticket, setTicket] = useState('');
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

   const bookticket = (bookingdata) => {
    // Reset local counts
    setAdultCount(0);
    setChildCount(0);
    setInfantCount(0);

   

    // Initialize ticket with counts and totalPrice = 0
    setTicket({
        ...bookingdata,
        adult: 0,
        child: 0,
        infant: 0,
        ispayed:false,
        totalPrice: 0
    });
   
};

    const calculateTotalPrice = (adult, child, adultPrice, childPrice) => {
        return (adult * adultPrice) + (child * childPrice);
    };

    const incrementAdult = () => {
        const newCount = adultCount + 1;
        setAdultCount(newCount);
        const newTotal = calculateTotalPrice(newCount, childCount, ticket.tourdetails?.adultprice || 0, ticket.tourdetails?.childprice || 0);
        setTicket(prev => ({ ...prev, adult: newCount, totalPrice: newTotal }));
    };

    const decrementAdult = () => {
        const newCount = Math.max(adultCount - 1, 0);
        setAdultCount(newCount);
        const newTotal = calculateTotalPrice(newCount, childCount, ticket.tourdetails?.adultprice || 0, ticket.tourdetails?.childprice || 0);
        setTicket(prev => ({ ...prev, adult: newCount, totalPrice: newTotal }));
    };

    const incrementChild = () => {
        const newCount = childCount + 1;
        setChildCount(newCount);
        const newTotal = calculateTotalPrice(adultCount, newCount, ticket.tourdetails?.adultprice || 0, ticket.tourdetails?.childprice || 0);
        setTicket(prev => ({ ...prev, child: newCount, totalPrice: newTotal }));
    };

    const decrementChild = () => {
        const newCount = Math.max(childCount - 1, 0);
        setChildCount(newCount);
        const newTotal = calculateTotalPrice(adultCount, newCount, ticket.tourdetails?.adultprice || 0, ticket.tourdetails?.childprice || 0);
        setTicket(prev => ({ ...prev, child: newCount, totalPrice: newTotal }));
    };


    // --- Infant handlers ---
    const incrementInfant = () => {
        const newCount = infantCount + 1;
        setInfantCount(newCount);
        setTicket(prev => ({ ...prev, infant: newCount }));
    };

    const decrementInfant = () => {
        const newCount = Math.max(infantCount - 1, 0);
        setInfantCount(newCount);
        setTicket(prev => ({ ...prev, infant: newCount }));
    };

    const makepayment=()=>{
                setTicket(prev => ({ ...prev, ispayed:true }));

    }

    return (
        <TicketContext.Provider
            value={{
                ticket,
                bookticket,
                incrementAdult,
                decrementAdult,
                incrementChild,
                decrementChild,
                incrementInfant,
                decrementInfant,
                makepayment,
                adultCount,
                childCount
            }}
        >
            {children}
        </TicketContext.Provider>
    );
};
