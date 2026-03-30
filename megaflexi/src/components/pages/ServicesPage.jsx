import React from 'react';
import { Link } from 'react-router-dom';
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
  margin-bottom: 1rem;
  text-align: center;
  span { color: ${theme.colors.accent}; }
`;

const SectionTitle = styled('h2')`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  font-weight: 800;
  color: ${p => p.$light ? '#fff' : theme.colors.primary};
  margin-bottom: 1rem;
  text-align: ${p => p.$center ? 'center' : 'left'};
`;

/* FIX: color changes to dark on light sections, white only on dark sections */
const SectionSub = styled('p')`
  color: ${p => p.$light ? '#fff' : theme.colors.primary};
  font-size: 1rem;
  text-align: ${p => p.$center ? 'center' : 'left'};
  max-width: ${p => p.$center ? '680px' : 'none'};
  margin: ${p => p.$center ? '0 auto 3rem' : '0 0 2.5rem'};
  line-height: 1.7;
`;

const ServiceDetailGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const ServiceDetailCard = styled('div')`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  &:hover { border-color: rgba(253,185,19,0.35); transform: translateY(-4px); }
`;

const CardHeader = styled('div')`
  background: rgba(14,35,70,0.6);
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border-bottom: 2px solid ${theme.colors.accent};
  .card-icon { font-size: 2.25rem; flex-shrink: 0; }
  h3 {
    font-family: ${theme.fonts.heading};
    color: #fff;
    font-size: 1.15rem;
    font-weight: 700;
  }
`;

const CardBody = styled('div')`
  padding: 2rem;
  .description {
    color: #ffffff;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 0.97rem;
  }
  .features {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0.5rem 0 0.5rem 1.75rem;
      color: #c8d8ea;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 0.92rem;
      &:last-child { border-bottom: none; }
      &::before { content: '✓'; position: absolute; left: 0; color: ${theme.colors.accent}; font-weight: 900; font-size: 1rem; }
    }
  }
`;

const AddGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  @media (max-width: ${theme.breakpoints.lg})     { grid-template-columns: repeat(3,1fr); }
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: repeat(2,1fr); }
  @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

const AddItem = styled('div')`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(253,185,19,0.15);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: #fff;
  font-size: 0.93rem;
  transition: all 0.25s;
  span { display: block; font-size: 1.5rem; margin-bottom: 0.5rem; }
  &:hover { background: rgba(253,185,19,0.08); border-color: ${theme.colors.accent}; color: ${theme.colors.accent}; transform: translateY(-3px); }
`;

const ProcessGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
  margin-top: 3rem;
  &::before {
    content: '';
    position: absolute;
    top: 35px; left: 10%; right: 10%;
    height: 2px;
    background: ${theme.colors.accent};
    opacity: 0.35;
    z-index: 0;
  }
  @media (max-width: ${theme.breakpoints.lg})     { grid-template-columns: repeat(3,1fr); gap: 2rem; &::before { display: none; } }
  @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 1fr; gap: 2rem; }
`;

/* FIX: ProcessStep p was #fff on lightBg — changed to primary */
const ProcessStep = styled('div')`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 0.75rem;
  .step-num {
    width: 70px; height: 70px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: ${theme.fonts.heading};
    font-size: 1.5rem; font-weight: 900;
    color: ${theme.colors.primary};
    margin: 0 auto 1.25rem;
    box-shadow: 0 4px 20px rgba(253,185,19,0.35);
  }
  h4 { font-family: ${theme.fonts.heading}; color: ${theme.colors.primary}; font-size: 1rem; margin-bottom: 0.5rem; font-weight: 700; }
  p  { color: ${theme.colors.primary}; font-size: 0.87rem; line-height: 1.55; }
`;

const CTASection = styled('section')`
  width: 100%;
  background: ${theme.colors.accent};
  padding: 5rem 3rem;
  box-sizing: border-box;
  text-align: center;
`;

const CTABtn = styled(Link)`
  display: inline-block;
  background: ${theme.colors.primary};
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s;
  &:hover { background: #0a1628; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
`;

const CTAPair = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const CTACard = styled('div')`
  background: ${p => p.$olive ? 'rgba(100,80,5,0.35)' : 'rgba(14,35,70,0.7)'};
  border: 1px solid ${p => p.$olive ? 'rgba(180,145,10,0.25)' : 'rgba(253,185,19,0.12)'};
  border-radius: 14px;
  padding: 2.75rem 2.5rem;
  h3 {
    font-family: ${theme.fonts.heading};
    color: #fff;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.25rem;
    line-height: 1.3;
  }
`;

const CTALink = styled(Link)`
  color: ${theme.colors.accent};
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  &:hover { text-decoration: underline; }
`;

/* ─── Data ──────────────────────────────────────────────── */
const coreServices = [
  {
    icon: '🎓', title: 'Professional Training & Executive Workshops',
    desc: 'Intensive learning experiences designed to equip professionals and executives with practical skills they can apply immediately.',
    features: ['Leadership & management development', 'Executive coaching', 'Custom curriculum design', 'Sector-specific technical training', 'Post-training impact assessment'],
  },
  {
    icon: '🏗️', title: 'Capacity Building Programs',
    desc: 'Long-term programs that build institutional and individual capabilities required for sustained organizational growth.',
    features: ['Institutional capacity assessments', 'Team skills development', 'Systems & process strengthening', 'Mentorship programs', 'Community of practice facilitation'],
  },
  {
    icon: '💻', title: 'Software & Digital Solution Development',
    desc: 'End-to-end design and delivery of digital tools, platforms, and systems tailored to your operational needs.',
    features: ['Custom web & mobile application development', 'Business process automation', 'Dashboard & reporting tools', 'System integration & APIs', 'User experience (UX) design'],
  },
  {
    icon: '🤖', title: 'AI & Data Governance Advisory',
    desc: 'Helping organizations harness AI and data responsibly, with governance frameworks and analytics capabilities that actually work.',
    features: ['AI readiness assessments', 'Data governance framework design', 'Machine learning strategy', 'Ethical AI policy development', 'Analytics & BI implementation'],
  },
  {
    icon: '📝', title: 'Grant Writing & Proposal Support',
    desc: 'Expert support in developing compelling funding proposals that secure grants from donors, foundations, and development partners.',
    features: ['Donor landscape analysis', 'Concept note & full proposal writing', 'Budget development', 'Logical framework (LogFrame) design', 'Proposal review & strengthening'],
  },
  {
    icon: '🔬', title: 'Research & Innovation Consulting',
    desc: 'Applied research and innovation advisory that turns evidence into strategy and insights into competitive advantage.',
    features: ['Primary & secondary research design', 'Innovation ecosystem mapping', 'Evidence-based policy advisory', 'Knowledge management systems', 'Publication & dissemination support'],
  },
];

const additionalServices = [
  { icon: '📊', label: 'Monitoring & Evaluation' },
  { icon: '🌐', label: 'Digital Transformation' },
  { icon: '🤝', label: 'Partnership Brokering' },
  { icon: '📋', label: 'Project Management' },
  { icon: '🏛️', label: 'Public Sector Advisory' },
  { icon: '💡', label: 'Innovation Labs' },
  { icon: '🎯', label: 'Strategy Facilitation' },
  { icon: '📱', label: 'Tech for Development' },
];

/* FIX: removed " — " connector hyphens from process step descriptions */
const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We listen, learn, and understand your unique context and goals.' },
  { num: '02', title: 'Diagnosis', desc: 'We assess gaps, opportunities, and the landscape you operate in.' },
  { num: '03', title: 'Design',   desc: 'We co-create tailored solutions aligned with your strategy.' },
  { num: '04', title: 'Delivery', desc: 'We implement with rigor, flexibility, and hands-on support.' },
  { num: '05', title: 'Impact',   desc: 'We measure results and embed capabilities that last.' },
];

/* ─── Component ─────────────────────────────────────────── */
function ServicesPage() {
  return (
    <Page>

      {/* ─ Header ─ */}
      <PageHeader>
        <Wrap>
          <SectionEyebrow $center>
            <EyebrowBar />
            <EyebrowText>What We Offer</EyebrowText>
          </SectionEyebrow>
          <PageTitle>Our <span>Services</span></PageTitle>
          <p style={{ color: '#ffffff', fontSize: '1.1rem', textAlign: 'center', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>
            Comprehensive, integrated solutions across consulting, technology, training,
            research, and funding, tailored to your needs and context.
          </p>
        </Wrap>
      </PageHeader>

      {/* ─ Core services ─ */}
      <FullSection $black>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>Core Offerings</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $light>We have expertise in...</SectionTitle>
          <SectionSub $light>Each service is designed to deliver outcomes, not just recommendations.</SectionSub>

          <ServiceDetailGrid>
            {coreServices.map((s, i) => (
              <ServiceDetailCard key={i}>
                <CardHeader>
                  <span className="card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                </CardHeader>
                <CardBody>
                  <p className="description">{s.desc}</p>
                  <ul className="features">{s.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                </CardBody>
              </ServiceDetailCard>
            ))}
          </ServiceDetailGrid>

          <CTAPair>
            <CTACard>
              <h3>Do you have a project and need an expert?</h3>
              <CTALink to="/contact">Let us know →</CTALink>
            </CTACard>
            <CTACard $olive>
              <h3>Or do you need a free consultation call first?</h3>
              <CTALink to="/contact">Talk to us →</CTALink>
            </CTACard>
          </CTAPair>
        </Wrap>
      </FullSection>

      {/* ─ Additional services ─ */}
      <FullSection $dark>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>More We Offer</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $light>Additional Services</SectionTitle>
          <SectionSub $light>Beyond our core offerings, we bring specialist expertise across a wide range of complementary areas.</SectionSub>
          <AddGrid>
            {additionalServices.map((s, i) => (
              <AddItem key={i}><span>{s.icon}</span>{s.label}</AddItem>
            ))}
          </AddGrid>
        </Wrap>
      </FullSection>

      {/* ─ Process ─ */}
      <FullSection>
        <Wrap>
          <SectionEyebrow $center>
            <EyebrowBar />
            <EyebrowText>How We Work</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $center>Our Engagement Process</SectionTitle>
          <SectionSub $center>A proven, structured approach that ensures every engagement delivers clarity, quality, and lasting results.</SectionSub>
          <ProcessGrid>
            {processSteps.map((s, i) => (
              <ProcessStep key={i}>
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Wrap>
      </FullSection>

      {/* ─ CTA ─ */}
      <CTASection>
        <Wrap>
          <h2 style={{ fontFamily: theme.fonts.heading, fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: theme.colors.primary, marginBottom: '1rem', fontWeight: 800 }}>
            Ready to Transform Your Organization?
          </h2>
          <p style={{ fontSize: '1rem', color: theme.colors.primary, opacity: 0.8, maxWidth: 580, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Whether you need a full engagement or a focused consultation, we customize our approach
            to your specific stage and needs.
          </p>
          <CTABtn to="/contact">Get Your Free Consultation</CTABtn>
        </Wrap>
      </CTASection>

    </Page>
  );
}

export default ServicesPage;