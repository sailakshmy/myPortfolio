//import './App.css';
//Components
import Header from './components/header/Header';
import Welcome from './components/intro/Welcome';
import Title from './components/title/Title';
import Scrolldown from './components/scrolldown/Scrolldown';

const App =() =>{
  return (
    <div>
      <Header/>
      <Welcome/>
      <Title/>
      <Scrolldown/>
    </div>
  );
}

export default App;
