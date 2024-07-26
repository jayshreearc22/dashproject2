import React, { useState } from "react";

import "chart.js/auto";

import MT4 from "../images/MsgT4.png";


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


const AddCustomer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: 'Male',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
      };
    
    
  return (
    <div className="flex min-h-screen bg-gray-100">
      

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Customer List</h2>
        
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

                  

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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

      {/* <aside className="w-64 bg-white p-6">
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
          <div className="h-32">

          </div>
        </div>
      </aside> */}


      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
      <div className=" max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 mb-4 overflow-hidden bg-gray-200 rounded-full">
              <svg
                className="w-full h-full text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
            <input
              type="file"
              className="hidden"
              id="file-upload"
              accept="image/*"
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
            >
              Upload Photo
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="33757005467"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>

    // </div>
  );
};

export default AddCustomer;
