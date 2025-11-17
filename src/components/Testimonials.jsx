import React, { useState, useEffect, useCallback } from 'react';
import { testimonials as testimonialData } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, []);

    const prevTestimonial = useCallback(() => {
        setIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextTestimonial]);

    const currentTestimonial = testimonialData[index];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-crimson text-center mb-12">What Our Customers Say</h2>
                <div className="max-w-2xl mx-auto relative h-64">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={index}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="absolute w-full"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center text-brand-orange mb-4" aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}>
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic text-lg mb-4">"{currentTestimonial.text}"</p>
                                <div className="font-semibold">
                                    <strong className="block text-gray-800 text-xl">{currentTestimonial.name}</strong>
                                    <span className="text-sm text-gray-500">{currentTestimonial.city}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                    <button onClick={prevTestimonial} aria-label="Previous testimonial" className="bg-crimson text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextTestimonial} aria-label="Next testimonial" className="bg-crimson text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
