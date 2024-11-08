'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Calendar, CheckCircle2 } from "lucide-react"

export function DashboardComponent() {
  const [progress, setProgress] = useState(60)

  // Simulated data for the dashboard
  const dailyTasks = [
    { id: 1, task: "Practice active listening", completed: true },
    { id: 2, task: "Engage in a group activity", completed: false },
    { id: 3, task: "Share a story with a friend", completed: false },
    { id: 4, task: "Offer help to someone", completed: true },
  ]

  const milestones = [
    { id: 1, title: "First conversation", completed: true },
    { id: 2, title: "Group presentation", completed: true },
    { id: 3, title: "Conflict resolution", completed: false },
    { id: 4, title: "Leadership role", completed: false },
  ]

  const prizes = [
    { id: 1, title: "Active Listener Badge", icon: <Star className="h-6 w-6 text-yellow-400" /> },
    { id: 2, title: "Team Player Trophy", icon: <Trophy className="h-6 w-6 text-yellow-400" /> },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-8">Social Skills Dashboard</h1>
      
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
                <Checkbox
                  key={i}
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
                You're {progress}% of the way to becoming a social butterfly!
              </p>
              <div className="relative pt-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex items-center mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <CheckCircle2 className={`h-5 w-5 ${milestone.completed ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div className="ml-4">
                      <p className={`font-medium ${milestone.completed ? 'text-green-500' : 'text-gray-500'}`}>
                        {milestone.title}
                      </p>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute left-4 w-0.5 bg-gray-300 h-10 -z-10" style={{ top: `${index * 48 + 48}px` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {dailyTasks.map((task) => (
                <li key={task.id} className="flex items-center space-x-2">
                  <Checkbox id={`task-${task.id}`} checked={task.completed} />
                  <label
                    htmlFor={`task-${task.id}`}
                    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                      task.completed ? 'line-through text-muted-foreground' : ''
                    }`}
                  >
                    {task.task}
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Prizes Won */}
        <Card>
          <CardHeader>
            <CardTitle>Prizes Won</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {prizes.map((prize) => (
                <li key={prize.id} className="flex items-center space-x-2">
                  {prize.icon}
                  <span className="text-sm font-medium">{prize.title}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}