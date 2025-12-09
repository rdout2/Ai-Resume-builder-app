import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
import Home from "./home/index.jsx";
import Dashboard from "./dashboard/index.jsx";
import SignInPage from "./auth/sign-in/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key - Add VITE_CLERK_PUBLISHABLE_KEY to your .env file");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/resume/:resumeId/edit",
        element: (
          <ProtectedRoute>
            <div className="p-10">Resume Editor - Coming Soon</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl="/"
      signInUrl="/auth/sign-in"
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
