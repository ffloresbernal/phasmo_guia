import './App.scss';
import {DatePicker} from 'antd';


function App() {

  const test = (date,dateString) =>{
  console.log(date, dateString);  
  }

  return (
    <div className="app">
      <h1> Phasmophobia </h1>
      <DatePicker onChange={test} />
    </div>
  );
}

export default App;
