"use client"; 

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingForm = ({ isLoggedIn }) => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', address: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        toast.success('Your booking was successful!'); 
        setFormData({ name: '', email: '', phone: '', address: '' }); 
    };

    if (!isLoggedIn) {
        return (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100 text-center">
                <p className="text-red-500 font-bold">Please login first to complete your booking.</p>
                <button className="btn btn-sm btn-outline btn-error mt-4">Login Now</button>
            </div>
        );
    }

    return (
        <div className="card  shadow-xl p-6 bg-gray-50 ">
            <h3 className="text-2xl font-bold mb-5">Booking form</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
                <p className='font-semibold'>Name</p>
                <input 
                    type="text" required placeholder="Enter your name"
                    className="input input-bordered w-full"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                 <p className='font-semibold'>Email</p>
                <input 
                    type="email" required placeholder="john@gmail.com"
                    className="input input-bordered w-full"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                 <p className='font-semibold'>Phone Number</p>
                <input 
                    type="text" required placeholder="Enter your phone number"
                    className="input input-bordered w-full"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />

                 <p className='font-semibold'>Address</p>
                <textarea 
                    required placeholder="Enter your address"
                    className="textarea textarea-bordered w-full h-24"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
                <button type="submit" className="btn btn-success w-full text-white">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;