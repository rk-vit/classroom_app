import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Upload, MessageSquare } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ClassShare</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Share Materials, Connect Classrooms</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple platform for teachers to share materials and important information with students across multiple
            classrooms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                For Teachers
              </CardTitle>
              <CardDescription>Create classrooms and share materials effortlessly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Upload className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Share Materials</h4>
                  <p className="text-sm text-gray-600">Upload PDFs, PPTs, and share links</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Post Announcements</h4>
                  <p className="text-sm text-gray-600">Share important information with students</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Organize Content</h4>
                  <p className="text-sm text-gray-600">Create folders and manage multiple classrooms</p>
                </div>
              </div>
              <Button className="w-full mt-4" asChild>
                <Link href="/signup?role=teacher">Get Started as Teacher</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-purple-600" />
                For Students
              </CardTitle>
              <CardDescription>Access materials and stay updated across all your classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Access Materials</h4>
                  <p className="text-sm text-gray-600">Download and view shared files</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Stay Updated</h4>
                  <p className="text-sm text-gray-600">Receive important announcements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Join Multiple Classes</h4>
                  <p className="text-sm text-gray-600">Access all your classrooms in one place</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                <Link href="/signup?role=student">Join as Student</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
