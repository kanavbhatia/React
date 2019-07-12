import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    // renderInput(formProps){
    //     console.log(formProps)
    //     return (
    //         <input 
    //             onChange={formProps.input.onChange}  //change hone par par input le from onchange property of input of formprops
    //             value = {formProps.input.value}  //jo bhi value le usse value me daalo
    //         />
    //     //  this can also be done using <input {...formProps.input} />
    //     // also can be done by replacing renderInput(formProps) with renderInput({input}) and writing <input {...input} />
    //     )
    // }

    renderError({touched, error}){
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>  
            ) 
        }
    }

    renderInput = ({input, label, meta})=>{
        // console.log(meta)
        const fieldError = `field ${meta.error && meta.touched ? 'error' : '' }`
        return(
            <div className= {fieldError}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/> 
                {this.renderError(meta)}
            </div>
            
        )
    }
    submitAction = (formValue) =>{
        // console.log(formValue)
        this.props.onSubmit(formValue);
    }

    render() {
       return (
       <form className='ui form error' onSubmit={this.props.handleSubmit(this.submitAction)}> 
       {/* handleSubmit-> takes care of when to submit the form */}
           <Field name='title' component={this.renderInput} label='Title:'/>
           <Field name='description' component={this.renderInput} label='Description:'/>
           <button className='ui button primary'>Submit</button>
       </form>
       )
    }
}

const validate = (formValue) => {
    const error = {};
    if(!formValue.title){
        error.title = 'Enter a valid title'
    }
    if(!formValue.description){
        error.description = 'Enter a valid description'
    }
    return error
// because yaha title jo error.title me same hai field ke name se which is title toh ye cheez field ne rendrInput me bhej di
// ab har field me ek meta hota hai jisme error hota hai toh redux form automatically iss error ko usme hook kardeta hai
// but only question is ki redux form ko kaise pta chal rha hai ki ye error hi hai
// because humne neeche validate ke andar ye define kia hai
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);
