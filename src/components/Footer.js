import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: 'white', boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", padding: '30px' }} >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} >
                    <span style={{ fontSize: '15px', color: 'rgb(107 114 128)' }}>© 2023 <Link style={{ textDecoration: 'none' }} href='/'>PC Builder</Link>. All Rights Reserved.
                    </span>
                </div>
            </footer>

        </div>
    );
};

export default Footer;