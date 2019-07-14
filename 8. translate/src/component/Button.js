import React from 'react';
import LanguageContext from '../Context/LanguageContext'

class Button extends React.Component{

    static contextType = LanguageContext

    render(){
        // console.log(this.context)
        const text = this.context === 'English' ? 'Submit' : 'Soumettre';
        return <button className='ui button primary'> {text} </button>
    }
}

export default Button;