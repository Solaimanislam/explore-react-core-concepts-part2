
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './users';

function App() {

  function handleClicked(){
    alert ('button clicked');
  }

  const AddToFive = (num) => {
    alert(num + 5);
  }
 

  return (
    <>

    
      
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

       <Counter></Counter>

      <button onClick={handleClicked}>Click Me</button>
      <button onClick={() => {alert ('third button clicked')}}>Click2</button>
      <button onClick={() => {AddToFive(3)}}>Click3</button>
      
    </>
  )
}

export default App
