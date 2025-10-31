import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccessibleCarousel from './components/AccessibleCarousel';

const slides = [
  { title: 'Mountains at Dawn', description: 'A calm mountain scene at sunrise.' },
  { title: 'City Skyline', description: 'Night view of the city skyline.' },
  { title: 'Forest Path', description: 'A winding path through a green forest.' }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <main style={{ padding: 24 }}>
    <h1>Accessible Carousel — W3C ARIA pattern demo</h1>
    <AccessibleCarousel slides={slides} />
  </main>
  )
}

export default App
