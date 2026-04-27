import React from 'react';

type SectionTitleProps = {
    text: string
}

const SectionTitle = ({text}: SectionTitleProps) => {
    return (
        <div className='lg:px-96 pt-4 text-lg lg:text-3xl text-center font-bold lg:leading-10'>
            {text}
        </div>
    );
};

export default SectionTitle;