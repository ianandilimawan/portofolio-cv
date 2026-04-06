"use client";

import { useState, useEffect } from "react";
import { Download, Mail, MapPin, ExternalLink, Code, Briefcase, GraduationCap } from "lucide-react";

const personalInfo = {
  name: "Ian Andi Limawan",
  title: "Fullstack Developer",
  email: "ian.andilimawan@gmail.com",
  whatsapp: "6285121107577",
  location: "Jakarta, Indonesia",
  linkedin: "linkedin.com/in/ian-andi-15427a237",
  summary: "Passionate Fullstack Developer with 5+ years of experience building web applications. Specialized in React, Next.js, Angular, Vue, Laravel, and modern technologies.",
};

const experiences = [
  { id: 1, company: "PT. Redbuzz Mediatama", position: "Project Manager", period: "Aug 2023 - Present", highlights: ["Agile", "Team Management", "Project Delivery"] },
  { id: 2, company: "PT. Redbuzz Mediatama", position: "Lead Developer", period: "Jan 2023 - Aug 2023", highlights: ["Architecture", "Mentorship", "Code Review"] },
  { id: 3, company: "PT. Redbuzz Mediatama", position: "Full Stack Developer", period: "Jan 2022 - Jan 2023", highlights: ["API Development", "Frontend", "Database"] },
  { id: 4, company: "PT. Anugrah Wijaya Raga", position: "Frontend Developer", period: "Nov 2020 - Des 2021", highlights: ["UI Implementation", "API Integration"] },
  { id: 5, company: "CV. Trimegah Perkasa", position: "IT Support", period: "Jan 2018 - July 2019", highlights: ["Server Maintenance", "Network"] },
  { id: 6, company: "CV. Multicraft Indonesia", position: "Administration", period: "2018 - 2019", highlights: ["Marketplace"] },
];

const projects = [
  { name: "BNI Gerai", tech: ["Laravel", "MySQL"], link: "https://bni.gerai.id/", description: "Online event registration platform with multiple tenant support for Business Network International" },
  { name: "CRUD Generator", tech: ["Laravel", "PHP"], link: "#", description: "Custom Laravel CRUD generator for rapid application development" },
  { name: "Otonometer", tech: ["Laravel", "MySQL"], link: "https://otonometer.com", description: "Online testing and assessment platform" },
  { name: "Yava Bali", tech: ["Laravel", "MySQL"], link: "https://yavabali.com", description: "Bali-based company profile and service website" },
  { name: "BIA Brewery", tech: ["Laravel", "MySQL"], link: "https://biabrewery.com", description: "Brewery company profile with product catalog" },
  { name: "Danamon Sales Toolkit", tech: ["Angular", "Laravel"], link: "https://danamonsalestoolkit.com", description: "Internal digital platform for Bank Danamon's sales teams" },
  { name: "Bina Sawit Makmur", tech: ["Angular", "Laravel"], link: "https://binasawitmakmur.com", description: "Corporate website for oil palm company" },
  { name: "Zoleka", tech: ["Angular", "Laravel"], link: "https://zoleka.id", description: "Urban apparel e-commerce platform" },
  { name: "Fintech Indonesia", tech: ["Angular", "Laravel"], link: "https://fintech.id", description: "Indonesian Fintech Association official website" },
  { name: "CBT Kemenham", tech: ["Vue", "Laravel"], link: "https://ubk-tf.kemhan.go.id", description: "Online testing system for Ministry of Defense" },
  { name: "Bluebird Group", tech: ["Laravel"], link: "https://www.bluebirdgroup.com", description: "Transportation company website" },
  { name: "GGL Health", tech: ["Vue", "Lumen"], link: "https://app.ggl.life", description: "Health and wellness platform" },
  { name: "Neraca Ruang", tech: ["React", "NextJS"], link: "https://neracaruang.com", description: "Regional autonomy literacy platform" },
  { name: "Djarum", tech: ["Laravel"], link: "https://djarum.com", description: "Corporate website" },
  { name: "Idea Indonesia", tech: ["Angular", "Laravel"], link: "https://idea.or.id", description: "E-Commerce Association website" },
];

const skills = {
  "Frontend": ["React", "Next.js", "Angular", "Vue.js", "TypeScript"],
  "Backend": ["Node.js", "Laravel", "Spring Boot", "Go"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB"],
  "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD"],
};

const education = { school: "17 Agustus 1945 University", degree: "BA Information Technology", year: "2016-2023", gpa: "3.28" };

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'} transition-colors`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md ${isDark ? 'bg-zinc-950/90 border-zinc-800' : 'bg-white/90 border-zinc-200'}`}>
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src="/profile.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-medium">{personalInfo.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setTheme(isDark ? "light" : "dark")} className={`p-2 rounded-lg ${isDark ? 'bg-zinc-800 text-zinc-400 hover:text-white' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'}`}>
              {isDark ? "🌙" : "☀️"}
            </button>
            <a href="/cv.pdf" download className={`px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-900 text-white'}`}>
              CV
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        {/* Hero */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4 ${isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Available for work
              </div>
              
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-4">{personalInfo.title}</p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">{personalInfo.summary}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm ${isDark ? 'border-zinc-700 hover:border-zinc-500' : 'border-zinc-200 hover:border-zinc-400'}`}>
                  <Mail size={16} />
                  Email
                </a>
                <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm">
                  WhatsApp
                </a>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5] text-white text-sm">
                  LinkedIn
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            
            <div className="hidden md:block w-40 h-40 rounded-2xl overflow-hidden border-4 border-zinc-300 dark:border-zinc-700">
              <img src="/profile.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-4 rounded-xl border ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'}`}>
                <h3 className="font-medium mb-3 text-zinc-500 dark:text-zinc-400 text-sm">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span key={item} className={`px-2 py-1 rounded text-xs ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects ({projects.length})</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className={`group p-5 rounded-xl border transition-colors ${isDark ? 'border-zinc-800 hover:border-zinc-600 bg-zinc-900' : 'border-zinc-200 hover:border-zinc-400 bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium group-hover:text-blue-500 transition-colors">{project.name}</h3>
                  <ExternalLink size={14} className="text-zinc-400" />
                </div>
                <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map(t => (
                    <span key={t} className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div key={exp.id} className={`p-5 rounded-xl border ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{exp.position}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{exp.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.highlights.map(h => (
                    <span key={h} className={`px-2 py-0.5 rounded text-xs ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className={`p-6 rounded-xl border ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                <GraduationCap size={24} className="text-zinc-600 dark:text-zinc-300" />
              </div>
              <div>
                <h3 className="font-medium">{education.school}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{education.degree}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{education.year} • GPA: {education.gpa}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <a href="/cv.pdf" download className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium ${isDark ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-900 text-white'}`}>
            <Download size={18} />
            Download CV
          </a>
          <p className="mt-6 text-zinc-500 dark:text-zinc-400 text-sm">© 2024 {personalInfo.name}</p>
        </footer>
      </main>
    </div>
  );
}
