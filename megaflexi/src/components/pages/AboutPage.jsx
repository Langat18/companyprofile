import React from 'react';
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

const SectionTitle = styled('h2')`
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  font-weight: 800;
  color: ${p => p.$light ? '#fff' : p.$blue ? theme.colors.secondary : theme.colors.primary};
  margin-bottom: 1rem;
  text-align: ${p => p.$center ? 'center' : 'left'};
`;

/* FIX: color changes to dark on light sections, white only on dark sections */
const SectionSub = styled('p')`
  color: ${p => p.$light ? '#fff' : theme.colors.primary};
  font-size: 1rem;
  line-height: 1.75;
  max-width: ${p => p.$center ? '700px' : 'none'};
  margin: ${p => p.$center ? '0 auto 2.5rem' : '0 0 2rem'};
  text-align: ${p => p.$center ? 'center' : 'left'};
`;

const StorySplit = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; gap: 3rem; }
`;

/* FIX: white text on white background — changed to primary */
const StoryText = styled('div')`
  p {
    color: ${theme.colors.primary};
    line-height: 1.8;
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
  p:last-child { margin-bottom: 0; }
`;

const StoryImg = styled('img')`
  width: 100%;
  aspect-ratio: 5/4;
  object-fit: cover;
  border-radius: 12px;
`;

const PillarsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  @media (max-width: ${theme.breakpoints.lg})     { grid-template-columns: repeat(2,1fr); }
  @media (max-width: ${theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

const PillarCard = styled('div')`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-top: 3px solid ${theme.colors.accent};
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s;
  &:hover { background: rgba(253,185,19,0.05); border-top-color: ${theme.colors.accent}; transform: translateY(-4px); }
  .p-icon { font-size: 2rem; margin-bottom: 1rem; }
  h3 { font-family: ${theme.fonts.heading}; color: #fff; font-size: 1rem; margin-bottom: 0.6rem; font-weight: 700; }
  p  { color: #ffffff; line-height: 1.65; font-size: 0.92rem; }
`;

const VMGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const VMCard = styled('div')`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(253,185,19,0.2);
  border-left: 4px solid ${theme.colors.accent};
  border-radius: 10px;
  padding: 2.5rem;
  h3 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.accent};
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    .vm-icon { font-size: 1.6rem; }
  }
  p { color: #ffffff; line-height: 1.75; font-size: 1rem; }
`;

const TeamSplit = styled('div')`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 0;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.1);
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: ${theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

const TeamLeft = styled('div')`
  background: linear-gradient(180deg, ${theme.colors.primary} 0%, #0a1628 100%);
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AvatarImg = styled('img')`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.12);
  box-shadow: 0 0 0 3px rgba(253,185,19,0.3);
`;

const TeamName  = styled('div')`font-family: ${theme.fonts.heading}; color: #fff; font-size: 1.75rem; font-weight: 700; margin-bottom: 0.35rem;`;
const TeamTitle = styled('div')`color: ${theme.colors.accent}; font-size: 0.95rem; font-weight: 600; margin-bottom: 2rem;`;

const CredItem = styled('div')`
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 0.875rem 1rem;
  margin-bottom: 0.75rem;
  width: 100%;
  border-left: 3px solid ${theme.colors.accent};
  .c-degree { font-weight: 700; color: ${theme.colors.accent}; font-size: 0.85rem; margin-bottom: 0.2rem; }
  .c-inst   { color: #ffffff; font-size: 0.8rem; line-height: 1.4; }
`;

const TeamRight = styled('div')`
  padding: 3rem;
  background: #fff;
  h3 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    font-size: 1.3rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  h3:first-child { margin-top: 0; }
  p  { color: ${theme.colors.primary}; line-height: 1.75; margin-bottom: 1rem; font-size: 0.97rem; }
  .spec-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 0.5rem;
    .spec-tag {
      background: ${theme.colors.lightBg};
      border: 1px solid ${theme.colors.accent};
      color: ${theme.colors.primary};
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 600;
    }
  }
`;

const Timeline = styled('div')`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    left: 22px; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, ${theme.colors.accent}, ${theme.colors.secondary});
  }
`;

/* FIX: .t-desc was #fff on lightBg — changed to primary */
const TItem = styled('div')`
  position: relative;
  padding: 0 0 2.5rem 5rem;
  &:last-child { padding-bottom: 0; }
  &::before {
    content: '';
    position: absolute;
    left: 12px; top: 4px;
    width: 22px; height: 22px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    border: 3px solid ${theme.colors.lightBg};
    box-shadow: 0 0 0 3px ${theme.colors.primary};
  }
  .t-year { color: ${theme.colors.accent}; font-weight: 700; font-size: 0.88rem; margin-bottom: 0.3rem; }
  .t-role { font-family: ${theme.fonts.heading}; color: ${theme.colors.primary}; font-size: 1.15rem; margin-bottom: 0.2rem; }
  .t-co   { color: ${theme.colors.secondary}; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.92rem; }
  .t-desc { color: ${theme.colors.primary}; line-height: 1.65; font-size: 0.93rem; }
`;

/* ─── Data ──────────────────────────────────────────────── */
const pillars = [
  { icon: '🧭', title: 'Strategy-Led',         desc: 'Every engagement starts with your strategy. We align solutions with your long-term direction.' },
  { icon: '🌍', title: 'Contextually Grounded', desc: 'We understand the African and global development landscape, so solutions are relevant and practical.' },
  { icon: '⚙️', title: 'Technology-Enabled',   desc: 'We embed digital tools and data-driven approaches into everything we do.' },
  { icon: '🤝', title: 'Collaborative',         desc: 'We work alongside your team. Knowledge transfer is built into every engagement.' },
  { icon: '📏', title: 'Evidence-Based',        desc: 'Our recommendations are grounded in data, research, and practice, not generic templates.' },
  { icon: '🔁', title: 'Impact-Focused',        desc: 'Every project includes clear indicators to track progress and demonstrate real-world results.' },
];

const credentials = [
  { degree: 'PhD in Information Technology', inst: 'Kabarak University, Kenya' },
  { degree: 'MSc in Information Technology', inst: 'Masinde Muliro University of Science and Technology' },
  { degree: 'BSc in Computer Science (Second Class Honours, Upper Division)', inst: 'Masinde Muliro University of Science and Technology' },
];

const specialties = [
  'Internet of Things (IoT)', 'Machine Learning', 'Health Informatics', 'AI Ethics & Governance',
  'Cybersecurity', 'Data Science', 'Software Quality', 'Research & Grant Writing',
  'E-Learning & EdTech', 'Cloud Application Development',
];

const timeline = [
  { year: 'July 2025 – Present', role: 'Senior Lecturer, Computing & Information Technology', co: 'University of Embu', desc: 'Leads postgraduate supervision, applied research in IoT, machine learning, and health informatics, and serves as Website & E-Repository Coordinator.' },
  { year: 'Dec 2019 – June 2025', role: 'Lecturer, Computing & Information Technology', co: 'University of Embu', desc: "Delivered undergraduate and postgraduate teaching, supervised MSc and PhD students, and drove the university's Webometrics ranking into the top 10 in Kenya." },
  { year: 'Sept 2021 – Present', role: 'Part-time Lecturer', co: 'Machakos University', desc: 'Taught Computing and Information Technology courses at postgraduate level alongside full-time university duties.' },
  { year: 'Jan 2018 – Dec 2019', role: 'Tutorial Fellow, Mathematics, Computing and Informatics', co: 'University of Embu', desc: 'Supported academic programs and began active research publication and postgraduate student mentorship.' },
  { year: 'Aug 2015 – Dec 2017', role: 'Assistant Lecturer & Head of School, Computing and Informatics', co: 'Gretsa University', desc: 'Led the computing department and delivered curriculum across BSc and diploma programs in Information Technology.' },
];

/* ─── Component ─────────────────────────────────────────── */
function AboutPage() {
  return (
    <Page>

      {/* ─ Header ─ */}
      <PageHeader>
        <Wrap>
          <SectionEyebrow $center>
            <EyebrowBar />
            <EyebrowText>Who We Are</EyebrowText>
          </SectionEyebrow>
          <PageTitle>About <span>TrippleMconsulting</span></PageTitle>
          <p style={{ color: '#ffffff', fontSize: '1.1rem', textAlign: 'center', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>
            A multidisciplinary consulting firm at the intersection of strategy, technology, and innovation,
            delivering impact across Africa and beyond.
          </p>
        </Wrap>
      </PageHeader>

      {/* ─ Story ─ */}
      <FullSection $white>
        <Wrap>
          <StorySplit>
            <StoryText>
              <SectionEyebrow>
                <EyebrowBar />
                <EyebrowText>Our Story</EyebrowText>
              </SectionEyebrow>
              <SectionTitle>Built to Solve Real Problems</SectionTitle>
              <p>
                TrippleMconsulting was founded on a clear conviction: organizations across Africa deserve
                consulting support that is rigorous, practical, and genuinely transformative. Too often,
                consulting engagements produce reports that gather dust. We do things differently.
              </p>
              <p>
                We integrate strategy, technology, training, and research into cohesive solutions that
                build lasting capability rather than dependency. We work with governments, NGOs, startups,
                and corporations to unlock potential.
              </p>
              <p>
                Every engagement is led by senior consultants who are invested in your success,
                from the first discovery call through to final delivery and beyond.
              </p>
            </StoryText>

            <StoryImg src="/team-collaboration.jpg" alt="Team collaboration in consulting environment" loading="lazy" />
          </StorySplit>
        </Wrap>
      </FullSection>

      {/* ─ Pillars ─ */}
      <FullSection $black>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>Our Approach</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $light>What Makes Us Different</SectionTitle>
          <SectionSub $light>Six principles guide everything we do, from the first call to final delivery.</SectionSub>
          <PillarsGrid>
            {pillars.map((p, i) => (
              <PillarCard key={i}>
                <div className="p-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </PillarCard>
            ))}
          </PillarsGrid>
        </Wrap>
      </FullSection>

      {/* ─ Vision & Mission ─ */}
      <FullSection $dark>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>Our Direction</EyebrowText>
          </SectionEyebrow>
          <SectionTitle $light>Vision & Mission</SectionTitle>
          <SectionSub $light>Everything we do is guided by a clear purpose and a long-term vision for impact.</SectionSub>
          <VMGrid>
            <VMCard>
              <h3><span className="vm-icon">🔭</span>Our Vision</h3>
              <p>
                To be Africa's most trusted multidisciplinary consulting partner, known for transforming
                organizations through strategy, technology, and human capability development that generates
                lasting, measurable impact.
              </p>
            </VMCard>
            <VMCard>
              <h3><span className="vm-icon">🎯</span>Our Mission</h3>
              <p>
                To deliver integrated consulting, training, digital solutions, and research services that
                equip organizations to solve complex challenges, seize emerging opportunities, and build
                the internal capacity to sustain growth independently.
              </p>
            </VMCard>
          </VMGrid>
        </Wrap>
      </FullSection>

      {/* ─ Team ─ */}
      <FullSection $white>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>The Team</EyebrowText>
          </SectionEyebrow>
          <SectionTitle>Lead Consultant</SectionTitle>
          <SectionSub>A PhD-qualified technology researcher and consultant who leads every engagement we undertake.</SectionSub>

          <TeamSplit>
            <TeamLeft>
              <AvatarImg src="/dr-faith-avatar.jpg" alt="Dr. Faith Mueni Musyoka" loading="lazy" />
              <TeamName>Dr. Faith Mueni Musyoka</TeamName>
              <TeamTitle>Senior Lecturer & Technology Consultant</TeamTitle>
              {credentials.map((c, i) => (
                <CredItem key={i}>
                  <div className="c-degree">{c.degree}</div>
                  <div className="c-inst">{c.inst}</div>
                </CredItem>
              ))}
            </TeamLeft>

            <TeamRight>
              <h3>Background</h3>
              <p>
                Dr. Faith Mueni Musyoka holds a PhD in Information Technology from Kabarak University
                and is currently a Senior Lecturer at the University of Embu. She is an active researcher,
                grant recipient, and published author with over 19 peer-reviewed publications in journals
                including Elsevier and IEEE, covering IoT, machine learning, AI ethics, health informatics,
                and cybersecurity.
              </p>
              <p>
                She has supervised multiple MSc and PhD students to graduation, received research grants
                from the African Centre for Technology Studies and Kenya Education Network, and serves as
                a peer reviewer for Elsevier journals. She also drove the University of Embu into the top
                10 in Kenya on the Webometrics ranking.
              </p>
              <h3>Core Specialties</h3>
              <div className="spec-grid">
                {specialties.map((s, i) => <span key={i} className="spec-tag">{s}</span>)}
              </div>
            </TeamRight>
          </TeamSplit>
        </Wrap>
      </FullSection>

      {/* ─ Timeline ─ */}
      <FullSection>
        <Wrap>
          <SectionEyebrow>
            <EyebrowBar />
            <EyebrowText>Track Record</EyebrowText>
          </SectionEyebrow>
          <SectionTitle>Professional Journey</SectionTitle>
          <SectionSub>A career built on delivering impact across sectors and geographies.</SectionSub>

          <Timeline>
            {timeline.map((t, i) => (
              <TItem key={i}>
                <div className="t-year">{t.year}</div>
                <div className="t-role">{t.role}</div>
                <div className="t-co">{t.co}</div>
                <div className="t-desc">{t.desc}</div>
              </TItem>
            ))}
          </Timeline>
        </Wrap>
      </FullSection>

    </Page>
  );
}

export default AboutPage;