import React from 'react';
import {connect} from 'react-redux';
import { fetchStream} from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
// for video player
    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount(){
        
        this.props.fetchStream(this.props.match.params.id)
        // jaise hi component load hoye vaise hi stream ki request chali jaaye

        this.buildPlayer()
    }

    componentDidUpdate(){
        this.buildPlayer()
    }

    componentWillUnmount(){
        // jaise hi hum band kare video ko uss time ye component destroy hojaaye
        this.player.destroy()
    }

    buildPlayer(){
        if(this.player || !this.props.stream){
            return
            // Player exist karta hai but stream exist nahi karti toh instead of error it will just return
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    
    render(){

        if(!this.props.stream){
            return <div>Loading...</div>
        }

        return (
        <div>
            <video ref={this.videoRef} style={{width: '100%'}} controls />
            <h1> {this.props.stream.title }</h1>
            <h3>{this.props.stream.description }</h3>
        </div>
        ) }
}

const mapStateToProps = (state, ownProps) => {
    return ({stream: state.streams[ownProps.match.params.id]})
}

export default connect(
    mapStateToProps,
    {fetchStream}
    )(StreamShow);