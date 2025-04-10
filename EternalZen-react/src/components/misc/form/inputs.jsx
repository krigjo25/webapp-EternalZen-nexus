// Inputs for the application

//  Importing dependencies
import PropTypes from 'prop-types';

export default function Inputs( { input, formID }) {

    //  Initializing an array of values
    const types = ['text', 'password', 'radio', 
        'checkbox', 'button', 'submit', 
        'reset', 'search',  'range', 'color',
        'date', 'datetime-local', 
        'month', 'week', 'time', 
        'hidden', 'file', 'url', 
        'number', 'tel', 'image', 'url'];

    return (
        <>
            {(input.type === types[0] || input.type === types[1]) &&  (
                <>
                    <label htmlFor = {input.name} className={"label-" + input.type} > 
                        {input.name}
                    </label>
                    <input 
                        form = {formID}
                        name = {input.name } 
                        type = {input.type}
                        onChange = {input.onChange} 
                        placeholder = {input.placeholder}
                        pattern = {input.regex? input.regex : false}
                        hidden = {input.hidden ? input.hidden : false}
                        autoFocus = {input.focus ? input.focus : 'off'}
                        disabled= {input.disabled ? input.disabled : false}
                        maxLength = {input.maxlength ? input.maxlength : 255 }
                        autoComplete = {input.complete ? input.complete : 'on'}
                        className = {input.cls ? input.cls : "credential-field"} 
                        
                    />
                </>
            )}
            {( input.type == types[2] || input.type === types[3] ) && (
                <input 
                form = {input.form}
                name = {input.name}
                type = {input.type} 
                checked = {input.checked ? input.checked : false}
                className ={input.cls ? input.cls : "control-field"}
                disabled = {input.disabled ? input.disabled : false}
                multiple = {input.multiple ? input.multiple : false}
                />
            )}
        </>
    );
}

//  Defines the prop Type for the component
Inputs.propTypes = 
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

