import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
            duration: 0.5,
        }
    })
};

const DestinationCard = ({ name, count, bg, badge, index }) => {
    const handleInteraction = () => alert(`Showing ${count} tours in ${name}`);

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            role="button"
            tabIndex="0"
            onClick={handleInteraction}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInteraction()}
            className="relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg group focus:outline-none focus:ring-4 focus:ring-crimson"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: bg }}
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-sm">{count} Tours Available</p>
            </div>
            {badge && (
                <span className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {badge}
                </span>
            )}
        </motion.div>
    );
};

DestinationCard.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
    badge: PropTypes.string,
    index: PropTypes.number.isRequired,
};

const regions = [
    { name: 'Europe', count: 18, bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', badge: 'Premium' },
    { name: 'Asia', count: 38, bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', badge: 'Popular' },
    { name: 'Africa', count: 7, bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { name: 'Americas', count: 2, bg: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
    { name: 'Oceania', count: 4, bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { name: 'India', count: 6, bg: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)', badge: 'Trending' },
    { name: 'Sri Lanka', count: 3, bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: 'Antarctica', count: 1, bg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', badge: 'Exclusive' }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Destinations = () => {
    return (
        <section id="destinations" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-crimson text-center mb-4">Featured Destinations</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Explore the world's most breathtaking locations with our expertly crafted tours</p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {regions.map((region, index) => (
                        <DestinationCard key={region.name} {...region} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Destinations;
