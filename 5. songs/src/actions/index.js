//Action Creator
export const selectSong = (song) =>{
    //Require a action
    return{
        type: 'SONG_SELECTED',
        payload: song  
    }
}