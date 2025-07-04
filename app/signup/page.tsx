'use client';
import React from 'react';
export default function SignUpForm() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 text-black">
            <h1 className="text-3xl font-bold mb-6 text-center">New account</h1>
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Email Address <span className="text-red-600">*</span></label>
                        <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>Password <span className="text-red-600">*</span></label>
                        <input type="password" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Confirm Password <span className="text-red-600">*</span></label>
                        <input type="password" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>First Name <span className="text-red-600">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                </div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Last Name <span className="text-red-600">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>Company Name</label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
                    </div>
                </div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Phone Number <span className="text-red-600">*</span></label>
                        <input type="tel" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>Country <span className="text-red-600">*</span></label>
                        <select className="w-full border border-gray-300 rounded px-4 py-2">
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>USA</option>
                        </select>
                    </div>
                </div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Address Line 1 <span className="text-red-600">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>Address Line 2</label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
                    </div>
                </div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>City <span className="text-red-600">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>State/Province <span className="text-red-600">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Zip/Postal Code <span className="text-red-600">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                    </div>
                    <div>
                        <label>Industry You Operate In <span className="text-red-600">*</span></label>
                        <select className="w-full border border-gray-300 rounded px-4 py-2" required>
                            <option value="">--Please select the industry--</option>
                            <option>Retail</option>
                            <option>Wholesale</option>
                            <option>Manufacturing</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label>Sector You Operate In <span className="text-red-600">*</span></label>
                        <select className="w-full border border-yellow-600 border-2 rounded px-4 py-2" required>
                            <option value="">--Please select the sector you are in--</option>
                            <option>Automotive</option>
                            <option>Engineering</option>
                        </select>
                    </div>
                    <div>
                        <label>P.O Number</label>
                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <label>EIN/VAT Number</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div className="mt-6">
                    <label className="flex items-center gap-3">
                        <input type="checkbox" required />
                        Im not a robot
                    </label>
                </div>
                <div className="mt-6">
                    <button type="submit" className="w-full bg-yellow-600 text-white font-semibold py-3 rounded hover:bg-yellow-700">
                        Create account
                    </button>
                </div>
            </form>
        </div>
    );
}
