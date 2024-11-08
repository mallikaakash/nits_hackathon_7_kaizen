// 'use client';
'use client'
// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';
// import { 
//   Trophy,
//   Target,
//   Star,
//   ChevronRight,
//   Bell,
//   Settings,
//   User,
//   CheckSquare,
//   Medal,
//   Sparkles,
//   MapPin
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { DashboardComponent } from '@/components/dashboard';

// export default function ChildDashboard() {
//   const [childName] = useState("Alex Smith");
//   const [level] = useState("Level 5");
//   const [xp] = useState(350); // Experience points
//   const [nextLevel] = useState(500);

//   const dailyTasks = [
//     { task: "Read a book for 30 mins", completed: true },
//     { task: "Outdoor play time", completed: true },
//     { task: "Help with house chores", completed: false },
//     { task: "Practice an instrument", completed: false },
//   ];

//   const achievements = [
//     { name: "Early Bird", description: "Completed morning routine 5 days in a row", icon: Star },
//     { name: "Bookworm", description: "Read for 7 days straight", icon: Trophy },
//     { name: "Helper", description: "Completed 10 house chores", icon: Medal },
//   ];

//   const milestones = [
//     { name: "Start", completed: true },
//     { name: "Week 1", completed: true },
//     { name: "Month 1", completed: true },
//     { name: "3 Months", completed: false },
//     { name: "6 Months", completed: false },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//         <DashboardComponent />

      {/* Header */}
      {/* <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">KAAJ</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{childName}</span>
            </Button>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      {/* <div className="container px-4 py-8"> */}
        {/* Profile Overview */}
        {/* <div className="mb-8 bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{childName}</h1>
              <p className="text-orange-500 font-semibold">{level}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">XP Progress</p>
              <div className="w-48 h-3 bg-gray-100 rounded-full mt-2">
                <motion.div 
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: `${(xp/nextLevel) * 100}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(xp/nextLevel) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{xp}/{nextLevel} XP</p>
            </div>
          </div>
        </div> */}

        {/* Progress Path */}
        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Journey</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <div className={`w-8 h-8 rounded-full ${milestone.completed ? 'bg-orange-500' : 'bg-gray-200'} flex items-center justify-center`}>
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm mt-2 absolute -left-8 w-24 text-center">{milestone.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2"> */}
          {/* Daily Tasks */}
          {/* <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Quests</h2>
            <div className="space-y-4">
              {dailyTasks.map((task, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <CheckSquare 
                      className={`h-5 w-5 ${task.completed ? 'text-green-500' : 'text-gray-300'}`}
                    />
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>
                      {task.task}
                    </span>
                  </div>
                  {task.completed && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      +10 XP
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Achievements */}
          {/* <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="p-2 rounded-full bg-orange-100">
                    <achievement.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">{achievement.name}</p>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Background Shapes */}
      {/* <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-20" />
        <div className="absolute -right-4 top-1/4 h-72 w-72 rounded-full bg-orange-200 opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-yellow-200 opacity-20" />
      </div> */}
//     </div>
//   );
// }




import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Calendar, CheckCircle2, Sparkles, Target, Medal, User, Bell } from "lucide-react"
import Link from 'next/link'
import { motion } from "framer-motion"

export default function ChildDashboard() {
  const [progress, setProgress] = useState(60)
  const [childName] = useState("Violina Doley")
  const [level] = useState("Level 5")

  // Simulated data for the dashboard
  const dailyTasks = [
    { id: 1, task: "Read a book for 30 mins", completed: true, xp: 50 },
    { id: 2, task: "Play outside with friends", completed: false, xp: 30 },
    { id: 3, task: "Help with house chores", completed: false, xp: 40 },
    { id: 4, task: "Less screen time today", completed: true, xp: 50 },
  ]

  const milestones = [
    { id: 1, title: "First Day Complete", completed: true },
    { id: 2, title: "One Week Streak", completed: true },
    { id: 3, title: "Social Butterfly", completed: false },
    { id: 4, title: "Super Helper", completed: false },
  ]

  const prizes = [
    { id: 1, title: "Early Bird Badge", icon: <Star className="h-6 w-6 text-yellow-400" /> },
    { id: 2, title: "Friendship Trophy", icon: <Trophy className="h-6 w-6 text-yellow-400" /> },
    { id: 3, title: "Helper Medal", icon: <Medal className="h-6 w-6 text-yellow-400" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">KAIZEN</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
          <Button variant="default" >
            <Link href="/child/test">
                Take Test
                </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{childName}</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{childName}'s Kanban Board</h1>
          <p className="text-orange-500 font-semibold">{level}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Calendar-like Checkbox */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2" />
                Daily Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }, (_, i) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={i}
                  >
                    <Checkbox
                      id={`day-${i + 1}`}
                      className="h-8 w-8 rounded-md"
                      checked={i < progress / 3.5}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setProgress(Math.min(100, progress + 3.5))
                        } else {
                          setProgress(Math.max(0, progress - 3.5))
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Roadmap Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Your Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  You're {progress}% of the way to becoming a Social Star! 🌟
                </p>
                <div className="relative pt-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.id}
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        <CheckCircle2 className={`h-5 w-5 ${
                          milestone.completed ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div className="ml-4">
                        <p className={`font-medium ${
                          milestone.completed ? 'text-green-500' : 'text-gray-500'
                        }`}>
                          {milestone.title}
                        </p>
                      </div>
                      {index < milestones.length - 1 && (
                        <div 
                          className="absolute left-4 w-0.5 bg-gray-300 h-10 -z-10" 
                          style={{ top: `${index * 48 + 48}px` }} 
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Quests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {dailyTasks.map((task) => (
                  <motion.li
                    key={task.id}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`task-${task.id}`} checked={task.completed} />
                      <label
                        htmlFor={`task-${task.id}`}
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                          task.completed ? 'line-through text-muted-foreground' : ''
                        }`}
                      >
                        {task.task}
                      </label>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                      +{task.xp} XP
                    </span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Prizes Won */}
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {prizes.map((prize) => (
                  <motion.li
                    key={prize.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="p-2 rounded-full bg-orange-100">
                      {prize.icon}
                    </div>
                    <span className="text-sm font-medium">{prize.title}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-20" />
        <div className="absolute -right-4 top-1/4 h-72 w-72 rounded-full bg-orange-200 opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-yellow-200 opacity-20" />
      </div>
    </div>
  )
}