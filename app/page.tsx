import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Linkedin, Trophy, Code, Star } from "lucide-react"
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
              <Link href="#about" className="hover:text-foreground/80 transition-colors duration-200">
                About
              </Link>
              <Link href="#skills" className="hover:text-foreground/80 transition-colors duration-200">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-foreground/80 transition-colors duration-200">
                Projects
              </Link>
              <Link href="#ai-tools" className="hover:text-foreground/80 transition-colors duration-200">
                AI & Tools
              </Link>
              <Link href="#contact" className="hover:text-foreground/80 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container px-4 py-24 md:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-400/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-red-500/10 to-yellow-500/10"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                Hi, I'm Mohd Quamar Tyagi
              </h1>
              <h2 className="text-xl text-muted-foreground sm:text-2xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Software Development Engineer & Competitive Programmer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Computer Science Engineering student at Chandigarh Engineering College with extensive experience in
                full-stack development, blockchain technologies, and competitive programming. Ranked in top 1% on
                Codeforces with Candidate Master rating.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                asChild
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://github.com/Tyagiquamar" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/mohd-quamar-tyagi"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:mohdquamartyagi@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-96 h-96 rounded-full overflow-hidden ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/50">
              <Image
                src="/images/profile-rose.jpg"
                width={400}
                height={400}
                alt="Mohd Quamar Tyagi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm a Computer Science Engineering student at Chandigarh Engineering College with a passion for competitive
            programming and full-stack development. I have professional experience as an SDE Intern at The Linux
            Foundation and ITJOBS, where I've worked on cutting-edge technologies including blockchain, microservices,
            and web development.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/50 dark:to-orange-900/50 border-yellow-200">
              <CardHeader className="text-center">
                <Trophy className="mx-auto h-8 w-8 text-yellow-500" />
                <CardTitle>Top 1% Coder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Candidate Master on Codeforces</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/50 border-blue-200">
              <CardHeader className="text-center">
                <Code className="mx-auto h-8 w-8 text-blue-500" />
                <CardTitle>7.99 CGPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Computer Science Engineering</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50 border-green-200">
              <CardHeader className="text-center">
                <Star className="mx-auto h-8 w-8 text-green-500" />
                <CardTitle>Top 0.6%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">LeetCode Guardian Badge</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Skills & Profiles
          </h2>

          {/* Competitive Programming Profiles */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Competitive Programming Profiles</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/50 border-blue-200 hover:border-blue-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Codeforces</CardTitle>
                      <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        Candidate Master (2038)
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Top 1% Globally</p>
                  <Link
                    href="https://codeforces.com/profile/altair_45"
                    className="text-blue-600 hover:text-blue-700 hover:underline text-sm transition-colors duration-200 font-medium"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/50 dark:to-red-900/50 border-orange-200 hover:border-orange-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">LeetCode</CardTitle>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Guardian (2400+)</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Top 0.6% Globally</p>
                  <Link
                    href="https://leetcode.com/u/Altair_4/"
                    className="text-orange-600 hover:text-orange-700 hover:underline text-sm transition-colors duration-200 font-medium"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-900/50 border-amber-200 hover:border-amber-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">CodeChef</CardTitle>
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">5★ (2017)</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">5-Star Rating</p>
                  <Link
                    href="https://www.codechef.com/users/tyagiquamar"
                    className="text-amber-600 hover:text-amber-700 hover:underline text-sm transition-colors duration-200 font-medium"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Skills */}
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
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>C++</Badge>
                  <Badge>Java</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>Microservices</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Docker</Badge>
                  <Badge>Nginx</Badge>
                  <Badge>gRPC</Badge>
                  <Badge>Linux</Badge>
                  <Badge>Minikube</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Azure</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>MongoDB</Badge>
                  <Badge>SQL</Badge>
                  <Badge>NoSQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Data Structures</Badge>
                  <Badge>Algorithms</Badge>
                  <Badge>OOP</Badge>
                  <Badge>SDLC</Badge>
                  <Badge>Computer Networks</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <CardTitle>Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI & Tools Section */}
      <section id="ai-tools" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            AI & Tools
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🤖</div>
                    <p className="text-sm font-semibold text-muted-foreground">AI Interviewer Agent</p>
                  </div>
                </div>
                <CardTitle>AI Interviewer Agent</CardTitle>
                <CardDescription>
                  Intelligent multi-stage interview simulation platform powered by advanced LLMs
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
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Multi-stage interview simulation with realistic conversational AI</p>
                    <p>• Adaptive difficulty based on user responses</p>
                    <p>• Real-time feedback and detailed performance analysis</p>
                    <p>• Support for multiple interview types and domains</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://ai-interviewer-agent.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🏗️</div>
                    <p className="text-sm font-semibold text-muted-foreground">SystemForge</p>
                  </div>
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
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• 22+ pre-built system components (Load Balancer, Cache, Databases, etc.)</p>
                    <p>• Drag-and-drop canvas with smart connection system</p>
                    <p>• 6 real-world templates (URL Shortener, Chat App, Instagram Feed, etc.)</p>
                    <p>• Educational learning layer with component explanations</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://system-blueprint-studio.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <Image
                  src="/projects/decentralized-app.jpg"
                  width={400}
                  height={200}
                  alt="Decentralized Application"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Decentralized Application</CardTitle>
                <CardDescription>
                  Web3 Platform with DAO Voting and Crowdfunding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Web3</Badge>
                    <Badge variant="outline">Smart Contracts</Badge>
                    <Badge variant="outline">Solidity</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p className="font-medium">Cross-Chain Architecture:</p>
                    <p>
                      • <strong>Ethereum:</strong> Primary smart contract deployment with robust security features and
                      established DeFi ecosystem integration
                    </p>
                    <p>
                      • <strong>Polygon:</strong> Layer 2 scaling solution providing fast, low-cost transactions while
                      maintaining Ethereum compatibility
                    </p>
                    <p>
                      • <strong>Arbitrum:</strong> Optimistic rollup implementation ensuring high throughput and reduced
                      gas fees for complex operations
                    </p>
                    <p>• Seamless cross-chain asset transfers and unified governance across all supported networks</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://v0-decentralized-application-develo.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://github.com/Tyagiquamar/vote">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <Image
                  src="/projects/cryptotrade.jpg"
                  width={400}
                  height={200}
                  alt="CryptoTrade"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>CryptoTrade</CardTitle>
                <CardDescription>
                  Real-time cryptocurrency tracker with market trends and price analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Chakra UI</Badge>
                    <Badge variant="outline">Crypto API</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Real-time cryptocurrency data integration</p>
                    <p>• 30% increase in user engagement</p>
                    <p>• 95% improvement in page load speed</p>
                    <p>• Market trends and price tracking features</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://cryptoxtrade.netlify.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://github.com/Tyagiquamar/crytoApp">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <Image
                  src="/projects/nexlink.jpg"
                  width={400}
                  height={200}
                  alt="NexLink"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>NexLink</CardTitle>
                <CardDescription>
                  URL shortener with real-time analytics and performance tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">Serverless</Badge>
                    <Badge variant="outline">Analytics</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Advanced URL shortening with custom aliases</p>
                    <p>• Real-time analytics and click tracking</p>
                    <p>• QR code generation and sharing features</p>
                    <p>• Dashboard with performance metrics</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://nex-link-url-shortener.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://github.com/Tyagiquamar">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <Image
                  src="/projects/accommodation-finder.jpg"
                  width={400}
                  height={200}
                  alt="Accommodation Finder"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Accommodation Finder</CardTitle>
                <CardDescription>
                  Full-stack booking platform with authentication, reviews, and Dockerized backend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Secure user authentication and authorization</p>
                    <p>• Full-stack booking and reservation system</p>
                    <p>• User reviews and ratings functionality</p>
                    <p>• Dockerized backend for easy deployment</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://coderunner07.netlify.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="transition-all duration-200 hover:scale-105">
                    <Link href="https://github.com/Tyagiquamar">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">SDE-1 - Zomato</CardTitle>
                      <CardDescription>Gurgaon, India</CardDescription>
                    </div>
                    <Image
                      src="/logos/zomato-logo.jpg"
                      width={60}
                      height={60}
                      alt="Zomato"
                      className="w-16 h-16 object-contain rounded"
                    />
                    <Badge variant="secondary">Jul 2025 - Dec 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Reduced API round-trip overhead by removing redundant gRPC/MySQL calls, improving p90 latency 5x at massive scale</p>
                    <p>• Automated ticket workflows and chatbot link-ticket generation, cutting manual ops by 80% and reducing support load by 35%</p>
                    <p>• Integrated external CX platforms (Zendesk, Freshdesk) with ticketing, data-sync, and callback handling</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Golang</Badge>
                    <Badge variant="outline">gRPC</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">SDE Intern - The Linux Foundation</CardTitle>
                      <CardDescription>Seoul (Remote)</CardDescription>
                    </div>
                    <Image
                      src="/logos/linux-foundation-logo.jpg"
                      width={60}
                      height={60}
                      alt="The Linux Foundation"
                      className="w-16 h-16 object-contain rounded"
                    />
                    <Badge variant="secondary">Nov 2023 - Mar 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Replaced HTTPS calls with gRPC architecture, achieving 60% faster data transfer</p>
                    <p>• Implemented CloudForet development images supporting 50+ microservices</p>
                    <p>• Streamlined development lifecycle with advanced container orchestration</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Nginx</Badge>
                    <Badge variant="outline">gRPC</Badge>
                    <Badge variant="outline">Linux</Badge>
                    <Badge variant="outline">Minikube</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">SDE Intern - ITJOBS</CardTitle>
                      <CardDescription>Mumbai, Maharashtra</CardDescription>
                    </div>
                    <Image
                      src="/logos/itjobs-logo.jpg"
                      width={60}
                      height={60}
                      alt="ITJOBS"
                      className="w-16 h-16 object-contain rounded"
                    />
                    <Badge variant="secondary">Jul 2023 - Sep 2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Redesigned 12 core web pages ensuring accessibility compliance</p>
                    <p>• Designed automated bot detection removing 2,000+ inappropriate posts</p>
                    <p>• Deployed reCAPTCHA improving data integrity for 10,000+ monthly visitors</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                just want to chat about algorithms and competitive programming, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>mohdquamartyagi@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/Tyagiquamar" className="hover:underline">
                    github.com/Tyagiquamar
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://linkedin.com/in/mohd-quamar-tyagi" className="hover:underline">
                    linkedin.com/in/mohd-quamar-tyagi
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="h-5 w-5 text-muted-foreground">📱</span>
                  <span>+91-8279581337</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="h-5 w-5 text-muted-foreground">📍</span>
                  <span>Chandigarh, India</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span className="font-semibold">Mohd Quamar Tyagi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohd Quamar Tyagi. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/Tyagiquamar" className="text-muted-foreground hover:text-foreground">
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/mohd-quamar-tyagi"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
