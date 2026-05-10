import React from 'react';

type SectionTitleProps = {
    text: string
    className?: string
}

const SectionTitle = ({text, className}: SectionTitleProps) => {
    return (
        <div className={`pt-4 text-lg font-bold lg:text-3xl lg:leading-10 ${className}`}>
            {text}
        </div>
    );
};

export default SectionTitle;