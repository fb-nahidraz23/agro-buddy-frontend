import React from 'react';

type SectionSubTitleProps = {
    text: string;
    className?: string;
}

const SectionSubTitle = ({text, className}: SectionSubTitleProps) => {
    return (
        <div className= {`pt-5 leading-7 font-bold text-primary lg:text-2xl ${className}`}>
            {text}
        </div>
    );
};

export default SectionSubTitle;