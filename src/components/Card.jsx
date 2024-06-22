import React from 'react';

const Card = ({ image, title, summary,source, onClick }) => {
    return (
        <div 
            className="max-w-xs w-full h-96 rounded overflow-hidden shadow-lg m-4 flex flex-col cursor-pointer"
            onClick={onClick}
        >
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold  mb-2">{title}</div>
                
            </div>
            <div className='px-6 mb-2'>Source: {source} </div>
        </div>
    );
};

export default Card;
