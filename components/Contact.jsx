'use client';

import styled from 'styled-components';
import { useState } from 'react';

const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 50%, #EC4899 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: -0.03em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.25rem;
  margin-bottom: 3rem;
  font-weight: 400;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  color: #0f172a;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;

  &:focus {
    outline: none;
    border-color: #0066FF;
    box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;

  &:focus {
    outline: none;
    border-color: #0066FF;
    box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.3rem;
  background: linear-gradient(135deg, #0066FF 0%, #6366F1 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 102, 255, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 1.2rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', company: '', message: '' });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Let's Work Together</SectionTitle>
        <SectionSubtitle>
          Ready to transform your brand? Get in touch and let's create something amazing.
        </SectionSubtitle>
        <ContactForm onSubmit={handleSubmit}>
          {showSuccess && (
            <SuccessMessage>
              Thank you! We'll get back to you within 24 hours.
            </SuccessMessage>
          )}
          <FormGroup>
            <Label htmlFor="name">Your Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="company">Company Name</Label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Project Details *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
}
