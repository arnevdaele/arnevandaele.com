import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Link = ({ index, item }) => {
    return (
        <a key={index} href={item.url} target='_blank' className='flex space-x-3 items-center bg-black/40 backdrop-blur-lg rounded-md p-4 text-white hover:bg-black/60 transition ease-in-out duration-300'>
            <FontAwesomeIcon icon={item.icon} className='text-2xl'/>
            <p className='-mt-0.5 font-bold'>{item.title}</p>
        </a>
    );
}

export default Link;