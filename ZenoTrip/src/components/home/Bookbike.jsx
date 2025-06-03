import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

function Bookbike() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // <-- Send this data to backend or process it
  };

  return (
    <div className='bg-[#e0ac69] relative py-20 px-5 lg:px-10'>
      <div>
        <form
          onSubmit={handleSubmit}
          className='bg-orange-100/50 max-w-2xl space-y-5 p-5 rounded-2xl'
        >
          <h1 className='text-center text-2xl font-bold'>Book Now Bike</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <TextInput
              bgcolor={'white'}
              label={'Name and Surname'}
              name="name"
             
              onChange={handleChange}
              placeholder={'Enter your name and surname'}
            />
            <TextInput
              bgcolor={'white'}
              label={'Email Address'}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={'Enter your email address'}
            />
            <TextInput
              bgcolor={'white'}
              label={'Telephone Number'}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={'Enter your telephone number'}
            />
            <div>
              <label htmlFor="">Service Type</label> <br />
              <select
                className='border rounded-xl w-full border-gray-300 px-4 py-2 bg-white'
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="" disabled>Select the service types</option>
                <option value="repair">Repair</option>
                <option value="rental">Rental</option>
                <option value="custom">Custom Service</option>
              </select>
            </div>
            <TextInput
              bgcolor={'white'}
              label={'Date'}
              name="date"
              type='date'
              value={formData.date}
              onChange={handleChange}
              placeholder={'Select the date'}
            />
            <TextInput
              bgcolor={'white'}
              label={'Time'}
              name="time"
              type='time'
              value={formData.time}
              onChange={handleChange}
              placeholder={'Select the time'}
            />
          </div>
          <Button label={'Book Now'} />
        </form>
      </div>
      <img
        width={600}
        className='absolute lg:block hidden -bottom-10 right-0'
        src="/ZenoTrip/images/bike picture.png"
        alt=""
      />
    </div>
  );
}

export default Bookbike;
