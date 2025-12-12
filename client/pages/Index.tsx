import { ArrowRight, Sparkles, Zap, Target, Rocket, Github, Linkedin, Twitter } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">ProjectHub</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">About</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">How It Works</a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">Demo</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground smooth-transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-background/50 pt-20 pb-32 sm:pt-32 sm:pb-48">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Modern & Powerful</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Workflow with <span className="gradient-text">Intelligent Solutions</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A beautifully crafted platform designed to streamline your process, boost productivity, and deliver results. Experience the future of work today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#demo" 
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 smooth-transition shadow-lg hover:shadow-xl hover:scale-105"
              >
                Launch App
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-border bg-white text-foreground font-semibold rounded-lg hover:bg-muted smooth-transition"
              >
                Learn More
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center text-sm text-muted-foreground">
              <div>
                <div className="font-bold text-foreground text-lg">10K+</div>
                <div>Active Users</div>
              </div>
              <div>
                <div className="font-bold text-foreground text-lg">99.9%</div>
                <div>Uptime</div>
              </div>
              <div>
                <div className="font-bold text-foreground text-lg">24/7</div>
                <div>Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">About This Project</h2>
              <p className="text-lg text-muted-foreground">Discover what makes this solution special</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform combines cutting-edge technology with intuitive design to create a seamless user experience. Built from the ground up with performance and scalability in mind.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're an individual contributor or managing a large team, our solution adapts to your needs and grows with your business.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-4">
                    <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Precision-Focused</h3>
                      <p className="text-muted-foreground">Designed with your exact needs in mind</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Lightning Fast</h3>
                      <p className="text-muted-foreground">Optimized performance at every layer</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Always Evolving</h3>
                      <p className="text-muted-foreground">Regular updates and new features</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-32 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple, intuitive, and powerful in just 4 steps</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Sign Up',
                  description: 'Create your account in seconds and get instant access',
                  icon: Sparkles,
                },
                {
                  step: 2,
                  title: 'Configure',
                  description: 'Customize settings to match your unique workflow',
                  icon: Target,
                },
                {
                  step: 3,
                  title: 'Launch',
                  description: 'Deploy and start seeing results immediately',
                  icon: Rocket,
                },
                {
                  step: 4,
                  title: 'Optimize',
                  description: 'Monitor, analyze, and continuously improve',
                  icon: Zap,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="relative group">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 smooth-transition">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 smooth-transition"></div>
                      </div>
                      <div className="text-sm font-bold text-primary mb-2">Step {item.step}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                    {item.step < 4 && (
                      <div className="hidden md:block absolute -right-4 top-8 w-8 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">See It In Action</h2>
              <p className="text-lg text-muted-foreground">Experience the platform live and interactive</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <iframe
                    src="https://streamlit.io"
                    className="w-full h-full border-0"
                    title="Live Demo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Replace the embedded URL above with your live Streamlit app link or any interactive demo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who are already transforming their workflow. Get started free with no credit card required.
            </p>
            <a 
              href="#demo" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 smooth-transition shadow-lg hover:shadow-xl hover:scale-105"
            >
              Launch App Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">ProjectHub</span>
              </div>
              <p className="text-background/70 text-sm">
                Transforming workflows with intelligent solutions for modern teams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#about" className="hover:text-background smooth-transition">About</a></li>
                <li><a href="#how-it-works" className="hover:text-background smooth-transition">How It Works</a></li>
                <li><a href="#demo" className="hover:text-background smooth-transition">Demo</a></li>
                <li><a href="#contact" className="hover:text-background smooth-transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-background/70 hover:text-background smooth-transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background smooth-transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background smooth-transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-background/60">
              <p>&copy; 2024 ProjectHub. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-background smooth-transition">Privacy Policy</a>
                <a href="#" className="hover:text-background smooth-transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
