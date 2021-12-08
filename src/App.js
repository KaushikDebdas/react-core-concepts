import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Heading</h1>
        <p>{2+3}</p>
        <p>My First React Paragraph</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  // Object CSS
  const personStyle = {
    border:'2px solid red',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: Sakib Khan</h1>
    <h3 style={{ color:'yellowgreen' }}>Hero of the year</h3>
  </div>
  )
}

export default App;
