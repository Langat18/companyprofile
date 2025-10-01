import React, { useState } from 'react';
import { styled } from 'goober';
import { theme } from '../../styles/theme';

const MainContent = styled('main')`
  margin-top: 80px;
`;

const PageHeader = styled('section')`
  background: ${theme.colors.primary};
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const Container = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled('h1')`
  font-family: ${theme.fonts.heading};
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Section = styled('section')`
  padding: 5rem 0;
`;

const ContactGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled('div')`
  h2 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  p {
    color: ${theme.colors.lightText};
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const ContactItem = styled('div')`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateX(5px);
  }
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .content {
    flex: 1;
    
    h3 {
      color: ${theme.colors.primary};
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: ${theme.colors.lightText};
      margin: 0;
      font-size: 1rem;
    }
    
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactForm = styled('form')`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: ${theme.shadows.lg};
  
  h2 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const FormGroup = styled('div')`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    color: ${theme.colors.text};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 1rem;
    border: 2px solid ${theme.colors.border};
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
    
    &::placeholder {
      color: ${theme.colors.lightText};
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled('button')`
  width: 100%;
  background: ${theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:disabled {
    background: ${theme.colors.lightText};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled('div')`
  background: ${theme.colors.success};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled('div')`
  background: ${theme.colors.error};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
`;

const BusinessHours = styled('div')`
  background: ${theme.colors.lightBg};
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  
  h3 {
    color: ${theme.colors.primary};
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .hours {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    
    .day {
      color: ${theme.colors.text};
      font-weight: 600;
    }
    
    .time {
      color: ${theme.colors.lightText};
      text-align: right;
    }
  }
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <MainContent>
      <PageHeader>
        <Container>
          <PageTitle>Contact Us</PageTitle>
          <p style={{ fontSize: '1.25rem', opacity: '0.9' }}>
            Ready to transform your HR operations? Let's discuss your needs.
          </p>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <ContactGrid>
            <ContactInfo>
              <h2>Get In Touch</h2>
              <p>
                Whether you need ongoing support, consultation services, or a temporary HR 
                staffing solution, we're here to help. Contact us today for a free consultation 
                to discuss how we can customize our services to your specific needs.
              </p>

              <ContactItem>
                <div className="icon">📍</div>
                <div className="content">
                  <h3>Office Location</h3>
                  <p>Nexus Business Centre<br />Nairobi, Kenya</p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">📞</div>
                <div className="content">
                  <h3>Phone Number</h3>
                  <p><a href="tel:+254728247875">0728-247-875</a></p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">✉️</div>
                <div className="content">
                  <h3>Email Address</h3>
                  <p><a href="mailto:info@megaflexihrsolutions.com">info@megaflexihrsolutions.com</a></p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">🌐</div>
                <div className="content">
                  <h3>Website</h3>
                  <p><a href="https://www.megaflexihrsolutions.com" target="_blank" rel="noopener noreferrer">www.megaflexihrsolutions.com</a></p>
                </div>
              </ContactItem>

              <BusinessHours>
                <h3>Business Hours</h3>
                <div className="hours">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 5:00 PM</span>
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 1:00 PM</span>
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </BusinessHours>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you within 24 hours.
                </SuccessMessage>
              )}
              
              {submitStatus === 'error' && (
                <ErrorMessage>
                  Sorry, there was an error sending your message. Please try again.
                </ErrorMessage>
              )}

              <FormGroup>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0712-345-678"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="service">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="hr-audit">HR Audit & Organization Design</option>
                  <option value="strategic-planning">Strategic HR Planning</option>
                  <option value="employee-relations">Employee Relations & CBA</option>
                  <option value="talent-acquisition">Talent Acquisition</option>
                  <option value="performance-management">Performance Management</option>
                  <option value="culture-transformation">Culture Transformation</option>
                  <option value="other">Other Services</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your HR needs and how we can help..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </Container>
      </Section>
    </MainContent>
  );
}

export default ContactPage;