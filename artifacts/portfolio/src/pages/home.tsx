import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Mail, MapPin, ExternalLink, Linkedin, Instagram, Camera, Award, Database, Target, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import captifyScreenshot from '@assets/image_1778568844305.png';
import photo1 from '@assets/IMG_6051_1778568170914.jpg';
import photo2 from '@assets/IMG_5840_1778568179586.jpg';
import photo3 from '@assets/IMG_5399_1778568222586.jpg';
import photo4 from '@assets/IMG_3480_1778568320677.jpg';
import photo5 from '@assets/68D21731-EC57-4BE8-9AA8-E42ACC1EF85B_1778568601801.JPEG';
import photo6 from '@assets/IMG_4315_1778568663998.JPG';

import captify1 from '@assets/image_1778569409701.png';
import captify2 from '@assets/image_1778569434299.png';
import captify3 from '@assets/image_1778569472441.png';
import captify4 from '@assets/image_1778569503467.png';
import captify5 from '@assets/image_1778569548109.png';
import captify6 from '@assets/image_1778570859157.png';

import brb1 from '@assets/image_1778569619077.png';
import brb2 from '@assets/image_1778569758901.png';
import brb3 from '@assets/image_1778569814303.png';
import brb4 from '@assets/image_1778569838867.png';
import brb5 from '@assets/image_1778569904555.png';
import brb6 from '@assets/image_1778570000350.png';

import brbWebsite from '@assets/image_1778570197666.png';
import profilePhoto from '@assets/otabek_profile.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-tight cursor-pointer text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary" onClick={() => scrollTo('hero')}>
          OB.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { label: 'ABOUT', id: 'hero' },
            { label: 'WORK', id: 'work' },
            { label: 'INSTAGRAM', id: 'instagram' },
            { label: 'CERTS', id: 'certifications' },
            { label: 'CONTACT', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-muted-foreground hover:text-primary transition-colors text-xs font-display tracking-widest font-semibold"
              data-testid={`link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => scrollTo('contact')}
          className="hidden md:flex rounded-none border-border hover:border-primary hover:bg-primary/10 text-foreground transition-all duration-300"
          data-testid="button-nav-contact"
        >
          CONNECT
        </Button>
      </div>
    </motion.nav>
  );
};

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState<'marketing' | 'digital'>('marketing');

  const jobs = [
    {
      company: "BRB Lux Limo",
      role: "Digital Marketing & Client Manager",
      period: "05/2022–Present",
      location: "SF, CA",
      desc: "Grew Instagram to 30K accounts reached, drove +30% lead volume via SEO and Google Analytics. Managed full digital presence across Instagram, Facebook, Google Business Profile, and Yelp — including CMS updates, reputation management, and paid promotions.",
      links: [
        { label: "@brbluxlimo", url: "https://www.instagram.com/brbluxlimo", icon: <Instagram className="w-3 h-3" /> },
        { label: "brbluxlimo.com", url: "https://brbluxlimo.com", icon: <ExternalLink className="w-3 h-3" /> }
      ]
    },
    {
      company: "Captify Glass",
      role: "Head Social Media Manager",
      period: "06/2025–09/2025",
      location: "SF, CA",
      desc: "50K+ accounts reached across Instagram, TikTok, Facebook, X (Twitter), and YouTube Shorts. Produced 5+ content pieces daily, built 2-week content calendars, and executed campaigns across 15 optical stores and 8 senior living centers.",
      links: [
        { label: "@captifyglass", url: "https://www.instagram.com/captifyglass", icon: <Instagram className="w-3 h-3" /> }
      ]
    },
    {
      company: "ShotBy_OT",
      role: "Freelance Photographer",
      period: "12/2022–Present",
      location: "CA",
      desc: "20K+ accounts reached, 550+ followers, A/B tested content and ads to optimize engagement",
      links: [
        { label: "@shotby_ot", url: "https://www.instagram.com/shotby_ot", icon: <Instagram className="w-3 h-3" /> }
      ]
    },
    {
      company: "Cal State Fullerton Athletics",
      role: "Photography Intern, Media Team",
      period: "08/2023–02/2025",
      location: "Fullerton, CA",
      desc: "1,000+ photos/game same-day turnaround, promoted athletics to 5K+ followers",
      links: []
    }
  ];

  return (
    <div className="w-full">
      <div className="flex border border-border mb-8 w-fit">
        {(['marketing', 'digital'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            data-testid={`tab-${tab}`}
            className={`py-3 px-6 text-sm font-semibold tracking-wide transition-all duration-200 ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {tab === 'marketing' ? 'Marketing Roles' : 'Digital Work'}
          </button>
        ))}
      </div>

      {activeTab === 'marketing' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <div key={i} className="flex flex-col p-6 bg-card border border-border hover:border-primary/30 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-bold text-lg">{job.company}</h3>
                <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-muted border border-border shrink-0 ml-2">{job.period}</span>
              </div>
              <p className="text-primary text-sm font-semibold mb-3">{job.role} <span className="text-muted-foreground font-normal">· {job.location}</span></p>
              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{job.desc}</p>
              {job.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  {job.links.map((link, j) => (
                    <a key={j} href={link.url} target="_blank" rel="noreferrer" data-testid={`link-job-${i}-${j}`} className="flex items-center gap-1.5 text-xs text-foreground hover:text-primary transition-colors">
                      {link.icon} {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'digital' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group flex flex-col border border-border bg-card overflow-hidden shadow-sm">
            <div className="h-56 relative overflow-hidden bg-muted">
              <img
                src={brbWebsite}
                alt="BRB Lux Limo Website"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur border border-border text-[10px] px-2 py-1 font-medium tracking-wide">
                Website Management
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow bg-card border-t border-border">
              <h3 className="font-display font-bold text-lg mb-1">BRB Lux Limo Website</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">Managed and optimized for lead generation — San Francisco Bay Area luxury transport.</p>
              <Button asChild variant="outline" className="w-full rounded-none border-border hover:border-primary hover:bg-primary/10 text-xs" data-testid="link-brb-website">
                <a href="https://brbluxlimo.com/" target="_blank" rel="noreferrer">Visit Site ↗</a>
              </Button>
            </div>
          </div>

          <div className="group flex flex-col border border-border bg-card overflow-hidden shadow-sm">
            <div className="h-56 relative overflow-hidden bg-muted">
              <img src={captifyScreenshot} alt="Captify Glass Content" className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" />
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur border border-border text-[10px] px-2 py-1 font-medium tracking-wide">
                Social Content Strategy
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow bg-card border-t border-border">
              <h3 className="font-display font-bold text-lg mb-1">Captify Glass</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">Full social media management and content strategy across 15+ optical locations.</p>
              <Button asChild variant="outline" className="w-full rounded-none border-border hover:border-primary hover:bg-primary/10 text-xs" data-testid="link-captify-instagram">
                <a href="https://www.instagram.com/captifyglass" target="_blank" rel="noreferrer">@captifyglass on Instagram ↗</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-hidden">
      <NavBar />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[90dvh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: text */}
            <motion.div
              className="flex-1 max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-card border border-border text-xs font-medium text-muted-foreground mb-8 shadow-sm">
                <MapPin className="w-3 h-3 text-secondary" />
                <span>San Francisco Bay Area · Open to Relocate</span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[1.05] mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Otabek Buranov</span>
              </motion.h1>

              <motion.h2 variants={fadeIn} className="text-xl md:text-2xl font-display font-medium text-foreground mb-6 tracking-tight">
                Digital Marketing Specialist & Data Analyst
              </motion.h2>

              <motion.p variants={fadeIn} className="text-base md:text-lg text-muted-foreground font-light max-w-xl mb-10 leading-relaxed">
                I blend creative storytelling with data-driven strategy to grow brands through high-impact content, smart analytics, and digital experiences that convert.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-12">
                <Button
                  size="lg"
                  className="rounded-none px-7 h-11 text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-view-work"
                >
                  View My Work <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none px-7 h-11 text-sm font-semibold border-border hover:bg-muted transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-contact"
                >
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-none px-7 h-11 text-sm font-semibold border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  data-testid="button-resume"
                >
                  <a href="/Otabek_Buranov_Resume.pdf" download="Otabek_Buranov_Resume.pdf">
                    <Download className="mr-2 w-4 h-4" /> Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
                {[
                  { value: 50, suffix: 'K+', label: 'Accounts Reached' },
                  { value: 30, suffix: '%', label: 'Lead Increase' },
                  { value: 4, suffix: ' Yrs', label: 'Experience' },
                  { value: 35, suffix: '', label: 'GPA', display: '3.5' }
                ].map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-foreground mb-1">
                      {metric.display ? metric.display : <AnimatedCounter value={metric.value} suffix={metric.suffix} />}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{metric.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: profile photo */}
            <motion.div
              className="relative flex-shrink-0 hidden md:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-64 xl:w-72">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={profilePhoto}
                  alt="Otabek Buranov"
                  className="relative w-full object-contain object-bottom drop-shadow-xl"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute -bottom-2 -right-2 bg-card border border-border shadow-md px-3 py-1.5 rounded-sm">
                  <p className="text-[10px] font-mono text-muted-foreground">Cal State Fullerton</p>
                  <p className="text-xs font-display font-bold text-primary">May 2026 · GPA 3.5</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. WHAT I DO SECTION */}
      <section id="expertise" className="py-16 bg-background relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: "Digital Marketing & SMM",
                desc: "Data-backed campaigns, SEO optimization, and multi-platform social strategies that drive qualified leads and real conversions.",
                tags: ["SEO", "Google Ads", "Meta Ads", "Hootsuite", "Google My Business", "Yelp", "Facebook", "TikTok", "CMS"]
              },
              {
                icon: <Database className="w-6 h-6 text-secondary" />,
                title: "Data Analytics & Strategy",
                desc: "Translating raw metrics into actionable business intelligence. Dashboard creation, KPI tracking, ROI analysis, and audience insights.",
                tags: ["Google Analytics", "GA4", "Power BI", "Tableau", "SQL", "Excel", "Meta Business Suite", "A/B Testing"]
              },
              {
                icon: <Camera className="w-6 h-6 text-foreground" />,
                title: "Visual Storytelling",
                desc: "High-impact photography and content creation to elevate brand identity and support multi-channel campaigns.",
                tags: ["Lightroom", "Premiere Pro", "Canva", "CapCut", "Adobe CC", "Photography", "Reels / Shorts"]
              }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-card border-border rounded-none h-full hover:shadow-md hover:border-primary/30 transition-all duration-300 shadow-sm">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {card.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERIENCE + BRAND WORK */}
      <section id="work" className="py-16 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tight">
              Experience & Work
            </motion.h2>
            <WorkTabs />
          </motion.div>
        </div>
      </section>

      {/* 4. INSTAGRAM PRESENCE */}
      <section id="instagram" className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-10">
              <Instagram className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Social Presence</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* BRB Lux Limo */}
              <motion.div variants={fadeIn} className="bg-card border border-border p-6 rounded-none flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
                    <div className="w-full h-full bg-card rounded-full border-2 border-card flex items-center justify-center text-xl font-bold text-foreground">
                      B
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/brbluxlimo" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline decoration-primary underline-offset-4">@brbluxlimo</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Luxury Transport Brand</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-muted border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">30K+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Accounts Reached</p>
                  </div>
                  <div className="bg-muted border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">Lead Gen</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Primary Focus</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-6 flex-grow content-start">
                  {[brb1, brb2, brb3, brb4, brb5, brb6].map((src, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden bg-muted">
                      <img src={src} alt={`BRB Lux Limo post ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full rounded-sm bg-primary/10 text-primary hover:bg-primary hover:text-white border-0 transition-colors">
                  <a href="https://www.instagram.com/brbluxlimo" target="_blank" rel="noreferrer">Follow</a>
                </Button>
              </motion.div>

              {/* Captify Glass */}
              <motion.div variants={fadeIn} className="bg-card border border-border p-6 rounded-none flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
                    <div className="w-full h-full bg-card rounded-full border-2 border-card flex items-center justify-center text-xl font-bold text-foreground">
                      C
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/captifyglass" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline decoration-primary underline-offset-4">@captifyglass</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Health-Tech Brand</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-muted border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">50K+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Accounts Reached</p>
                  </div>
                  <div className="bg-muted border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">15+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Locations</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-6 flex-grow content-start">
                  {[captify1, captify2, captify3, captify4, captify5, captify6].map((src, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden bg-muted">
                      <img src={src} alt={`Captify Glass post ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full rounded-sm bg-primary/10 text-primary hover:bg-primary hover:text-white border-0 transition-colors">
                  <a href="https://www.instagram.com/captifyglass" target="_blank" rel="noreferrer">Follow</a>
                </Button>
              </motion.div>

              {/* ShotBy_OT */}
              <motion.div variants={fadeIn} className="bg-card border border-border p-6 rounded-none flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
                    <div className="w-full h-full bg-card rounded-full border-2 border-card flex items-center justify-center text-xl font-bold text-foreground">
                      O
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/shotby_ot" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline decoration-primary underline-offset-4">@shotby_ot</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Events & Sports</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-muted border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">20K+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Reach</p>
                  </div>
                  <div className="bg-muted border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">550+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Followers</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-6 flex-grow content-start">
                  {[photo1, photo2, photo3, photo4, photo5, photo6].map((src, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden bg-muted">
                      <img src={src} alt="Instagram Post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full rounded-sm bg-primary/10 text-primary hover:bg-primary hover:text-white border-0 transition-colors">
                  <a href="https://www.instagram.com/shotby_ot" target="_blank" rel="noreferrer">Follow</a>
                </Button>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <section id="certifications" className="py-16 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-display font-bold mb-8 text-center tracking-tight">
              Certifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Social Media Marketing Professional", issuer: "Hootsuite" },
                { name: "Generative AI for Digital Marketers", issuer: "LinkedIn Learning" },
                { name: "Advance Your Content Marketing & SEO Skills", issuer: "LinkedIn Learning" },
                { name: "Microsoft PowerPoint", issuer: "LinkedIn Learning" },
                { name: "Essential Skills In Marketing", issuer: "LinkedIn Learning" },
                { name: "SEO Marketing Tools", issuer: "LinkedIn Learning" },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-center justify-between p-4 bg-card border border-border hover:border-primary/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-medium text-sm text-foreground">{cert.name}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground shrink-0 ml-4 hidden sm:block">{cert.issuer}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="contact" className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
              Let's build something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">that converts.</span>
            </motion.h2>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-none h-14 px-8 font-semibold bg-primary text-white hover:bg-primary/90">
                <a href="mailto:otabekuburanov@gmail.com">
                  <Mail className="mr-2 w-4 h-4" /> otabekuburanov@gmail.com
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 font-semibold border-border hover:bg-muted hover:border-primary/40">
                <a href="https://linkedin.com/in/otabekburanov" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.p variants={fadeIn} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> San Francisco Bay Area · Open to Relocate
            </motion.p>
          </motion.div>
        </div>
      </section>

      <footer className="py-6 border-t border-border text-center text-xs text-muted-foreground bg-card">
        <p>© {new Date().getFullYear()} Otabek Buranov. All rights reserved.</p>
      </footer>
    </div>
  );
}
