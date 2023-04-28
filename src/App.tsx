import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Button from './components/Button';
import Card from './components/Card';

function App() {
	return (
		<div className='grid grid-cols-[200px_1fr] h-[100vh] w-[100vw]'>
			<Nav />
      <Routes>
        <Route path="/btn" element={<Button/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
		</div>
	);
}

export default App;
