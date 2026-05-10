import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Linkedin, Code, Star, Zap, Brain, Workflow, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Mohd Quamar Tyagi</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#work" className="hover:text-foreground/80 transition-colors duration-200">
                Work
              </Link>
              <Link href="#ai-systems" className="hover:text-foreground/80 transition-colors duration-200">
                AI Systems
              </Link>
              <Link href="#competitive" className="hover:text-foreground/80 transition-colors duration-200">
                Competitive
              </Link>
              <Link href="#ai-tools" className="hover:text-foreground/80 transition-colors duration-200">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-foreground/80 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container px-4 py-24 md:py-32">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_350px] lg:gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Ex-Zomato Backend Engineer
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Building AI agents, orchestration systems, and scalable backend infrastructure
              </p>
              <p className="text-base text-muted-foreground max-w-[600px]">
                Specialized in LLM orchestration, backend systems design, and competitive programming. 10+ AI tools built. 
                Candidate Master on Codeforces, Top 0.6% on LeetCode.
              </p>
            </div>

            {/* Proof Chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-3 py-2 bg-muted rounded-full border border-muted-foreground/20 text-sm font-medium">
                Ex-Zomato Backend
              </div>
              <div className="px-3 py-2 bg-muted rounded-full border border-muted-foreground/20 text-sm font-medium">
                10+ AI Tools
              </div>
              <div className="px-3 py-2 bg-muted rounded-full border border-muted-foreground/20 text-sm font-medium">
                Codeforces CM
              </div>
              <div className="px-3 py-2 bg-muted rounded-full border border-muted-foreground/20 text-sm font-medium">
                LeetCode Top 0.6%
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                <Link href="#work">View Engineering Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://github.com/Tyagiquamar" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/mohd-quamar-tyagi" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:mohdquamartyagi@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex items-center justify-center hidden lg:flex">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden ring-2 ring-muted-foreground/20">
              <Image
                src="/images/profile-rose.jpg"
                width={320}
                height={320}
                alt="Mohd Quamar Tyagi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Engineering Work */}
      <section id="work" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Featured Engineering Work
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🤖</div>
                </div>
                <CardTitle>AI Interviewer Agent</CardTitle>
                <CardDescription>
                  Structured LLM-powered interview simulation with comprehensive evaluation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Gemini</Badge>
                    <Badge variant="outline">LLM Orchestration</Badge>
                    <Badge variant="outline">Supabase</Badge>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Transcript persistence & analysis</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Coverage verification & rubric evaluation</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Structured hiring reports</li>
                  </ul>
                  <Button size="sm" asChild variant="default" className="w-full mt-4">
                    <Link href="https://ai-interviewer-agent.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">⚙️</div>
                </div>
                <CardTitle>Zomato Backend Systems</CardTitle>
                <CardDescription>
                  Distributed systems, workflow automation, and external integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Go</Badge>
                    <Badge variant="outline">gRPC</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Backend workflow automation</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Ticketing & support infrastructure</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> External CX integrations</li>
                  </ul>
                  <div className="pt-2 text-sm text-muted-foreground italic">
                    Internal system • Production-grade infrastructure
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🛠️</div>
                </div>
                <CardTitle>AI Tools & Automation Suite</CardTitle>
                <CardDescription>
                  10+ AI-powered tools and automation workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Claude API</Badge>
                    <Badge variant="outline">Prompt Engineering</Badge>
                    <Badge variant="outline">Orchestration</Badge>
                    <Badge variant="outline">LLMs</Badge>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> AI agents & multi-step workflows</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Structured outputs & validation</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Product prototyping</li>
                  </ul>
                  <Button size="sm" asChild variant="outline" className="w-full mt-4">
                    <Link href="#ai-tools">
                      View All Tools <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🔗</div>
                </div>
                <CardTitle>Distributed Systems & gRPC</CardTitle>
                <CardDescription>
                  Linux Foundation microservices and system architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">gRPC</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Microservices</Badge>
                    <Badge variant="outline">Linux</Badge>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> gRPC-based backend infrastructure</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> Efficient service communication</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" /> System design & optimization</li>
                  </ul>
                  <div className="pt-2 text-sm text-muted-foreground italic">
                    Professional & educational work
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Systems Depth Section */}
      <section id="ai-systems" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            AI Engineering Capabilities
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">LLM Orchestration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multi-step workflows, agent design, state management, and complex reasoning chains with LLMs
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">Prompt Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Structured prompts, few-shot learning, chain-of-thought, and specialized prompt patterns
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">Evaluation & Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Output validation, rubric-based evaluation, coverage analysis, and quality metrics
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Workflow className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  End-to-end automation, process orchestration, and intelligent task sequencing
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Code className="h-8 w-8 text-cyan-500 mb-2" />
                <CardTitle className="text-lg">Structured Outputs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  JSON schema validation, typed outputs, semantic parsing, and data extraction
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Star className="h-8 w-8 text-amber-500 mb-2" />
                <CardTitle className="text-lg">Error Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Retry strategies, fallback mechanisms, recovery workflows, and resilient systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section id="competitive" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Competitive Programming Excellence
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Codeforces</h3>
                  <Badge className="bg-blue-500 text-white">CM</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">2038+</div>
                <p className="text-sm text-muted-foreground">Candidate Master</p>
                <p className="text-sm text-muted-foreground">Top 1% Globally</p>
                <Link href="https://codeforces.com/profile/altair_45" className="text-blue-600 hover:underline text-sm font-medium">
                  View Profile →
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">LeetCode</h3>
                  <Badge className="bg-orange-500 text-white">Guardian</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">2400+</div>
                <p className="text-sm text-muted-foreground">Guardian Badge</p>
                <p className="text-sm text-muted-foreground">Top 0.6% Globally</p>
                <Link href="https://leetcode.com/u/Altair_4/" className="text-orange-600 hover:underline text-sm font-medium">
                  View Profile →
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">CodeChef</h3>
                  <Badge className="bg-amber-500 text-white">⭐⭐⭐⭐⭐</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">5 Star</div>
                <p className="text-sm text-muted-foreground">Competitive Programmer</p>
                <p className="text-sm text-muted-foreground">Advanced Problem Solver</p>
                <Link href="https://codechef.com/" className="text-amber-600 hover:underline text-sm font-medium">
                  View Profile →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>AI & LLM</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>LLM</Badge>
                  <Badge>Prompt Engineering</Badge>
                  <Badge>AI Agents</Badge>
                  <Badge>Orchestration</Badge>
                  <Badge>Claude</Badge>
                  <Badge>Cursor</Badge>
                  <Badge>Lovable</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Backend & Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Go</Badge>
                  <Badge>Python</Badge>
                  <Badge>gRPC</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Microservices</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Frontend & Web</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Databases & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Supabase</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Redis</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Competitive Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Data Structures</Badge>
                  <Badge>Algorithms</Badge>
                  <Badge>Problem Solving</Badge>
                  <Badge>C++</Badge>
                  <Badge>Java</Badge>
                  <Badge>Python</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>Linux</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI & Tools Section */}
      <section id="ai-tools" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            AI & Tools Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-5xl">🤖</div>
                </div>
                <CardTitle>AI Interviewer Agent</CardTitle>
                <CardDescription>
                  Intelligent multi-stage interview simulation powered by advanced LLMs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Claude API</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Prompt Engineering</Badge>
                    <Badge variant="outline">AI Agents</Badge>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href="https://ai-interviewer-agent.vercel.app/">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-5xl">🏗️</div>
                </div>
                <CardTitle>SystemForge</CardTitle>
                <CardDescription>
                  Open-source system design playground with drag-and-drop architecture builder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Canvas API</Badge>
                    <Badge variant="outline">System Design</Badge>
                    <Badge variant="outline">Interactive Learning</Badge>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href="https://system-blueprint-studio.vercel.app/">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-5xl">☁️</div>
                </div>
                <CardTitle>Cloud Architect Compass</CardTitle>
                <CardDescription>
                  Interactive AWS architecture visualization and learning platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Cloud Architecture</Badge>
                    <Badge variant="outline">Interactive Learning</Badge>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href="https://cloud-architect-compass.vercel.app/">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-5xl">🎨</div>
                </div>
                <CardTitle>Imagify</CardTitle>
                <CardDescription>
                  AI-powered image generation and manipulation platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">AI Image Gen</Badge>
                    <Badge variant="outline">Cloudinary</Badge>
                    <Badge variant="outline">Web Design</Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href="https://imagify-indol.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/mthirumalai2905/imagify">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🗄️</div>
                </div>
                <CardTitle>Quest SQL Arena</CardTitle>
                <CardDescription>
                  AI-powered SQL learning platform with gamified progression
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">Gamification</Badge>
                    <Badge variant="outline">AI-Powered</Badge>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href="https://quest-sql-arena.vercel.app/">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">📄</div>
                </div>
                <CardTitle>Resumai</CardTitle>
                <CardDescription>
                  AI-powered resume builder and optimization tool
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">Resume Building</Badge>
                    <Badge variant="outline">OpenAI</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/Tyagiquamar/Resumai">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">🔗</div>
                </div>
                <CardTitle>URL Shortener</CardTitle>
                <CardDescription>
                  Fast and reliable URL shortening service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">URL Shortening</Badge>
                    <Badge variant="outline">Database</Badge>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href="https://nex-link-url-shortener.vercel.app/">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-t-lg flex items-center justify-center mb-4">
                  <div className="text-4xl">💹</div>
                </div>
                <CardTitle>CryptoXtrade</CardTitle>
                <CardDescription>
                  Cryptocurrency trading and analytics platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Crypto</Badge>
                    <Badge variant="outline">Trading</Badge>
                    <Badge variant="outline">API Integration</Badge>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href="https://cryptoxtrade.netlify.app/">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Currently Building Section */}
      <section className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Currently Building</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Focused on AI agents, voice AI workflows, automation systems, and backend infrastructure for fast-moving startups. 
            Open to founding engineer and core backend engineering roles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-base">AI Agents</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Voice AI</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Automation</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Backend Systems</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Startups</Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Looking for AI / Backend / Founding Engineer Roles
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to backend, AI engineering, infrastructure, and early-stage product engineering roles. 
              Let's build something amazing together.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 Mohd Quamar Tyagi. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/Tyagiquamar" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/mohd-quamar-tyagi" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="mailto:mohdquamartyagi@gmail.com" className="hover:text-foreground transition-colors">
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
