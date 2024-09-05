import React, { useEffect, useState } from 'react';
import getAllPreAuths from '../apiHits/preAuth/getAllPreAuth';
import moment from 'moment';
import AddPreAuth from './addPreAuth';
import AddProvider from './addProvider';


const MainPage = () => {
  const [data, setData] = useState([]);
  const [isClick, setIsClick] = useState(false)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getAllPreAuths();
        setData(res);
        console.log(res);
      } catch (error) {
        setError('Error fetching preauthorization requests.');
        console.error('Error fetching preauthorization requests:', error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchData();
  }, [isClick]);
  return (
    <>
    <div className="flex">
        {isClick ? (
          <AddPreAuth setIsClick={setIsClick} />
        ) : (
          <>
            <div className="container mx-auto font-serif px-28 pt-10">
              <div className='flex justify-between mb-6'>
                <h1 className="text-3xl text-cyan-600 font-bold mb-4">Preauthorization Requests</h1>
                <button className='px-4 py-2 bg-cyan-600 text-white font-serif rounded-lg shadow-md' onClick={() => { setIsClick(true) }}>Add New PreAuth</button>
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
                      <td className="border px-4 py-2">
                        <button className='border-2 border-cyan-600 px-3 py-1 bg-cyan-600 text-white font-medium rounded-md shadow-md'>More Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
    </div>
  </>
  );
};

export default MainPage;
