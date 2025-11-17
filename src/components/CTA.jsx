import React, { useCallback } from 'react';
import { Phone } from 'lucide-react';

const CTA = () => {
    const showContactForm = useCallback(() => {
        alert('Contact Form would open here with fields:\n\n- Name\n- Email\n- Phone\n- Message\n\nFor now, call +91 91599 73503 or WhatsApp!');
    }, []);

    return (
        <section id="contact" className="py-20 bg-deep-blue text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Plan Your Perfect Trip</h2>
                <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">Ready to create unforgettable memories? Get in touch with us today!</p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <button onClick={showContactForm} className="bg-crimson text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors text-lg">
                        Contact Us
                    </button>
                    <a href="tel:+919159973503" className="bg-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2 text-lg">
                        <Phone size={20} aria-hidden="true" />
                        Call Now
                    </a>
                    <a href="https://wa.me/919159973503" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
