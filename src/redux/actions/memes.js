import axios from 'axios';

export const addMemes = payload => ({
    type: 'ADD_MEMES',
    payload
})


export const fetchMemes = () => (dispatch) => {
    axios.get('https://api.imgflip.com/get_memes').then((response) => {

        dispatch(addMemes(response.data.data.memes))
    })
}