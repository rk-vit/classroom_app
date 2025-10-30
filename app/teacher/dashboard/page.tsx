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
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Plus, Users, FileText, MessageSquare, Settings, LogOut } from "lucide-react"

export default function TeacherDashboard() {
  const [classrooms, setClassrooms] = useState([
    {
      id: 1,
      name: "Mathematics 101",
      code: "MATH101",
      students: 25,
      materials: 12,
      announcements: 3,
    },
    {
      id: 2,
      name: "Physics Advanced",
      code: "PHYS201",
      students: 18,
      materials: 8,
      announcements: 1,
    },
  ])

  const [newClassroom, setNewClassroom] = useState({
    name: "",
    description: "",
  })

  const handleCreateClassroom = () => {
    const classroom = {
      id: Date.now(),
      name: newClassroom.name,
      code: `CLASS${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      students: 0,
      materials: 0,
      announcements: 0,
    }
    setClassrooms([...classrooms, classroom])
    setNewClassroom({ name: "", description: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ClassShare</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Prof. Johnson</span>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/teacher/settings">
                <Settings className="h-4 w-4" />
              </Link>
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
            <p className="text-gray-600 mt-1">Manage your classes and share materials</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Classroom
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Classroom</DialogTitle>
                <DialogDescription>Set up a new classroom to start sharing materials with students.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="className">Classroom Name</Label>
                  <Input
                    id="className"
                    placeholder="e.g., Mathematics 101"
                    value={newClassroom.name}
                    onChange={(e) => setNewClassroom({ ...newClassroom, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the classroom"
                    value={newClassroom.description}
                    onChange={(e) => setNewClassroom({ ...newClassroom, description: e.target.value })}
                  />
                </div>
                <Button onClick={handleCreateClassroom} className="w-full">
                  Create Classroom
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
                    <CardDescription>Code: {classroom.code}</CardDescription>
                  </div>
                  <Badge variant="secondary">{classroom.students} students</Badge>
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
                    <span className="font-medium">{classroom.announcements}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>Students</span>
                    </div>
                    <span className="font-medium">{classroom.students}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button asChild className="flex-1">
                    <Link href={`/teacher/classroom/${classroom.id}`}>Open</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {classrooms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No classrooms yet</h3>
            <p className="text-gray-600 mb-4">Create your first classroom to start sharing materials with students.</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Classroom
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Classroom</DialogTitle>
                  <DialogDescription>
                    Set up a new classroom to start sharing materials with students.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="className">Classroom Name</Label>
                    <Input
                      id="className"
                      placeholder="e.g., Mathematics 101"
                      value={newClassroom.name}
                      onChange={(e) => setNewClassroom({ ...newClassroom, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of the classroom"
                      value={newClassroom.description}
                      onChange={(e) => setNewClassroom({ ...newClassroom, description: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleCreateClassroom} className="w-full">
                    Create Classroom
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </main>
    </div>
  )
}
