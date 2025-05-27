import React, { useRef } from 'react'
import TransportCards from '../common/TransportCards'
import {
  Bike,
  BusFront,
  Car,
  Calendar,
  AppWindow,
  PercentCircle,
  Headphones,
  MountainSnow,
  UserRound,
  Droplet,
  MapPin,
  Tag,
  Ticket,
} from "lucide-react";
import ScrollHeader from '../common/ScrollHeader';

function PopularPackages() {
    const data = [
  {
    title: "BIKE / RICKSHAW",
    price: 10,
    image: "https://images.unsplash.com/photo-1626149637281-4e227308da18?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      { icon: Calendar, text: "Your bike for a day" },
      { icon: AppWindow, text: "City App" },
      { icon: PercentCircle, text: "Discount on Rickshaw" },
      { icon: Headphones, text: "Guaranteed Support" },
    ],
  },
  {
    title: "BIKE TOURS",
    price: 30,
    image: "https://images.unsplash.com/photo-1571333249291-a6ec5e134a21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      { icon: MountainSnow, text: "A Mountain Bike Included" },
      { icon: UserRound, text: "A Guide For You" },
      { icon: Droplet, text: "Bottle of water" },
      { icon: Headphones, text: "Guaranteed Support" },
    ],
  },
  {
    title: "BUS TRIPS",
    price: 45,
    image: "https://images.unsplash.com/photo-1658727965704-081e5ca55269?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      { icon: Ticket, text: "Park ticket" },
      { icon: BusFront, text: "Return bus" },
      { icon: UserRound, text: "Companion" },
      { icon: Headphones, text: "Guaranteed Support" },
    ],
  },
  {
    title: "TRANSFER",
    price: 10,
    image: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190425170948/friends-on-road-trip.jpg",
    features: [
      { icon: Car, text: "Personal Driver" },
      { icon: MapPin, text: "Wherever You Want" },
      { icon: Tag, text: "At the best price" },
      { icon: Headphones, text: "Guaranteed Support" },
    ],
  },
  {
    title: "BUS TRIPS",
    price: 45,
    image: "https://images.unsplash.com/photo-1658727965704-081e5ca55269?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      { icon: Ticket, text: "Park ticket" },
      { icon: BusFront, text: "Return bus" },
      { icon: UserRound, text: "Companion" },
      { icon: Headphones, text: "Guaranteed Support" },
    ],
  },
];

 const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -340,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 340,
      behavior: 'smooth',
    });
  };
  return (
    <div className='lg:px-10 px-4'>
          <ScrollHeader 
       onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
      title="The Most Popular Packages" />
       <div  ref={scrollContainerRef} className="flex gap-6 overflow-auto no-scrollbar scroll-smooth py-4">
        {data.map(items=>(
            <div>
      <TransportCards data={items}/>
      </div>
        ))}
        </div>
    </div>
  )
}

export default PopularPackages
