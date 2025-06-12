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
              <Link href="#contact" className="hover:text-foreground/80 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container px-4 py-24 md:py-32 overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/25 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-violet-800/15 to-cyan-700/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-800/15 via-teal-800/20 to-blue-900/25 animate-pulse"></div>

        {/* Enhanced floating elements with shadows */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-bounce shadow-2xl shadow-purple-500/50"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-pulse shadow-2xl shadow-blue-500/50"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-30 animate-bounce shadow-2xl shadow-green-500/50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-60 right-40 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-25 animate-pulse shadow-xl shadow-yellow-500/40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-18 h-18 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full opacity-25 animate-bounce shadow-xl shadow-rose-500/40"
          style={{ animationDelay: "0.5s" }}
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
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 btn-shadow"
                asChild
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 hover:scale-105 btn-shadow"
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
                href="https://www.linkedin.com/in/mohd-quamar-tyagi-5456b1225/"
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
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Mohd Quamar Tyagi"
              className="aspect-square overflow-hidden rounded-full object-cover"
            />
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
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/50 dark:to-orange-900/50 border-yellow-200 card-shadow hover-glow">
              <CardHeader className="text-center">
                <Trophy className="mx-auto h-8 w-8 text-yellow-500" />
                <CardTitle>Top 1% Coder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Candidate Master on Codeforces</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/50 border-blue-200 card-shadow hover-glow">
              <CardHeader className="text-center">
                <Code className="mx-auto h-8 w-8 text-blue-500" />
                <CardTitle>8.1 CGPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Computer Science Engineering</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50 border-green-200 card-shadow hover-glow">
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
      <section
        id="skills"
        className="container px-4 py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
            Skills & Profiles
          </h2>

          {/* Competitive Programming Profiles */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Competitive Programming Profiles</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-blue-500/30 hover:border-blue-400/50 card-shadow backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">Codeforces</CardTitle>
                      <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        Candidate Master (2038)
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-2">Top 1% Globally</p>
                  <Link
                    href="https://codeforces.com/profile/altair_45"
                    className="text-blue-400 hover:text-blue-300 hover:underline text-sm transition-colors duration-200 font-medium"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-orange-900/80 to-red-900/80 border-orange-500/30 hover:border-orange-400/50 card-shadow backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">LeetCode</CardTitle>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Guardian (2400+)</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-2">Top 0.6% Globally</p>
                  <Link
                    href="https://leetcode.com/u/Altair_4/"
                    className="text-orange-400 hover:text-orange-300 hover:underline text-sm transition-colors duration-200 font-medium"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-amber-900/80 to-yellow-900/80 border-amber-500/30 hover:border-amber-400/50 card-shadow backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">CodeChef</CardTitle>
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">5★ (2017)</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-2">5-Star Rating</p>
                  <Link
                    href="https://www.codechef.com/users/tyagiquamar"
                    className="text-amber-400 hover:text-amber-300 hover:underline text-sm transition-colors duration-200 font-medium"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600/80 text-white">Python</Badge>
                  <Badge className="bg-green-600/80 text-white">C++</Badge>
                  <Badge className="bg-orange-600/80 text-white">Java</Badge>
                  <Badge className="bg-yellow-600/80 text-white">JavaScript</Badge>
                  <Badge className="bg-purple-600/80 text-white">HTML/CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-600/80 text-white">React.js</Badge>
                  <Badge className="bg-green-600/80 text-white">Node.js</Badge>
                  <Badge className="bg-gray-600/80 text-white">Express.js</Badge>
                  <Badge className="bg-black/80 text-white">Next.js</Badge>
                  <Badge className="bg-blue-600/80 text-white">REST APIs</Badge>
                  <Badge className="bg-purple-600/80 text-white">Microservices</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600/80 text-white">Docker</Badge>
                  <Badge className="bg-green-600/80 text-white">Nginx</Badge>
                  <Badge className="bg-purple-600/80 text-white">gRPC</Badge>
                  <Badge className="bg-yellow-600/80 text-white">Linux</Badge>
                  <Badge className="bg-cyan-600/80 text-white">Minikube</Badge>
                  <Badge className="bg-orange-600/80 text-white">AWS</Badge>
                  <Badge className="bg-blue-600/80 text-white">Azure</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-600/80 text-white">MongoDB</Badge>
                  <Badge className="bg-blue-600/80 text-white">SQL</Badge>
                  <Badge className="bg-purple-600/80 text-white">NoSQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-600/80 text-white">Data Structures</Badge>
                  <Badge className="bg-blue-600/80 text-white">Algorithms</Badge>
                  <Badge className="bg-green-600/80 text-white">OOP</Badge>
                  <Badge className="bg-purple-600/80 text-white">SDLC</Badge>
                  <Badge className="bg-orange-600/80 text-white">Computer Networks</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-600/80 text-white">Git</Badge>
                  <Badge className="bg-black/80 text-white">GitHub</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container px-4 py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Decentralized Application Development</CardTitle>
                <CardDescription className="text-gray-300">
                  Web3 Platform with DAO Voting and Crowdfunding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-black/80 text-white border-gray-600">Next.js</Badge>
                    <Badge className="bg-purple-600/80 text-white border-purple-500">Web3</Badge>
                    <Badge className="bg-blue-600/80 text-white border-blue-500">Smart Contracts</Badge>
                    <Badge className="bg-gray-600/80 text-white border-gray-500">Solidity</Badge>
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <p className="font-medium text-white">Key Features:</p>
                    <p>
                      • <strong className="text-blue-400">DAO Voting:</strong> Decentralized governance platform
                      enabling token-gated voting, proposal creation, and real-time vote tracking via smart contracts
                    </p>
                    <p>
                      • <strong className="text-purple-400">Crowdfunding:</strong> Secure decentralized fundraising
                      platform with smart contract-based escrow, conditional fund releases, and automatic refund systems
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                  >
                    <Link href="https://v0-decentralized-application-develo.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 hover:scale-105"
                  >
                    <Link href="https://github.com/Tyagiquamar/vote">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">CryptoTrade</CardTitle>
                <CardDescription className="text-gray-300">
                  Real-time cryptocurrency tracker with market trends and price analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-cyan-600/80 text-white border-cyan-500">React.js</Badge>
                    <Badge className="bg-teal-600/80 text-white border-teal-500">Chakra UI</Badge>
                    <Badge className="bg-orange-600/80 text-white border-orange-500">Crypto API</Badge>
                    <Badge className="bg-yellow-600/80 text-white border-yellow-500">JavaScript</Badge>
                  </div>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p className="font-medium text-white">Key Features:</p>
                    <p>• Real-time cryptocurrency data integration</p>
                    <p>• 30% increase in user engagement</p>
                    <p>• 95% improvement in page load speed</p>
                    <p>• Market trends and price tracking features</p>
                    <p>• Direct link to crypto sites for buying selling </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 transition-all duration-200 hover:scale-105"
                  >
                    <Link href="https://cryptoxtrade.netlify.app/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 hover:scale-105"
                  >
                    <Link href="https://github.com/Tyagiquamar/crytoApp">
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
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Professional Experience</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">SDE Intern - The Linux Foundation</CardTitle>
                    <Badge className="bg-green-600/80 text-white">Nov 2023 - Mar 2024</Badge>
                  </div>
                  <CardDescription className="text-gray-300">Seoul (Remote)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Replaced HTTPS calls with gRPC architecture, achieving 60% faster data transfer</p>
                    <p>• Implemented CloudForet development images supporting 50+ microservices</p>
                    <p>• Streamlined development lifecycle with advanced container orchestration</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-blue-600/80 text-white border-blue-500">Docker</Badge>
                    <Badge className="bg-green-600/80 text-white border-green-500">Nginx</Badge>
                    <Badge className="bg-purple-600/80 text-white border-purple-500">gRPC</Badge>
                    <Badge className="bg-yellow-600/80 text-white border-yellow-500">Linux</Badge>
                    <Badge className="bg-cyan-600/80 text-white border-cyan-500">Minikube</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30 hover:border-slate-500/50 card-shadow backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">SDE Intern - ITJOBS</CardTitle>
                    <Badge className="bg-orange-600/80 text-white">Jul 2023 - Sep 2023</Badge>
                  </div>
                  <CardDescription className="text-gray-300">Mumbai, Maharashtra</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Redesigned 12 core web pages ensuring accessibility compliance</p>
                    <p>• Designed automated bot detection removing 2,000+ inappropriate posts</p>
                    <p>• Deployed reCAPTCHA improving data integrity for 10,000+ monthly visitors</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-cyan-600/80 text-white border-cyan-500">React.js</Badge>
                    <Badge className="bg-green-600/80 text-white border-green-500">Node.js</Badge>
                    <Badge className="bg-gray-600/80 text-white border-gray-500">Express.js</Badge>
                    <Badge className="bg-green-600/80 text-white border-green-500">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container px-4 py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
            Get In Touch
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                just want to chat about algorithms and competitive programming, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">mohdquamartyagi@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-gray-400" />
                  <Link
                    href="https://github.com/Tyagiquamar"
                    className="hover:underline text-gray-300 hover:text-white"
                  >
                    github.com/Tyagiquamar
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-gray-400" />
                  <Link
                    href="https://www.linkedin.com/in/mohd-quamar-tyagi-5456b1225/"
                    className="hover:underline text-gray-300 hover:text-white"
                  >
                    linkedin.com/in/mohd-quamar-tyagi
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="h-5 w-5 text-gray-400">📱</span>
                  <span className="text-gray-300">+91-8279581337</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="h-5 w-5 text-gray-400">📍</span>
                  <span className="text-gray-300">Muzaffarnagar, India</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-white" />
              <span className="font-semibold text-white">Mohd Quamar Tyagi</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mohd Quamar Tyagi. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/Tyagiquamar" className="text-gray-400 hover:text-white">
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohd-quamar-tyagi-5456b1225/"
                className="text-gray-400 hover:text-white"
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
