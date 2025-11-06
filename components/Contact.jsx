'use client';

import styled from 'styled-components';
import { useState } from 'react';

const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeaderSection = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 3rem 2rem;
  border-radius: 8px 8px 0 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: -0.03em;
`;

const SectionSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.25rem;
  margin-bottom: 0;
  font-weight: 400;
`;

const ContactForm = styled.form`
  background: white;
  padding: 3rem;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  color: #1a1a2e;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #2196F3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #2196F3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.3rem;
  background: linear-gradient(135deg, #2196F3 0%, #1976d2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
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
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
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
        <HeaderSection>
          <SectionTitle>Let's Work Together</SectionTitle>
          <SectionSubtitle>
            Ready to transform your brand? Get in touch and let's create something amazing.
          </SectionSubtitle>
        </HeaderSection>
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
