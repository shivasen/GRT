import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { tourPackages } from '../data/tours';
import { Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
            duration: 0.5
        }
    })
};

const TourCard = ({ tour, index }) => {
    const handleBookNow = () => {
        alert(`Tour: ${tour.name}\nPrice: ₹${tour.price.toLocaleString()}\nDuration: ${tour.days}D/${tour.nights}N\n\nClick Book Now to proceed!`);
    };

    const imageUrl = `https://img-wrapper.vercel.app/image?url=https://placehold.co/400x224/dc143c/ffffff?text=${encodeURIComponent(tour.name)}`;

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
        >
            <img src={imageUrl} alt={`Promotional image for ${tour.name}`} className="h-56 w-full object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-3 h-14">{tour.name}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {tour.days} Days / {tour.nights} Nights</span>
                    <span className="flex items-center gap-2" aria-label="4.8 out of 5 stars">
                        <Star size={14} className="text-yellow-500" fill="currentColor" /> 4.8
                    </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{tour.highlights}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-xl font-bold text-crimson">
                        ₹{tour.price.toLocaleString()}
                        <span className="text-xs font-normal text-gray-500"> / person</span>
                    </div>
                    <button
                        onClick={handleBookNow}
                        className="bg-crimson text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

TourCard.propTypes = {
    tour: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        days: PropTypes.number.isRequired,
        nights: PropTypes.number.isRequired,
        highlights: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const PopularTours = () => {
    const topTours = useMemo(() => tourPackages.slice().sort((a, b) => b.price - a.price).slice(0, 4), []);

    const showAllTours = useCallback(() => {
        alert(`Viewing all ${tourPackages.length} tour packages! This would show a complete tour listing page with filters and search.`);
    }, []);

    return (
        <section id="tours" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-crimson text-center mb-4">Popular Group Tours</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Join our carefully curated group tours with Tamil-English speaking guides</p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {topTours.map((tour, index) => (
                        <TourCard key={tour.id} tour={tour} index={index} />
                    ))}
                </motion.div>
                <div className="text-center mt-12">
                    <button onClick={showAllTours} className="bg-deep-blue text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">
                        View All {tourPackages.length} Tours
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularTours;
