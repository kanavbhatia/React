import React from 'react';
import LanguageContext from '../Context/LanguageContext'

class Field extends React.Component{

    static contextType = LanguageContext;

    render(){
        const text = this.context === 'English' ? 'Name' : 'Prénom';
        return(
            <div className='ui field'>
                <label>{text} </label>
                <input/>
            </div>
        )
    }
}

export default Field;