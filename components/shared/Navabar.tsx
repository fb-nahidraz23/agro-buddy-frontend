"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "../ui/button"

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "about-us",
  },
  {
    title: "Services",
    link: "services",
  },
  {
    title: "Pricing",
    link: "pricing",
  },
  {
    title: "Contact Us",
    link: "contact-us",
  },
]

const Navabar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative flex items-center">
      <div className="container mx-auto flex items-center justify-between py-6 md:py-6">
        <div>Logo</div>

        <div className="hidden md:block">
          <ul className="flex gap-9">
            {navLinks.map((item, index) => (
              <Link href={item.link} key={index}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button className="px-10">Log In</Button>
          <Button className="px-10" variant={"outline"}>Sign Up</Button>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 border bg-background p-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.link} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3">
            <Button onClick={() => setIsMenuOpen(false)}>Log In</Button>
            <Button variant={"outline"} onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navabar
