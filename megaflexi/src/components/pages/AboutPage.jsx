import React from 'react';
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

const PageSubtitle = styled('p')`
  font-size: 1.25rem;
  opacity: 0.9;
`;

const Section = styled('section')`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: ${theme.colors.lightBg};
  }
`;

const SectionTitle = styled('h2')`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.primary};
  text-align: center;
`;

const AboutGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const VisionMissionCard = styled('div')`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: ${theme.shadows.md};
  
  h3 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .icon {
      font-size: 2rem;
    }
  }
  
  p {
    color: ${theme.colors.lightText};
    line-height: 1.7;
    font-size: 1.1rem;
  }
`;

const ConsultantSection = styled('div')`
  max-width: 1000px;
  margin: 0 auto;
`;

const ConsultantCard = styled('div')`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: ${theme.shadows.lg};
  text-align: center;
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    font-size: 3rem;
    color: white;
  }
  
  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .title {
    color: ${theme.colors.accent};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  .bio {
    color: ${theme.colors.lightText};
    line-height: 1.7;
    text-align: left;
    margin-bottom: 2rem;
  }
  
  .specialties {
    background: ${theme.colors.lightBg};
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 2rem;
    
    h4 {
      color: ${theme.colors.primary};
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    p {
      color: ${theme.colors.lightText};
      line-height: 1.6;
    }
  }
  
  .credentials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
    
    .credential {
      background: ${theme.colors.primary};
      color: white;
      padding: 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      
      .degree {
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
    }
  }
`;

const TimelineSection = styled('div')`
  max-width: 800px;
  margin: 0 auto;
`;

const Timeline = styled('div')`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.primary};
  }
`;

const TimelineItem = styled('div')`
  position: relative;
  padding: 2rem 0 2rem 4rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 2.5rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    border: 3px solid white;
    box-shadow: 0 0 0 3px ${theme.colors.primary};
  }
  
  .year {
    color: ${theme.colors.accent};
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .role {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  .company {
    color: ${theme.colors.lightText};
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .description {
    color: ${theme.colors.lightText};
    line-height: 1.6;
  }
`;

const AccreditationBadge = styled('div')`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  margin: 3rem auto;
  max-width: 400px;
  
  .badge-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .badge-title {
    font-family: ${theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .badge-desc {
    opacity: 0.9;
  }
`;

function AboutPage() {
  return (
    <MainContent>
      <PageHeader>
        <Container>
          <PageTitle>About MegaFlexi HR Solutions</PageTitle>
          <PageSubtitle>
            Professional Human Resources Consulting Since 2019
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <SectionTitle>Our Story</SectionTitle>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: theme.colors.lightText, marginBottom: '2rem' }}>
              MegaFlexi HR Solutions is a Kenyan Human Resources and Management consulting firm 
              founded in December 2019, and accredited by the Institute of Human Resource Management – Kenya.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: theme.colors.lightText }}>
              We provide a comprehensive range of Human Resource Solutions with a business focus 
              within the ever-changing space of people management. Our team comes from different 
              business backgrounds and consistently strives to remain up-to-date with current and 
              evolving industry trends.
            </p>
          </div>
          
          <AccreditationBadge>
            <div className="badge-icon">🏆</div>
            <div className="badge-title">IHRM Accredited</div>
            <div className="badge-desc">
              Institute of Human Resource Management - Kenya
            </div>
          </AccreditationBadge>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Vision & Mission</SectionTitle>
          <AboutGrid>
            <VisionMissionCard>
              <h3>
                <span className="icon">🔭</span>
                Our Vision
              </h3>
              <p>
                To be the go-to trusted partner for businesses looking for creative, 
                flexible, and successful HR solutions that promote long-term company 
                success, positive workplace cultures, and sustainable growth.
              </p>
            </VisionMissionCard>
            
            <VisionMissionCard>
              <h3>
                <span className="icon">🎯</span>
                Our Mission
              </h3>
              <p>
                To deliver customized HR solutions that enable organizations of any scale 
                to succeed by meeting specific workforce requirements, aligning personnel 
                strategies with business objectives, and cultivating stronger, more adaptable 
                teams through practical expertise, cooperation, and client-focused assistance.
              </p>
            </VisionMissionCard>
          </AboutGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Lead Consultant</SectionTitle>
          <ConsultantSection>
            <ConsultantCard>
              <div className="avatar">A</div>
              <h3>Anne</h3>
              <div className="title">Lead Consultant & CHRP</div>
              
              <div className="bio">
                <p>
                  Anne is a Certified Human Resource Practitioner with over 20 years work experience 
                  in corporate Human Resources Management and administration. Her experience spans 
                  Agri-Business and Telecommunications sectors, and she is a proud member of the 
                  Institute of Human Resource Management (IHRM).
                </p>
                
                <p>
                  Throughout her distinguished career, Anne has managed over 2000 permanent staff 
                  and 1500 temporary staff, demonstrating exceptional leadership in large-scale 
                  HR operations. Her expertise has been instrumental in driving organizational 
                  success across multiple industries.
                </p>
              </div>
              
              <div className="specialties">
                <h4>Core Specialties</h4>
                <p>
                  HR strategy formulation and implementation • Culture change programs • 
                  HR Policy formulation • Union negotiations • Compensation and benefits management • 
                  Performance management • Management Development & Staff Training • 
                  Leadership Development • Talent search, Selection and placement
                </p>
              </div>
              
              <div className="credentials">
                <div className="credential">
                  <div className="degree">Executive MBA</div>
                  <div>Jomo Kenyatta University of Agriculture and Technology</div>
                </div>
                <div className="credential">
                  <div className="degree">Bachelor of Arts</div>
                  <div>University of Nairobi</div>
                </div>
                <div className="credential">
                  <div className="degree">Higher Diploma in HRM</div>
                  <div>IHRM-Kenya</div>
                </div>
              </div>
            </ConsultantCard>
          </ConsultantSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Professional Journey</SectionTitle>
          <TimelineSection>
            <Timeline>
              <TimelineItem>
                <div className="year">2019 - Present</div>
                <div className="role">Founder & Lead Consultant</div>
                <div className="company">MegaFlexi HR Solutions Ltd</div>
                <div className="description">
                  Founded the company to provide comprehensive HR consulting services, 
                  focusing on creative and flexible solutions for businesses of all sizes.
                </div>
              </TimelineItem>
              
              <TimelineItem>
                <div className="year">2016 - 2019</div>
                <div className="role">Chief Human Resource Officer</div>
                <div className="company">Kenya Nut Company Ltd</div>
                <div className="description">
                  Oversaw HR operations for 2000 employees, implementing strategic HR 
                  initiatives and driving organizational excellence.
                </div>
              </TimelineItem>
              
              <TimelineItem>
                <div className="year">2009 - 2016</div>
                <div className="role">Head of Employee Relations and Staff Welfare</div>
                <div className="company">Telkom Kenya</div>
                <div className="description">
                  Led HR policy formulation, culture transformation projects, staff engagement, 
                  Union CBA negotiations, and comprehensive wellness programs for 7 years.
                </div>
              </TimelineItem>
              
              <TimelineItem>
                <div className="year">2004 - 2009</div>
                <div className="role">Group HR Manager</div>
                <div className="company">Vegpro Group</div>
                <div className="description">
                  Managed over 2000 permanent staff and 1500 temporary staff, specializing in 
                  Union CBA negotiations, HR Policy formulation, and Performance Management.
                </div>
              </TimelineItem>
              
              <TimelineItem>
                <div className="year">1996 - 2004</div>
                <div className="role">HR and Administration Officer</div>
                <div className="company">SDV Transami Kenya (Bollore Group)</div>
                <div className="description">
                  Started HR career journey, building foundational expertise in human resources 
                  management and administration over 8 years.
                </div>
              </TimelineItem>
            </Timeline>
          </TimelineSection>
        </Container>
      </Section>
    </MainContent>
  );
}

export default AboutPage;