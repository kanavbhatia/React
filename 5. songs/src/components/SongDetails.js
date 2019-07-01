import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({song}) =>{
    if(!song){
        return <div>Select the song </div> 
    }
    return (
       <div>Song Details
            <h3>{song.title}</h3>
            <h3>{song.duration}</h3>
       </div> 
       
    )
}

const mapStateToProps = (state) =>{
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails)