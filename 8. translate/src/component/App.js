import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../Context/LanguageContext'

class App extends React.Component{

    state = { language: 'English'}

    onLanguageChange(language){
        this.setState({language})
    }

    render(){
        return (
            <div className='ui container'>
                <div>
                    Select a language:
                    <i className='flag us' onClick={()=> this.onLanguageChange('English')} />
                    <i className='flag fr' onClick={()=> this.onLanguageChange('French')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
                
            </div>
            )
    }
    
}

export default App;