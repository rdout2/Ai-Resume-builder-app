import { SignIn } from "@clerk/clerk-react";
import { FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-violet-600 to-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <FileText className="w-8 h-8" />
            <span className="font-bold text-2xl">ResumeAI</span>
          </Link>
          
          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Build resumes that get you hired
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Join thousands of job seekers who've landed their dream roles with 
              AI-powered resumes tailored to beat ATS systems.
            </p>
            
            {/* Features */}
            <div className="mt-10 space-y-4">
              {[
                "AI-generated professional content",
                "ATS-optimized formatting",
                "Multiple export formats",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Right Panel - Sign In Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-background">
        {/* Mobile Logo */}
        <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
          <div className="relative">
            <FileText className="w-8 h-8 text-primary" />
            <Sparkles className="w-3 h-3 text-amber-500 absolute -top-1 -right-1" />
          </div>
          <span className="font-bold text-xl">ResumeAI</span>
        </Link>
        
        {/* Sign In Component */}
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:mb-6">
            <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
            <p className="text-muted-foreground">
              Sign in to continue building your resume
            </p>
          </div>
          
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border-0 w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border border-input bg-background hover:bg-accent",
                formFieldInput: "border-input focus:ring-2 focus:ring-ring",
                formButtonPrimary: "bg-primary hover:bg-primary/90",
                footerActionLink: "text-primary hover:text-primary/80",
              },
            }}
            redirectUrl="/dashboard"
            signUpUrl="/auth/sign-up"
          />
        </div>
        
        {/* Back to home */}
        <Link
          to="/"
          className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;

