import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Payment from './Payment';
import Transactions from './Transactions';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Payment" element={<Payment/>}></Route>
        <Route path="transactionlist" element={<Transactions/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
