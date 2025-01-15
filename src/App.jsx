import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Header from './components/ui/custom/header';

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedin } = useUser();

  if (isSignedin && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>   
      <Header /> {/* Utilisation du composant Header */}
      <Outlet />
    </>
  );
}

export default App;
