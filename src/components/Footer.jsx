import React from 'react';
import { Plane, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/grandroyaltours", icon: <Instagram size={20} /> },
    { name: "Facebook", href: "https://facebook.com/grandroyaltours", icon: <Facebook size={20} /> },
    { name: "YouTube", href: "https://youtube.com/grandroyaltours", icon: <Youtube size={20} /> },
    { name: "LinkedIn", href: "https://linkedin.com/company/grandroyaltours", icon: <Linkedin size={20} /> },
];

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-crimson font-bold text-3xl relative">GR<Plane size={12} className="absolute -top-1 -right-1.5 text-crimson" /></div>
                            <span className="text-white font-extrabold text-lg tracking-wider">GRAND ROYAL TOURS</span>
                        </div>
                        <p className="text-brand-orange italic mb-4">We Make Sweet Memories</p>
                        <p className="text-gray-400 text-sm mb-6">With over 20 years of experience, Grand Royal Tours is your trusted partner for unforgettable travel experiences.</p>
                        <div className="flex gap-4">
                            {socialLinks.map(link => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${link.name}`} className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-brand-orange mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#home" className="hover:text-white">Home</a></li>
                            <li><a href="#about" className="hover:text-white">About Us</a></li>
                            <li><a href="#tours" className="hover:text-white">Group Tours</a></li>
                            <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Popular Destinations */}
                    <div>
                        <h4 className="text-lg font-semibold text-brand-orange mb-4">Popular Destinations</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Bali Tours</a></li>
                            <li><a href="#" className="hover:text-white">Dubai Tours</a></li>
                            <li><a href="#" className="hover:text-white">USA Tours</a></li>
                            <li><a href="#" className="hover:text-white">Europe Tours</a></li>
                            <li><a href="#" className="hover:text-white">Thailand Tours</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-brand-orange mb-4">Contact Info</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start gap-3"><MapPin size={16} className="text-brand-orange mt-1 shrink-0" aria-hidden="true" /><span>Gandhipuram, Coimbatore & T. Nagar, Chennai</span></li>
                            <li className="flex items-start gap-3"><Phone size={16} className="text-brand-orange mt-1 shrink-0" aria-hidden="true" /><span>+91 91599 73503</span></li>
                            <li className="flex items-start gap-3"><Mail size={16} className="text-brand-orange mt-1 shrink-0" aria-hidden="true" /><span>info@grandroyaltours.in</span></li>
                            <li className="flex items-start gap-3"><Clock size={16} className="text-brand-orange mt-1 shrink-0" aria-hidden="true" /><span>Mon-Sat: 9AM-6PM</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>Copyright &copy; 2025 Grand Royal Tours</p>
                    <p className="mt-2">
                        <a href="#privacy" className="hover:text-white mx-2">Privacy Policy</a>|
                        <a href="#terms" className="hover:text-white mx-2">Terms & Conditions</a>|
                        <a href="#payment" className="hover:text-white mx-2">Payment Terms</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
