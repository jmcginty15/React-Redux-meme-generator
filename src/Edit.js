import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Edit.css';

const Edit = ({ meme }) => {
    const initialFormData = {
        imageUrl: meme.imageUrl,
        topText: meme.topText,
        bottomText: meme.bottomText
    };

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    const submitEdit = (evt) => {
        evt.preventDefault();
        const newData = { ...formData };
        setFormData(initialFormData);
        dispatch({ type: 'SUBMIT_EDIT', payload: meme.id, newData: newData });
    }

    const cancelEdit = () => dispatch({ type: 'CANCEL_EDIT', payload: meme.id });

    return (
        <div className="Edit">
            <h3>Edit this meme!</h3>
            <form onSubmit={submitEdit}>
                <p>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input className="Edit-input" type="text" value={formData.imageUrl} name="imageUrl" placeholder="Image URL" onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="topText">Top text:</label>
                    <input className="Edit-input" type="text" value={formData.topText} name="topText" placeholder="Top text" onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="bottomText">Bottom text:</label>
                    <input className="Edit-input" type="text" value={formData.bottomText} name="bottomText" placeholder="Bottom text" onChange={handleChange} />
                </p>
                <button type="submit">Submit</button>
                <button className="Edit-button" type="button" onClick={cancelEdit}>Cancel</button>
            </form>
        </div>
    )
}

export default Edit;