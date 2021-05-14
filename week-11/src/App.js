import './App.css';
import Infosection from "./components/infoSection.js";
import data from './hackerNoonArticles';

var keys = Object.keys(data);

function App() {  
  return (
    <div className="App">
      <div className="section">
        <h3>{keys[0]}</h3>
        <Infosection section={data.Programming}/>
      </div>
      <div className="section">
        <h3>{keys[1]}</h3>
        <Infosection section={data.Technology}/>
      </div>
      <div className="section">
        <h3>{keys[2]}</h3>
        <Infosection section={data.Cryptocurrency}/>
      </div>
      <div className="section">
        <h3>{keys[3]}</h3>
        <Infosection section={data.Javascript}/>
      </div>
      <div className="section">
        <h3>{keys[4]}</h3>
        <Infosection section={data.Python}/>
      </div>
      <div className="section">
        <h3>{keys[5]}</h3>
        <Infosection section={data.Blockchain}/>
      </div>
      <div className="section">
        <h3>{keys[6]}</h3>
        <Infosection section={data.Gaming}/>
      </div>
      <div className="section">
        <h3>{keys[7]}</h3>
        <Infosection section={data.Ai}/>
      </div>
      <div className="section">
        <h3>{keys[8]}</h3>
        <Infosection section={data.Startup}/>
      </div>
      <div className="section">
        <h3>{keys[9]}</h3>
        <Infosection section={data.React}/>
      </div>
      <div className="section">
        <h3>{keys[10]}</h3>
        <Infosection section={data.Security}/>
      </div>
      <div className="section">
        <h3>{keys[11]}</h3>
        <Infosection section={data.Slogging}/>
      </div>
      <div className="section">
        <h3>{keys[12]}</h3>
        <Infosection section={data['Hackernoon Podcast']}/>
      </div>
      <div className="section">
        <h3>{keys[13]}</h3>
        <Infosection section={data.Decentralization}/>
      </div>
      <div className="section">
        <h3>{keys[14]}</h3>
        <Infosection section={data.Velo}/>
      </div>
      <div className="section">
        <h3>{keys[15]}</h3>
        <Infosection section={data.Hackernoon}/>
      </div>
      <div className="section">
        <h3>{keys[16]}</h3>
        <Infosection section={data['Decentralized Internet']}/>
      </div>
      <div className="section">
        <h3>{keys[17]}</h3>
        <Infosection section={data['Software Development']}/>
      </div>
    </div>
  );
}

export default App;
