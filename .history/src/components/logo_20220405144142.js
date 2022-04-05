/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link 
          placeholder="Con"
          path="/"
          sx={{ variant: 'links.logo',
                display: 'flex',    
                cursor: 'pointer',
                mr: 15,
            }}  
            {...rest}
        >
          <Image src={src} alt="ConquError" /> 
          <p style={{textDecoration:'none'}}>ConquError</p>
    </Link>
  );
}
