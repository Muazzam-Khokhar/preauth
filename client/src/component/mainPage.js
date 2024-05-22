import React, { useEffect, useState } from 'react';
import getAllPreAuths from '../apiHits/preAuth/getAllPreAuth';
import moment from 'moment';
import AddPreAuth from './addPreAuth';
import AddProvider from './addProvider';


const MainPage = () => {
  const [data, setData] = useState([]);
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAllPreAuths();
        setData(res); // Accessing the data property of the response object
        console.log(res); // Log the data received from the backend
      } catch (error) {
        console.error('Error fetching preauthorization requests:', error);
      }
    }

    fetchData();
  }, [isClick]);

  return (
    <>
      {isClick ? (
        <AddPreAuth setIsClick={setIsClick} />)
        : (<>
          <div className="container mx-auto font-serif p-4">
            <div className='flex justify-between mb-6'>
              <h1 className="text-3xl text-cyan-600 font-bold mb-4">Preauthorization Requests</h1>
              <button className='px-4 py2 bg-cyan-600 text-white font-serif rounded-lg shadow-md' onClick={() => { setIsClick(true) }}>Submit New PreAuth</button>
            </div>
            <table className="table-auto w-full">
              <thead>
                <tr className='bg-gray-100 border-2 rounded-t-3xl'>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Provider Name</th>
                  <th className="px-4 py-2">Patient Name</th>
                  <th className="px-4 py-2">Patient Phone</th>
                  <th className="px-4 py-2">Created At</th>
                  <th className="px-4 py-2">More Details</th>
                </tr>
              </thead>
              <tbody>
                {data.map(preAuth => (
                  <tr key={preAuth._id} className="text-center">
                    <td className="border px-4 py-2">{preAuth.location}</td>
                    <td className="border px-4 py-2">{preAuth.providerName}</td>
                    <td className="border px-4 py-2">{preAuth.patientName}</td>
                    <td className="border px-4 py-2">{preAuth.patientPhone}</td>
                    <td className="border px-4 py-2">{moment(preAuth.createdAt).format('MM-DD-YYYY')}</td>
                    <td className="border px-4 py-2"><button className='border-2 border-cyan-600 px-3 py-1 bg-cyan-600 text-white font-medium rounded-md shadow-md'>More Details</button></td>
                    {/* Add more data cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
            <AddProvider/>
          </div>
        </>)}
    </>);
};

export default MainPage;
