import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Datepicker from "react-tailwindcss-datepicker";
import './index.css'
import addPreAuths from '../apiHits/preAuth/addPreAuths';
import InputMask from 'react-input-mask';



const AddPreAuth = ({setIsClick}) => {
  const [updateDate, setUpdateDate] = useState({ 
    startDate: null, 
    endDate: null 
    }); 
    const [location, setLocation] = useState('');
    const [providerName, setProviderName] = useState('');
    const [showLocationList, setShowLocationList] = useState(false);

  
    const locations = ['IPFD', 'Mitchell', 'Lawndale', 'Bucktown'];
    const providers = ['Ahmad', 'Parvez', 'Faraz', 'Jack'];

  const validationSchema = Yup.object().shape({
    location: Yup.string().required('Location is required'),
    providerName: Yup.string().required('Provider Name is required'),
    patientName: Yup.string().required('Patient Name is required'),
    patientPhone: Yup.string().required('Patient Phone is required').matches(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,'Phone number is not valid'),
    procedureCode: Yup.string().required('Procedure Code is required'),
    patientDateOfBrith: Yup.date().required('Patient Date of Birth is required'),
  });

  const initialValues = {
    location: '',
    providerName: '',
    patientName: '',
    patientPhone: '',
    procedureCode: '',
    patientDateOfBrith: null,
    preAuthNumber: '',
    additionalComment: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Set the start date before submitting the form
      if (values.patientDateOfBrith && values.patientDateOfBrith.startDate) {
        values.patientDateOfBrith = values.patientDateOfBrith.start;
      }
      console.log("values iis sihere sdhsandf asdfl dfa",values);
      await addPreAuths(values); // Call the addPreAuth function with form values
      resetForm();
      setIsClick(false)
      console.log('api calling')
    } catch (error) {
      console.error('Error adding new PreAuth:', error);
    }
    // Add your form submission logic here
    resetForm();
  };
  const handleDate = (date, form) =>{
    form.setFieldValue('patientDateOfBrith', date.startDate);
      setUpdateDate(date)
      console.log(updateDate)
  }
  const handleCancel = ()=>{
    setIsClick(false)
  }
  return (
    <>
    <div className='flex h-screen flex-col justify-center bg-gray-100 items-center'>
      <div className='w-[40rem] bg-white py-3 rounded-3xl shadow-xl shadow-slate-500'>
      <button className='absolute top-5 right-5 bg-cyan-600 text-white px-3 py-1 rounded-full' onClick={handleCancel}>x</button>
        <h1 className='text-cyan-600 text-[2rem] font-bold font-serif text-center tracking-tighter'>Pre Authorization Request</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className='px-6 font-serif'>
              <div className='mt-4'>
                <h6 className='font-bold'>Location:</h6>
                <Field
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setShowLocationList(true); // Show the list when typing
                    }}
                    onFocus={() => setShowLocationList(true)} // Show the list when clicking
                    onBlur={() => setShowLocationList(false)}
                    className="border border-neutral-300 rounded-md w-full h-10 p-2"
                    placeholder="Type or select location"
                  />
                  {showLocationList && (
                    <div className="mt-2 absolute z-10 w-full border border-gray-300 bg-white rounded-md shadow-md">
                      {locations
                        .filter(option => option.toLowerCase().includes(location.toLowerCase()))
                        .map((option, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              setLocation(option);
                              setShowLocationList(false); // Hide the list when an option is selected
                            }}
                          >
                            {option}
                          </div>
                        ))}
                    </div>
                  )}
                {errors.location && touched.location ? <div className='text-red-600 font-semibold text-sm'>*{errors.location}</div> : null}
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Provider Name:</h6>
                <Field as="select" name="providerName" className="border border-neutral-300 rounded-md w-full h-10 px-2">
                  <option value="" disabled>Select Provider Name</option>
                  {providers.map(option => (
                    <option key={option.value} value={option.value}>{option.value}</option>
                  ))}
                </Field>
                {errors.providerName && touched.providerName ? <div className='text-red-600 font-semibold text-sm'>*{errors.providerName}</div> : null}
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Patient Name:</h6>
                <Field type="text" name="patientName" className='border border-neutral-300 rounded-md w-full h-10 p-2' />
                {errors.patientName && touched.patientName ? <div className='text-red-600 font-semibold text-sm'>*{errors.patientName}</div> : null}
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Patient Phone:</h6>
                <Field name="patientPhone">
                  {({ field, form }) => (
                    <InputMask
                      mask="(999) 999 9999"
                      value={field.value}
                      onChange={e => {
                        const unformattedValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                        form.setFieldValue('patientPhone', unformattedValue); // Set the unformatted value to the field
                      }}
                      className='border border-neutral-300 rounded-md w-full h-10 p-2'
                    />
                  )}
                </Field>
                {errors.patientPhone && touched.patientPhone ? <div className='text-red-600 font-semibold text-sm'>*{errors.patientPhone}</div> : null}
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Procedure Code:</h6>
                <Field type="text" name="procedureCode" className='border border-neutral-300 rounded-md w-full h-10 p-2' />
                {errors.procedureCode && touched.procedureCode ? <div className='text-red-600 font-semibold text-sm'>*{errors.procedureCode}</div> : null}
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Patient Date of Birth:</h6>
                <Field name="patientDateOfBrith">
                  {({ field, form }) => (
                    <div>
                      <div className='border border-neutral-300 rounded-md w-full'>
                      <Datepicker
                        useRange={false}
                        asSingle={true}
                        value={updateDate}
                        onChange={(date) => handleDate(date, form)}
                        displayFormat={"MM/DD/YYYY"}
                        />
                        </div>
                        {errors.patientDateOfBrith && touched.patientDateOfBrith ? <div className='text-red-600 font-semibold text-sm'>*{errors.patientDateOfBrith}</div> : null}
                    </div>
                  )}
                </Field>
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Pre Authorization Number:</h6>
                <Field type="text" name="preAuthNumber" className='border border-neutral-300 rounded-md w-full h-10 p-2' />
              </div>
              <div className='mt-2.5'>
                <h6 className='font-bold'>Additional Comment:</h6>
                <Field name="additionalComment" as="textarea" className='border border-neutral-300 rounded-md w-full p-2' rows='2.5' />
              </div>
              <div className='flex justify-center mt-2'>
                <button type="submit" className='border-2 rounded-lg bg-cyan-600 text-white text-md font-semibold tracking-wider py-3 px-6'>Submit PreAuth</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default AddPreAuth;
