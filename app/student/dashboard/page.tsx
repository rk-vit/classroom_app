"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { BookOpen, Plus, FileText, MessageSquare, Settings, LogOut, Bell } from "lucide-react"

export default function StudentDashboard() {
  const [classrooms, setClassrooms] = useState([
    {
      id: 1,
      name: "AI & ML",
      teacher: "Dr. Vijay Kumar",
      code: "BECE309L",
      materials: 12,
      announcements: 3,
      newAnnouncements: 1,
    }
  ])

  const [joinCode, setJoinCode] = useState("")

  const handleJoinClassroom = () => {
    // Simulate joining a classroom
    const newClassroom = {
      id: Date.now(),
      name: "New Classroom",
      teacher: "Teacher Name",
      code: joinCode,
      materials: 0,
      announcements: 0,
      newAnnouncements: 0,
    }
    setClassrooms([...classrooms, newClassroom])
    setJoinCode("")
  }

  const totalNewAnnouncements = classrooms.reduce((sum, classroom) => sum + classroom.newAnnouncements, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ClassShare</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              {totalNewAnnouncements > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {totalNewAnnouncements}
                </Badge>
              )}
            </div>
            <span className="text-sm text-gray-600">Welcome, Alex</span>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">My Classrooms</h2>
            <p className="text-gray-600 mt-1">Access materials and stay updated with your classes</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Join Classroom
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join Classroom</DialogTitle>
                <DialogDescription>
                  Enter the class code provided by your teacher to join a classroom.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="classCode">Class Code</Label>
                  <Input
                    id="classCode"
                    placeholder="e.g., MATH101"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  />
                </div>
                <Button onClick={handleJoinClassroom} className="w-full" disabled={!joinCode}>
                  Join Classroom
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classrooms.map((classroom) => (
            <Card key={classroom.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{classroom.name}</CardTitle>
                    <CardDescription>{classroom.teacher}</CardDescription>
                  </div>
                  {classroom.newAnnouncements > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {classroom.newAnnouncements} new
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span>Materials</span>
                    </div>
                    <span className="font-medium">{classroom.materials}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-green-600" />
                      <span>Announcements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{classroom.announcements}</span>
                      {classroom.newAnnouncements > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {classroom.newAnnouncements} new
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Code: {classroom.code}</div>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href={`/student/classroom/${classroom.id}`}>Open Classroom</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {classrooms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No classrooms joined yet</h3>
            <p className="text-gray-600 mb-4">Ask your teacher for a class code to join your first classroom.</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Join Your First Classroom
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join Classroom</DialogTitle>
                  <DialogDescription>
                    Enter the class code provided by your teacher to join a classroom.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="classCode">Class Code</Label>
                    <Input
                      id="classCode"
                      placeholder="e.g., MATH101"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    />
                  </div>
                  <Button onClick={handleJoinClassroom} className="w-full" disabled={!joinCode}>
                    Join Classroom
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {totalNewAnnouncements > 0 && (
          <Card className="mt-8 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-600" />
                Recent Updates
              </CardTitle>
              <CardDescription>
                You have {totalNewAnnouncements} new announcement{totalNewAnnouncements > 1 ? "s" : ""} across your
                classrooms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {classrooms
                  .filter((c) => c.newAnnouncements > 0)
                  .map((classroom) => (
                    <div key={classroom.id} className="flex items-center justify-between p-2 bg-white rounded">
                      <span className="font-medium">{classroom.name}</span>
                      <Badge variant="secondary">{classroom.newAnnouncements} new</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
