import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import { HomePage } from './Home Page';






function App() {



  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage/>} />
   </Routes>

   </BrowserRouter>
    </>
  );
}

export default App;
