'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  Calendar,
  BookOpen,
  Clock,
  ChevronRight,
  Bell,
  Settings,
  User,
  BarChart
} from "lucide-react";
import { motion } from "framer-motion";

export default function ParentDashboard() {
  const [studentName] = useState("Violina Doley");
  const [grade] = useState("Grade 1");

  const recentActivities = [
    { type: "Assignment", subject: "Mathematics", status: "Completed", date: "2024-03-20" },
    { type: "Quiz", subject: "Science", status: "Pending", date: "2024-03-22" },
    { type: "Homework", subject: "English", status: "Overdue", date: "2024-03-18" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Kaizen</span>
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
              <span>Parent Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container px-4 py-8">
        {/* Student Overview */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">{studentName}</h1>
          <p className="text-gray-500">{grade}</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Quick Stats Cards */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg border bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Courses</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg border bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <BarChart className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Grade</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg border bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Attendance</p>
                <p className="text-2xl font-bold">95%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg border bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Due Tasks</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activities */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Activities List */}
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{activity.subject}</p>
                    <p className="text-sm text-gray-500">{activity.type}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${
                      activity.status === 'Completed' ? 'text-green-500' :
                      activity.status === 'Overdue' ? 'text-red-500' :
                      'text-orange-500'
                    }`}>
                      {activity.status}
                    </p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View All Activities
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Upcoming Events/Calendar */}
          <div className="rounded-lg border bg-white p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="p-3 rounded-lg hover:bg-gray-50"
              >
                <p className="font-medium">Parent-Teacher Meeting</p>
                <p className="text-sm text-gray-500">March 25, 2024 - 2:00 PM</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="p-3 rounded-lg hover:bg-gray-50"
              >
                <p className="font-medium">Science Fair</p>
                <p className="text-sm text-gray-500">March 28, 2024 - 10:00 AM</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="p-3 rounded-lg hover:bg-gray-50"
              >
                <p className="font-medium">End of Term Exams</p>
                <p className="text-sm text-gray-500">April 5-15, 2024</p>
              </motion.div>
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View Calendar
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-blue-200 opacity-20" />
        <div className="absolute -right-4 top-1/4 h-72 w-72 rounded-full bg-orange-200 opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-yellow-200 opacity-20" />
      </div>
    </div>
  );
}