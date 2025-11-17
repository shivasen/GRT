import React, { useState, useCallback } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const Hero = () => {
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [persons, setPersons] = useState('');

    const searchTours = useCallback(() => {
        if (!destination) {
            alert('Please select a destination to search!');
            return;
        }
        alert(`Searching for ${destination} tours departing around ${departureDate || 'any date'} for ${persons || 'any number of'} persons... This would filter the tour list!`);
        const section = document.getElementById('tours');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [destination, departureDate, persons]);

    return (
        <section id="home" className="relative min-h-[600px] bg-gradient-to-br from-deep-blue to-crimson flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-shadow-lg">Grand Royal Tours</h1>
                <p className="text-2xl md:text-3xl font-light italic text-brand-orange mb-2">We Make Sweet Memories</p>
                <p className="text-lg md:text-xl mb-8">Your Trusted Travel Partner for 20+ Years</p>

                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                            <MapPin className="text-crimson" size={20} aria-hidden="true" />
                            <label htmlFor="destination" className="sr-only">Destination</label>
                            <select
                                id="destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-700 text-sm"
                            >
                                <option value="">Select Destination</option>
                                <option value="bali">Bali</option>
                                <option value="dubai">Dubai</option>
                                <option value="usa">USA</option>
                                <option value="europe">Europe</option>
                                <option value="thailand">Thailand</option>
                                <option value="japan">Japan</option>
                                <option value="maldives">Maldives</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                            <Calendar className="text-crimson" size={20} aria-hidden="true" />
                            <label htmlFor="departure" className="sr-only">Departure Date</label>
                            <input
                                type="date"
                                id="departure"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-700 text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200">
                            <Users className="text-crimson" size={20} aria-hidden="true" />
                            <label htmlFor="persons" className="sr-only">Number of Persons</label>
                            <select
                                id="persons"
                                value={persons}
                                onChange={(e) => setPersons(e.target.value)}
                                className="w-full bg-transparent outline-none text-gray-700 text-sm"
                            >
                                <option value="">Number of Persons</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3-5">3-5 Persons</option>
                                <option value="6-10">6-10 Persons</option>
                                <option value="10+">10+ Persons</option>
                            </select>
                        </div>
                        <button onClick={searchTours} className="bg-crimson text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors duration-300 md:col-span-3 lg:col-span-1">
                            <Search size={20} />
                            <span>Search Tours</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
