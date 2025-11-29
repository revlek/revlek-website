'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import Head from 'next/head';

export default function ScheduleCallPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    'Software Development Consultation',
    'AI & Machine Learning Discussion',
    'SaaS Platform Planning',
    'Mobile App Strategy',
    'UI/UX Design Review',
    'Digital Marketing Strategy'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime) {
      alert('Please fill in all fields');
      return;
    }
    
    console.log('Call scheduled:', { service: selectedService, date: selectedDate, time: selectedTime });
    alert(`Call scheduled for ${selectedService} on ${selectedDate} at ${selectedTime}. We'll send you a confirmation email!`);
  };

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Tomorrow
    return today.toISOString().split('T')[0];
  };

  return (
    <>
      <Head>
        <title>Schedule a Free Consultation Call - Revlek Software Development</title>
        <meta name="description" content="Schedule a free consultation call with Revlek to discuss your software development, AI solutions, and digital transformation projects. Choose your preferred time and service." />
        <meta name="keywords" content="schedule consultation call, software development consultation, AI consultation booking, free consultation, revlek appointment, technology consultation" />
        <meta property="og:title" content="Schedule a Free Consultation Call - Revlek Software Development" />
        <meta property="og:description" content="Schedule a free consultation call with Revlek to discuss your software development, AI solutions, and digital transformation projects. Choose your preferred time and service." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Schedule a Free Consultation Call - Revlek Software Development" />
        <meta name="twitter:description" content="Schedule a free consultation call with Revlek to discuss your software development, AI solutions, and digital transformation projects. Choose your preferred time and service." />
        <link rel="canonical" href="https://revlek.com/schedule-call" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Schedule a Call
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Book a free consultation to discuss your project requirements and how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scheduling Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Book Your Free Consultation</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="block text-lg font-medium text-blue-200 mb-4">
                <Video className="w-5 h-5 inline mr-2" />
                Select Service Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={selectedService === service}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedService === service
                          ? 'border-blue-500 bg-blue-500/20'
                          : 'border-blue-500/30 bg-slate-700/50 hover:border-blue-500/50'
                      }`}>
                        <p className="text-white font-medium">{service}</p>
                      </div>
                    </label>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-lg font-medium text-blue-200 mb-4">
                <Calendar className="w-5 h-5 inline mr-2" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getMinDate()}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-lg font-medium text-blue-200 mb-4">
                <Clock className="w-5 h-5 inline mr-2" />
                Select Time
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((time, index) => (
                  <motion.label
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="time"
                      value={time}
                      checked={selectedTime === time}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                      selectedTime === time
                        ? 'border-blue-500 bg-blue-500/20 text-white'
                        : 'border-blue-500/30 bg-slate-700/50 text-blue-200 hover:border-blue-500/50'
                    }`}>
                      {time}
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Contact Method */}
            <div>
              <label className="block text-lg font-medium text-blue-200 mb-4">
                Preferred Contact Method
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="video"
                    defaultChecked
                    className="mr-2"
                  />
                  <Video className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="text-white">Video Call</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    className="mr-2"
                  />
                  <Phone className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="text-white">Phone Call</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    className="mr-2"
                  />
                  <Mail className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="text-white">Email Discussion</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule My Call
            </motion.button>
          </form>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center text-blue-200"
          >
            <p className="mb-2">📅 All calls are 30 minutes long</p>
            <p className="mb-2">💻 We'll send you a calendar invite with meeting details</p>
            <p>🔒 Your information is secure and will never be shared</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
}