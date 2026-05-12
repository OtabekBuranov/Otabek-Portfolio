import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, MapPin, ExternalLink, Linkedin, Instagram, Camera, Award, Database, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import captifyScreenshot from '@assets/image_1778568844305.png';
import photo1 from '@assets/IMG_6051_1778568170914.jpg';
import photo2 from '@assets/IMG_5840_1778568179586.jpg';
import photo3 from '@assets/IMG_5399_1778568222586.jpg';
import photo4 from '@assets/IMG_3480_1778568320677.jpg';
import photo5 from '@assets/68D21731-EC57-4BE8-9AA8-E42ACC1EF85B_1778568601801.JPEG';
import photo6 from '@assets/IMG_4315_1778568663998.JPG';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
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
          className="hidden md:flex rounded-none border-white/10 hover:border-primary hover:bg-primary/10 text-foreground transition-all duration-300" 
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
      desc: "Grew Instagram to 30K accounts, +30% lead volume via SEO, Google Analytics, managed CMS",
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
      desc: "50K+ accounts reached, 5+ content pieces/day, 2-week content calendars, 15 optical stores + 8 senior living centers",
      links: [
        { label: "@captifyglass", url: "https://www.instagram.com/captifyglass", icon: <Instagram className="w-3 h-3" /> }
      ]
    },
    {
      company: "ShotBy_OT",
      role: "Freelance Photographer",
      period: "12/2022–Present",
      location: "CA",
      desc: "20K+ accounts, 550+ followers, A/B tested content and ads to optimize engagement",
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
      <div className="flex border border-white/10 mb-8 w-fit">
        {(['marketing', 'digital'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            data-testid={`tab-${tab}`}
            className={`py-3 px-6 text-sm font-semibold tracking-wide transition-all duration-200 ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
            }`}
          >
            {tab === 'marketing' ? 'Marketing Roles' : 'Digital Work'}
          </button>
        ))}
      </div>

      {activeTab === 'marketing' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <div key={i} className="flex flex-col p-6 bg-card border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-bold text-lg">{job.company}</h3>
                <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-background border border-white/5 shrink-0 ml-2">{job.period}</span>
              </div>
              <p className="text-primary text-sm font-semibold mb-3">{job.role} <span className="text-muted-foreground font-normal">· {job.location}</span></p>
              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{job.desc}</p>
              {job.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
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
          <div className="group flex flex-col border border-white/5 bg-card overflow-hidden">
            <div className="h-56 relative bg-[#050505] flex items-center justify-center p-8 overflow-hidden">
              <div className="w-full max-w-sm border border-[#222] bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col transform group-hover:scale-105 transition-transform duration-700">
                <div className="h-7 border-b border-[#222] flex items-center px-3 gap-2 bg-[#111]">
                  <div className="w-2 h-2 rounded-full bg-[#444]" />
                  <div className="w-2 h-2 rounded-full bg-[#444]" />
                  <div className="w-2 h-2 rounded-full bg-[#444]" />
                  <span className="ml-2 text-[9px] text-[#555] font-mono">brbluxlimo.com</span>
                </div>
                <div className="p-6 flex flex-col items-center justify-center text-center gap-3">
                  <h4 className="text-[#d4af37] font-serif tracking-widest text-lg">BRB LUX LIMO</h4>
                  <p className="text-[#666] text-[9px] tracking-widest uppercase">Luxury Transport · SF Bay Area</p>
                  <div className="h-px w-12 bg-[#d4af37]/30 my-1" />
                  <div className="w-20 h-5 border border-[#d4af37]/50 text-[#d4af37] text-[8px] flex items-center justify-center tracking-wider">BOOK NOW</div>
                </div>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow bg-card border-t border-white/5">
              <h3 className="font-display font-bold text-lg mb-1">BRB Lux Limo Website</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">Managed and optimized for lead generation — San Francisco Bay Area luxury transport.</p>
              <Button asChild variant="outline" className="w-full rounded-none border-white/10 hover:border-primary hover:bg-primary/10 text-xs" data-testid="link-brb-website">
                <a href="https://brbluxlimo.com/" target="_blank" rel="noreferrer">Visit Site ↗</a>
              </Button>
            </div>
          </div>

          <div className="group flex flex-col border border-white/5 bg-card overflow-hidden">
            <div className="h-56 relative overflow-hidden bg-background">
              <img src={captifyScreenshot} alt="Captify Glass Content" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur border border-white/10 text-[10px] px-2 py-1 font-medium tracking-wide">
                Social Content Strategy
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow bg-card border-t border-white/5">
              <h3 className="font-display font-bold text-lg mb-1">Captify Glass</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">Full social media management and content strategy across 15+ optical locations.</p>
              <Button asChild variant="outline" className="w-full rounded-none border-white/10 hover:border-primary hover:bg-primary/10 text-xs" data-testid="link-captify-instagram">
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
      <section id="hero" className="relative min-h-[90dvh] flex flex-col justify-center pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full">
          <motion.div 
            className="max-w-4xl mt-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-card border border-white/5 text-xs font-medium text-muted-foreground mb-8">
              <MapPin className="w-3 h-3 text-secondary" />
              <span>San Francisco Bay Area · Open to Relocate</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Otabek Buranov</span>
            </motion.h1>
            
            <motion.h2 variants={fadeIn} className="text-xl md:text-3xl font-display font-medium text-foreground mb-8 tracking-tight">
              Digital Marketing Specialist & Data Analyst
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mb-12 leading-relaxed">
              Digital Marketing Specialist & Data Analyst who blends creative storytelling with data-driven strategy. I grow brands through high-impact content, smart analytics, and digital experiences that convert.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-16">
              <Button 
                size="lg" 
                className="rounded-none px-8 h-12 text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-view-work"
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-none px-8 h-12 text-sm font-semibold border-white/20 hover:bg-white/5 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-8">
              {[
                { value: "50K+", label: "Accounts Reached" },
                { value: "30%", label: "Lead Increase" },
                { value: "4 Yrs", label: "Experience" },
                { value: "3.5", label: "GPA" }
              ].map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-white mb-1">{metric.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{metric.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Abstract hero graphic element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-screen max-w-2xl pointer-events-none hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background z-10" />
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(108, 99, 255, 0.05) 60%, rgba(0, 212, 170, 0.05) 100%)' }}
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(108, 99, 255, 0.1) 60%, rgba(0, 212, 170, 0.05) 100%)' }}
          />
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
                desc: "Data-backed campaigns, SEO optimization, and social strategies that drive qualified leads and actual conversions.",
                tags: ["SEO", "SMM", "Google Ads"]
              },
              {
                icon: <Database className="w-6 h-6 text-secondary" />,
                title: "Data Analytics & Strategy",
                desc: "Translating raw metrics into actionable business intelligence. Dashboard creation, KPI tracking, and ROI analysis.",
                tags: ["Power BI", "SQL", "Tableau"]
              },
              {
                icon: <Camera className="w-6 h-6 text-foreground" />,
                title: "Visual Storytelling",
                desc: "High-impact photography and content creation to elevate brand identity and support multi-channel campaigns.",
                tags: ["Photography", "Adobe CC", "Content"]
              }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-card border-white/5 rounded-none h-full hover:bg-white/[0.02] transition-colors duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {card.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono tracking-wider text-muted-foreground bg-background px-2 py-1 rounded border border-white/5">
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
      <section id="work" className="py-16 bg-card/30 border-t border-white/5">
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
              
              {/* Account 1 */}
              <motion.div variants={fadeIn} className="bg-card border border-white/5 p-6 rounded-none flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
                    <div className="w-full h-full bg-background rounded-full border-2 border-background flex items-center justify-center text-xl font-bold">
                      B
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/brbluxlimo" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline decoration-primary underline-offset-4">@brbluxlimo</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Luxury Transport Brand</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-background border border-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">30K+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Accounts Reached</p>
                  </div>
                  <div className="bg-background border border-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">Lead Gen</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Primary Focus</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-6 flex-grow content-start">
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-white/5 to-white/2" />
                  ))}
                </div>

                <Button asChild className="w-full rounded-sm bg-primary/10 text-primary hover:bg-primary hover:text-white border-0 transition-colors">
                  <a href="https://www.instagram.com/brbluxlimo" target="_blank" rel="noreferrer">Follow</a>
                </Button>
              </motion.div>

              {/* Account 2 */}
              <motion.div variants={fadeIn} className="bg-card border border-white/5 p-6 rounded-none flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
                    <div className="w-full h-full bg-background rounded-full border-2 border-background flex items-center justify-center text-xl font-bold">
                      C
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/captifyglass" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline decoration-primary underline-offset-4">@captifyglass</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Health-Tech Brand</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-background border border-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">50K+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Accounts Reached</p>
                  </div>
                  <div className="bg-background border border-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">15+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Locations</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-6 flex-grow content-start">
                  <div className="aspect-square relative overflow-hidden">
                    <img src={captifyScreenshot} alt="Post" className="w-full h-full object-cover" />
                  </div>
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-white/5 to-white/2" />
                  ))}
                </div>

                <Button asChild className="w-full rounded-sm bg-primary/10 text-primary hover:bg-primary hover:text-white border-0 transition-colors">
                  <a href="https://www.instagram.com/captifyglass" target="_blank" rel="noreferrer">Follow</a>
                </Button>
              </motion.div>

              {/* Account 3 */}
              <motion.div variants={fadeIn} className="bg-card border border-white/5 p-6 rounded-none flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]">
                    <div className="w-full h-full bg-background rounded-full border-2 border-background flex items-center justify-center text-xl font-bold">
                      O
                    </div>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/shotby_ot" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline decoration-primary underline-offset-4">@shotby_ot</a>
                    <p className="text-xs text-muted-foreground mt-0.5">Events & Sports</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-background border border-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">20K+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Reach</p>
                  </div>
                  <div className="bg-background border border-white/5 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">550+</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Followers</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-6 flex-grow content-start">
                  {[photo1, photo2, photo3, photo4, photo5, photo6].map((src, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden bg-background">
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
      <section id="certifications" className="py-16 bg-card/30 border-t border-white/5">
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
                  className="flex items-center justify-between p-4 bg-background border border-white/5 hover:border-white/20 transition-colors"
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
      <section id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
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
              <Button asChild size="lg" className="rounded-none h-14 px-8 font-semibold bg-white text-black hover:bg-white/90">
                <a href="mailto:otabekuburanov@gmail.com">
                  <Mail className="mr-2 w-4 h-4" /> otabekuburanov@gmail.com
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 font-semibold border-white/20 hover:bg-white/5">
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
      
      <footer className="py-6 border-t border-white/5 text-center text-xs text-muted-foreground bg-background">
        <p>© {new Date().getFullYear()} Otabek Buranov. All rights reserved.</p>
      </footer>
    </div>
  );
}