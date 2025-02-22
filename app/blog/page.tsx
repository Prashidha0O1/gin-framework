import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Gin Blog</h1>
          <div className="grid gap-12">
            <BlogPost
              title="Gin 1.4.0 is released"
              date="May 08, 2019"
              category="Releases"
              excerpt="CHANGELOG Feature [NEW] Support for Go Modules #1569 [NEW] Refactor of form mapping multipart request #1829 [NEW] Supporting file binding #1264 [NEW] Add support for mapping arrays #1797 [NEW] Make context.Keys available as LogFormatterParams #1779"
            />
            <BlogPost
              title="How to build one effective middleware?"
              date="February 26, 2019"
              category="News"
              excerpt="Constituent parts The middleware has two parts: part one is what is executed once, when you initialize your middleware. That's where you set up all the global objects, logicals etc. Everything that happens once per application lifetime. part"
            />
            <BlogPost
              title="Gin 1.3.0 is released"
              date="August 14, 2018"
              category="Releases"
              excerpt="CHANGELOG [NEW] Add func (*Context) QueryMap, func (*Context) GetQueryMap, func (*Context) PostFormMap and func (*Context) GetPostFormMap to support type map[string]string as query string or form parameters, see #1383 [NEW] Add func (*Context)"
            />
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Gin Team. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/gin-gonic/gin" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                GitHub
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="ghost" size="sm">
                Documentation
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BlogPost({
  title,
  date,
  category,
  excerpt,
}: {
  title: string
  date: string
  category: string
  excerpt: string
}) {
  return (
    <article className="space-y-4 border-b pb-8">
      <div>
        <span className="text-sm text-blue-600 font-semibold">{category}</span>
        <h2 className="text-2xl font-bold mt-1 hover:text-blue-600 transition-colors">
          <Link href="#">{title}</Link>
        </h2>
        <time className="text-sm text-gray-500">{date}</time>
      </div>
      <p className="text-gray-600">{excerpt}</p>
      <Link href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Read more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </article>
  )
}

