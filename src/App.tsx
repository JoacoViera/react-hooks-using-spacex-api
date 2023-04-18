import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DisplayRockets from './Pages/DisplayRockets';
import DisplayCrew from './Pages/DisplayCrew';
import DisplayEvents from './Pages/DisplayEvents';
import MenuBar from './components/MenuBar';

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DisplayRockets />,
    },
    {
      path: '/rockets',
      element: <DisplayRockets />,
    },
    {
      path: '/crew',
      element: <DisplayCrew />,
    },
    {
      path: '/events',
      element: <DisplayEvents />,
    },
  ]);

  return (
    <div className="App flex ">
      <MenuBar />
      <div className="w-[90%] flex ml-[10%]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
