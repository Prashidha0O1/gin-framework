import type React from "react"
import './globals.css'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Search } from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}

