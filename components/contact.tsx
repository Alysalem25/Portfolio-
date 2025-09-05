'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alysalem25t@gmail.com',
      href: 'mailto:alysalem25t@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1211343515',
      href: 'tel:+201211343515'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alexandria, Egypt',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Alysalem25',
      color: 'hover:text-slate-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      href: 'linkedin.com/in/alysalem2',
      color: 'hover:text-blue-600'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/aly25t/',
      color: 'hover:text-orange-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:alysalem25t@gmail.com',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen py-16" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 dark:text-white">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion, collaboration, etc."
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, requirements, or any questions you have..."
                    className="resize-none transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card> */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`flex items-center space-x-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 ${link.color}`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                      <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                      {item.href !== '#' ? (
                        <Link
                          href={item.href}
                          className="text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-slate-800 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            {/* <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`flex items-center space-x-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 ${link.color}`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Quick Info */}
            {/* <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
                Let's Build Something Amazing
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                I'm always open to discussing new opportunities, collaborations, or interesting projects. Whether you need a full-stack developer or cybersecurity expertise, let's connect!
              </p>
              <div className="flex space-x-3">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Schedule Call
                </Button>
                <Button size="sm" variant="outline">
                  View Calendar
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'What services do you offer?',
                answer: 'I provide full-stack web development, cybersecurity consulting, and system architecture design services.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity, but most web development projects take 2-6 weeks to complete.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Yes, I work with clients worldwide and am comfortable with remote collaboration across different time zones.'
              },
              {
                question: 'What is your preferred tech stack?',
                answer: 'I specialize in React/Next.js, Node.js, and modern databases like PostgreSQL and MongoDB, with a focus on security.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}