import logo from './logo.svg';
import './App.css';

function App() {

  const heros = ['Anwar', 'Jafor', 'Alamgir', 'Salman Shah'];
  const heroin = ['Shabana', 'Bobita', 'Sabila']

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Heading</h1>
        <p>{2+3}</p>
        <p>My First React Paragraph</p>
        <Person name="Rubel Nayok" naika="Moushumi"></Person>
        <Person name="Jasim" naika="Shabnur"></Person>
        <Person name="Bappa Raj" naika="Porimoni"></Person>
        <Person name={heros[0]} naika={heroin[0]}></Person>
      </header>
    </div>
  );
}

function Person(props){
  // Object CSS
  const personStyle = {
    border:'2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h2>Actress: {props.naika}</h2>
    <h3 style={{ color:'yellowgreen' }}>Hero of the year</h3>
  </div>
  )
}

export default App;
