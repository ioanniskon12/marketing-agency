'use client';

import styled from 'styled-components';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const InfoCard = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1.05rem;
`;

const InfoLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const FormContainer = styled.div``;

const ContactForm = styled.form`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const MapSection = styled.div`
  margin-top: 4rem;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 20px;
  text-align: center;
`;

const MapPlaceholder = styled.div`
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  margin-top: 2rem;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      company: '', 
      service: '', 
      budget: '', 
      message: '' 
    });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      <Navigation />
      <PageWrapper>
        <HeroSection>
          <Container>
            <Title>Get In Touch</Title>
            <Subtitle>
              Ready to transform your brand? Let's start a conversation about your 
              marketing goals and how we can help you achieve them.
            </Subtitle>
          </Container>
        </HeroSection>

        <ContactSection>
          <Container>
            <ContentGrid>
              <ContactInfo>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>
                  Contact Information
                </h2>
                
                <InfoCard>
                  <InfoIcon>📧</InfoIcon>
                  <InfoTitle>Email Us</InfoTitle>
                  <InfoText>
                    <InfoLink href="mailto:hello@creativehub.com">
                      hello@creativehub.com
                    </InfoLink>
                  </InfoText>
                  <InfoText style={{ marginTop: '0.5rem' }}>
                    We'll respond within 24 hours
                  </InfoText>
                </InfoCard>

                <InfoCard>
                  <InfoIcon>📞</InfoIcon>
                  <InfoTitle>Call Us</InfoTitle>
                  <InfoText>
                    <InfoLink href="tel:+15551234567">
                      +1 (555) 123-4567
                    </InfoLink>
                  </InfoText>
                  <InfoText style={{ marginTop: '0.5rem' }}>
                    Mon-Fri 9am-6pm EST
                  </InfoText>
                </InfoCard>

                <InfoCard>
                  <InfoIcon>📍</InfoIcon>
                  <InfoTitle>Visit Us</InfoTitle>
                  <InfoText>
                    123 Marketing Street<br />
                    Digital City, DC 12345<br />
                    United States
                  </InfoText>
                </InfoCard>

                <InfoCard>
                  <InfoIcon>🕐</InfoIcon>
                  <InfoTitle>Business Hours</InfoTitle>
                  <InfoText>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </InfoText>
                </InfoCard>
              </ContactInfo>

              <FormContainer>
                <ContactForm onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>
                    Send Us a Message
                  </h2>
                  
                  {showSuccess && (
                    <SuccessMessage>
                      Thank you! We've received your message and will get back to you within 24 hours.
                    </SuccessMessage>
                  )}

                  <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
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
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="creative-design">Creative Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="content-creation">Content Creation</option>
                      <option value="video-production">Video Production</option>
                      <option value="full-service">Full Service Package</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range...</option>
                      <option value="under-5k">Under $5,000/month</option>
                      <option value="5k-10k">$5,000 - $10,000/month</option>
                      <option value="10k-25k">$10,000 - $25,000/month</option>
                      <option value="25k-plus">$25,000+/month</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Project Details *</Label>
                    <TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </SubmitButton>
                </ContactForm>
              </FormContainer>
            </ContentGrid>

            <MapSection>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>
                Find Us Here
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Visit our office or schedule a virtual meeting
              </p>
              <MapPlaceholder>
                🗺️
              </MapPlaceholder>
            </MapSection>
          </Container>
        </ContactSection>
      </PageWrapper>
      <Footer />
    </>
  );
}
