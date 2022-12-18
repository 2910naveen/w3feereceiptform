import logo from './logo.svg';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import FeeReceipt from './components/feereceipt';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<App/>}></Route>
        <Route path="/feereceipt" element={<FeeReceipt/>}></Route>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
