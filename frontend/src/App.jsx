import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Header from './components/ui/custom/header';

function App() {
  const { isLoaded, isSignedIn } = useUser();

  // Show loading state while Clerk loads
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
