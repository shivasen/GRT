import React from 'react';
import PropTypes from 'prop-types';
import { Award, Star, Users, Languages } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
    <div className="text-center p-6">
        <div className="flex justify-center mb-4">
            <div className="bg-crimson/10 text-crimson p-4 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

FeatureCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const features = [
    {
        icon: <Award size={32} />,
        title: '20+ Years Experience',
        description: 'Two decades of excellence in delivering unforgettable travel experiences',
    },
    {
        icon: <Star size={32} />,
        title: '4.8★ Google Rating',
        description: 'Highly rated by thousands of satisfied customers across India',
    },
    {
        icon: <Users size={32} />,
        title: '25,000+ Travelers',
        description: 'Successfully served over 25,000 happy travelers across 81 tour packages',
    },
    {
        icon: <Languages size={32} />,
        title: 'Tamil-English Guides',
        description: 'Expert guides fluent in Tamil and English for seamless communication',
    },
];

const WhyChooseUs = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-crimson text-center mb-12">Why Choose Grand Royal Tours?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
