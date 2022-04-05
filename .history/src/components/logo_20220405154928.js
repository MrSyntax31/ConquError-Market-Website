/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Logo({ src, ...rest }) {
  return (
    <>
    <Link 
          path="/"
          sx={{ variant: 'links.logo',
                display: 'flex',    
                cursor: 'pointer',
                mr: 15,
            }}  
            {...rest}
        >
          <Image src={src} alt="ConquError" /> 
    </Link>
          <p style={{ textDecoration: 'none'}} className="fw-5" >Technojet.Dev</p>
    </>
  );
}
