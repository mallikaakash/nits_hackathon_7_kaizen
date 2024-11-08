'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">EduMind</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex gap-6">
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Testimonials
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/parent">Parent Dashboard</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/child">Children Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential
                  <br />
                  with <span className="text-orange-500">Expert-Led Courses</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join millions of learners worldwide and unlock the skills needed to excel in today's competitive world. Our
                  platform provides expertly designed courses to help you achieve your goals and stay ahead in your career.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline">
                  Free Trial
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="overflow-hidden rounded-full">
                      <img
                        alt="Student learning"
                        className="aspect-square h-48 w-48 object-cover"
                        src="/placeholder.svg?height=192&width=192"
                      />
                    </div>
                    <div className="overflow-hidden rounded-full">
                      <img
                        alt="Student studying"
                        className="aspect-square h-48 w-48 object-cover"
                        src="/placeholder.svg?height=192&width=192"
                      />
                    </div>
                  </div>
                  <div className="mt-16">
                    <div className="overflow-hidden rounded-full">
                      <img
                        alt="Student with laptop"
                        className="aspect-square h-48 w-48 object-cover"
                        src="/placeholder.svg?height=192&width=192"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Shapes */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-20" />
          <div className="absolute -right-4 top-1/4 h-72 w-72 rounded-full bg-orange-200 opacity-20" />
          <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-yellow-200 opacity-20" />
        </div>
      </section>
    </div>
  )
}