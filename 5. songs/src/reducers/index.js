import {combineReducers} from 'redux'

const songReducer = () =>{
    return[
        {title:'You deserve better', duration:'3:26'},
        {title:'Lose Yourself', duration:'5:01'},
        {title:'Keep it mello', duration:'2:47'},
        {title:'Hero', duration:'3:03'},
        {title:'1Naked', duration:'2:22'},
        {title:'1You deserve better', duration:'3:26'},
        {title:'1Lose Yourself', duration:'5:01'},
        {title:'1Keep it mello', duration:'2:47'},
        {title:'1Hero', duration:'3:03'},
    ]
}

const selectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
})