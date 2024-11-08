// src/app/page.js

'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { Send, Loader2, Bot, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

import { LandingPage } from '@/components/landing-page';
import { 
  BookOpen, 
  Smartphone, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  Brain,
  Calendar,
  Trophy
} from "lucide-react";




export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [completion, setCompletion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!prompt.trim()) {
      alert('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setCompletion('');

    try {
      const response = await fetch('/api/anthropic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        if (data.completion) {
          setCompletion(data.completion);
        } else {
          console.error('Invalid response format:', data);
          alert('Received invalid response format from server');
        }
      } else {
        console.error('Server error:', data);
        alert(`Error: ${data.error || 'Unknown server error'}`);
      }
    } catch (error) {
      console.error('Frontend Error:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <LandingPage /> */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Kaizen</span>
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
                {/* <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
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
                {/* <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium">
                      Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
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
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Helping your child grow <span className="text-orange-500">socially</span>, reduce screen time, and build lifelong habits
          </motion.h1>
          <p className="text-xl text-gray-600 mb-8">
            A personalized, interactive journey for your child's development
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Building Better Social Skills and Life Habits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Skills</h3>
              <p className="text-gray-600">Enhance interpersonal abilities through guided daily activities</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Smartphone className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Screen Time Balance</h3>
              <p className="text-gray-600">Develop healthy digital habits with structured daily routines</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Brain className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
              <p className="text-gray-600">Progress tracking with the Kaizen philosophy of improvement</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Easy Signup & Initial Analysis",
                description: "Interactive assessment through friendly chatbot or camera session",
                icon: <Users className="w-6 h-6" />
              },
              {
                step: 2,
                title: "Personalized Daily Plan",
                description: "Customized routines focusing on social skills and active play",
                icon: <Calendar className="w-6 h-6" />
              },
              {
                step: 3,
                title: "Progress & Rewards",
                description: "Earn points and achieve meaningful rewards for completed tasks",
                icon: <Trophy className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="mb-4 text-orange-500">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features That Make Us Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Child-Friendly Interface",
                description: "Simple and engaging activities designed just for children",
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                title: "Daily Recommendations",
                description: "Curated books and podcasts for skill development",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Parental Insights",
                description: "Track growth and improvements week by week",
                icon: <CheckCircle2 className="w-6 h-6" />
              },
              {
                title: "Flexible Rewards",
                description: "Personalized incentives for completing goals",
                icon: <Star className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Parents Love Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Finally, an app that aligns with our values! My child looks forward to completing tasks each day, and I love seeing how they're growing.",
                author: "Parent of a 7-year-old"
              },
              {
                quote: "Our screen time battles are now a thing of the past. The daily routines have helped build a sense of accomplishment and balance.",
                author: "Parent of a 10-year-old"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-orange-500 mb-4">
                  <Star className="w-6 h-6" />
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <p className="font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Child's Journey?</h2>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/signup" className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Background Shapes */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-20" />
        <div className="absolute -right-4 top-1/4 h-72 w-72 rounded-full bg-orange-200 opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-yellow-200 opacity-20" />
      </div>
    </div>
      
  );
}



// <form onSubmit={handleSubmit} className="space-y-4">
// <div className="relative">
//   <textarea
//     rows={5}
//     value={prompt}
//     onChange={(e) => setPrompt(e.target.value)}
//     placeholder="Ask me anything..."
//     className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//   />
//   <Button
//     type="submit"
//     disabled={loading}
//     className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white"
//   >
//     {loading ? (
//       <Loader2 className="w-4 h-4 animate-spin" />
//     ) : (
//       <Send className="w-4 h-4" />
//     )}
//   </Button>
// </div>
// </form>


// {completion && (
//   <div className="p-6 bg-white rounded-lg border shadow-sm">
//     <div className="flex items-center gap-2 mb-4">
//       <Bot className="w-5 h-5 text-orange-500" />
//       <h2 className="font-semibold">AI Response</h2>
//     </div>
//     <p className="text-gray-700 whitespace-pre-wrap">{completion}</p>
//   </div>
// )}
// </div>
