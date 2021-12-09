import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const heros = ['Anwar', 'Jafor', 'Alamgir', 'Salman Shah'];
  const heroin = ['Shabana', 'Bobita', 'Sabila', 'Porimoni', 'Mahia Mahi'];
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Lightroom', price:'$60.99'},
    {name:'Illustrator', price:'$100.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Heading</h1>
        <p>{2+3}</p>

        <p>My First React Method</p>
        <Person name="Rubel Nayok" naika="Moushumi"></Person>
        <Person name="Jasim" naika="Shabnur"></Person>
        <Person name="Bappa Raj" naika="Porimoni"></Person>
        <Person name={heros[0]} naika={heroin[0]}></Person>

        <h1>My Second React Method</h1>
        <Product productdetails={products[0]}></Product>
        <Product productdetails={products[1]}></Product>
        <h1>My Third Method</h1>
        <p>Show All Heroin Name in Dynamic List</p>
        <ul>
          {
            heroin.map(naiyka => <li>{naiyka}</li>)
          }
        </ul>
        <p>Show All Product Name in Dynamic List</p>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <p>Show All Dynamic Text Box for Product</p>
        {
          products.map(pd => <Product productdetails = {pd}></Product>)
        }
        <p>Show Counter</p>
        <Counter></Counter>

        <h1>USERS DATA LOAD DYNAMIC</h1>
        <Users></Users>
      </header>
    </div>
  );
}


// Person Object
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

// Product Object
function Product(props){
  
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '15px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '500px',
    float: 'left',
    margin: '10px'
  }
  // console.log(props);
  return (
    <div style={productStyle}>
      <h3>Name: {props.productdetails.name}</h3>
      <h1 style= {{ color:'yellow' }}>Price: {props.productdetails.price} </h1>
      <button>Buy Now</button>
    </div>
  )
}

// STATE PRACTICE
function Counter(){
  const [count, setCount] = useState(10);
  // INCREASE
  const handleIncrease = () => 
  {
    const newCount = count + 1;
    setCount(newCount);
  }
  // DECREASE
  const handleDecrease = () => 
  {
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

// USERS DATA LOAD DYNAMIC 
function Users(){

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ol>
        {
          users.map(user => <li>Name:{user.name}, Phone:{user.phone}</li>)
        }
      </ol>
    </div>
  )
}

export default App;
