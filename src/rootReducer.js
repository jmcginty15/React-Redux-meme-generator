const INITIAL_STATE = { memes: [] };

const findIndex = (list, id) => {
    let i = 0;
    for (let meme of list) {
        if (meme.id === id) return i;
        else i += 1;
    }
    return null;
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, memes: [...state.memes, action.payload] };
        case 'REMOVE':
            const memeList = [...state.memes];
            const index = findIndex(memeList, action.payload);
            memeList.splice(index, 1);
            return { ...state, memes: memeList };
        default:
            return { ...state };
    }
}

export default rootReducer;