import './App.css';
import Infosection from "./components/infoSection.js";
import Header from "./components/header.js"
import data from './hackerNoonArticles.js';
import Subnav from './components/subnav.js';
import JoinButton from './components/joinHackerNoon';
import Footer from './components/footer';
import footerData from './footerData.js'

function App() {
  var sectionTitles = Object.keys(data);
  var infoSections = Object.entries(data).map((topic,index)=> {
    return <Infosection key={index} section={topic[1]} title={topic[0]}/>    
  })
  return (
    <div className="App">
      <Header/>
      <Subnav titles={sectionTitles}/>
      {infoSections}
      <JoinButton/>
      <Footer columns={footerData}/>
    </div>
  );
}

export default App;
