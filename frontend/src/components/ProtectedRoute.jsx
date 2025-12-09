import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    // Redirect to sign-in page but save the attempted url
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;

