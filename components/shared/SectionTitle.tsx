import React from 'react';

type SectionTitleProps = {
    text: string
    className?: string
}

const SectionTitle = ({text, className}: SectionTitleProps) => {
    return (
        <div className={className}>
            {text}
        </div>
    );
};

export default SectionTitle;