import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Mail, MapPin, ExternalLink, Camera, BarChart, Code, Briefcase, GraduationCap, Globe, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/40 py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollTo('hero')}>
          OB.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['About', 'Experience', 'Skills', 'Work', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-xs"
              data-testid={`link-${item.toLowerCase()}`}
            >
              {item}
            </button>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={() => scrollTo('contact')} className="hidden md:flex rounded-full border-foreground/20 hover:bg-foreground hover:text-background" data-testid="button-nav-contact">
          Get in Touch
        </Button>
      </div>
    </motion.nav>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background overflow-hidden">
      <NavBar />
      
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-medium uppercase tracking-widest mb-6">
              <MapPin className="w-3 h-3" />
              <span>San Francisco & California</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-6">
              Otabek <br/>
              <span className="text-muted-foreground">Buranov.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mb-10 leading-relaxed">
              Digital Marketer & Visual Storyteller bridging data-driven strategy with cinematic aesthetics.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 h-14 text-base bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-view-work"
              >
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-border hover:bg-secondary transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full max-w-md hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
             <div className="relative aspect-[3/4] w-full bg-secondary rounded-2xl overflow-hidden shadow-2xl">
               <img src="/images/photo-4.png" alt="Otabek Buranov - Editorial Portrait" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" data-testid="img-hero-portrait" />
               <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
             </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold mb-12 tracking-tight">
              The Intersection of <span className="text-muted-foreground italic font-serif">Strategy</span> and <span className="text-muted-foreground italic font-serif">Vision</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  I'm a multidisciplinary creative professional based in California, graduating from Cal State Fullerton in May 2026. My work exists where data-driven marketing meets striking visual storytelling.
                </p>
                <p>
                  Whether I'm scaling a brand's social presence to 50K accounts or capturing the winning shot at a CSUF basketball game, I approach every project with the same results-obsessed mindset and cinematic eye.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-4 border-b pb-2">
                    <GraduationCap className="w-4 h-4" /> Education
                  </h3>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-foreground">Cal State Fullerton</p>
                      <p className="text-sm text-muted-foreground">Business Administration (Marketing & IS)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">GPA 3.5</p>
                      <p className="text-sm text-muted-foreground">Class of May 2026</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-4 border-b pb-2">
                    <Globe className="w-4 h-4" /> Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Spanish', 'Russian', 'Uzbek', 'Tajik/Farsi'].map(lang => (
                      <Badge key={lang} variant="secondary" className="font-normal rounded-sm bg-background border-border/50 text-foreground">{lang}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-display font-bold mb-16 tracking-tight">
              Experience
            </motion.h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              
              {[
                {
                  company: "BRB Lux Limo",
                  role: "Digital Marketing & Client Manager",
                  period: "05/2022 – Present",
                  location: "San Francisco, CA",
                  description: "Grew Instagram to 30,000 accounts reached, increased qualified lead volume 30% via SEO & Google Analytics, managed company website & CMS, coordinated luxury transport logistics.",
                  icon: <Briefcase className="w-4 h-4 text-foreground" />,
                  link: "@brbluxlimo"
                },
                {
                  company: "Captify Glass",
                  role: "Head Social Media Manager",
                  period: "06/2025 – 09/2025",
                  location: "San Francisco, CA",
                  description: "Reached 50,000+ accounts across all channels, delivered 5+ pieces of content daily with 24-hour turnaround, built 2-week rolling content calendars, expanded into 15 optical stores & 8 senior living centers.",
                  icon: <BarChart className="w-4 h-4 text-foreground" />
                },
                {
                  company: "ShotBy_OT",
                  role: "Freelance Photographer",
                  period: "12/2022 – Present",
                  location: "California",
                  description: "20,000+ accounts reached on Instagram, 550+ followers, A/B tested content & ads, captured 6+ hour events with mirrorless & DSLR cameras, pitched photography packages to clients.",
                  icon: <Camera className="w-4 h-4 text-foreground" />
                },
                {
                  company: "Cal State Fullerton Athletics",
                  role: "Photography Intern, Media Team",
                  period: "08/2023 – 02/2025",
                  location: "Fullerton, CA",
                  description: "Photographed multiple sports weekly, processed 1,000+ photos per game with same-day turnaround, promoted athletics to 5,000+ followers.",
                  icon: <Camera className="w-4 h-4 text-foreground" />
                }
              ].map((job, index) => (
                <motion.div key={index} variants={fadeIn} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                    {job.icon}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="font-display font-bold text-xl">{job.company}</h3>
                      <span className="text-xs font-medium text-muted-foreground bg-background px-2 py-1 rounded-full border border-border/50 whitespace-nowrap">{job.period}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">{job.role} • <span className="text-muted-foreground font-normal">{job.location}</span></p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">{job.description}</p>
                    {job.link && (
                      <p className="text-xs font-medium mt-4 text-foreground flex items-center gap-1"><Instagram className="w-3 h-3" /> {job.link}</p>
                    )}
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-display font-bold mb-16 tracking-tight text-center">
              The Stack
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Marketing & Strategy",
                  skills: ["SEO / AEO", "SMM & CMS", "B2B Client Acquisition", "Google Ads & Analytics", "CRM Management", "Copywriting", "Cold Calling"]
                },
                {
                  category: "Data & Analytics",
                  skills: ["Microsoft Power BI", "Tableau", "Salesforce", "SQL", "Advanced Excel"]
                },
                {
                  category: "Creative & AI Tools",
                  skills: ["Adobe Premiere Pro", "Adobe Lightroom", "Prompt Engineering", "Claude / Gemini", "Midjourney / Runway", "v0", "Website Management"]
                }
              ].map((group, idx) => (
                <motion.div key={idx} variants={fadeIn} className="bg-background/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
                    {idx === 0 && <BarChart className="w-5 h-5 text-white/50" />}
                    {idx === 1 && <Code className="w-5 h-5 text-white/50" />}
                    {idx === 2 && <Camera className="w-5 h-5 text-white/50" />}
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors font-normal py-1.5 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="work" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                  Visual Work
                </motion.h2>
                <motion.p variants={fadeIn} className="text-muted-foreground mt-4 max-w-lg">
                  Selected photography spanning sports action, corporate lifestyle, and editorial portraiture.
                </motion.p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
              
              <motion.div variants={fadeIn} className="md:col-span-8 row-span-2 group relative overflow-hidden rounded-2xl bg-secondary">
                <img src="/images/photo-1.png" alt="Basketball action shot" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" data-testid="img-portfolio-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-lg">CSUF Basketball / Action</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="md:col-span-4 row-span-1 group relative overflow-hidden rounded-2xl bg-secondary">
                <img src="/images/photo-2.png" alt="Baseball action shot" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" data-testid="img-portfolio-2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">CSUF Baseball / Golden Hour</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="md:col-span-4 row-span-1 group relative overflow-hidden rounded-2xl bg-secondary">
                <img src="/images/photo-4.png" alt="Editorial Portrait" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" data-testid="img-portfolio-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Editorial Portraiture</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="md:col-span-4 row-span-1 group relative overflow-hidden rounded-2xl bg-secondary">
                <img src="/images/photo-6.png" alt="Candid Event" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" data-testid="img-portfolio-6" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Event / Photojournalist</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="md:col-span-8 row-span-1 group relative overflow-hidden rounded-2xl bg-secondary">
                <img src="/images/photo-5.png" alt="Luxury Limo" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" data-testid="img-portfolio-5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">BRB Lux Limo / Automotive</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8">
              Let's create something <br/> <span className="italic font-serif text-muted-foreground">impactful.</span>
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Currently open for new opportunities in digital marketing, social media management, and photography.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:otabekuburanov@gmail.com" data-testid="link-email">
                <Button size="lg" className="rounded-full px-8 h-16 text-lg bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto transition-transform hover:scale-105">
                  <Mail className="mr-3 w-5 h-5" /> otabekuburanov@gmail.com
                </Button>
              </a>
              <a href="https://linkedin.com/in/otabekburanov" target="_blank" rel="noreferrer" data-testid="link-linkedin">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-16 text-lg border-border hover:bg-secondary w-full sm:w-auto transition-transform hover:scale-105">
                  <Linkedin className="mr-3 w-5 h-5 text-[#0A66C2]" /> LinkedIn
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Otabek Buranov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
