import { Outlet } from 'react-router-dom';
import { Header } from './layouts/Header';
import { Nav } from './layouts/Nav';

function App() {
  return (
    <div className="grid-container-large">
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </div>
  );
}

export default App;
