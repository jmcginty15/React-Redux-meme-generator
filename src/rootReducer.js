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
    const memeList = [...state.memes];
    const index = action.type === 'ADD' ? null : findIndex(memeList, action.payload);

    switch (action.type) {
        case 'ADD':
            const addState = { ...state, memes: [...state.memes, action.payload] };
            localStorage.setItem('memes', JSON.stringify(addState.memes));
            return addState;
        case 'REMOVE':
            memeList.splice(index, 1);
            const removeState = { ...state, memes: memeList };
            localStorage.setItem('memes', JSON.stringify(removeState.memes));
            return removeState;
        case 'EDIT':
            memeList[index].editing = true;
            const editState = { ...state, memes: memeList };
            localStorage.setItem('memes', JSON.stringify(editState.memes));
            return editState;
        case 'CANCEL_EDIT':
            memeList[index].editing = false;
            const cancelEditState = { ...state, memes: memeList };
            localStorage.setItem('memes', JSON.stringify(cancelEditState.memes));
            return cancelEditState;
        case 'SUBMIT_EDIT':
            const meme = memeList[index];
            const editedMeme = action.newData;
            meme.editing = false;
            meme.imageUrl = editedMeme.imageUrl;
            meme.topText = editedMeme.topText;
            meme.bottomText = editedMeme.bottomText;
            const submitEditState = { ...state, memes: memeList };
            localStorage.setItem('memes', JSON.stringify(submitEditState.memes));
            return submitEditState;
        default:
            return { ...state };
    }
}

export default rootReducer;