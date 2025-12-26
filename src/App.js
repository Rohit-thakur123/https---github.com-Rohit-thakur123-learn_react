import './App.css';
import Navbar from './Compnents/Navbar';
import TextForm from './Compnents/TextForm';
//normal js

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About"/>
      <div className="container">
        <TextForm heading="textutils head"/>
      </div>
    </>
  );
}

export default App;
 