import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ meme }) => {
    const dispatch = useDispatch();

    const handleClick = (evt) => {
        let target = evt.target.parentElement;
        if (evt.target.classList.contains('Meme')) target = evt.target;
        const memeId = target.id;
        dispatch({ type: 'REMOVE', payload: memeId });
    }

    return (
        <div id={meme.id} className="Meme" onClick={handleClick}>
            <img src={meme.imageUrl} alt={`${meme.topText} ${meme.bottomText}`} />
            <div className="Meme-text Meme-text-top">{meme.topText}</div>
            <div className="Meme-text Meme-text-bottom">{meme.bottomText}</div>
        </div>
    )
}

export default Meme;