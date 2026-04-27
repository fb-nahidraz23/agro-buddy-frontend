import React from 'react';

type SectionSubTitleProps = {
    text: string;
    className?: string;
}

const SectionSubTitle = ({text, className}: SectionSubTitleProps) => {
    return (
        <div className= {className}>
            {text}
        </div>
    );
};

export default SectionSubTitle;