/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/website.png';
import Partnership from 'assets/key-feature/consulting.png';
import Subscription from 'assets/key-feature/uiux.png';
import Support from 'assets/key-feature/digitalmarketing.png';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Web Production',
    title: 'Web Production',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Consulting',
    title: 'Consulting',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'UI/UX Design',
    title: 'UI/UX Design',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Digital Marketing',
    title: 'Digital Marketing',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant:  'section.KeyFeature'}} id="services" >
     <Container style={{marginTop: "5%"}}>
        <SectionHeader 
          slogan="Services"
          title="Our passion and goal is to help you, make your business standout."
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
