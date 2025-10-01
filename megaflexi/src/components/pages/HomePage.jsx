import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'goober';
import { theme } from '../../styles/theme';

const MainContent = styled('main')`
  margin-top: 80px;
`;

const Hero = styled('section')`
  background: ${theme.colors.primary};
  color: white;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled('h1')`
  font-family: ${theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled('p')`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButtons = styled('div')`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const PrimaryButton = styled(Link)`
  background: ${theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background: #d97706;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background: white;
    color: ${theme.colors.primary};
  }
`;

const Section = styled('section')`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: ${theme.colors.lightBg};
  }
`;

const Container = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled('h2')`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const SectionSubtitle = styled('p')`
  text-align: center;
  color: ${theme.colors.lightText};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled('div')`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const ServiceIcon = styled('div')`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: white;
`;

const ServiceTitle = styled('h3')`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const ServiceText = styled('p')`
  color: ${theme.colors.lightText};
  line-height: 1.6;
`;

const StatsSection = styled('section')`
  background: ${theme.colors.primary};
  color: white;
  padding: 4rem 0;
`;

const StatsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled('div')`
  h3 {
    font-size: 3rem;
    color: ${theme.colors.accent};
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const ValuePropsSection = styled('section')`
  padding: 5rem 0;
`;

const ValueGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled('div')`
  background: white;
  border-left: 4px solid ${theme.colors.accent};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${theme.shadows.sm};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: ${theme.colors.lightText};
    line-height: 1.6;
  }
`;

function HomePage() {
  const services = [
    {
      icon: '🔍',
      title: 'HR Audits & Organization Design',
      description: 'Comprehensive HR audits to identify gaps in policies, structures, and practices, resulting in improved accountability and operational efficiency.'
    },
    {
      icon: '📈',
      title: 'Strategic HR Planning',
      description: 'Align HR strategies with business objectives through strategic planning and implementation for long-term growth and competitiveness.'
    },
    {
      icon: '🤝',
      title: 'Employee Relations',
      description: 'Expert guidance in employee relations management, disciplinary processes, and CBA negotiations for industrial harmony.'
    },
    {
      icon: '💼',
      title: 'Talent Acquisition',
      description: 'Professional recruitment and talent acquisition services to help you find the right people for your organization.'
    },
    {
      icon: '📊',
      title: 'Performance Management',
      description: 'Develop and implement performance management systems that drive results and employee development.'
    },
    {
      icon: '🎯',
      title: 'Culture Transformation',
      description: 'Transform organizational culture to foster inclusivity, teamwork, and high performance through tailored programs.'
    }
  ];

  const valueProps = [
    {
      title: 'Proven Expertise and Experience',
      description: 'Whatever HR challenges you are facing, chances are we have successfully handled them before. From HR audits to large-scale retrenchments and CBA negotiations, our track record demonstrates our ability to deliver practical solutions across diverse contexts.'
    },
    {
      title: 'Compliance and Risk Management',
      description: 'We help organizations stay compliant with labour laws and HR best practices, minimizing legal risks and safeguarding your reputation from costly disputes or negative publicity.'
    },
    {
      title: 'Personalized and Dedicated Support',
      description: 'Each client is assigned a dedicated consultant who provides hands-on guidance and responsive support. Whether you need quick advice or full-service HR solutions, we ensure you always have a reliable partner by your side.'
    },
    {
      title: 'Focus on Core Business Growth',
      description: 'We take away the hassle of managing HR complexities, giving you more time to focus on running and growing your core business. With HR issues managed effectively, you gain both peace of mind and operational efficiency.'
    },
    {
      title: 'Tailored and Practical Solutions',
      description: 'We recognize that every organization is unique. Our solutions are designed to fit your specific needs, culture, and budget—ensuring that they are not only strategic but also practical and sustainable.'
    },
    {
      title: 'Commitment to People and Culture',
      description: 'We place people at the center of every HR strategy. Through welfare programs, employee engagement initiatives, and culture transformation, we help create workplaces where teams are motivated, engaged, and committed to success.'
    }
  ];

  return (
    <MainContent>
      <Hero>
        <HeroContent>
          <HeroTitle>
            Your Trusted Partner for Creative HR Solutions
          </HeroTitle>
          <HeroSubtitle>
            MegaFlexi HR Solutions delivers customized Human Resources consulting 
            that enables organizations of any scale to succeed through practical 
            expertise, cooperation, and client-focused assistance.
          </HeroSubtitle>
          <CTAButtons>
            <PrimaryButton to="/services">
              Explore Our Services
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Get Consultation
            </SecondaryButton>
          </CTAButtons>
        </HeroContent>
      </Hero>

      <Section>
        <Container>
          <SectionTitle>Our Core Services</SectionTitle>
          <SectionSubtitle>
            From strategic planning to operational support, we provide comprehensive 
            HR solutions tailored to your organization's unique needs and growth stage.
          </SectionSubtitle>
          <Grid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceText>{service.description}</ServiceText>
              </ServiceCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatItem>
              <h3>20+</h3>
              <p>Years of Combined Experience</p>
            </StatItem>
            <StatItem>
              <h3>2000+</h3>
              <p>Employees Managed</p>
            </StatItem>
            <StatItem>
              <h3>15+</h3>
              <p>Years of CBA Negotiations</p>
            </StatItem>
            <StatItem>
              <h3>100%</h3>
              <p>IHRM Accredited</p>
            </StatItem>
          </StatsGrid>
        </Container>
      </StatsSection>

      <ValuePropsSection>
        <Container>
          <SectionTitle>Why Choose MegaFlexi HR?</SectionTitle>
          <SectionSubtitle>
            Our value proposition is built on proven expertise, personalized service, 
            and a commitment to helping your organization thrive.
          </SectionSubtitle>
          <ValueGrid>
            {valueProps.map((prop, index) => (
              <ValueCard key={index}>
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
              </ValueCard>
            ))}
          </ValueGrid>
        </Container>
      </ValuePropsSection>
    </MainContent>
  );
}

export default HomePage;