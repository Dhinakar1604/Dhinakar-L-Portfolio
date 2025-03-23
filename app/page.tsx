import Link from "next/link"
import { Mail, Linkedin, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Dhinakar L</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary">
            <img src="/placeholder.svg?height=128&width=128" alt="Dhinakar L" className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Dhinakar L</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            AI & ML Student | Front-End Developer | UI/UX Designer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                An enthusiastic AI and ML student with a strong background in front-end development and a keen interest
                in full-stack development. Experienced in wireframing, developing responsive web applications with
                modern frameworks, and designing intuitive UI/UX.
              </p>
              <p className="text-lg leading-relaxed">
                Also skilled in video editing, blending technical proficiency with creativity to enhance software
                solutions.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Coimbatore, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9944243963</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>dhinakar404@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link
                    href="https://www.linkedin.com/in/dhinakar-l-9554b5263/"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/dhinakar-l-9554b5263
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Bachelor of Technology in Artificial Intelligence and Machine Learning
                  </h3>
                  <p className="text-lg text-muted-foreground">SNS College of Technology, Coimbatore</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-medium">2022 - 2026</p>
                  <p className="text-muted-foreground">CGPA: 8.25/10</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Higher Secondary School Certificate</h3>
                  <p className="text-lg text-muted-foreground">Vivekam Matric Hr Sec School, Coimbatore</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-medium">2021 - 2022</p>
                  <p className="text-muted-foreground">Percentage: 82%</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Secondary School Leaving Certificate</h3>
                  <p className="text-lg text-muted-foreground">Vivekam Matric Hr Sec School, Coimbatore</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-medium">2019 - 2020</p>
                  <p className="text-muted-foreground">Percentage: 78%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl font-semibold">Web App Designing</h3>
                <p className="text-lg text-muted-foreground">Mindnotix Software Solutions, Coimbatore</p>
              </div>
              <div className="text-right">
                <p className="text-primary font-medium">Mar 2024 - Apr 2024</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
              <li>Developed Wireframing, Visual Design, graphical user interface</li>
              <li>Designed a web application to streamline project management for the company</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Gas and Smoke Detector"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Gas and Smoke Detector</h3>
                  <span className="text-sm text-muted-foreground">Mar 2023</span>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Developed a real-time sensor-based system for detecting gas leaks and smoke</li>
                  <li>Integrated GSM module to send SMS alerts during emergencies</li>
                  <li>Triggered alarms and safety protocols upon detecting hazardous levels</li>
                </ul>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Doctor Appointment System"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Doctor Appointment System</h3>
                  <span className="text-sm text-muted-foreground">Jan 2024</span>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Developed a system for patients to schedule and manage doctor appointments</li>
                  <li>Integrated SMS/Email reminders for appointment confirmations and updates</li>
                  <li>Implemented role-based access for doctors, patients, and admins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Skills & Interests</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">UI/UX Design – Figma</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Responsive Web Development – HTML, CSS, JS</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Front-End Development – React.js</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Basic Programming – Python</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium">Database Management System</h4>
                  <p className="text-muted-foreground">Infosys - 2024</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium">AI Bootcamp (ChatGPT)</h4>
                  <p className="text-muted-foreground">MindfulAI - 2023</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium">Git and GitHub</h4>
                  <p className="text-muted-foreground">Prepinsta - 2024</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex gap-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">English</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Tamil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                Feel free to reach out to me for any opportunities or collaborations. I'm always open to discussing new
                projects and ideas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">dhinakar404@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 9944243963</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Coimbatore, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/dhinakar-l-9554b5263/"
                    target="_blank"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </Link>
                  <Link
                    href="mailto:dhinakar404@gmail.com"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/40">
        <div className="container text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Dhinakar Lingappan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

