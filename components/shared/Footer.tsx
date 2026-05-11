import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <Image 
                    src={'/icon.png'}
                    alt='Agro Buddy logo'
                    width={150}
                    height={80}
                />
                <p>
                    I can track my livestock’s health and production in one place. The system has improved our efficiency and helped us reduce waste
                </p>
            </div>
            <div>
                
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Footer;