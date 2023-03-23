import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import * as ALL from './url';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Orginals' url={ALL.orginals}/>
      <RowPost title='Action'  url={ALL.action} isSmall/>
      <RowPost title='Comedy'  url={ALL.comedy} isSmall/>
      <RowPost title='Horror'  url={ALL.horror} isSmall/>
      <RowPost title='Romance'  url={ALL.romance} isSmall/>
      <RowPost title='Documentries'  url={ALL.documentries} isSmall/>
    </div>
    
  );
}

export default App;
