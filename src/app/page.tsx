"use client";

import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, ArrowRight, HeartHandshake, Headset, ShieldCheck, Zap, 
  CreditCard, BookOpen, MonitorPlay, Timer, TrendingUp, UserCheck, 
  MapPin, Phone, Mail, GraduationCap, FlaskConical, Atom, CheckCircle,
  Globe
} from 'lucide-react';

interface Feature {
  si: string;
  en: string;
  icon: React.ReactNode;
}

interface PortfolioProject {
  id: number;
  name: string;
  url: string;
  descSi: string;
  descEn: string;
  features: Feature[];
  mainIcon: React.ReactNode;
}

const projects: PortfolioProject[] = [
  {
    id: 3,
    name: "20 Minutes",
    url: "20minutes.lk",
    descSi: "අන්තර්ජාල ගෙවීම් සහ පාඨමාලා සහිත පුළුල් අධ්‍යාපනික වේදිකාවකි.",
    descEn: "A comprehensive educational platform with online payments and courses.",
    features: [
      { si: "Online Payments", en: "Online Payments", icon: <CreditCard size={14} /> },
      { si: "Course Creation", en: "Course Creation", icon: <BookOpen size={14} /> },
      { si: "Online Exams", en: "Online Exams", icon: <MonitorPlay size={14} /> },
      { si: "Student Dashboard", en: "Student Dashboard", icon: <UserCheck size={14} /> },
    ],
    mainIcon: <GraduationCap size={60} strokeWidth={1.5} />
  },
  {
    id: 2,
    name: "YCS Physics",
    url: "ycsphysics.lk",
    descSi: "භෞතික විද්‍යා පන්ති සඳහාම සැකසූ පෞද්ගලික LMS වේදිකාවකි.",
    descEn: "A private LMS platform specially designed for Physics classes.",
    features: [
      { si: "Online Exams", en: "Online Exams", icon: <MonitorPlay size={14} /> },
      { si: "Student Dashboard", en: "Student Dashboard", icon: <UserCheck size={14} /> },
      { si: "Timed Quizzes", en: "Timed Quizzes", icon: <Timer size={14} /> },
      { si: "Attendance Marks", en: "Attendance Marks", icon: <UserCheck size={14} /> }
    ],
    mainIcon: <Atom size={60} strokeWidth={1.5} />
  },
  {
    id: 1,
    name: "Pramoda Chemistry",
    url: "pramodachemistry.edu.lk",
    descSi: "රසායන විද්‍යා පන්ති කළමනාකරණය සඳහාම නිර්මාණය කළ පද්ධතියකි.",
    descEn: "A complete system designed for Chemistry class management.",
    features: [
      { si: "Online Exams", en: "Online Exams", icon: <MonitorPlay size={14} /> },
      { si: "Student Dashboard", en: "Student Dashboard", icon: <UserCheck size={14} /> },
      { si: "MCQ Portal", en: "MCQ Portal", icon: <BookOpen size={14} /> },
      { si: "Progress Tracking", en: "Progress Tracking", icon: <TrendingUp size={14} /> },
    ],
    mainIcon: <FlaskConical size={60} strokeWidth={1.5} />
  }
];

const t = {
  si: {
    nav: ["මුල් පිටුව", "විශේෂාංග", "ව්‍යාපෘති", "අපව අමතන්න"],
    heroTitle1: "ඔබේ අධ්‍යාපන ආයතනයත්",
    heroTitle2: "අදම ඩිජිටල් කරන්න",
    heroSub: "ශ්‍රී ලංකාවේ ගුරුවරුන් සඳහාම වෙන්වූ වේගවත්, ආරක්ෂිත සහ කළමනාකරණයට පහසුම අංගසම්පූර්ණ Learning Management System නිර්මාණකරුවෝ.",
    btnText: "අපව සම්බන්ධ කරගන්න",
    whyTitle: "අපව තෝරාගත්තේ ඇයි?",
    whyBoxes: [
      { title: "සුහදශීලී සේවය", desc: "ගුරුවරුන්ගේ සහ සිසුන්ගේ අවශ්‍යතා මනාව තේරුම් ගත් සුහදශීලී කාර්ය මණ්ඩලයක්." },
      { title: "24/7 තාක්ෂණික සහාය", desc: "ඕනෑම ගැටලුවකදී පැය 24 පුරාම ක්‍රියාත්මක වන කඩිනම් පාරිභෝගික සේවාව." },
      { title: "100% දත්ත ආරක්ෂාව", desc: "ඔබේ වීඩියෝ, නිබන්ධන සහ සිසුන්ගේ දත්ත සඳහා උපරිම ආරක්ෂාවක්." },
      { title: "නවීන තාක්ෂණය", desc: "ලොව නවතම සහ වේගවත්ම තාක්ෂණයන් භාවිතා කරමින් නිර්මාණය කිරීම." }
    ],
    projectsTitle: "අපගේ සාර්ථක ව්‍යාපෘති",
    ctaTitle: "අදම ආරම්භ කරමුද?",
    ctaSub: "ඔබේ පන්තියටත් ගැළපෙනම, වේගවත්ම LMS එකක් සාදාගන්න අදම අපට කතා කරන්න.",
    ctaBtn: "සම්බන්ධ වන්න",
    footerText: "ශ්‍රී ලංකාවේ අධ්‍යාපන ක්ෂේත්‍රය වෙනුවෙන්ම කැපවූ අංක එකේ LMS නිර්මාණකරුවෝ."
  },
  en: {
    nav: ["Home", "Features", "Projects", "Contact"],
    heroTitle1: "Digitize Your",
    heroTitle2: "Educational Institute Today",
    heroSub: "The fastest, most secure, and easy-to-manage comprehensive Learning Management System creators dedicated to Sri Lankan teachers.",
    btnText: "Get in Touch",
    whyTitle: "Why Choose Us?",
    whyBoxes: [
      { title: "Friendly Service", desc: "A friendly staff that perfectly understands the needs of teachers and students." },
      { title: "24/7 Tech Support", desc: "Fast and reliable 24/7 customer service ready for any technical issue." },
      { title: "100% Data Security", desc: "Maximum security for your videos, tutorials, and student data." },
      { title: "Modern Technology", desc: "Built using the world's latest and fastest web technologies." }
    ],
    projectsTitle: "Our Successful Projects",
    ctaTitle: "Ready to get started?",
    ctaSub: "Contact us today to build the fastest, most suitable LMS for your class.",
    ctaBtn: "Contact Us",
    footerText: "The number one LMS creators dedicated to the education sector in Sri Lanka."
  }
};

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState<'si' | 'en'>('si');
  const currentT = t[lang];
  const whatsappLink = "https://wa.me/94767196125"; // WhatsApp Link added here for easy changes

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto z-50 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center shadow-md">
            <GraduationCap className="text-white" size={20} />
          </div>
          <div className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
            eSip<span className="text-teal-500">.lk</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a href="#" className="hover:text-teal-500 transition-colors">{currentT.nav[0]}</a>
          <a href="#features" className="hover:text-teal-500 transition-colors">{currentT.nav[1]}</a>
          <a href="#projects" className="hover:text-teal-500 transition-colors">{currentT.nav[2]}</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-teal-500 transition-colors">{currentT.nav[3]}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* WhatsApp Number in Nav Bar */}
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold hover:scale-105 transition-transform bg-teal-50 dark:bg-teal-900/30 px-4 py-1.5 rounded-full">
            <Phone size={16} />
            0767196125
          </a>

          {/* Language Toggle Button */}
          <button 
            onClick={() => setLang(lang === 'si' ? 'en' : 'si')} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-900/30 text-sm font-semibold text-teal-600 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <Globe size={16} />
            {lang === 'si' ? 'EN' : 'සිං'}
          </button>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-center pt-24 pb-20 px-4 max-w-5xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400 opacity-[0.08] dark:opacity-[0.05] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-teal-400 opacity-[0.1] dark:opacity-[0.05] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl z-0 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="text-slate-900 dark:text-white">{currentT.heroTitle1}</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500">
              {currentT.heroTitle2}
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {currentT.heroSub}
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-xl shadow-teal-500/30 hover:scale-105">
            {currentT.btnText}
          </a>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="features" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14 text-slate-900 dark:text-white">{currentT.whyTitle}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {currentT.whyBoxes.map((box, idx) => {
              const Icons = [HeartHandshake, Headset, ShieldCheck, Zap];
              const Icon = Icons[idx];
              return (
                <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
                  <Icon className="text-teal-500 mx-auto mb-4" size={36} strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{box.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{box.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">{currentT.projectsTitle}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2"
            >
              <div className="w-24 h-24 mb-6 bg-teal-50 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                {project.mainIcon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm flex-1 leading-relaxed">
                {lang === 'si' ? project.descSi : project.descEn}
              </p>
              
              <div className="grid grid-cols-1 w-full gap-2 mb-6 text-left border-t border-slate-100 dark:border-slate-700 pt-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs font-medium text-slate-600 dark:text-slate-300">
                    <div className="text-teal-500 mr-2 shrink-0">{feature.icon}</div>
                    <span>{lang === 'si' ? feature.si : feature.en}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://${project.url}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-2.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 font-semibold text-sm hover:bg-teal-500 hover:text-white transition-colors flex items-center justify-center"
              >
                {project.url} <ArrowRight className="ml-2" size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-24 max-w-5xl mx-auto mt-10">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-teal-500/10 border border-slate-100 dark:border-slate-700 relative z-10 bg-gradient-to-br from-white to-teal-50 dark:from-slate-800 dark:to-slate-800/80">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">{currentT.ctaTitle}</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            {currentT.ctaSub}
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg shadow-teal-500/30">
            {currentT.ctaBtn}
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-slate-50 dark:bg-slate-900 pt-32 pb-12 px-6 -mt-32 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Quick Start</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Platform</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <GraduationCap className="text-white" size={14} />
              </div>
              <div className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                eSip<span className="text-teal-500">.lk</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              {currentT.footerText}
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-slate-400 mt-8">
          Designed and Developed eSip.lk
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}