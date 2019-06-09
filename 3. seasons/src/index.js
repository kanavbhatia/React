import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (error)=>console.log(error)
//     );

//     return(
//         <div>Latitude: </div>
//     )
// }

class App extends React.Component{
    //first thing which will be called
    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ''};
        // window.navigator.geolocation.getCurrentPosition(
        //     (position)=>{
        //         this.setState({lat:position.coords.latitude});
        //         // we will never assign a state like this, we will always use setState method
        //         // this.state.lat = position.coords.latitude
        //     },
        //     (error)=>{
        //         this.setState({errorMessage:error.message})
        //     }
        // );
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat:position.coords.latitude}),
            (error)=> this.setState({errorMessage:error.message})
        );
        }
    //necessary by react to define render
    render(){
            if(!this.state.errorMessage && this.state.lat){
                   return <SeasonDisplay lat={this.state.lat}/>
                }
    
                if(this.state.errorMessage && !this.state.lat){
                    return <div>Error: {this.state.errorMessage}</div>
                }
                return <div>Loading</div>
    }
    
}

ReactDOM.render(<App />, document.querySelector('#root'))