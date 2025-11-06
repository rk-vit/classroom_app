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
  const [lessonPlans] = useState(
    [
  {
    id: 1,
    week: "Week 1",
    title: "Module 1: Introduction to AI",
    date: ["2025-07-10", "2025-07-14", "2025-07-15"],
    topics: ["Introduction to AI", "Agents and Rationality", "Task environment"]
  },
  {
    id: 2,
    week: "Week 2",
    title: "Agent Architecture Types.",
    date: ["2025-07-17", "2025-07-21", "2025-07-22"],
    topics: ["Agent Architecture Types.", "Module 2: Search Space", "Search algorithms"]
  },
  {
    id: 3,
    week: "Week 3",
    title: "Search algorithms + Problems",
    date: ["2025-07-24", "2025-07-28", "2025-07-29"],
    topics: ["Search algorithms + Problems", "Strategies", "Strategies"]
  },
  {
    id: 4,
    week: "Week 4",
    title: "Search in complex environments",
    date: ["2025-07-31", "2025-08-02", "2025-08-04"],
    topics: ["Search in complex environments", "Module 3: Knowledge-based agents", "Knowledge-based agents"]
  },
  {
    id: 5,
    week: "Week 5",
    title: "Propositional Logic",
    date: ["2025-08-05", "2025-08-07", "2025-08-11"],
    topics: ["Propositional Logic", "Agents based on Propositional Logic", "Agents based on Propositional Logic"]
  },
  {
    id: 6,
    week: "Week 6",
    title: "First-order logic",
    date: ["2025-08-12", "2025-08-14", "2025-08-25"],
    topics: ["First-order logic", "First-order logic", "Module:4 Probability reasoning and uncertainty Quantifying uncertainty"]
  },
  {
    id: 7,
    week: "Week 7",
    title: "Knowledge representation in uncertainty - I",
    date: ["2025-08-26", "2025-08-28", "2025-09-01"],
    topics: ["Knowledge representation in uncertainty - I", "Knowledge representation in uncertainty - II", "Decision making"]
  },
  {
    id: 8,
    week: "Week 8",
    title: "Simple",
    date: ["2025-09-02", "2025-09-04", "2025-09-08"],
    topics: ["Simple", "complex", "Module:5 Data Preparation for Machine Learning Basics of Vectors &Matrices"]
  },
  {
    id: 9,
    week: "Week 9",
    title: "Data Cleaning Techniques",
    date: ["2025-09-09", "2025-09-11", "2025-09-15"],
    topics: ["Data Cleaning Techniques", "Integration Techniques", "Transformation Techniques"]
  },
  {
    id: 10,
    week: "Week 10",
    title: "Reduction Techniques",
    date: ["2025-09-16", "2025-09-18", "2025-09-22"],
    topics: ["Reduction Techniques", "Module: 6 Learning from Examples : Forms of Learning, Dimensionality reduction", "Regression"]
  },
  {
    id: 11,
    week: "Week 11",
    title: "Statistical Methods: Naïve Bayes",
    date: ["2025-09-23", "2025-09-25", "2025-09-29"],
    topics: ["Statistical Methods: Naïve Bayes", "Nearest Neighbor", "Decision Trees"]
  },
  {
    id: 12,
    week: "Week 12",
    title: "Random Forest",
    date: ["2025-09-30", "2025-10-13", "2025-10-14"],
    topics: ["Random Forest", "Clustering", "Ensemble Learning"]
  },
  {
    id: 13,
    week: "Week 13",
    title: "Case studies – Machine Learning in Signal Processing, Intelligent Antenna.",
    date: ["2025-10-16", "2025-10-27", "2025-10-28"],
    topics: ["Case studies – Machine Learning in Signal Processing, Intelligent Antenna.", "Module:7 Deep Learning Simple Feed Forward Networks", "Computational graphs for Deep Learning"]
  },
  {
    id: 14,
    week: "Week 14",
    title: "Convolutional Networks",
    date: ["2025-10-30", "2025-11-03", "2025-11-04"],
    topics: ["Convolutional Networks", "Recurrent Neural Networks", "Kernel Machines"]
  },
  {
    id: 15,
    week: "Week 15",
    title: "Hidden Markov Models -I",
    date: ["2025-11-06", "2025-11-10", "2025-11-11"],
    topics: ["Hidden Markov Models -I", "Hidden Markov Models - II", "Guest Lecture by Industry Expert"]
  },
  {
    id: 16,
    week: "Week 16",
    title: "Industrial Visit",
    date: ["2025-11-13"],
    topics: ["Industrial Visit"]
  }
]
)

  // Projects
  const [projects] = useState([
{
id: 1,
title: "AI Botnet detection using federated learning",
description: "This project develops a decentralized AI model for detecting botnets across IoT devices. Federated learning enhances privacy while improving real-time threat identification.",
teamMembers: "Mukeshkhanna J, Abinav N, Dhanvasanth R",
},
{
id: 2,
title: "EEG - Based Seizure Detection using SNN",
description: "The system uses spiking neural networks to identify seizure patterns from EEG signals. It offers efficient real-time monitoring for patients with neurological conditions.",
teamMembers: "S Deepika Sri, Harini S",
},
{
id: 3,
title: "Hybrid QNN-MoR Reinforcement Framework for Hallucination Detection and Reduction in LLM Outputs",
description: "This framework integrates quantum neural networks with reinforcement learning to minimize hallucinations in large language model outputs. It enhances model reliability and interpretability.",
teamMembers: "Aviral Khandelwal, Shavesh R, Aditya Dwivedi, Atharv Sinha",
},
{
id: 4,
title: "Realtime Accent and speech disorder aid",
description: "The project builds a speech recognition tool to identify accent variation and assist users with speech disorders. It uses AI-based voice modulation for adaptive feedback.",
teamMembers: "Vaibhav P, Mathiyalagan S, Dhruwarakesh V",
},
{
id: 5,
title: "BirdNet-6G: AI-Based Modeling of Migratory Bird Pathways via 6G-Inspired Routing Algorithms",
description: "BirdNet-6G simulates bird migration patterns using AI routing inspired by 6G communication networks. It supports ecological monitoring and predictive migration analysis.",
teamMembers: "M. S. Praveen Kumar, Sriiravina R.K.",
},
{
id: 6,
title: "Design a website for AI&ML course",
description: "This project creates a dynamic website to support AI & ML coursework. It hosts interactive content, project showcases, and learning resources for students.",
teamMembers: "M Revanth Kanna, Ithihas Thiruvenkata Durai, Vedvesar S.G",
},
{
id: 7,
title: "Optimisation of Image Detection CNN for FPGA based device",
description: "The system optimizes convolutional neural networks for efficient image detection on FPGA hardware. It aims to achieve high performance with lower power consumption.",
teamMembers: "Prakhar Singh, Avni Indravadan Patel, Deepali Banka",
},
{
id: 8,
title: "Archeological Ancient Letter Detection using RCNN-based Model",
description: "An RCNN-based model identifies and reconstructs ancient inscriptions from archeological artifacts. It aids historians by automating character detection and pattern analysis.",
teamMembers: "Shyam Sundhar S, Vivek V, Hrishikesh Varahan R",
},
{
id: 9,
title: "AI Based Detection of Polymorphic Malware in Simulated IoT Environments Using EAS-GRU",
description: "This AI system employs the EAS-GRU model to detect polymorphic malware in IoT simulations. It enhances network defense through adaptive sequence analysis.",
teamMembers: "Rishabh Rathod, Ronie Samuel",
},
{
id: 10,
title: "Detection of Malware files using transfer learning, rcnn and deep learning methods",
description: "The project employs transfer learning and deep neural architectures to detect malware files. It leverages RCNNs for efficient pattern recognition in large datasets.",
teamMembers: "Sreelakshmi Sajith, Jianna Maria Joseph",
},
{
id: 11,
title: "XAI-Driven Cyber Threat Detection Using SHAP and LIME in Hybrid Intrusion Detection Systems",
description: "This system uses explainable AI techniques like SHAP and LIME to improve network threat transparency. The hybrid IDS enhances both interpretability and robustness.",
teamMembers: "Akash Kumar Senani, Samarth Pathak",
},
{
id: 12,
title: "Minefield navigation using Quantum DRL in UAV Systems",
description: "A quantum deep reinforcement learning approach enables UAVs to navigate minefields safely. The system enhances real-time decision-making under uncertain conditions.",
teamMembers: "Divya Ranjith, Pranav P K, Sinthana P",
},
{
id: 13,
title: "Adversarial Attack Defense for Autonomous Driving Systems",
description: "This project builds resilience in self-driving vehicles against adversarial AI attacks. It strengthens perception and control modules through robust model training.",
teamMembers: "Saranes, Arjun",
},
{
id: 14,
title: "Anomaly Detection in Satellite Imagery for Urban Infrastructure Monitoring",
description: "AI methods analyze satellite imagery to detect anomalies in urban structures. The project supports predictive maintenance and infrastructure planning.",
teamMembers: "Amritha Prasad, V Srishti",
},
{
id: 15,
title: "AI based recommendation schemes for Farmers",
description: "This system recommends optimal crops, fertilizers, and irrigation schedules for farmers. It uses AI-based analytics to enhance agricultural productivity and sustainability.",
teamMembers: "Akash S, Jeya Madhavan S S",
},
{
id: 16,
title: "Secure Loan Prediction using Quantum Homomorphic Encryption",
description: "The project focuses on privacy-preserving loan predictions with quantum homomorphic encryption. It ensures financial data confidentiality while maintaining model accuracy.",
teamMembers: "Prabuddha, Ayush Yadav, Kumari Shambhavi",
},
{
id: 17,
title: "Design and Implementation of Adaptive Game Agent",
description: "This system creates an AI-driven agent that learns and adapts to player behavior. It improves gaming experiences through reinforcement-based strategy adjustments.",
teamMembers: "M Omar, Viswasurya P",
},
{
id: 18,
title: "Cross-Channel AI-Driven Social Engineering Attack Detector with LLM Robustness & Trust Graph Modeling",
description: "The project detects social engineering attacks using AI across multiple communication channels. It integrates trust graphs and LLM validation for contextual awareness.",
teamMembers: "Hirendra B, Janarthan Madhu, S Karthikeyan",
},
{
id: 19,
title: "Phishing URL detection",
description: "An ML-based tool detects and classifies phishing URLs in real time. It leverages ensemble techniques for enhanced accuracy against evolving cyber threats.",
teamMembers: "Bala Trishank, Santhoshi Pragathi, Lakshitha",
},
{
id: 20,
title: "Creating Animated Gif and Videos",
description: "This project designs a simple tool for generating creative GIFs and videos. It streamlines content creation with easy animation and media editing features.",
teamMembers: "Aryaan Ganesh, Naveen Kumar S, Nirmal",
},
{
id: 21,
title: "Multimodal Sketch of Thought: Improving Reasoning in Language Models",
description: "The research enhances reasoning in LLMs through multimodal sketch-based representation. It strengthens logical inference and conceptual understanding.",
teamMembers: "V P Kishore, P Nagarjun, R Sanjay",
},
{
id: 22,
title: "Hybrid Dark Pattern Detection System using CNN and NLP",
description: "This hybrid model detects deceptive design patterns using CNNs and NLP techniques. It promotes ethical UI design by flagging manipulative user flows.",
teamMembers: "Rohith Kumar V, Hamsavardhan O M",
},
{
id: 23,
title: "Cardiovascular Risk Prediction System",
description: "An AI-based system predicts cardiovascular disease risks using clinical and lifestyle data. It assists doctors in preventive diagnostics and personalized care.",
teamMembers: "Koustubh, Pranav, Avinash, Tejas",
},
{
id: 24,
title: "Zero-Day Attack Detection Using Few-Shot Learning",
description: "This project detects zero-day attacks with minimal data using few-shot learning. It enhances cybersecurity readiness for previously unseen threats.",
teamMembers: "Rohith Kodali",
},
{
id: 25,
title: "Arrythmia detection using adaptive weighted gaussian KNN",
description: "The system detects cardiac arrhythmias using an adaptive weighted Gaussian KNN algorithm. It improves diagnostic accuracy for ECG-based heart monitoring.",
teamMembers: "Prahaadeeswar",
},
]);
  // Model Question Papers
  const [modelQPs] = useState({
    CAT1: [
    {
      id: 1,
      name: "CAT1 Sample Paper",
      uploadDate: "2025-11-05",
      duration:"90Mins",
      totalMarks:"50",
      viewLink: "https://drive.google.com/drive/folders/1J-0kJjwarlngEEuD_tCag2f6DBfYmysp?usp=sharing"
    }
    ],
    CAT2: [
      {
        id: 2,
        name: "CAT2 Sample Paper",
        uploadDate: "2025-11-05",
        duration:"90Mins",
        totalMarks:"50",
        viewLink: "https://examcooker.acmvit.in/past_papers/cm28mrpw8002j6bf76e3pvoch"
      },

    ],
    FAT: [
      {
        id: 3,
        name: "FAT Sample Paper",
        uploadDate: "2025-11-05",
        duration:"180Mins",
        totalMarks:"100",
        viewLink: "https://drive.google.com/drive/folders/1oAWWJnKPWOoY0DK_3-_UkwpDA064TwJz?usp=sharing"
      }

    ],
  })
  const [referenceBooks] = useState([
    {
    id: 1,
    title: "Artificial Intelligence: Principles and Applications",
    author: "Vinod Chandra S.S, Anand Hareendran S.",
    viewLink: "E-book is currently unavailable, will update you once available",
    DownloadLink:"",
    },
    {
    id: 2,
    title: "Introduction to Machine Learning",
    author: "Ethem Alpaydin",
    viewLink: "https://drive.google.com/file/d/1wLfUa_SXLBYmdHqaXTQ_0y6onOkAGmYM/view?usp=sharing",
    DownloadLink:"https://drive.google.com/uc?export=download&id=1wLfUa_SXLBYmdHqaXTQ_0y6onOkAGmYM",
    },
    ]);

  // Reference Books
 

  // Textbooks
  const [textbooks] = useState([
    {
    id: 1,
    title: "Artificial Intelligence – A Modern Approach",
    author: "Stuart J. Russell, Peter Norvig",
    viewLink: "E-book is currently unavailable, will update you once available",
    DownloadLink:"",
    },
    ]);

  // Animated Videos
  const [animatedVideos] = useState({
  1: [
    {
      id: 1,
      title: "Module 1",
      duration: "08:39",
      uploadDate: "2025-11-05",
      url: "https://drive.google.com/file/d/1p-ahacmjXEEo-IHHkZ_-R_wn-KF_WNFh/view?usp=sharing"
    }
  ],
  2: [
    {
      id: 2,
      title: "Module 2",
      duration: "02:10",
      uploadDate: "2025-11-05",
      url: "https://drive.google.com/drive/folders/1MvB_V56PNaELSRdmC0Z4kQtOUsUFwLqp?usp=sharing"
    }
  ],
  3: [
    {
      id: 3,
      title: "Module 3",
      duration: "02:59",
      uploadDate: "2025-11-05",
      url: "https://drive.google.com/drive/folders/1SkOYHEsvryvtxIEVRtOsbww5TyWMbTZo?usp=sharing"
    }
  ],
  4: [
    {
      id: 4,
      title: "Module 4",
      duration: "02:11",
      uploadDate: "2025-11-05",
      url: "https://drive.google.com/drive/folders/1yUGuGzbdQDgVmR6MpMtXvnwHGSJuEduk?usp=sharing"
    }
  ],
  5: [
    {
      id: 5,
      title: "Module 5",
      duration: "13:55",
      uploadDate: "2025-11-05",
      url: ""
    }
  ],
  6: [
    {
      id: 6,
      title: "Module 6",
      duration: "15:40",
      uploadDate: "2025-11-05",
      url: ""
    }
  ],
  7: [
    {
      id: 7,
      title: "Module 7",
      duration: "09:50",
      uploadDate: "2025-11-05",
      url: ""
    }
  ]
});

  const classroomName = "BECE309L ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"
  const teacherName = "Prof. Vijay Kumar"
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
                //const daysLeft = daysUntilDue(project.dueDate)
                const isOverdue = false //daysLeft < 0 && project.status !== "completed"

                return (
                  <Card
                    key={project.id}
                    className={`hover:shadow-lg transition-shadow ${isOverdue ? "border-red-300 bg-red-50" : ""}`}
                  >
                    <CardContent className="p-6">
                       <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3 flex-1">
                           {/* {getProjectIcon(project.status)} */}
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-4 text-sm border-t pt-4">
                          <span className="text-gray-700">Team Members :- {project.teamMembers}</span>
                        </div>
                      </div> 

                      
                      <div className="flex gap-2 mt-4">

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
                            <a href={qp.viewLink}>view</a>
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
                            <a href={qp.viewLink}>view</a>
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
                            <a href={qp.viewLink}>view</a>
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
                        
                      </div>
                      <Button variant="outline" asChild>
                        <a href={book.viewLink} target="_blank" rel="noopener noreferrer">
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
                  title: "Welcome to BECE309L Artificial Intelligence and Machine Learning",
                  content:
                    "Welcome everyone! Please check all sections for the course materials. Don't forget to watch the introductory videos and review the syllabus.",
                  date: "2025-11-06",
                  important: true,
                  isNew: true,
                },
                {
                  id: 2,
                  title: "Updated Model Question Papers",
                  content: "New FAT sample papers have been uploaded. Start practicing for your assessments.",
                  date: "2025-11-06",
                  important: false,
                  isNew: true,
                }
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
                    <p className="text-g ray-700 leading-relaxed">{announcement.content}</p>
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
