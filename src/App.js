import MemeList from './MemeList';
import MemeForm from './MemeForm';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const memes = useSelector(state => state.memes);

  return (
    <div className="App">
      <MemeList memes={memes} />
      <MemeForm />
    </div>
  );
}

export default App;
