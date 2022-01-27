/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./index.css"

export default function Thanks(props) {
    const { label, imgURL } = props;
    return <div className='thanks'>
        <img className='thanks__image' src={imgURL} />
        <span className='thanks__label'>{label}</span>
    </div>;
}
