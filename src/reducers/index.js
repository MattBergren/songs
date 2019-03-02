import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Jump Around',
            duration: '4:05'
        },
        {
            title: 'All Star',
            duration: '3:23'
        },
        {
            title: 'Macarena',
            duration: '2:35'
        },
        {
            title: 'I want it that way',
            duration: '4:45'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});