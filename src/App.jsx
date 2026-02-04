
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <UserProfile 
        name="Jane Smith" 
        bio="Creative Designer based in NYC." 
        image="https://imgproxy.attic.sh/insecure/f:webp/q:90/w:384/plain/https://attic.sh/8hjgvpcrgz7ol3kng78ipde1nt4u"
      />
      {/* Bonus: Second component using default props */}
      <UserProfile /> 
    </div>
  );
}

export default App;








////////////////////////////////////////////////////////////
/*
// src/App.jsx
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '10px' }}>
      <UserProfile />
    </div>
  );
}

export default App;

*/

///////////////////////////////////////////////////////////////////
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
