"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calculator, TrendingUp, Target, BookOpen, Zap, Brain, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const subjects = [
    {
      title: "Calcolo Combinatorio",
      description: "Permutazioni, combinazioni e principi fondamentali del conteggio",
      icon: Calculator,
      href: "/combinatoria",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      examples: ["Permutazioni", "Combinazioni", "Principio moltiplicativo"]
    },
    {
      title: "Variabili Aleatorie Discrete",
      description: "Distribuzione binomiale, di Poisson e teoria delle probabilità",
      icon: BookOpen,
      href: "/argomento1",
      color: "text-green-600", 
      bgColor: "bg-green-50",
      examples: ["Binomiale", "Poisson", "Funzioni di massa"]
    },
    {
      title: "Variabili Aleatorie Continue",
      description: "Distribuzione normale, uniforme ed esponenziale",
      icon: TrendingUp,
      href: "/argomento2",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      examples: ["Normale", "Uniforme", "Esponenziale"]
    },
    {
      title: "Teoremi Limite",
      description: "Legge dei grandi numeri e teorema centrale del limite",
      icon: Target,
      href: "/argomento3",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      examples: ["TCL", "LLN", "Convergenza"]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Apprendimento Intuitivo",
      description: "Spiegazioni chiare con esempi pratici e formule step-by-step"
    },
    {
      icon: Zap,
      title: "Accesso Istantaneo",
      description: "Installabile come app nativa, funziona anche offline"
    },
    {
      icon: Award,
      title: "Contenuti Universitari",
      description: "Teoria completa per esami di Probabilità e Statistica"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        className="relative px-6 py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Icon animato */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl"
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>

          {/* Titolo principale */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
          >
            MathStudy
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-4"
          >
            La tua app di studio per
          </motion.p>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          >
            Probabilità & Statistica
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Tutto quello che ti serve per superare l&apos;esame universitario: 
            teoria completa, formule matematiche interattive ed esempi svolti passo dopo passo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              asChild
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/combinatoria">
                <Calculator className="mr-2 h-5 w-5" />
                Inizia a Studiare
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 border-gray-300 hover:bg-gray-50"
            >
              <Link href="#argomenti">
                <BookOpen className="mr-2 h-5 w-5" />
                Esplora Argomenti
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-500">Argomenti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm text-gray-500">Formule</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">20+</div>
              <div className="text-sm text-gray-500">Esempi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-500">Offline</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Perché scegliere MathStudy?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Un&apos;esperienza di studio ottimizzata per gli studenti universitari
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="argomenti" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Argomenti di Studio
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Esplora i quattro pilastri della Probabilità e Statistica universitaria
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {subjects.map((subject, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={subject.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${subject.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                          <subject.icon className={`w-6 h-6 ${subject.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                            {subject.title}
                          </CardTitle>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {subject.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {subject.examples.map((example, i) => (
                          <span 
                            key={i}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${subject.bgColor} ${subject.color}`}
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Pronto per il tuo esame?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Inizia subito a studiare con MathStudy. 
              Installala come app e porta la matematica sempre con te.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                asChild
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/combinatoria">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Inizia Ora
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}