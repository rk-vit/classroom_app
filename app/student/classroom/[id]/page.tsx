"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  ArrowLeft,
  FileText,
  MessageSquare,
  Folder,
  Download,
  Eye,
  ExternalLink,
  Calendar,
  CheckCircle,
  AlertCircle,
  PlayCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { link } from "fs"

export default function StudentClassroomPage() {
  const [activeVideoModule, setActiveVideoModule] = useState(1)

  // Syllabus
  const [syllabus] = useState([
    {
      id: 1,
      name: "Course Syllabus -BECE309L_ARTIFICIAL-INTELLIGENCE-AND-MACHINE-LEARNING_TH_1.0_0_BECE309L.pdf",
      uploadDate: "2025-10-23",
      size: "529 KB",
      description: "Complete course syllabus with grading criteria and learning outcomes",
      viewLink:"https://drive.google.com/file/d/1MB4BqrQYYXa9hWHTLhsDoq6Ww7IJ-5k5/view?usp=sharing",
      downloadLink:"https://drive.google.com/uc?export=download&id=1MB4BqrQYYXa9hWHTLhsDoq6Ww7IJ-5k5"
    },
  ])

  // Lesson Plans
  const [lessonPlans] = useState([
    {
      id: 1,
      week: "Week 1",
      title: "Introduction to Calculus",
      date: "2024-01-15",
      topics: ["Functions", "Limits", "Continuity"],
      materials: 3,
    },
    {
      id: 2,
      week: "Week 2",
      title: "Derivatives and Applications",
      date: "2024-01-22",
      topics: ["Derivative Rules", "Chain Rule", "Applications"],
      materials: 4,
    },
    {
      id: 3,
      week: "Week 3",
      title: "Integration",
      date: "2024-01-29",
      topics: ["Indefinite Integrals", "Definite Integrals", "Techniques"],
      materials: 3,
    },
  ])

  // Projects
  const [projects] = useState([
    {
      id: 1,
      title: "Calculus Applications Project",
      description:
        "Apply calculus concepts to real-world problems. Create a presentation analyzing optimization problems.",
      dueDate: "2024-02-15",
      status: "active",
      marks: 20,
      submissionLink: "https://classroom.google.com/submit",
    },
    {
      id: 2,
      title: "Mathematical Modeling",
      description: "Model a real-world phenomenon using mathematical equations. Write a report with analysis.",
      dueDate: "2024-02-28",
      status: "upcoming",
      marks: 25,
      submissionLink: "https://classroom.google.com/submit",
    },
    {
      id: 3,
      title: "Calculus Problem Set",
      description: "Solve comprehensive problem set covering all topics learned in the course.",
      dueDate: "2024-01-31",
      status: "completed",
      marks: 15,
      submissionLink: "https://classroom.google.com/submit",
    },
  ])

  // Model Question Papers
  const [modelQPs] = useState({
    CAT1: [
      {
        id: 1,
        name: "CAT1 Sample Paper - 2024.pdf",
        uploadDate: "2024-01-12",
        size: "2.1 MB",
        duration: "1 hour",
        totalMarks: 30,
      },
      {
        id: 2,
        name: "CAT1 Previous Year - 2023.pdf",
        uploadDate: "2024-01-10",
        size: "1.9 MB",
        duration: "1 hour",
        totalMarks: 30,
      },
    ],
    CAT2: [
      {
        id: 3,
        name: "CAT2 Sample Paper - 2024.pdf",
        uploadDate: "2024-01-18",
        size: "2.3 MB",
        duration: "1 hour",
        totalMarks: 30,
      },
      {
        id: 4,
        name: "CAT2 Previous Year - 2023.pdf",
        uploadDate: "2024-01-15",
        size: "2.0 MB",
        duration: "1 hour",
        totalMarks: 30,
      },
    ],
    FAT: [
      {
        id: 5,
        name: "FAT Sample Paper - 2024.pdf",
        uploadDate: "2024-01-20",
        size: "3.2 MB",
        duration: "3 hours",
        totalMarks: 100,
      },
      {
        id: 6,
        name: "FAT Previous Year - 2023.pdf",
        uploadDate: "2024-01-18",
        size: "3.0 MB",
        duration: "3 hours",
        totalMarks: 100,
      },
    ],
  })

  // Reference Books
  const [referenceBooks] = useState([
    {
      id: 1,
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      publisher: "Cengage Learning",
      isbn: "978-0538497909",
      edition: "8th Edition",
      link: "https://www.amazon.com/Calculus-Early-Transcendentals-James-Stewart/dp/0538497904",
    },
    {
      id: 2,
      title: "Advanced Calculus",
      author: "Patrick M. Fitzpatrick",
      publisher: "American Mathematical Society",
      isbn: "978-0821847900",
      edition: "2nd Edition",
      link: "https://www.amazon.com/Advanced-Calculus-Patrick-M-Fitzpatrick/dp/0821847899",
    },
    {
      id: 3,
      title: "Mathematical Analysis",
      author: "Tom M. Apostol",
      publisher: "Addison-Wesley",
      isbn: "978-0201007887",
      edition: "2nd Edition",
      link: "https://www.amazon.com/Mathematical-Analysis-Second-Tom-Apostol/dp/0201007886",
    },
  ])

  // Textbooks
  const [textbooks] = useState([
    {
      id: 1,
      title: "Calculus: A Complete Course",
      author: "Robert A. Adams & Christopher Essex",
      edition: "9th Edition",
      uploadDate: "2024-01-08",
      size: "45.3 MB",
      chapters: 12,
    },
    {
      id: 2,
      title: "Essential Calculus",
      author: "James Stewart",
      edition: "3rd Edition",
      uploadDate: "2024-01-08",
      size: "38.7 MB",
      chapters: 10,
    },
  ])

  // Animated Videos
  const [animatedVideos] = useState({
    1: [
      {
        id: 1,
        title: "Introduction to Functions",
        duration: "12:45",
        uploadDate: "2024-01-08",
        url: "https://www.youtube.com/embed/2ZzuZvz33a0",
      },
      {
        id: 2,
        title: "Understanding Limits",
        duration: "15:20",
        uploadDate: "2024-01-08",
        url: "https://www.youtube.com/embed/kfF40MiS7zA",
      },
      {
        id: 3,
        title: "Continuity Explained",
        duration: "14:30",
        uploadDate: "2024-01-09",
        url: "https://www.youtube.com/embed/GkB4vW16QHc",
      },
    ],
    2: [
      {
        id: 4,
        title: "Derivatives Basics",
        duration: "18:45",
        uploadDate: "2024-01-10",
        url: "https://www.youtube.com/embed/ANyVpMS3HL4",
      },
      {
        id: 5,
        title: "Power Rule & Product Rule",
        duration: "16:20",
        uploadDate: "2024-01-10",
        url: "https://www.youtube.com/embed/vL5y0Qv5r8w",
      },
    ],
    3: [
      {
        id: 6,
        title: "Chain Rule Deep Dive",
        duration: "17:50",
        uploadDate: "2024-01-12",
        url: "https://www.youtube.com/embed/84gPNTr0Oy0",
      },
    ],
    4: [
      {
        id: 7,
        title: "Integration Fundamentals",
        duration: "19:30",
        uploadDate: "2024-01-14",
        url: "https://www.youtube.com/embed/rfG8ve9qtcg",
      },
      {
        id: 8,
        title: "Integration by Parts",
        duration: "16:15",
        uploadDate: "2024-01-14",
        url: "https://www.youtube.com/embed/2I-_SV8cwsw",
      },
    ],
    5: [
      {
        id: 9,
        title: "Multiple Integrals",
        duration: "20:40",
        uploadDate: "2024-01-16",
        url: "https://www.youtube.com/embed/BIEqjRW82yE",
      },
    ],
    6: [
      {
        id: 10,
        title: "Vector Calculus Introduction",
        duration: "17:25",
        uploadDate: "2024-01-18",
        url: "https://www.youtube.com/embed/ienq3z9GX3o",
      },
      {
        id: 11,
        title: "Partial Derivatives",
        duration: "18:50",
        uploadDate: "2024-01-18",
        url: "https://www.youtube.com/embed/TrcCbdWwCBY",
      },
    ],
    7: [
      {
        id: 12,
        title: "Course Summary & Applications",
        duration: "22:15",
        uploadDate: "2024-01-20",
        url: "https://www.youtube.com/embed/ay8h9kDm9Bc",
      },
    ],
  })

  const classroomName = "Mathematics 101"
  const teacherName = "Prof. Johnson"
  const [searchQuery, setSearchQuery] = useState("")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600">Completed</Badge>
      case "active":
        return <Badge className="bg-blue-600">Active</Badge>
      case "upcoming":
        return <Badge className="bg-purple-600">Upcoming</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getProjectIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "active":
        return <AlertCircle className="h-5 w-5 text-blue-600" />
      case "upcoming":
        return <Calendar className="h-5 w-5 text-purple-600" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const daysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate)
    const today = new Date()
    const diff = due.getTime() - today.getTime()
    const days = Math.ceil(diff / (1000 * 3600 * 24))
    return days
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/student/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{classroomName}</h1>
                <p className="text-sm text-gray-600">{teacherName}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="syllabus" className="space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-9 h-auto">
              <TabsTrigger value="syllabus" className="text-xs sm:text-sm">
                Syllabus
              </TabsTrigger>
              <TabsTrigger value="lessons" className="text-xs sm:text-sm">
                Lessons
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-xs sm:text-sm">
                Projects
              </TabsTrigger>
              <TabsTrigger value="modelqps" className="text-xs sm:text-sm">
                Model QPs
              </TabsTrigger>
              <TabsTrigger value="references" className="text-xs sm:text-sm">
                References
              </TabsTrigger>
              <TabsTrigger value="textbooks" className="text-xs sm:text-sm">
                Textbooks
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-xs sm:text-sm">
                Videos
              </TabsTrigger>
              <TabsTrigger value="materials" className="text-xs sm:text-sm">
                Materials
              </TabsTrigger>
              <TabsTrigger value="announcements" className="text-xs sm:text-sm">
                Updates
              </TabsTrigger>
            </TabsList>
          </div>

          {/* SYLLABUS TAB */}
          <TabsContent value="syllabus" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Course Syllabus</h2>
            </div>

            <div className="space-y-4">
              {syllabus.map((doc) => (
                <Card key={doc.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <FileText className="h-10 w-10 text-red-600 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{doc.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                          <div className="flex gap-4 mt-3 text-sm text-gray-600">
                            <span>📅 {doc.uploadDate}</span>
                            <span>📦 {doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          <a href={doc.viewLink}>View</a>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          <a href={doc.downloadLink}>Download</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* LESSON PLANS TAB */}
          <TabsContent value="lessons" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Lesson Plans</h2>
              <p className="text-gray-600 mt-1">View weekly lesson plans and topics</p>
            </div>

            <div className="grid gap-4">
              {lessonPlans.map((lesson) => (
                <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">
                          {lesson.week} • {lesson.date}
                        </p>
                      </div>
                      <Badge variant="secondary">{lesson.materials} materials</Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</p>
                        <div className="flex flex-wrap gap-2">
                          {lesson.topics.map((topic) => (
                            <Badge key={topic} variant="outline">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PROJECTS TAB */}
          <TabsContent value="projects" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">List of Projects</h2>
              <p className="text-gray-600 mt-1">Discover the projects your classmates are doing and collabrate with them</p>
            </div>

            <div className="grid gap-4">
              {projects.map((project) => {
                const daysLeft = daysUntilDue(project.dueDate)
                const isOverdue = false //daysLeft < 0 && project.status !== "completed"

                return (
                  <Card
                    key={project.id}
                    className={`hover:shadow-lg transition-shadow ${isOverdue ? "border-red-300 bg-red-50" : ""}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3 flex-1">
                          {getProjectIcon(project.status)}
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(project.status)}
                          <p className="text-xs text-gray-600 mt-2">
                            {isOverdue && project.status !== "completed" ? (
                              <span className="text-red-600 font-semibold">Overdue</span>
                            ) : (
                              `${Math.abs(daysLeft)} days left`
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-4 text-sm border-t pt-4">
                        <span className="text-gray-700"> Team Members : {project.dueDate}</span>
                        {/* <span className="text-gray-700">⭐ Marks: {project.marks}</span> */}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.submissionLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Submit
                          </a>
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* MODEL QUESTION PAPERS TAB */}
          <TabsContent value="modelqps" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Model Question Papers</h2>
              <p className="text-gray-600 mt-1">Practice with sample and previous year question papers</p>
            </div>

            <div className="space-y-6">
              {/* CAT1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Folder className="h-5 w-5 text-blue-600" />
                    CAT1 (Continuous Assessment Test 1)
                    <Badge variant="secondary">{modelQPs.CAT1.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {modelQPs.CAT1.map((qp) => (
                      <div
                        key={qp.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <FileText className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <p className="font-medium">{qp.name}</p>
                            <div className="flex gap-4 text-xs text-gray-600 mt-1">
                              <span>⏱️ {qp.duration}</span>
                              <span>⭐ {qp.totalMarks} marks</span>
                              <span>📅 {qp.uploadDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CAT2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Folder className="h-5 w-5 text-green-600" />
                    CAT2 (Continuous Assessment Test 2)
                    <Badge variant="secondary">{modelQPs.CAT2.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {modelQPs.CAT2.map((qp) => (
                      <div
                        key={qp.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <FileText className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <p className="font-medium">{qp.name}</p>
                            <div className="flex gap-4 text-xs text-gray-600 mt-1">
                              <span>⏱️ {qp.duration}</span>
                              <span>⭐ {qp.totalMarks} marks</span>
                              <span>📅 {qp.uploadDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAT */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Folder className="h-5 w-5 text-purple-600" />
                    FAT (Final Assessment Test)
                    <Badge variant="secondary">{modelQPs.FAT.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {modelQPs.FAT.map((qp) => (
                      <div
                        key={qp.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <FileText className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <p className="font-medium">{qp.name}</p>
                            <div className="flex gap-4 text-xs text-gray-600 mt-1">
                              <span>⏱️ {qp.duration}</span>
                              <span>⭐ {qp.totalMarks} marks</span>
                              <span>📅 {qp.uploadDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* REFERENCE BOOKS TAB */}
          <TabsContent value="references" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Reference Books</h2>
              <p className="text-gray-600 mt-1">Recommended reference materials for deeper learning</p>
            </div>

            <div className="grid gap-4">
              {referenceBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">by {book.author}</p>
                        <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                          <div>
                            <span className="text-gray-600">Publisher:</span>
                            <p className="font-medium">{book.publisher}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Edition:</span>
                            <p className="font-medium">{book.edition}</p>
                          </div>
                          <div className="col-span-2">
                            <span className="text-gray-600">ISBN:</span>
                            <p className="font-medium font-mono">{book.isbn}</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" asChild>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TEXTBOOKS TAB */}
          <TabsContent value="textbooks" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Textbooks</h2>
              <p className="text-gray-600 mt-1">Required textbooks for the course</p>
            </div>

            <div className="grid gap-4">
              {textbooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">by {book.author}</p>
                        <div className="flex gap-6 mt-4 text-sm">
                          <div>
                            <span className="text-gray-600">Edition:</span>
                            <p className="font-medium">{book.edition}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Chapters:</span>
                            <p className="font-medium">{book.chapters}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Size:</span>
                            <p className="font-medium">{book.size}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Uploaded:</span>
                            <p className="font-medium">{book.uploadDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ANIMATED VIDEOS TAB */}
          <TabsContent value="videos" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Animated Video Lectures</h2>
              <p className="text-gray-600 mt-1">Watch lectures organized by module</p>
            </div>

            {/* Module Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[1, 2, 3, 4, 5, 6, 7].map((module) => (
                <Button
                  key={module}
                  variant={activeVideoModule === module ? "default" : "outline"}
                  onClick={() => setActiveVideoModule(module)}
                  className="whitespace-nowrap"
                >
                  Module {module}
                </Button>
              ))}
            </div>

            {/* Videos Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {animatedVideos[activeVideoModule as keyof typeof animatedVideos]?.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative bg-black h-48 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition cursor-pointer" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                      <span>⏱️ {video.duration}</span>
                      <span>📅 {video.uploadDate}</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Watch on YouTube
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* CLASS MATERIALS TAB */}
          <TabsContent value="materials" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Class Materials</h2>
              <p className="text-gray-600 mt-1">General course materials and resources</p>
            </div>

            <div className="mb-6">
              <Input
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <Folder className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Check the Syllabus, Lesson Plans, and other sections above for course materials.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ANNOUNCEMENTS TAB */}
          <TabsContent value="announcements" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Course Updates & Announcements</h2>
              <p className="text-gray-600 mt-1">Latest updates from your instructor</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Welcome to Mathematics 101",
                  content:
                    "Welcome everyone! Please check all sections for the course materials. Don't forget to watch the introductory videos and review the syllabus.",
                  date: "2024-01-15",
                  important: true,
                  isNew: true,
                },
                {
                  id: 2,
                  title: "Updated Model Question Papers",
                  content: "New CAT1 and CAT2 sample papers have been uploaded. Start practicing for your assessments.",
                  date: "2024-01-20",
                  important: false,
                  isNew: true,
                },
                {
                  id: 3,
                  title: "Assignment Due Date Extended",
                  content:
                    "The first project submission deadline has been extended to February 15th. Use this extra time to improve your work.",
                  date: "2024-01-22",
                  important: true,
                  isNew: false,
                },
              ].map((announcement) => (
                <Card
                  key={announcement.id}
                  className={`${
                    announcement.important ? "border-orange-200 bg-orange-50" : ""
                  } ${announcement.isNew ? "ring-2 ring-blue-200" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="text-lg font-semibold">{announcement.title}</h3>
                          <p className="text-sm text-gray-600">{announcement.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {announcement.important && <Badge variant="destructive">Important</Badge>}
                        {announcement.isNew && <Badge className="bg-blue-600">New</Badge>}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
