import React from 'react';
import {connect} from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

    // state = {isSignedIn: null, message: "Null"};

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '40861166146-l2s5c98btnd6fbs7m9mjjk8vqag78dlc.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                // jo bhi property hoyegi signedin ki ussi hisab se signin ya signoutb hoyega
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    onAuthChange = (isSignedIn)=> {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
            // this.setState({ isSignedIn: true })
        }else{
            this.props.signOut()
            // this.setState({ isSignedIn: false })
        }
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        }
        else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className="google icon" />
                        Sign Out
                </button>
                )
        }
        else{
            return (
                <button onClick={this.onSignInClick} className='ui blue google button'>
                    <i className="google icon" />
                        Sign in with Google
                </button>
                )
        }
    }
    
    render() {
       return(
          <div>
          {this.renderAuthButton()}
          </div> 
       ) 
    }
    
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
    // state is like 'this', auth is declared in reducers and its isSignedin property 
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth);