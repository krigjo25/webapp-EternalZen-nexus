//  Form component

//  Dependencies
import React from 'react';    
import PropTypes from 'prop-types';

//  Components
import Btn from '../btn';
import Label from './Label';
import Inputs from './inputs';

export default function InitializeForm(formData)
{
    //  Destructuring the formData object
    const btn = formData.data.btn;
    const inputs = formData.data.inputs;
    
    return (
        <>
         {inputs.map((data, i) => {
                return (
                    <>
                        <Label key={i} cls='lbl' name = {data.name + " :"} />
                        <Inputs key={i} input = {data}/>
                    </>
        )})}
        {btn.map((data, i) => {
                return (
                    <Btn key={i} btn = {data}/>
        )})}
        </>
    )
}

//  Defines the prop Type for the component
InitializeForm.propTypes = 
{
    data: PropTypes.shape({
        inputs: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
                cls: PropTypes.string.isRequired,
                placeholder: PropTypes.string.isRequired,
            })
        ).isRequired,
        btn: PropTypes.arrayOf(
            PropTypes.shape({
            type: PropTypes.string.isRequired,
            cls: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })).isRequired,
    })
};