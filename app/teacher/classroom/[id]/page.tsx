"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  ArrowLeft,
  Plus,
  FileText,
  LinkIcon,
  MessageSquare,
  Folder,
  Users,
  Copy,
  Download,
  Eye,
} from "lucide-react"

export default function ClassroomPage() {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "Introduction to Calculus.pdf",
      type: "pdf",
      folder: "Week 1",
      uploadDate: "2024-01-15",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Linear Algebra Slides.pptx",
      type: "pptx",
      folder: "Week 2",
      uploadDate: "2024-01-20",
      size: "5.1 MB",
    },
    {
      id: 3,
      name: "Khan Academy - Derivatives",
      type: "link",
      folder: "Resources",
      uploadDate: "2024-01-18",
      url: "https://khanacademy.org/derivatives",
    },
  ])

  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Welcome to Mathematics 101",
      content: "Welcome everyone! Please check the materials section for the first week's content.",
      date: "2024-01-15",
      important: true,
    },
    {
      id: 2,
      title: "Assignment Due Date",
      content: "Remember that Assignment 1 is due next Friday. Please submit through the portal.",
      date: "2024-01-20",
      important: false,
    },
  ])

  const [folders] = useState(["Week 1", "Week 2", "Week 3", "Resources", "Assignments"])
  const [newMaterial, setNewMaterial] = useState({
    name: "",
    type: "file",
    folder: "",
    url: "",
  })
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    important: false,
  })

  const classroomCode = "MATH101"
  const studentCount = 25

  const handleAddMaterial = () => {
    const material = {
      id: Date.now(),
      name: newMaterial.name,
      type: newMaterial.type === "link" ? "link" : "pdf",
      folder: newMaterial.folder,
      uploadDate: new Date().toISOString().split("T")[0],
      size: newMaterial.type === "link" ? undefined : "1.2 MB",
      url: newMaterial.type === "link" ? newMaterial.url : undefined,
    }
    setMaterials([...materials, material])
    setNewMaterial({ name: "", type: "file", folder: "", url: "" })
  }

  const handleAddAnnouncement = () => {
    const announcement = {
      id: Date.now(),
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      date: new Date().toISOString().split("T")[0],
      important: newAnnouncement.important,
    }
    setAnnouncements([announcement, ...announcements])
    setNewAnnouncement({ title: "", content: "", important: false })
  }

  const copyClassCode = () => {
    navigator.clipboard.writeText(classroomCode)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/teacher/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mathematics 101</h1>
                <p className="text-sm text-gray-600">Class Code: {classroomCode}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              <Users className="h-3 w-3 mr-1" />
              {studentCount} students
            </Badge>
            <Button variant="outline" size="sm" onClick={copyClassCode}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Code
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="materials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          <TabsContent value="materials" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Class Materials</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Material
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Material</DialogTitle>
                    <DialogDescription>Upload a file or add a link to share with students.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="materialType">Type</Label>
                      <Select
                        value={newMaterial.type}
                        onValueChange={(value) => setNewMaterial({ ...newMaterial, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="file">File Upload</SelectItem>
                          <SelectItem value="link">External Link</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="materialName">{newMaterial.type === "link" ? "Link Title" : "File Name"}</Label>
                      <Input
                        id="materialName"
                        placeholder={
                          newMaterial.type === "link" ? "e.g., Khan Academy Tutorial" : "e.g., Lecture Notes.pdf"
                        }
                        value={newMaterial.name}
                        onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                      />
                    </div>
                    {newMaterial.type === "link" && (
                      <div className="space-y-2">
                        <Label htmlFor="materialUrl">URL</Label>
                        <Input
                          id="materialUrl"
                          placeholder="https://example.com"
                          value={newMaterial.url}
                          onChange={(e) => setNewMaterial({ ...newMaterial, url: e.target.value })}
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="materialFolder">Folder</Label>
                      <Select
                        value={newMaterial.folder}
                        onValueChange={(value) => setNewMaterial({ ...newMaterial, folder: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select folder" />
                        </SelectTrigger>
                        <SelectContent>
                          {folders.map((folder) => (
                            <SelectItem key={folder} value={folder}>
                              {folder}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handleAddMaterial} className="w-full">
                      {newMaterial.type === "link" ? "Add Link" : "Upload File"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {folders.map((folder) => {
                const folderMaterials = materials.filter((m) => m.folder === folder)
                if (folderMaterials.length === 0) return null

                return (
                  <Card key={folder}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Folder className="h-5 w-5 text-blue-600" />
                        {folder}
                        <Badge variant="secondary">{folderMaterials.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {folderMaterials.map((material) => (
                          <div
                            key={material.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              {material.type === "link" ? (
                                <LinkIcon className="h-5 w-5 text-blue-600" />
                              ) : (
                                <FileText className="h-5 w-5 text-red-600" />
                              )}
                              <div>
                                <p className="font-medium">{material.name}</p>
                                <p className="text-sm text-gray-600">
                                  {material.uploadDate} {material.size && `• ${material.size}`}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Announcements</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Announcement
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Announcement</DialogTitle>
                    <DialogDescription>Share important information with your students.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="announcementTitle">Title</Label>
                      <Input
                        id="announcementTitle"
                        placeholder="e.g., Assignment Due Date"
                        value={newAnnouncement.title}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="announcementContent">Content</Label>
                      <Textarea
                        id="announcementContent"
                        placeholder="Write your announcement here..."
                        value={newAnnouncement.content}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="important"
                        checked={newAnnouncement.important}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, important: e.target.checked })}
                      />
                      <Label htmlFor="important">Mark as important</Label>
                    </div>
                    <Button onClick={handleAddAnnouncement} className="w-full">
                      Post Announcement
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className={announcement.important ? "border-orange-200 bg-orange-50" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                        {announcement.title}
                        {announcement.important && <Badge variant="destructive">Important</Badge>}
                      </CardTitle>
                      <span className="text-sm text-gray-600">{announcement.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Students ({studentCount})</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export List
                </Button>
                <Button variant="outline" onClick={copyClassCode}>
                  <Copy className="h-4 w-4 mr-2" />
                  Share Class Code
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Class Code</CardTitle>
                <CardDescription>Students can join this classroom using the code below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-mono font-bold text-blue-600">{classroomCode}</div>
                  <Button variant="outline" size="sm" onClick={copyClassCode}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enrolled Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {String.fromCharCode(65 + i)}
                        </div>
                        <div>
                          <p className="font-medium">Student {i + 1}</p>
                          <p className="text-sm text-gray-600">student{i + 1}@example.com</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  ))}
                  <div className="text-center py-4 text-gray-600">... and {studentCount - 5} more students</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
