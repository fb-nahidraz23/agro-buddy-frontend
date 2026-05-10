import React from 'react';

type CardTitleProps = {
    text: string
}

const ManualCardTitle = ({text}: CardTitleProps) => {
    return (
        <div className='text-primary text-xl font-bold leading-6'>
            {text}
        </div>
    );
};

export default ManualCardTitle;