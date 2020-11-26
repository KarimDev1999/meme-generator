const initialState = {
    items: [],
    loading: false,

}


const memes = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEMES':
            return {
                ...state,
                items: action.payload
            }

        default: return state
    }
}

export default memes;
