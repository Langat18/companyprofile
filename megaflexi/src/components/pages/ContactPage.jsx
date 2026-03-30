import React, { useState } from 'react';
import { styled } from 'goober';
import { theme } from '../../styles/theme';

const Page = styled('main')`margin-top: 80px;`;

const PageHeader = styled('section')`
  width: 100%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #0a1628 100%);
  padding: 6rem 3rem 5rem;
  box-sizing: border-box;
  border-bottom: 3px solid ${theme.colors.accent};
`;

const FullSection = styled('section')`
  width: 100%;
  padding: 6rem 3rem;
  box-sizing: border-box;
  background: ${p =>
    p.$dark  ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #0a1628 100%)` :
    p.$black ? '#060e1c' :
    p.$white ? '#ffffff' :
    theme.colors.lightBg};
`;

const Wrap = styled('div')`width: 100%; max-width: 1300px; margin: 0 auto;`;

const SectionEyebrow = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.75rem;
  justify-content: ${p => p.$center ? 'center' : 'flex-start'};
`;

const EyebrowBar = styled('div')`
  width: 4px;
  height: 1.3rem;
  background: ${theme.colors.accent};
  border-radius: 2px;
  flex-shrink: 0;
`;

const EyebrowText = styled('p')`
  color: ${theme.colors.accent};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const PageTitle = styled('h1')`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  span { color: ${theme.colors.accent}; }
`;

const ContactSplit = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 4rem;
  align-items: start;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; gap: 3rem; }
`;

/* FIX: p was #fff on lightBg — changed to primary */
const ContactLeft = styled('div')`
  h2 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    font-size: 1.9rem;
    margin-bottom: 1rem;
    font-weight: 800;
  }
  p { color: ${theme.colors.primary}; line-height: 1.75; margin-bottom: 2rem; font-size: 1rem; }
`;

/* FIX: .ci-body p was #fff on white card background — changed to primary */
const ContactItem = styled('div')`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.4rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  margin-bottom: 1rem;
  border: 1px solid transparent;
  transition: all 0.25s;
  &:hover { border-color: ${theme.colors.accent}; transform: translateX(5px); box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
  .ci-icon {
    width: 50px; height: 50px;
    background: ${theme.colors.primary};
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
    border: 2px solid ${theme.colors.accent};
  }
  .ci-body {
    h3 { color: ${theme.colors.primary}; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.25rem; }
    p  { color: ${theme.colors.primary}; font-size: 0.92rem; margin: 0; line-height: 1.5; }
    a  { color: ${theme.colors.secondary}; text-decoration: none; &:hover { color: ${theme.colors.accent}; } }
  }
`;

const HoursBox = styled('div')`
  background: ${theme.colors.primary};
  border-radius: 12px;
  padding: 1.75rem 2rem;
  margin-top: 1.75rem;
  border: 1px solid rgba(255,255,255,0.06);
  h3 {
    color: ${theme.colors.accent};
    font-family: ${theme.fonts.heading};
    font-size: 1rem;
    margin-bottom: 1.25rem;
    text-align: center;
  }
  .hr-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    &:last-child { border-bottom: none; }
    .hr-day  { color: #ffffff; font-size: 0.88rem; }
    .hr-time { color: ${theme.colors.accent}; font-weight: 600; font-size: 0.88rem; }
  }
`;

const FormBox = styled('div')`
  background: ${theme.colors.primary};
  border-radius: 16px;
  padding: 3rem;
  border-top: 3px solid ${theme.colors.accent};
  h2 {
    font-family: ${theme.fonts.heading};
    color: #fff;
    font-size: 1.65rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .form-sub { color: #ffffff; text-align: center; margin-bottom: 2rem; font-size: 0.92rem; }
`;

const FormRow = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

const FormGroup = styled('div')`
  margin-bottom: 1.25rem;
  label {
    display: block;
    color: #c8d8ea;
    font-weight: 600;
    margin-bottom: 0.4rem;
    font-size: 0.88rem;
  }
  input, textarea, select {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: inherit;
    background: rgba(255,255,255,0.05);
    color: #fff;
    transition: all 0.25s;
    box-sizing: border-box;
    &:focus { outline: none; border-color: ${theme.colors.accent}; background: rgba(255,255,255,0.08); box-shadow: 0 0 0 3px rgba(253,185,19,0.12); }
    &::placeholder { color: rgba(255,255,255,0.5); }
    option { background: ${theme.colors.primary}; color: #fff; }
  }
  textarea { resize: vertical; min-height: 130px; }
`;

const SubmitBtn = styled('button')`
  width: 100%;
  background: ${theme.colors.accent};
  color: ${theme.colors.primary};
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  margin-top: 0.5rem;
  &:hover:not(:disabled) { background: ${theme.colors.accentHover}; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(253,185,19,0.35); }
  &:disabled { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.4); cursor: not-allowed; }
`;

const Alert = styled('div')`
  padding: 0.875rem 1.25rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1.25rem;
  font-weight: 600;
  font-size: 0.95rem;
  background: ${p => p.$error ? theme.colors.error : theme.colors.success};
  color: #fff;
`;

const FAQGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const FAQCard = styled('div')`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(253,185,19,0.15);
  border-radius: 10px;
  padding: 2rem;
  h4 { color: ${theme.colors.accent}; font-family: ${theme.fonts.heading}; margin-bottom: 0.75rem; font-size: 1rem; }
  p  { color: #ffffff; line-height: 1.65; font-size: 0.93rem; }
`;

/* ─── Data ──────────────────────────────────────────────── */
const contactItems = [
  { icon: '📍', label: 'Office Location', value: 'Nexus Business Centre, Nairobi, Kenya' },
  { icon: '📞', label: 'Phone Number',    value: <a href="tel:+254728247875">0728-247-875</a> },
  { icon: '✉️', label: 'Email Address',   value: <a href="mailto:info@tripplemconsulting.com">info@tripplemconsulting.com</a> },
  { icon: '🌐', label: 'Website',         value: <a href="https://www.tripplemconsulting.com" target="_blank" rel="noopener noreferrer">www.tripplemconsulting.com</a> },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday',        time: '9:00 AM – 1:00 PM' },
  { day: 'Sunday',          time: 'Closed' },
];

/* FIX: removed " — " connector hyphens in prose, reworded naturally */
const faqs = [
  { q: 'How quickly can you start?',             a: 'For most engagements we can mobilize within 1 to 2 weeks of contract signature. Urgent needs can often be accommodated sooner.' },
  { q: 'Do you work outside Kenya?',             a: 'Yes. We have active clients and partners across East Africa, West Africa, and internationally. Remote delivery is fully supported.' },
  { q: 'What is the typical engagement length?', a: 'Engagements range from a single workshop day to multi-year programs. We scope each project to match your needs and budget.' },
  { q: 'Can you support grant proposals?',       a: 'Grant writing and proposal support is one of our core services. We have experience with major bilateral and multilateral donors.' },
];

/* ─── Component ─────────────────────────────────────────── */
function ContactPage() {
  const empty = { name: '', email: '', phone: '', org: '', service: '', message: '' };
  const [form, setForm]     = useState(empty);
  const [busy, setBusy]     = useState(false);
  const [status, setStatus] = useState(null);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    try {
      await new Promise(r => setTimeout(r, 2000));
      setStatus('success');
      setForm(empty);
    } catch {
      setStatus('error');
    } finally {
      setBusy(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <Page>

      {/* ─ Header ─ */}
      <PageHeader>
        <Wrap>
          <SectionEyebrow $center>
            <EyebrowBar />
            <EyebrowText>Reach Out</EyebrowText>
          </SectionEyebrow>
          <PageTitle>Contact <span>Us</span></PageTitle>
          <p style={{ color: '#ffffff', fontSize: '1.1rem', textAlign: 'center', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            Ready to transform your organization? Let's start a conversation.
          </p>
        </Wrap>
      </PageHeader>

      {/* ─ Contact split ─ */}
      <FullSection>
        <Wrap>
          <ContactSplit>
            <ContactLeft>
              <h2>Get In Touch</h2>
              <p>
                Whether you need a full consulting engagement, a focused workshop, support writing
                a grant proposal, or advice on AI and data strategy, we are here to help.
              </p>
              {contactItems.map((c, i) => (
                <ContactItem key={i}>
                  <div className="ci-icon">{c.icon}</div>
                  <div className="ci-body"><h3>{c.label}</h3><p>{c.value}</p></div>
                </ContactItem>
              ))}
              <HoursBox>
                <h3>Business Hours</h3>
                {hours.map((h, i) => (
                  <div className="hr-row" key={i}>
                    <span className="hr-day">{h.day}</span>
                    <span className="hr-time">{h.time}</span>
                  </div>
                ))}
              </HoursBox>
            </ContactLeft>

            <FormBox>
              <h2>Send Us a Message</h2>
              <p className="form-sub">We respond to all enquiries within one business day.</p>

              {status === 'success' && <Alert>Message sent. We'll be in touch within 24 hours.</Alert>}
              {status === 'error'   && <Alert $error>Something went wrong. Please try again.</Alert>}

              <form onSubmit={submit}>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handle} placeholder="Your full name" required />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handle} placeholder="you@organization.com" required />
                  </FormGroup>
                </FormRow>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="0712-345-678" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="org">Organization</label>
                    <input id="org" name="org" type="text" value={form.org} onChange={handle} placeholder="Your organization name" />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <label htmlFor="service">Service of Interest</label>
                  <select id="service" name="service" value={form.service} onChange={handle}>
                    <option value="">Select a service</option>
                    <option value="training">Professional Training & Executive Workshops</option>
                    <option value="capacity">Capacity Building Programs</option>
                    <option value="software">Software & Digital Solution Development</option>
                    <option value="ai-data">AI & Data Governance Advisory</option>
                    <option value="grants">Grant Writing & Proposal Support</option>
                    <option value="research">Research & Innovation Consulting</option>
                    <option value="other">Other / General Enquiry</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" value={form.message} onChange={handle}
                    placeholder="Tell us about your organization and how we can help..."
                    required
                  />
                </FormGroup>

                <SubmitBtn type="submit" disabled={busy}>
                  {busy ? 'Sending…' : 'Send Message →'}
                </SubmitBtn>
              </form>
            </FormBox>
          </ContactSplit>
        </Wrap>
      </FullSection>

      {/* ─ FAQ ─ */}
      <FullSection $black>
        <Wrap>
          <SectionEyebrow $center>
            <EyebrowBar />
            <EyebrowText>Common Questions</EyebrowText>
          </SectionEyebrow>
          <h2 style={{ fontFamily: theme.fonts.heading, color: '#fff', fontSize: 'clamp(1.8rem,2.5vw,2.3rem)', textAlign: 'center', marginBottom: '0.75rem', fontWeight: 800 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#ffffff', textAlign: 'center', maxWidth: 580, margin: '0 auto 3rem', lineHeight: 1.7, fontSize: '1rem' }}>
            Quick answers to what new clients most commonly ask.
          </p>
          <FAQGrid>
            {faqs.map((f, i) => (
              <FAQCard key={i}><h4>{f.q}</h4><p>{f.a}</p></FAQCard>
            ))}
          </FAQGrid>
        </Wrap>
      </FullSection>

    </Page>
  );
}

export default ContactPage;