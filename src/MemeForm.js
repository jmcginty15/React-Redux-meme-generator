import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import './MemeForm.css';

const MemeForm = () => {
    const initialFormData = {
        imageUrl: '',
        topText: '',
        bottomText: ''
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

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newMeme = { ...formData, id: uuid() };
        setFormData(initialFormData);
        dispatch({ type: 'ADD', payload: newMeme });
    }

    return (
        <div className="MemeForm">
            <h3>Add a new meme!</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input className="MemeForm-input" type="text" value={formData.imageUrl} name="imageUrl" placeholder="Image URL" onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="topText">Top text:</label>
                    <input className="MemeForm-input" type="text" value={formData.topText} name="topText" placeholder="Top text" onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="bottomText">Bottom text:</label>
                    <input className="MemeForm-input" type="text" value={formData.bottomText} name="bottomText" placeholder="Bottom text" onChange={handleChange} />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MemeForm;