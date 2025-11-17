import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, Plane, Menu, X, Search } from 'lucide-react';
import { tourPackages } from '../data/tours';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#tours', label: 'Group Tours' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
            return;
        }

        const results = tourPackages.filter(pkg =>
            pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pkg.region.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 6);
        setSearchResults(results);
    }, [searchTerm]);

    const handleSearchAlert = useCallback((pkg) => {
        alert(`Tour: ${pkg.name} - ₹${pkg.price.toLocaleString()}`);
        setSearchTerm('');
        setIsSearchFocused(false);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'} bg-white`}>
            {/* Top Bar */}
            <div className="bg-crimson text-white py-2 text-xs">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="tel:+919159973503" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                            <Phone size={14} />
                            <span>+91 91599 73503</span>
                        </a>
                        <a href="mailto:info@grandroyaltours.in" className="hidden md:flex items-center gap-2 hover:text-brand-orange transition-colors">
                            <Mail size={14} />
                            <span>info@grandroyaltours.in</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="tel:+919159973503" className="bg-white text-crimson px-3 py-1 rounded-md font-medium hover:bg-gray-200 transition-colors">Call Now</a>
                        <a href="https://wa.me/919159973503" target="_blank" rel="noopener noreferrer" className="bg-white text-crimson px-3 py-1 rounded-md font-medium hover:bg-gray-200 transition-colors">WhatsApp</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2">
                    <div className="text-crimson font-bold text-3xl relative">
                        GR
                        <Plane size={12} className="absolute -top-1 -right-1.5 text-crimson" />
                    </div>
                    <span className="text-crimson font-extrabold text-lg tracking-wider">GRAND ROYAL TOURS</span>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a href={link.href} className="font-semibold text-gray-700 hover:text-crimson transition-colors">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="relative">
                        <label htmlFor="nav-global-search" className="sr-only">Search packages</label>
                        <input
                            type="search"
                            id="nav-global-search"
                            placeholder="Search packages..."
                            autoComplete="off"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
                            className="pl-8 pr-3 py-2 border border-gray-300 rounded-full w-56 text-sm focus:ring-2 focus:ring-crimson focus:outline-none"
                        />
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                        {isSearchFocused && searchTerm && (
                            <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-80 overflow-y-auto">
                                {searchResults.length > 0 ? (
                                    searchResults.map(pkg => (
                                        <div
                                            key={pkg.id}
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => handleSearchAlert(pkg)}
                                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSearchAlert(pkg)}
                                            className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-sm"
                                        >
                                            <p className="font-semibold text-gray-800">{pkg.name}</p>
                                            <p className="text-xs text-gray-500">{pkg.region}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-3 text-sm text-gray-500">No matches found</div>
                                )}
                            </div>
                        )}
                    </div>
                </nav>

                <button className="lg:hidden text-crimson" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Main menu">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-crimson font-bold text-lg">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)} className="text-gray-600" aria-label="Close menu">
                                <X size={24} />
                            </button>
                        </div>
                        <nav>
                            <ul className="space-y-4">
                                {navLinks.map(link => (
                                    <li key={link.label}>
                                        <a href={link.href} onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-700 hover:text-crimson transition-colors block py-2">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
