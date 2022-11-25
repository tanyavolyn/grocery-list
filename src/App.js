
import './App.css';
import image from './kauf-01.png';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <img src={ image } width="350px" alt="shopping"/>
      <GroceryList/>
     
    </div>
  );
}

export default App;
