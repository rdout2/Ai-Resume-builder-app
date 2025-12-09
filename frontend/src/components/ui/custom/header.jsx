import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../button";
import { FileText, Sparkles } from "lucide-react";

function Header() {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <FileText className="w-8 h-8 text-primary" />
              <Sparkles className="w-3 h-3 text-amber-500 absolute -top-1 -right-1" />
            </div>
            <span className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
              ResumeAI
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {isLoaded && isSignedIn ? (
              <>
                <Link to="/dashboard">
                  <Button
                    variant={isActive("/dashboard") ? "default" : "ghost"}
                    size="sm"
                    className="font-medium"
                  >
                    Dashboard
                  </Button>
                </Link>
                <div className="ml-2">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-9 h-9",
                      },
                    }}
                  />
                </div>
              </>
            ) : (
              <Link to="/auth/sign-in">
                <Button className="font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
