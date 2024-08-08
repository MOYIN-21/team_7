import { useRoutes } from 'react-router-dom';
import { ROUTES } from './route/Router';

function App() {
  return (
    useRoutes(ROUTES)

  );
}

export default App;
