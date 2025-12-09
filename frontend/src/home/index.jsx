import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  FileText,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

function Home() {
  const { isSignedIn } = useUser();

  const features = [
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Let AI craft compelling bullet points and summaries",
    },
    {
      icon: Target,
      title: "ATS-Optimized",
      description: "Beat applicant tracking systems with smart formatting",
    },
    {
      icon: FileText,
      title: "Multiple Templates",
      description: "Choose from professional designs for any industry",
    },
  ];

  const benefits = [
    "Generate professional content in seconds",
    "Tailored to specific job descriptions",
    "Export to PDF with one click",
    "Unlimited resume versions",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              AI-Powered Resume Builder
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Build Your Dream Resume
            <span className="block mt-2 bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent">
              With AI Magic
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create professional, ATS-friendly resumes in minutes. Our AI helps
            you stand out and land more interviews.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={isSignedIn ? "/dashboard" : "/auth/sign-in"}>
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {isSignedIn ? "Go to Dashboard" : "Start Building for Free"}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 h-12 text-base font-semibold"
            >
              See Examples
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Social Proof */}
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by <span className="font-semibold text-foreground">10,000+</span> job
            seekers worldwide
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border bg-card/50 hover:bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ResumeAI?
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to create the perfect resume
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of successful job seekers who built their resumes with AI
          </p>
          <Link to={isSignedIn ? "/dashboard" : "/auth/sign-in"}>
            <Button size="lg" className="px-10 h-12 text-base font-semibold">
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-semibold">ResumeAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ResumeAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
