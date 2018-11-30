// Création containers car à besoin de Store

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChocolate } from '../actions';
import './Chocolate.css';

const Chocolate = props => {
    return (
        <li className='chocolate-item'>
            <p>{props.name}</p>
            <button
                onClick={() => {
                  props.addChocolate(props.name);
                }}
            >+</button>

        </li>
    );
};

const mdtp= dispatch =>{
    return bindActionCreators ({
        addChocolate,
    }, dispatch)
}
 
export default connect(null, mdtp)(Chocolate);