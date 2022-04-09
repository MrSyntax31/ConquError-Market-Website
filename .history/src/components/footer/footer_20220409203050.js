/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Grid } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import SectionHeader from '../../components/section-header';

import FeatureCardColumn from '../../components/feature-card-column.js';
import Performance from 'assets/key-feature/facebook.png';
import Partnership from 'assets/key-feature/iinstagram.png';
import Subscription from 'assets/key-feature/uiux.png';
import Support from 'assets/key-feature/digitalmarketing.png';

const Mydata = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Facebook',
    title: 'Facebook',
    text:
      'We offer web designing, you can give us your custom template and we will create this to reality.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Instagram',
    title: 'Instagram',
    text:
      'With our great members that skilled in customer services and product sales we can help you grow your business.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Contact Number',
    title: 'Contact Number',
    text:
      'We have the best UI/UX designer that you need to create a wonderful and functional web app.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Address',
    title: 'Address',
    text:
      'We ensures that your business is always structured in the best way to get the best results.',
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>

          <section sx={{ variant:  'section.KeyFeature'}} id="contacts">
           <Container>
              <SectionHeader 
                slogan="Contacts"
                title="If you have any questions, please do contact us."
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
           </Container>
          </section>
          <Text xs={styles.footer.copyright} style={{marginTop: "5%"}}>
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
