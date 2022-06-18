import './App.css';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
