import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern yang memudahkan seseorang untuk berbelanja.',
    tags: ['Shopee', 'Lazada', 'Tokopedia', 'TikTok Shop'],
    image: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
    delay: 0, // Delay animasi awal
  },
  {
    title: 'Learning Management Platform',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan soal-soal.',
    tags: ['Ruang Guru', 'Duolingo', 'Zenius', 'Quipper'],
    image: '📚',
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
    delay: 0.2,
  },
  {
    title: 'Social Media Platform',
    description: 'Platform yang berguna untuk sosial media dan sharing-sharing.',
    tags: ['WhatsApp', 'Instagram', 'TikTok', 'Facebook'],
    image: '📊',
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
    delay: 0.4,
  },
  {
    title: 'AI Platform',
    description: 'Situs atau APk berbasis AI yang memudahkan seseorang untuk mencari informasi.',
    tags: ['ChatGPT', 'Google', 'Gemini', 'MetaAI'],
    image: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
    delay: 0.1,
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Video tutorial yang sudah banyak tersebar di banyak platform.',
    tags: ['TikTok', 'Instagram', 'YouTube'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
    delay: 0.3,
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips & tricks dalam membuat coding.',
    tags: ['Instagram', 'TikTok', 'YouTube'],
    image: '💡',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
    delay: 0.5,
  },
];

export default function FloatingProjects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Karya Yang Melayang
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              // Efek Muncul Pertama Kali
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.delay }}
              className="relative"
            >
              {/* Efek Melayang (Floating Loop) */}
              <motion.div
                animate={{
                  y: [0, -15, 0], // Bergerak naik 15px lalu turun lagi
                }}
                transition={{
                  duration: 4, // Durasi satu siklus (detik)
                  repeat: Infinity, // Ulang terus menerus
                  ease: "easeInOut",
                  delay: project.delay * 2, // Biar gak barengan naiknya
                }}
                className="h-full"
              >
                <div className="h-full p-6 glass rounded-2xl shadow-xl border border-white/10 hover:border-primary/30 transition-colors group bg-background/50 backdrop-blur-sm">
                  
                  {/* Icon Box */}
                  <div className={`aspect-video rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${project.color} shadow-inner`}>
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {project.isContent && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-primary/20 text-primary font-bold">
                          Content
                        </span>
                      )}
                      <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      {project.github && (
                        <Button variant="outline" size="sm" className="rounded-full h-9" asChild>
                          <a href={project.github}><Github className="h-4 w-4 mr-2" /> Code</a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="rounded-full h-9 shadow-lg shadow-primary/20" asChild>
                          <a href={project.demo}><ExternalLink className="h-4 w-4 mr-2" /> Demo</a>
                        </Button>
                      )}
                      {project.youtube && (
                        <Button size="sm" className="rounded-full h-9 bg-red-600 hover:bg-red-700" asChild>
                          <a href={project.youtube}><Play className="h-4 w-4 mr-2" fill="currentColor" /> Watch</a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}