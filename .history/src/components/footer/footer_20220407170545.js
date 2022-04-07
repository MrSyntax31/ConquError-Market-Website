/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Grid } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import SectionHeader from '../../components/section-header';

import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/website.png';
import Partnership from 'assets/key-feature/consulting.png';
import Subscription from 'assets/key-feature/uiux.png';
import Support from 'assets/key-feature/digitalmarketing.png';

const Mydata = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Web Production',
    title: 'Web Production',
    text:
      'We offer web designing, you can give us your custom template and we will create this to reality.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Consulting',
    title: 'Consulting',
    text:
      'With our great members that skilled in customer services and product sales we can help you grow your business.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'UI/UX Design',
    title: 'UI/UX Design',
    text:
      'We have the best UI/UX designer that you need to create a wonderful and functional web app.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Digital Marketing',
    title: 'Digital Marketing',
    text:
      'We ensures that your business is always structured in the best way to get the best results.',
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo} alt="Footer Logo" />
          </Link>
          <section sx={{ variant:  'section.KeyFeature'}} id="services" ></section>
            <SectionHeader 
            slogan="Services"
            title="Our passion and goal is to help you, make your business standout."
          />
          <Grid sx={styles.grid}>
            {Mydata.map((item) => (
              <FeatureCardColumn
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            ))}
          </Grid>
          <Text xs={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} | Technojet.Dev Team
          </Text>
        </Box>
      </Container>

      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo} alt="Footer Logo" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link path={item.path}
                    key={i}
                    label={item.label}
                    sx={styles.footer.link}
                    />
              ))}
            </nav>
          </Box>
          <Text xs={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} | Technojet.Dev Team
          </Text>
        </Box>
      </Container>
    </footer>
    
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
