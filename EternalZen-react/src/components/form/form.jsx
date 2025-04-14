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
        
    const btn = formData.formData.btn;
    const data = formData.formData.data;
    const inputs = formData.formData.inputs;

    const field = data.field;

    console.log(btn);
    console.log(data);
    console.log(inputs);

    const formID = data.id;
    
    return (
        <>
            { inputs.hidden != true &&
                <form className={data.cls} action={data.action} method={data.method}>
                    <fieldset className={'flex-wrap-column-justify-center' + ' ' + field.cls}>
                        <legend className={field.legend.cls}>{field.legend.title}</legend>
                        <p>{field.text ? field.text : ""}</p>
                        <div className='flex-wrap-row-justify-space-evenly'>
                            {inputs.map((data, i) => {
                                return (
                                    <Input key={i} input={ data } formID ={ formID } />
                                )},
                                    
                            )}
                        </div>
                    </fieldset>

                    {(btn) && (
                        <div className='flex-wrap-row-justify-space-evenly btn-container'>
                            {btn.map((data, i) => {
                                return (
                                    <Btn key={i} btn = {data}/>
                                )})}
                        </div>
                    )}
                </form>
            }
            
        </>
    )
}

//  Defines the prop Type for the component
InitializeForm.propTypes = 
{
    data: PropTypes.shape({
        data : {
            id: PropTypes.number.isRequired,
            method: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired,
            cls: PropTypes.string.isRequired,
            field: PropTypes.shape({
                cls: PropTypes.string.isRequired,
                legend: PropTypes.shape({
                    cls: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        },
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