import React from 'react';
import Fade from '@material-ui/core/Fade';

const Footer = () => {
    return(
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_righteous footer_logo_veneue'>Opening Day</div>
                <div className='footer_copyright'>
                    Yankees Stadium 2022. All rights reserved.
                    </div>
            </Fade>
        </footer>
    );
};

export default Footer;