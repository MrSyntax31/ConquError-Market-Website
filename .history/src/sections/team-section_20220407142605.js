/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Arllan Del Espiritu Santo',
    title: 'Arllan Del Espiritu Santo',
    designation: 'Founder/Project Manager',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://github.com/MrSyntax31',
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://www.linkedin.com/in/arllan-del-espiritu-santo/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/_theofficialarman/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Denmark Louie Irog',
    title: 'Denmark Louie Irog',
    designation: 'Lead Programmer/Associate Project Manager',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/PalakaIsFrog',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/irogdenmarklouie/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Paul Lemuel Niverio',
    title: 'Paul Lemuel Niverio',
    designation: 'Project Coordinator/Lead Researcher',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/Pllmlnvr',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/pllmlnvr/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Christeel Ann Yambot',
    title: 'Christeel Ann Yambot',
    designation: 'Associate Researcher',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/christeel.ann.10',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://www.linkedin.com/in/christeel-ann-yambot-1b9853159/',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/telelenggdump_/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Joshua Joseph Estrada',
    title: 'Joshua Joseph Estrada',
    designation: 'Junior Programmer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Technojet',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="Meet our team"
        />

        <Grid sx={styles.grid}>
            {data.map((item) => (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}
              />
            ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
