import React from 'react';

type SectionSubTitleProps = {
    text: string;
}

const SectionSubTitle = ({text}: SectionSubTitleProps) => {
    return (
        <div className='pt-5 md:pt-20 lg:text-2xl font-bold leading-7 text-primary text-center'>
            {text}
        </div>
    );
};

export default SectionSubTitle;