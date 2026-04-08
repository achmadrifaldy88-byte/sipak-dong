import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* --- BAGIAN FOTO PROFIL --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
            className="mb-8 relative inline-block"
          >
            {/* Efek Glow di belakang foto */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary to-purple-500 shadow-glow">
              <div className="bg-background rounded-full p-1">
                <img
                  src="/profile.jpg" // Ganti dengan path foto kamu, misal: /profile.jpg
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-transparent"
                />
              </div>
            </div>
            
            {/* Badge Status (Opsional) */}
            <motion.div 
              className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-background rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          {/* --------------------------- */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Welcome To My Portofolio
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hi I'm </span>
            <br />
            <span className="text-gradient">Achmad Rifaldy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Saya adalah seorang murid dari MAN 1 Banda Aceh yang
            tertarik dengan pelajaran coding, izinkan saya mempersembahkan
            portofolio saya. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-glow"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hubungi Saya
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/achmadrifaldy88-byte/sipak-dong.git', label: 'GitHub' },
              // { icon: Linkedin, href: '#', label: 'LinkedIn' },
              // { icon: Youtube, href: '#', label: 'YouTube' },
              // { icon: Instagram, href: '#', label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank" 
                className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}