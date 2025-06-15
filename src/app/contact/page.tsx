"use client"

import { useState, FormEvent } from 'react';
import SubmitButton from "../../components/Buttons/SubmitButton";
import HeadingButton from "../../components/Buttons/HeadingButton";
import InputField from "../../components/Elements/InputField";
import CTASection from '@/src/components/Sections/CTASection';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            console.log('Form data:', formData);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            {/* contact */}
            <section className="max-w-[1300px] mx-auto pt-[160px] pb-[100px]">
                <div className="flex flex-col items-center gap-12">
                    {/* Heading */}
                    <div className="text-center">
                        <HeadingButton heading="Let's Connect" />
                        <h2 className="mt-6 text-4xl font-semibold text-white">Get in Touch</h2>
                        <p className="mt-4 text-white/60 max-w-[600px]">
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form 
                        onSubmit={handleSubmit}
                        className="w-full max-w-[720px] p-8 rounded-[20px] bg-[#0D0D0D] border border-white/5"
                        style={{ boxShadow: "inset 0px 2px 0px 0px rgba(184, 180, 180, 0.08)" }}
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField 
                                    label="NAME"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <InputField
                                    label="EMAIL"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <InputField
                                label="MESSAGE"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                isTextarea
                                required
                            />
                            <div className="flex justify-center mt-8">
                                <SubmitButton 
                                    isLoading={isLoading}
                                    text="Send Message"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <CTASection></CTASection>
        </div>
    );
}