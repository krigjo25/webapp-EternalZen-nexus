// Inputs for the application

//  Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

//  Importing components
import { Link } from 'react-router-dom';

function formInput( { input, formID }) {

    //  Initializing an array of values
    const types = 
    [
        'text', 'password', 'radio', 
        'checkbox', 'button', 'submit', 
        'reset', 'search',  'range', 'color',
        'date', 'datetime-local', 
        'month', 'week', 'time', 
        'hidden', 'file', 'url', 
        'number', 'tel', 'image', 'url'
    ];

    return (
        <>
            {(input.type === types[0] || input.type === types[1]) &&  (
                <div className='flex-wrap-column input-container'>

                    <label htmlFor = {input.name} className={" label-" + input.type} > 
                        {input.name}
                    </label>
                    <input 
                        form = {formID}
                        name = {input.name? input.name : ""} 
                        type = {input.type ? input.type : "text"}
                        onChange = {input.onChange} 
                        placeholder = {input.placeholder ? input.placeholder : ""}
                        pattern = {input.regex? input.regex : ""}
                        hidden = {input.hidden ? input.hidden : false}
                        autoFocus = {input.focus ? input.focus : 'off'}
                        disabled= {input.disabled ? input.disabled : false}
                        maxLength = {input.maxlength ? input.maxlength : 255 }
                        autoComplete = {input.complete ? input.complete : 'on'}
                        className = {input.cls ? input.cls : "credential-field"} 
                        
                    />
                </div>
            )}
            {( input.type == types[2] || input.type === types[3] ) && (
                <div className='flex-wrap-row input-container'>
                    <div className='flex-wrap-row-justify-center'>
                        <input 
                                form = {input.form}
                                name = {input.name}
                                type = {input.type}
                                className ={input.cls ? input.cls : "control-field"}
                                disabled = {input.disabled ? input.disabled : false}
                                multiple = {input.multiple ? input.multiple : false}
                            />

                        {(input.href) && (
                            <Link to = {input.href} >
                                <label htmlFor = {input.name} className={" label-" + input.type} >
                                    {input.name}
                                </label>
                            </Link>
                        )}
                        {(!input.href) && (
                            <label htmlFor = {input.name} className={" label-" + input.type} >
                                {input.name}
                            </label>
                        )}        
                    </div>
                </div>
            )}        
        </>
    );
}

//  Defines the prop Type for the component
formInput.propTypes = 
{
    data: PropTypes.shape({
        inputs: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            })
        ).isRequired,
    })

};

//  Exporting the component
export default formInput;