import {
    CalendarDays,
    Clock,
    Users,
    Bus,
    Hourglass,
    BadgeCheck,
    Languages,
    TicketPercent,
} from "lucide-react";
import Button from "./Button";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { Navigate, useNavigate } from "react-router-dom";
import { TicketContext } from "../../context/TicketContext";

const tourData = [
    {
        title: "Lucca Bike Tour",
        image: "https://www.bespoketuscany.com/uploadedfiles/immagini/tours/lucca-bike-tour-002.jpg",
        date: "Tuesday, 02 Oct 2022",
        time: "15:00 PM",
        groupSize: "15-30",
        transportation: "Bus",
        duration: "15 hours and 45 minutes",
        guide: "Included",
        language: "English, Italian",
        fees: "lorem ipsum",
        price: 34,
    },
];

export default function SearchCard() {

    const {filteredData}=useContext(FilterContext)
      const {bookticket}=useContext(TicketContext)

          const navigate =useNavigate()

  const handleBuyNow = (tour) => {

    bookticket({tourdetails:tour})
    navigate('/purchase')
  };
    
    return (
        <div className="p-4 space-y-6">
            {filteredData.map((tour, idx) => (
                <div
                    key={idx}
                    className=" text-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row md:items-center p-4 gap-6"
                >
                    <img
                        src={tour.images[0]}
                        alt={tour.title}
                        className="w-full md:w-1/3 h-64 object-cover rounded-xl"
                    />

                    <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-700">{tour.packagename}</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Date:</span> {tour?.date||'Tuesday, 02 Oct 2022'}
                            </div>
                            <div className="flex items-center gap-2">
                                <Hourglass className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Duration:</span> {tour?.duration||''}
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Time:</span> {tour?.time||'15:00 PM'}
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Guide service:</span> {tour?.guide||'Included'}
                            </div>

                            <div className="flex items-center gap-2">
                                <Users className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Number of group:</span> {tour?.groupSize||'10-15'}
                            </div>
                            <div className="flex items-center gap-2">
                                <Languages className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Language:</span> {tour?.language||'English, Italian'}
                            </div>

                            <div className="flex items-center gap-2">
                                <Bus className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Transportation:</span> {tour?.transportation||'Bus'}
                            </div>
                            <div className="flex items-center gap-2">
                                <TicketPercent className="text-orange-500 w-5 h-5" />
                                <span className="font-semibold ">Entry Fees:</span>₹ {tour.childprice}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end justify-between md:h-full gap-4">
                        <p className="text-lg font-semibold text-white">
                            from <span className="text-2xl font-bold text-color">₹{tour?.adultprice||''}</span>
                        </p>
                        <div className="flex w-full  flex-col gap-2">
                            <Button onClick={()=>navigate(`/packagedetails/${tour.id}`)} outlined={true} label={'View Tour'} />
                            <Button onClick={()=>handleBuyNow(tour)} label={'Book Now'} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
