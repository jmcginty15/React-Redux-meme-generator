const storageMemes = localStorage.getItem('memes');
const initialMemes = storageMemes ? JSON.parse(storageMemes) : [];
const INITIAL_STATE = { memes: initialMemes };

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
            const addState = { ...state, memes: [...state.memes, action.payload] };
            localStorage.setItem('memes', JSON.stringify(addState.memes));
            return addState;
        case 'REMOVE':
            const memeList = [...state.memes];
            const index = findIndex(memeList, action.payload);
            memeList.splice(index, 1);
            const removeState = { ...state, memes: memeList };
            localStorage.setItem('memes', JSON.stringify(removeState.memes));
            return removeState;
        default:
            return { ...state };
    }
}

export default rootReducer;