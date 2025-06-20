import React, { useContext } from 'react'
import { TicketContext } from '../context/TicketContext'
import TicketCard from '../components/common/TicketCard';

function Mytickets() {
    const { mytickets } = useContext(TicketContext)
    console.log('mytickets', mytickets);

    return (
        <div>
            <h1 className='lg:text-3xl text-lg text-center font-bold text-gray-600 p-2 uppercase'>My Tickets</h1>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border border-gray-400">
                    <thead>
                        <tr className="border-b border-gray-400">
                            <th className="font-normal p-4 text-gray-600 text-left">Tour Name</th>
                            <th className="font-normal p-4 text-gray-600 text-left">Payment Method</th>
                            <th className="font-normal p-4 text-gray-600 text-left">Price</th>
                            <th className="font-normal p-4 text-gray-600 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mytickets.length !== 0 ? (
                            mytickets.map((items, index) => (
                                <tr key={index} className="border-b border-gray-400">
                                    <td className="p-4">
                                        <div className="flex gap-4 items-start">
                                            <img width={100} className="rounded" src={items.tourdetails.images[0]} alt="" />
                                            <div>
                                                <h1 className="font-semibold text-lg">{items.tourdetails.packagename}</h1>
                                                <p className="text-sm text-gray-500">{items.selectedDate}</p>
                                                <p className="text-sm text-gray-500">{items.selectedTime}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">PAYPAL</td>
                                    <td className="p-4">Rs. {items.totalPrice}</td>
                                    <td className="p-4 text-orange-500 font-medium">Upcoming</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-8">
                                    <div className="flex flex-col items-center justify-center">
                                        <img width={200} src="/ZenoTrip/images/Trip-pana 1.png" alt="No Tickets" />
                                        <p className="text-gray-500 mt-4">You don't have any tickets yet. Start planning your next trip!</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Mytickets
