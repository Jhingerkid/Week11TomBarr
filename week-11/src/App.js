import './App.css';
import Infosection from "./components/infoSection.js";
import Header from "./components/header.js"
import data from './hackerNoonArticles.js';
import Subnav from './components/subnav.js';
import JoinButton from './components/joinHackerNoon';
import Footer from './components/footer';
import footerData from './footerData.js'

var sectionTitles = Object.keys(data);

function App() {
  return (
    <div className="App">
      <Header/>
      <Subnav titles={sectionTitles}/>
      <Infosection section={data.Programming} title={sectionTitles[0]}/>
      <Infosection section={data.Technology} title={sectionTitles[1]}/>
      <Infosection section={data.Cryptocurrency} title={sectionTitles[2]}/>
      <Infosection section={data.Javascript} title={sectionTitles[3]}/>
      <Infosection section={data.Python} title={sectionTitles[4]}/>
      <Infosection section={data.Blockchain} title={sectionTitles[5]}/>
      <Infosection section={data.Gaming} title={sectionTitles[6]}/>
      <Infosection section={data.Ai} title={sectionTitles[7]}/>
      <Infosection section={data.Startup} title={sectionTitles[8]}/>
      <Infosection section={data.React} title={sectionTitles[9]}/>
      <Infosection section={data.Security} title={sectionTitles[10]}/>
      <Infosection section={data.Slogging} title={sectionTitles[11]}/>
      <Infosection section={data['Hackernoon Podcast']} title={sectionTitles[12]}/>
      <Infosection section={data.Decentralization} title={sectionTitles[13]}/>
      <Infosection section={data.Velo} title={sectionTitles[14]}/>
      <Infosection section={data.Hackernoon} title={sectionTitles[15]}/>
      <Infosection section={data['Decentralized Internet']} title={sectionTitles[16]}/>
      <Infosection section={data['Software Development']} title={sectionTitles[17]}/>
      <JoinButton/>
      <Footer columns={footerData}/>
    </div>
  );
}

export default App;
