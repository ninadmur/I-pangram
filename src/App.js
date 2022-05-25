import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Summary from './Summary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Summary />} path="/details" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
