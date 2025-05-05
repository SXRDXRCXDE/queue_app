import React, { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { categories, Services } from "../mockData";
import { useNavigate } from "react-router-dom";

export default function SearchServices() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    return (
        <>
            {/* Main Search Input */}
            <div
                className="flex items-center px-4 py-2 h-12 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-200 shadow-md mt-4"
                onClick={() => setIsModalOpen(true)}
            >
                <FiSearch className="text-white text-xl mr-3" />
                <input
                    type="text"
                    placeholder="Qidirish"
                    className="bg-transparent text-lg text-white placeholder-white focus:outline-none w-full cursor-pointer"
                    readOnly
                    value={query}
                />
            </div>

            {/* Modal & Backdrop */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100]">
                    {/* Backdrop (optional) */}
                    <div
                        className="absolute inset-0 bg-white"
                        onClick={() => {
                            setIsModalOpen(false);
                            setQuery('');
                        }}
                    />

                    {/* Modal Content */}
                    <div className="relative z-10 h-full flex flex-col p-4">
                        {/* Top Bar */}
                        <div className="flex items-center mb-4">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setQuery('');
                                }}
                                className="mr-2"
                            >
                                <IoClose className="text-2xl text-gray-700" />
                            </button>

                            <div className="w-full p-3 relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-200 to-blue-500">
                                <FiSearch className="absolute left-2 top-0 bottom-0 m-auto text-black/40 text-2xl mr-2" />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Xizmatlarni qidiring..."
                                    className="bg-transparent text-lg h-7 pl-7 text-white placeholder-white focus:outline-none w-full"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="flex-1 overflow-auto">
                            {query.length > 0 ? (
                                <div className="flex flex-col">
                                    <p className="text-gray-500">Natijalar:</p>
                                    <div className="flex flex-col gap-3">
                                        {Services.filter(service =>
                                            service.name.toLowerCase().includes(query.toLowerCase())
                                        ).map((value, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    navigate(`/serviceMain?searchId=${value.id}`);
                                                    setIsModalOpen(false);
                                                }}
                                                className="w-full h-12 flex justify-between items-center cursor-pointer"
                                            >
                                                <div className="flex flex-col items-start">
                                                    <span className="text-xl font-semibold">{value.name}</span>
                                                    {value.distance > 0 && (
                                                        <span className="text-sm text-black/50">
                                                            {value.distance} km uzoqlikda
                                                        </span>
                                                    )}
                                                </div>
                                                <FiArrowRight size={25} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <p className="text-gray-400 mb-4">Izlash uchun yozing...</p>
                                    <div className="flex flex-col gap-3">
                                        {categories.map((value, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    navigate(`/layout?title=${value.label}`);
                                                    setIsModalOpen(false);
                                                }}
                                                className="w-full h-12 flex justify-between items-center cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-10 h-10 rounded-full ${value.color || "bg-blue-700"}`} />
                                                    <div className="flex flex-col items-start">
                                                        <span className="text-xl font-semibold">{value.label}</span>
                                                        {value.quantity > 0 && (
                                                            <span className="text-sm text-black/50">{value.quantity} dan ortiq labaratoriya</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <FiArrowRight size={25} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
