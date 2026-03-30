import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'goober';
import { theme } from '../../styles/theme';

const Page = styled('main')`margin-top: 80px;`;

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

const Hero = styled('section')`
  width: 100%;
  min-height: 92vh;
  background: linear-gradient(135deg, rgba(6,14,28,0.88) 0%, rgba(10,22,40,0.82) 100%),
              url('/hero-bg.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 3rem;
  box-sizing: border-box;
  margin-top: 80px;
`;

const HeroInner = styled('div')`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const HeroLeft = styled('div')``;

const HeroEyebrow = styled('p')`
  color: #fff;
  font-size: 1.05rem;
  margin-bottom: 1rem;
  opacity: 0.85;
`;

const HeroTitle = styled('h1')`
  font-family: ${theme.fonts.heading};
  font-size: clamp(3rem, 5.5vw, 4.8rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  margin-bottom: 1.25rem;
  span { color: ${theme.colors.accent}; }
`;

const HeroSub = styled('p')`
  font-size: 1.15rem;
  color: #ffffff;
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

const HeroBtns = styled('div')`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const BtnGold = styled(Link)`
  background: ${theme.colors.accent};
  color: ${theme.colors.primary};
  padding: 1rem 2.25rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.25s;
  &:hover { background: ${theme.colors.accentHover}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(253,185,19,0.35); }
`;

const BtnOutline = styled(Link)`
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.5);
  padding: 1rem 2.25rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.25s;
  &:hover { border-color: ${theme.colors.accent}; color: ${theme.colors.accent}; transform: translateY(-2px); }
`;

const HeroImage = styled('img')`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 12px;
  @media (max-width: ${theme.breakpoints.tablet}) { display: none; }
`;

const DiagramImg = styled('img')`
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 16px;
`;

const SectionEyebrow = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.75rem;
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

const SectionTitle = styled('h2')`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.9rem, 2.8vw, 2.8rem);
  font-weight: 800;
  color: ${p => p.$light ? '#fff' : p.$blue ? theme.colors.secondary : theme.colors.primary};
  margin-bottom: 1.25rem;
  line-height: 1.15;
  text-align: ${p => p.$center ? 'center' : 'left'};
`;

/* FIX: color changes to dark on light sections, white only on dark sections */
const SubText = styled('p')`
  color: ${p => p.$light ? '#fff' : theme.colors.primary};
  font-size: 1rem;
  line-height: 1.75;
  max-width: ${p => p.$center ? '680px' : 'none'};
  margin: ${p => p.$center ? '0 auto 3rem' : '0 0 2rem'};
  text-align: ${p => p.$center ? 'center' : 'left'};
`;

const ServicesGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  @media (max-width: ${theme.breakpoints.lg})     { grid-template-columns: repeat(2,1fr); }
  @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

const ServiceCard = styled('div')`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s;
  &:hover { background: rgba(253,185,19,0.05); border-color: rgba(253,185,19,0.3); transform: translateY(-4px); }
`;

const CardIconWrap = styled('div')`
  width: 52px;
  height: 52px;
  background: ${theme.colors.accent};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
`;

const CardTitle = styled('h3')`
  font-family: ${theme.fonts.heading};
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

const CardText = styled('p')`
  color: #ffffff;
  font-size: 0.93rem;
  line-height: 1.65;
`;

const CTAPair = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 3.5rem;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const CTACard = styled('div')`
  background: ${p => p.$olive ? 'rgba(100,80,5,0.4)' : 'rgba(14,35,70,0.8)'};
  border: 1px solid ${p => p.$olive ? 'rgba(180,145,10,0.3)' : 'rgba(253,185,19,0.12)'};
  border-radius: 14px;
  padding: 2.75rem 2.5rem;
  h3 {
    font-family: ${theme.fonts.heading};
    color: #fff;
    font-size: 1.55rem;
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

const SplitSection = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; gap: 3rem; }
`;



const FeatureCards = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const FeatureCard = styled('div')`
  background: ${theme.colors.primary};
  border-radius: 10px;
  padding: 1.75rem;
  h4 {
    color: #fff;
    font-family: ${theme.fonts.heading};
    font-size: 0.98rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  p { color: #ffffff; font-size: 0.88rem; line-height: 1.6; }
`;

const CheckIcon = styled('span')`
  width: 24px; height: 24px;
  background: ${theme.colors.accent};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 900;
  flex-shrink: 0;
`;

const HelpGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const HelpCard = styled('div')`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: ${theme.colors.primary};
  border: 1px solid rgba(255,255,255,0.06);
`;

const HelpCardImage = styled('img')`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const HelpCardIconWrap = styled('div')`
  position: absolute;
  top: 190px;
  left: 1.5rem;
  width: 52px; height: 52px;
  background: rgba(10,22,50,0.9);
  border: 2px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

const HelpCardBody = styled('div')`
  padding: 2.5rem 1.5rem 1.75rem;
  p { color: ${theme.colors.accent}; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.2rem; }
  h3 { color: #fff; font-family: ${theme.fonts.heading}; font-size: 1.7rem; font-weight: 800; }
`;

const PurposeBanner = styled('section')`
  width: 100%;
  min-height: 460px;
  background: linear-gradient(135deg, rgba(6,14,28,0.93) 0%, rgba(10,22,40,0.9) 100%),
              url('/purpose-bg.png') center/cover no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5rem 3rem 5rem calc((100% - 1300px)/2 + 3rem);
  box-sizing: border-box;
  gap: 4rem;
  @media (max-width: 1360px) { padding: 5rem 3rem; }
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const PurposeText = styled('div')`
  max-width: 580px;
  h2 { font-family: ${theme.fonts.heading}; color: ${theme.colors.accent}; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 900; margin-bottom: 1.5rem; }
  blockquote { color: #c8d8ea; font-size: 1.05rem; line-height: 1.8; border-left: none; margin: 0 0 2rem; padding: 0; }
`;

const QuoteName = styled('div')`
  border-left: 3px solid ${theme.colors.accent};
  padding-left: 1rem;
  strong { display: block; color: #fff; font-size: 1.05rem; font-weight: 700; }
  span { color: #ffffff; font-size: 0.88rem; }
`;

const PurposeImg = styled('img')`
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 12px;
`;

const PartnersSection = styled('div')`
  text-align: center;
  h3 {
    color: #fff;
    font-size: 1.15rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
    span { color: ${theme.colors.accent}; font-weight: 700; }
  }
`;

const PartnerLogos = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

const PartnerLogo = styled('div')`
  color: rgba(255,255,255,0.6);
  font-family: ${theme.fonts.heading};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.2s;
  &:hover { color: #fff; }
`;

const Divider = styled('hr')`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.07);
  margin: 3.5rem 0;
`;

const BottomCTA = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const CTAPersonImg = styled('img')`
  width: 220px;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
`;

const CTARight = styled('div')`
  p.pre-title { color: ${theme.colors.accent}; font-weight: 600; margin-bottom: 0.75rem; font-size: 0.95rem; }
  h2 { font-family: ${theme.fonts.heading}; color: #fff; font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 900; margin-bottom: 2rem; line-height: 1.2; }
`;

const LinkedInTag = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.25rem;
  color: #ffffff;
  font-size: 0.9rem;
`;

const LinkedInIcon = styled('div')`
  width: 28px; height: 28px;
  background: #0a66c2;
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 900; font-size: 0.8rem;
`;

const StatsBar = styled('section')`
  width: 100%;
  background: ${theme.colors.accent};
  padding: 2.25rem 3rem;
  box-sizing: border-box;
`;

const StatsGrid = styled('div')`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: repeat(2,1fr); }
`;

const StatItem = styled('div')`
  h3 { font-family: ${theme.fonts.heading}; font-size: 2.4rem; font-weight: 900; color: ${theme.colors.primary}; margin-bottom: 0.2rem; }
  p  { font-size: 0.9rem; color: ${theme.colors.primary}; font-weight: 600; opacity: 0.8; }
`;

/* ─── Data ──────────────────────────────────────────────── */
const services = [
  { icon: '🎓', title: 'Professional Training & Executive Workshops', desc: 'Intensive learning experiences that sharpen leadership, decision-making, and professional competencies across levels.' },
  { icon: '🏗️', title: 'Capacity Building Programs', desc: 'Long-term programs that build institutional and individual capabilities for sustained organizational growth.' },
  { icon: '💻', title: 'Software & Digital Solutions', desc: 'End-to-end design and delivery of digital tools and platforms tailored to your operational needs.' },
  { icon: '🤖', title: 'AI & Data Governance Advisory', desc: 'Strategic guidance on adopting AI responsibly, building robust data governance frameworks, and leveraging analytics.' },
  { icon: '📝', title: 'Grant Writing & Proposal Support', desc: 'Expert support in developing compelling funding proposals that secure grants from donors and development partners.' },
  { icon: '🔬', title: 'Research & Innovation Consulting', desc: 'Applied research and innovation advisory that turns evidence into strategy and insights into competitive advantage.' },
];

const helpCards = [
  { icon: '🤝', category: 'Organizational', title: 'Consulting', image: '/consulting-img.jpg', alt: 'Business consulting session' },
  { icon: '🎓', category: 'Capacity & Skills', title: 'Training', image: '/training-img.jpg', alt: 'Training workshop' },
  { icon: '💻', category: 'Technology', title: 'Execution', image: '/execution-img.jpg', alt: 'Digital execution team' },
];

const clients = ['Government Agencies', 'UN Partners', 'African Development Bank', 'International NGOs'];

/* ─── Component ─────────────────────────────────────────── */
function HomePage() {
  return (
    <Page>

      {/* ─ Hero ─ */}
      <Hero>
        <HeroInner>
          <HeroLeft>
            <HeroEyebrow>Our purpose is simple and clear</HeroEyebrow>
            <HeroTitle>
              Let's make <span>your</span><br />
              <span>work matter</span>
            </HeroTitle>
            <HeroSub>
              TrippleMconsulting integrates strategy, technology, and human capability
              to deliver lasting results for organizations across Africa and beyond.
            </HeroSub>
            <HeroBtns>
              <BtnGold to="/services">Explore Our Services ↗</BtnGold>
              <BtnOutline to="/contact">Get Appointment ↗</BtnOutline>
            </HeroBtns>
          </HeroLeft>

          <HeroImage src="/hero-data.jpg" alt="Data analytics and technology visual" loading="lazy" />
        </HeroInner>
      </Hero>

      {/* ─ Stats bar ─ */}
      <StatsBar>
        <StatsGrid>
          <StatItem><h3>50+</h3><p>Projects Delivered</p></StatItem>
          <StatItem><h3>12+</h3><p>Countries Reached</p></StatItem>
          <StatItem><h3>200+</h3><p>Professionals Trained</p></StatItem>
          <StatItem><h3>100%</h3><p>Client Satisfaction</p></StatItem>
        </StatsGrid>
      </StatsBar>

      {/* ─ Services ─ */}
      <FullSection $black>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>Services</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $light>We have expertise in...</SectionTitle>
          <ServicesGrid>
            {services.map((s, i) => (
              <ServiceCard key={i}>
                <CardIconWrap>{s.icon}</CardIconWrap>
                <CardTitle>{s.title}</CardTitle>
                <CardText>{s.desc}</CardText>
              </ServiceCard>
            ))}
          </ServicesGrid>

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

      {/* ─ About ─ */}
      <FullSection $white>
        <Wrap>
          <SplitSection>
            <DiagramImg src="/venn-diagram.jpg" alt="Strategy, Technology, People Venn diagram" loading="lazy" />

            <div>
              <SectionEyebrow>
                <EyebrowBar />
                <EyebrowText>About Us</EyebrowText>
              </SectionEyebrow>
              <SectionTitle $blue>Client Focused</SectionTitle>
              <SubText>
                We understand our clients' organizations first, their context, constraints,
                and ambitions, before proposing any solution. That is how we maximize impact.
              </SubText>

              <FeatureCards>
                <FeatureCard>
                  <h4><CheckIcon>✓</CheckIcon> Strategy-led</h4>
                  <p>We build solutions, but strategy is what gives them direction and lasting purpose.</p>
                </FeatureCard>
                <FeatureCard>
                  <h4><CheckIcon>✓</CheckIcon> Wide sector vision</h4>
                  <p>From government to NGOs to private sector, cross-sector experience in every engagement.</p>
                </FeatureCard>
              </FeatureCards>
            </div>
          </SplitSection>
        </Wrap>
      </FullSection>

      {/* ─ How we help ─ */}
      <FullSection $black>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>Our Way</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $light>How we can help you...</SectionTitle>

          <HelpGrid>
            {helpCards.map((c, i) => (
              <HelpCard key={i}>
                <HelpCardImage src={c.image} alt={c.alt} loading="lazy" />
                <HelpCardIconWrap>{c.icon}</HelpCardIconWrap>
                <HelpCardBody>
                  <p>{c.category}</p>
                  <h3>{c.title}</h3>
                </HelpCardBody>
              </HelpCard>
            ))}
          </HelpGrid>
        </Wrap>
      </FullSection>

      {/* ─ Purpose ─ */}
      <PurposeBanner>
        <PurposeText>
          <h2>Our purpose</h2>
          <blockquote>
            "TrippleMconsulting was built on a simple conviction: organizations across Africa deserve technology-led consulting that is rigorous, research-backed, and genuinely transformative. We don't produce reports that gather dust. We build capability and results that show."
          </blockquote>
          <QuoteName>
            <strong>Dr. Faith Mueni Musyoka</strong>
            <span>Senior Lecturer & Technology Consultant, TrippleMconsulting</span>
          </QuoteName>
        </PurposeText>

        <PurposeImg src="/dr-faith-purpose.jpg" alt="Dr. Faith Mueni Musyoka portrait" loading="lazy" />
      </PurposeBanner>

      {/* ─ Partners + Bottom CTA ─ */}
      <FullSection $dark>
        <Wrap>
          <PartnersSection>
            <h3>Proud to <span>work with</span></h3>
            <PartnerLogos>
              {clients.map((c, i) => <PartnerLogo key={i}>{c}</PartnerLogo>)}
            </PartnerLogos>
          </PartnersSection>

          <Divider />

          <BottomCTA>
            <CTAPersonImg src="/dr-faith-cta.jpg" alt="Dr. Faith Mueni Musyoka with dashboards" loading="lazy" />

            <CTARight>
              <p className="pre-title">We are here for you</p>
              <h2>Let's support your journey to a more profitable and impactful organization</h2>
              <BtnGold to="/contact">Get Free Consultation ↗</BtnGold>
              <LinkedInTag>
                <LinkedInIcon>in</LinkedInIcon>
                Dr. Faith Mueni Musyoka | Senior Lecturer & Technology Consultant
              </LinkedInTag>
            </CTARight>
          </BottomCTA>
        </Wrap>
      </FullSection>

    </Page>
  );
}

export default HomePage;