/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Grid } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import SectionHeader from '../../components/section-header';

import FeatureCardColumn from '../../components/feature-card-column.js';
import Performance from 'assets/key-feature/facebook.png';
import Partnership from 'assets/key-feature/instagram.png';
import Subscription from 'assets/key-feature/phone.png';
import Support from 'assets/key-feature/location.png';
import styled from "styled-components"




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
            <LinkItem href="mailto:arllan.delespiritusanto03@gmail.com">arllan.delespiritusanto03@gmail.com</LinkItem>
          <Text xs={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} | Technojet.Dev Team
          </Text>
        </Box>
           </Container>
          </section>
        </Box>
      </Container>

    </footer>
    
  );
}
const LinkItem = style.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	&:hover {
		color: #fff;
		left: 6px;
	}
	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

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
  LinkItem:{

    fontSize: '18px',
    lineHeight: '30px',
    color: rgba(255, 255, 255, 0.75)
    marginBottom: 16px;
    transition: .3s ease;
    position: relative;
    left: 0;
    &:hover {
      color: #fff;
      left: 6px;
    }
    @media ${props => props.theme.breakpoints.md} {
      font-size: 16px;
      line-height: 28px;
      display: flex;
    }
    @media ${props => props.theme.breakpoints.sm} {
      font-size: 8px;
      line-height: 14px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    },
  },
};
