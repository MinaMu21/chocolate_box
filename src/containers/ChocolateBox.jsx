// Création containers car à besoin de Store

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearBox, eatOne } from '../actions';
import './ChocolateBox.css';

const ChocolateBox = props => {
    // construction d'un tableau vide de 12 cellules
    const chocolateBoxes = Array.from({ length: 12 });
    console.log('state choco', props.box);

    return (
        <section className='chocolate-box-section'>
            <h2>Chocolate Box!</h2>
            <button
                onClick= {() =>props.clearBox()} className="clear-btn"
                
            >Eat the box!!</button>
            

            <div className='chocolate-box'>
                {chocolateBoxes.map((box, index) => (
                    <div onClick={() => props.eatOne(index)} key={index} index={index}
                        className={props.box[index] ? 'chocolate-on-box ' + props.box[index] : 'chocolate-on-box'}
                        key={index}
                    ></div>
                ))}
            </div>
        </section>
    );
};
// Distribution du state
const mstp = state => ({
    box: state.box,
})
// Distribution de l'action
const mdtp = (dispatch) => {
    return bindActionCreators({clearBox}, dispatch);
}

export default connect(mstp, mdtp)(ChocolateBox);