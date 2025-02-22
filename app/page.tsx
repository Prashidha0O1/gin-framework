import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Layers, CheckCircle, Code, PenTool, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">Gin</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#performance">
            Performance
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#github">
            GitHub
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Crystal clear ice"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Gin: The fastest full-featured web framework for Go
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  Crystal clear. Fast. Productive. Up to 40 times faster than Martini.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/docs">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Fast"
                description="Radix tree based routing, small memory footprint. No reflection. Predictable API performance."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10" />}
                title="Middleware Support"
                description="Handle HTTP requests with a chain of middleware and final actions. Perfect for logging, authorization, and more."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10" />}
                title="Crash-free"
                description="Gin can catch and recover from panics during HTTP requests, ensuring your server stays available."
              />
              <FeatureCard
                icon={<CheckCircle className="h-10 w-10" />}
                title="JSON Validation"
                description="Parse and validate JSON requests, checking for required values and more."
              />
              <FeatureCard
                icon={<Code className="h-10 w-10" />}
                title="Routes Grouping"
                description="Organize your routes efficiently with nested groups without performance degradation."
              />
              <FeatureCard
                icon={<PenTool className="h-10 w-10" />}
                title="Rendering Built-in"
                description="Easy-to-use API for JSON, XML, and HTML rendering out of the box."
              />
            </div>
          </div>
        </section>
        <section id="performance" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Rocket className="h-16 w-16 text-primary" />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unmatched Performance</h2>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  Gin offers a Martini-like API with up to 40 times better performance. Experience the perfect balance
                  of speed and productivity.
                </p>
              </div>
              <div className="w-full max-w-sm p-4 bg-zinc-100 rounded-lg dark:bg-zinc-800">
                <div className="text-4xl font-bold text-primary">40x</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Faster than Martini</div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to build with Gin?
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                  Get started with Gin and experience the power of fast, productive Go web development.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">View on GitHub</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 Gin Framework. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  )
}

