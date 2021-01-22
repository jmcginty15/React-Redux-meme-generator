import Edit from './Edit';
import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ meme }) => {
    const dispatch = useDispatch();

    const removeMeme = () => dispatch({ type: 'REMOVE', payload: meme.id });
    const editMeme = () => dispatch({ type: 'EDIT', payload: meme.id });

    return (
        <div id={meme.id} className="Meme">
            {meme.editing ? <Edit meme={meme} /> : (
                <div>
                    <img src={meme.imageUrl} alt={`${meme.topText} ${meme.bottomText}`} />
                    <div className="Meme-text Meme-text-top">{meme.topText}</div>
                    <div className="Meme-text Meme-text-bottom">{meme.bottomText}</div>
                    <button className="Meme-button" onClick={editMeme}>Edit</button>
                    <button className="Meme-button Meme-remove-button" onClick={removeMeme}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default Meme;