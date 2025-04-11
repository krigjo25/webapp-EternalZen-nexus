//  Form component

//  Dependencies
import React from 'react';    
import PropTypes from 'prop-types';

//  Components
import Input from './inputs';
import Btn from '../misc/btn';


export default function InitializeForm(formData)
{
    //  Destructuring the formData object
    const btn = formData.data.btn;
    const formID = formData.data.id;
    const field = formData.data.field;
    const inputs = formData.data.inputs;
    const btnText = formData.data.btnText;
    const inputText = formData.data.inputText;
    

    return (
        <form className={formData.data.cls} action={formData.data.action} method={formData.data.method}>
            
            {(inputs) && ( 
                
                <fieldset className={'flex-wrap-column-justify-center' + ' ' + field.cls}>
                    <legend className={field.legend.cls}>{field.legend.title}</legend>
                    <p>{inputText ? inputText : ""}</p>
                    <div className='flex-wrap-row-justify-space-evenly'>
                        {inputs.map((data, i) => {
                            return (
                                <Input key={i} input={ data } formID ={ formData.data.id } />
                                )},
                                
                            )}
                    </div>
                </fieldset>
            )}

            {(btn) && (
                <>
                    <p>{btnText ? btnText : ""}</p>
                    <div className='flex-wrap-row-justify-space-evenly btn-container'>
                        {btn.map((data, i) => {
                            return (
                                <Btn key={i} btn = {data}/>
                        )})}
                    </div>
                </>
        )}
        </form>
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

        cls: PropTypes.string.isRequired,
        tile: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        method: PropTypes.string.isRequired,
    })
};