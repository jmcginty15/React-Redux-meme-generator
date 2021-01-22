import Meme from './Meme';

const MemeList = ({ memes }) => {
    return (
        <div className="MemeList">
            <h1>Check out your memes</h1>
            <h3>Or click a meme to remove it from the page</h3>
            {memes.map(meme => <Meme key={meme.id} meme={meme} />)}
        </div>
    )
}

export default MemeList;