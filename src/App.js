import './App.css';
import { Toaster } from 'react-hot-toast';
import Routes from './Routes/Routes';

function App() {
  return (
    <div>
      <Routes></Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
