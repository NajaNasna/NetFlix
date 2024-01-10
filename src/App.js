import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import { action,originals,comedy,horror,documentaries } from './Urls';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action}  title='Action' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
      <RowPost url={horror}  title='Horror Movies' isSmall />
      <RowPost url={documentaries}  title='Documentaries' isSmall />


    </div>
  );
}

export default App;
