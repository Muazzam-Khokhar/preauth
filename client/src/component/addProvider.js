import React, { useState } from 'react';
import addProvider from '../apiHits/preAuth/addPreAuths';

const AddProvider = () => {
    // State variables to manage form data
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        zipCode: '',
        province: '',
        licenseNumber: ''
    });

    // Handler function to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler function to submit form data
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your API function to add provider with formData
        addProvider(formData);
        // Optionally, you can reset the form after submission
        setFormData({
            name: '',
            phoneNumber: '',
            address: '',
            city: '',
            zipCode: '',
            province: '',
            licenseNumber: ''
        });
    };

    return (
        <>
            <div>
                <h1>Add Provider</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder='Provider Name'
                        required
                    />
                    <input 
                        type='tel' 
                        name='phoneNumber' 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        placeholder='Phone Number'
                        required 
                    />
                    <input 
                        type='text' 
                        name='address' 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder='Address'
                        required 
                    />
                    <input 
                        type='text' 
                        name='city' 
                        value={formData.city} 
                        onChange={handleChange} 
                        placeholder='City'
                        required 
                    />
                    <input 
                        type='text' 
                        name='zipCode' 
                        value={formData.zipCode} 
                        onChange={handleChange} 
                        placeholder='Zip Code'
                        required 
                    />
                    <input 
                        type='text' 
                        name='province' 
                        value={formData.province} 
                        onChange={handleChange} 
                        placeholder='Province'
                        required 
                    />
                    <input 
                        type='text' 
                        name='licenseNumber' 
                        value={formData.licenseNumber} 
                        onChange={handleChange} 
                        placeholder='License Number'
                        required 
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddProvider;
