import './App.scss'
import Home from './pages/home';
import { AnimatePresence } from 'framer-motion';


function App() {

  return (
    <AnimatePresence>
      <Home />
    </AnimatePresence>
  )
}

export default App
