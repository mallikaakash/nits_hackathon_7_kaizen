'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smile, Users, Smartphone, Star } from "lucide-react"

export function KidsSocialSkillsLandingComponent() {
  const [deviceTime, setDeviceTime] = useState(180)

  const decreaseDeviceTime = () => {
    setDeviceTime(Math.max(0, deviceTime - 10))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200 text-gray-800">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Smile className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold text-purple-700">KidConnect</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-purple-700 hover:text-purple-900">About</a></li>
            <li><a href="#features" className="text-purple-700 hover:text-purple-900">Features</a></li>
            <li><a href="#contact" className="text-purple-700 hover:text-purple-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
            Helping Kids Connect in the Real World
          </h1>
          <p className="text-xl text-purple-600 mb-8">
            Overcome social anxiety, reduce screen time, and make new friends!
          </p>
          <Button className="bg-yellow-400 text-purple-800 hover:bg-yellow-500 text-lg px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Start Your Adventure!
          </Button>
        </section>

        <section id="about" className="mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">What is KidConnect?</h2>
              <p className="text-lg text-gray-600">
                KidConnect is a fun and interactive platform designed to help children develop
                social skills, reduce device addiction, and build meaningful friendships in the real world.
                Through engaging activities and challenges, kids learn to navigate social situations with confidence.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Kids playing together"
                className="rounded-lg shadow-md"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        <section id="features" className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-100 rounded-lg p-6 text-center">
            <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Social Skills Building</h3>
            <p className="text-gray-600">Fun activities to practice real-life social interactions</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 text-center">
            <Smartphone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Screen Time Management</h3>
            <p className="text-gray-600">Tools to balance device use and real-world experiences</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 text-center">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Confidence Boosting</h3>
            <p className="text-gray-600">Challenges designed to build self-esteem and courage</p>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-purple-100 rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              See the Difference!
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-lg text-purple-600 mb-4">
                Reduce daily device time and watch social confidence grow!
              </p>
              <div className="w-full max-w-md bg-white rounded-full h-8 shadow-inner overflow-hidden mb-4">
                <div
                  className="h-full bg-green-400 transition-all duration-500 ease-in-out"
                  style={{ width: `${(deviceTime / 180) * 100}%` }}
                ></div>
              </div>
              <p className="text-purple-700 font-semibold mb-4">
                Current daily device time: {deviceTime} minutes
              </p>
              <Button onClick={decreaseDeviceTime} className="bg-purple-500 text-white hover:bg-purple-600">
                Reduce Device Time
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              Join the KidConnect Community!
            </h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Label htmlFor="parentName" className="text-purple-700">Parent's Name</Label>
                <Input id="parentName" className="w-full" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="text-purple-700">Email Address</Label>
                <Input id="email" type="email" className="w-full" placeholder="Enter your email" />
              </div>
              <div className="mb-6">
                <Label htmlFor="childAge" className="text-purple-700">Child's Age</Label>
                <Input id="childAge" type="number" className="w-full" placeholder="Enter your child's age" />
              </div>
              <Button className="w-full bg-yellow-400 text-purple-800 hover:bg-yellow-500">
                Get Started
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 KidConnect. All rights reserved.</p>
          <p className="mt-2">Helping children build real connections in a digital world.</p>
        </div>
      </footer>
    </div>
  )
}