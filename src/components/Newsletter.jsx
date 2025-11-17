import React, { useCallback } from 'react';

const Newsletter = () => {
    const subscribeNewsletter = useCallback((e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        alert(`Thank you for subscribing! We'll send travel updates to ${email}`);
        e.target.reset();
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-600 mb-6">Get the latest travel deals, tips, and destination guides delivered to your inbox</p>
                    <form onSubmit={subscribeNewsletter} className="flex flex-col sm:flex-row gap-3">
                        <label htmlFor="email-newsletter" className="sr-only">Email Address</label>
                        <input
                            id="email-newsletter"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:outline-none"
                        />
                        <button type="submit" className="bg-crimson text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
