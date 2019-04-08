import React from 'react';
import { formatMoney } from '../../helpers';

export default (props) => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={`/dist/${props.images[0]}`} alt={`${props.name} product image`}/>
            <span className="title">{props.name}</span>
            <p>{formatMoney(props.price)}</p>
        </li>
    );
}