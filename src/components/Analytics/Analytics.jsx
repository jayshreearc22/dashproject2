import React from 'react'
import { useNavigate } from 'react-router-dom';

import { MdEmail } from "react-icons/md";
import "chart.js/auto";
import MT4 from "../images/MsgT4.png"

const customers = [
  {
    pic: <img src={MT4}></img>,
    name: "John Deo",
    email: "johndoe2211@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Shelby Goode",
    email: "shelbygoode481@gmail.com",
    phone: "+33757005467",
    gender: "Female",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Robert Bacins",
    email: "robertbacins4182@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    pic: <img src={MT4}></img>,
    name: "John Carilo",
    email: "johncarilo182@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Adriene Watson",
    email: "adrienewatson82@gmail.com",
    phone: "+83757005467",
    gender: "Female",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Jhon Deo",
    email: "johndeo24823@gmail.com",
    phone: "+6345700546",
    gender: "Male",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Mark Ruffalo",
    email: "markruffalo3735@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Bethany Jackson",
    email: "bethanyjackson5@gmail.com",
    phone: "+33757005467",
    gender: "Female",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Christine Huston",
    email: "christinehuston4@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    pic: <img src={MT4}></img>,
    name: "Anne Jacob",
    email: "annejacob2@ummoh.com",
    phone: "+33757005467",
    gender: "Female",
  },
  {
    pic: <img src={MT4}></img>,
    name: "James Mullican",
    email: "jamesmullican5346@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
];
const Analytics = () => {
  const navigate =useNavigate();
  return (
    <div className="flex  bg-gray-100">
      

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold">Customer List</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded " onClick={()=>{
            navigate('/AddCustomer')
          }}>
           + Add Customer
           
          </button>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Phone number
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900  items-center flex whitespace-no-wrap">
                          <div className="">{customer.pic}</div>{" "}
                          <div className=""> {customer.name}</div>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {customer.email}
                    </p>
                  </td>
                  <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {customer.phone}
                    </p>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className={relative inline-block px-3 py-1 font-semibold leading-tight ${customer.gender === 'Male' ? 'text-blue-900' : 'text-pink-900'}}>
                      <span aria-hidden="true" className={absolute inset-0 ${customer.gender === 'Male' ? 'bg-blue-200' : 'bg-pink-200'} opacity-50 rounded-full}></span>
                      <span className="relative">{customer.gender}</span>
                    </span>
                  </td> */}

                  <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm">
                
                  <span className="relative">{customer.gender}</span>
                  </td>

                  <td className="px-5 py-1 border-b border-gray-200 bg-white text-sm">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <aside className="w-64 bg-white p-6">
        <div className="text-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="mx-auto rounded-full h-24 w-24 mb-2"
          />
          <h2 className="text-lg font-semibold">John Deo</h2>
          <p className="text-gray-600">UI/UX Designer</p>
        </div>
        <div className="mb-6">
          <h3 className="text-gray-600">Contact Info</h3>
          <div className="flex  items-center justify-between">
            <MdEmail className="" />
            <p className="text-gray-800 "> kajope5182@ummoh.com</p>
          </div>

          <p className="text-gray-800">33757005467</p>
          <p className="text-gray-800">2239 Hog Camp Road, Schaumburg</p>
        </div>
        <div className="mb-6">
          <h3 className="text-gray-600">Performance</h3>
          <div className="h-32">{/* Insert Performance Chart Here */}</div>
        </div>
      </aside>
    </div>
  );
}

export default Analytics