import React from 'react';
import { Link } from 'react-router-dom';
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
  
  &:nth-child(even) {
    background: ${theme.colors.lightBg};
  }
`;

const SectionTitle = styled('h2')`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${theme.colors.primary};
  text-align: center;
`;

const ServicesGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled('div')`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const ServiceHeader = styled('div')`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  padding: 2rem;
  text-align: center;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const ServiceContent = styled('div')`
  padding: 2rem;
  
  .description {
    color: ${theme.colors.lightText};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding: 0.5rem 0;
      color: ${theme.colors.text};
      position: relative;
      padding-left: 1.5rem;
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: ${theme.colors.accent};
        font-weight: bold;
      }
    }
  }
`;

const PreviousWorkSection = styled('div')`
  max-width: 1000px;
  margin: 3rem auto 0;
`;

const WorkGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const WorkCard = styled('div')`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${theme.colors.accent};
  box-shadow: ${theme.shadows.sm};
  
  .year {
    color: ${theme.colors.accent};
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  h4 {
    color: ${theme.colors.primary};
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: ${theme.fonts.heading};
  }
  
  .impact {
    color: ${theme.colors.lightText};
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  .description {
    color: ${theme.colors.lightText};
    line-height: 1.6;
  }
`;

const CTASection = styled('div')`
  background: ${theme.colors.primary};
  color: white;
  padding: 4rem 0;
  text-align: center;
  margin-top: 4rem;
  
  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(Link)`
  background: ${theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
  }
`;

function ServicesPage() {
  const coreServices = [
    {
      icon: '🔍',
      title: 'HR Audits & Organization Design',
      description: 'Comprehensive assessment of your HR systems, policies, and organizational structure.',
      features: [
        'HR policy gap analysis',
        'Organizational structure review',
        'Compliance assessment',
        'Best practice recommendations',
        'Implementation roadmap'
      ]
    },
    {
      icon: '📈',
      title: 'Strategic HR Planning',
      description: 'Align your HR strategy with business objectives for sustainable growth.',
      features: [
        'HR strategy development',
        'Workforce planning',
        'Succession planning',
        'Change management',
        'Performance metrics design'
      ]
    },
    {
      icon: '🤝',
      title: 'Employee Relations & CBA',
      description: 'Expert guidance in managing employee relations and union negotiations.',
      features: [
        'Disciplinary process improvement',
        'Grievance handling',
        'CBA negotiations',
        'Industrial relations',
        'Conflict resolution'
      ]
    },
    {
      icon: '💼',
      title: 'Talent Acquisition',
      description: 'Find and attract the right talent for your organization.',
      features: [
        'Recruitment strategy',
        'Job analysis and design',
        'Candidate sourcing',
        'Interview process design',
        'Onboarding programs'
      ]
    },
    {
      icon: '📊',
      title: 'Performance Management',
      description: 'Build systems that drive employee performance and development.',
      features: [
        'Performance appraisal systems',
        'KPI development',
        '360-degree feedback',
        'Career development paths',
        'Recognition programs'
      ]
    },
    {
      icon: '🎯',
      title: 'Culture Transformation',
      description: 'Transform your organizational culture for better engagement and results.',
      features: [
        'Culture assessment',
        'Employee engagement surveys',
        'Team building programs',
        'Leadership development',
        'Communication strategies'
      ]
    }
  ];

  const additionalServices = [
    'Benefits Administration',
    'Employee Wellbeing Programs',
    'Job Evaluation & Grading',
    'Learning & Development',
    'Labour Outsourcing',
    'Compensation Management',
    'HR Policy Development',
    'CSR and Business Partnering',
    'HR Operations & Financial Strategies'
  ];

  const previousWork = [
    {
      year: '2009-2024',
      title: 'CBA Negotiations',
      impact: '15+ years of successful negotiations',
      description: 'Our approach ensured fair outcomes for employees while safeguarding the financial stability of organizations, resulting in industrial harmony over successive years.'
    },
    {
      year: 'Multiple Projects',
      title: 'HR Audits & Organization Design',
      impact: 'Improved operational efficiency',
      description: 'We conducted comprehensive HR audits to identify gaps in policies, structures, and practices. The audits informed the redesign of organizational structures, resulting in clearer reporting lines, improved accountability, and enhanced operational efficiency.'
    },
    {
      year: 'Strategic Implementation',
      title: 'HR Strategic Planning & Implementation',
      impact: 'Enhanced business alignment',
      description: 'We supported organizations in aligning HR strategies with overall business objectives. This involved developing strategic plans and guiding their implementation, ensuring that workforce initiatives directly contributed to long-term growth and competitiveness.'
    },
    {
      year: 'Ongoing Projects',
      title: 'Culture Transformation & Employee Engagement',
      impact: 'Reduced turnover, improved morale',
      description: 'Through tailored programs, we facilitated shifts in organizational culture to foster inclusivity, teamwork, and high performance. Employee engagement initiatives improved staff morale, strengthened loyalty, and reduced turnover.'
    },
    {
      year: 'Major Project',
      title: 'Retrenchment Support (1,200 employees)',
      impact: 'Compliant and fair process',
      description: 'We provided guidance and support during a major retrenchment exercise, ensuring compliance with legal frameworks, fair treatment of employees, and minimal disruption to business operations.'
    },
    {
      year: 'Process Improvement',
      title: 'Improved Disciplinary Process',
      impact: 'Reduced legal disputes',
      description: 'We introduced structured disciplinary procedures aligned with the Employment Act, 2007. This led to consistency in handling employee issues, significantly reducing disputes escalating to court.'
    }
  ];

  return (
    <MainContent>
      <PageHeader>
        <Container>
          <PageTitle>Our Services</PageTitle>
          <p style={{ fontSize: '1.25rem', opacity: '0.9' }}>
            Comprehensive HR solutions tailored to your organization's needs
          </p>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <SectionTitle>Core HR Services</SectionTitle>
          <ServicesGrid>
            {coreServices.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceHeader>
                  <span className="icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </ServiceHeader>
                <ServiceContent>
                  <p className="description">{service.description}</p>
                  <ul className="features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Additional Services</SectionTitle>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {additionalServices.map((service, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: theme.shadows.sm,
                textAlign: 'center',
                border: `2px solid ${theme.colors.lightBg}`,
                transition: 'all 0.3s ease'
              }}>
                <span style={{ 
                  color: theme.colors.primary,
                  fontWeight: '600'
                }}>
                  {service}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Previous Assignments & Success Stories</SectionTitle>
          <PreviousWorkSection>
            <WorkGrid>
              {previousWork.map((work, index) => (
                <WorkCard key={index}>
                  <div className="year">{work.year}</div>
                  <h4>{work.title}</h4>
                  <p className="impact">{work.impact}</p>
                  <p className="description">{work.description}</p>
                </WorkCard>
              ))}
            </WorkGrid>
          </PreviousWorkSection>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <h3>Ready to Transform Your HR Operations?</h3>
          <p>
            Whether you need ongoing support, consultation services, or a temporary HR staffing solution, 
            we customize our services to your specific needs and stage of development.
          </p>
          <CTAButton to="/contact">
            Get Your Free Consultation
          </CTAButton>
        </Container>
      </CTASection>
    </MainContent>
  );
}

export default ServicesPage;