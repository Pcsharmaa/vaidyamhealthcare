import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";

import doctorImage from "@/assets/doctorimages/Doctor Portrait 1.png";
import {
  Stethoscope, Leaf, HeartPulse, Apple, Brain, Weight,
  Sparkles, Bone, Activity, Star, ArrowRight, Quote,
} from "lucide-react";
const bannerImages = Object.values(
  import.meta.glob("@/assets/banners/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

const services = [
  { icon: Stethoscope, title: "Ayurvedic Consultation", desc: "Comprehensive health assessment based on Ayurvedic principles" },
  { icon: Leaf, title: "Panchakarma Therapy", desc: "Five-fold detoxification and rejuvenation therapy" },
  { icon: HeartPulse, title: "Herbal Medicine", desc: "Personalized herbal formulations for holistic healing" },
  { icon: Apple, title: "Diet & Lifestyle", desc: "Customized Ayurvedic diet and daily routine guidance" },
  { icon: Brain, title: "Stress Management", desc: "Natural therapies for mental peace and clarity" },
  { icon: Weight, title: "Weight Management", desc: "Holistic approach to achieving your ideal weight" },
];

const testimonials = [
  { name: "Priya Mehta", text: "Dr. Sharma's Panchakarma treatment completely transformed my health. I feel rejuvenated and energetic after years of chronic fatigue.", rating: 5 },
  { name: "Rajesh Kumar", text: "The personalized herbal medicines worked wonders for my digestive issues. Highly recommend this clinic for anyone seeking natural healing.", rating: 5 },
  { name: "Anita Devi", text: "I was skeptical at first, but the results speak for themselves. My joint pain has reduced significantly after just 3 weeks of treatment.", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const [heroImage, setHeroImage] = useState<string>(bannerImages[0]);

  useEffect(() => {
    if (bannerImages.length === 0) return;

    const changeImage = () => {
      setHeroImage((current) => {
        const currentIndex = bannerImages.indexOf(current);
        const nextIndex = (currentIndex + 1) % bannerImages.length;
        return bannerImages[nextIndex];
      });
    };

    const interval = window.setInterval(changeImage, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {/* SEO */}
      <title>Vaidyam Clinic</title>
      <meta name="description" content="Dr. Harsh Vardhan Sharma (BAMS) offers holistic Ayurvedic treatments including Panchakarma, herbal medicine, and natural healing in Uttarakhand, India." />

      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ayurvedic herbs and healing oils"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Buttons */}
        <div className="absolute bottom-2 left-6 z-20 flex flex-wrap gap-4">
          <Button size="lg"
           variant="outline" 
           className="border-white text-black"
           asChild
          >
            <Link to="/consultation">
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-black"
            asChild
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </section>
          

      {/* Services Highlight */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Core Services"
            description="Comprehensive Ayurvedic treatments designed to restore your body's natural balance and promote lasting wellness."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full hover:shadow-elevated transition-shadow bg-background">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Patient Stories"
            title="What Our Patients Say"
            description="Real experiences from patients who found healing through our Ayurvedic treatments."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full bg-background">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-accent/40 mb-3" />
                    <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                    <div className="flex items-center gap-1 mt-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="mt-2 font-heading font-semibold text-foreground">{t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-center">

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src={doctorImage}
          alt="Dr. Harsh Vardhan Sharma"
          className="w-44 h-44 rounded-full object-cover border-4 border-primary/10 shadow-xl"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
          Meet Your Doctor
        </span>

        <h2 className="mt-2 text-3xl font-bold">
          Dr. Harsh Vardhan Sharma
        </h2>

        <p className="text-primary font-medium mt-1">
          BAMS • Ayurvedic Physician
        </p>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          Helping patients achieve long-term wellness through authentic Ayurveda,
          Panchakarma therapies, herbal medicine, and personalized treatment
          plans.
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
            🌿 Ayurveda
          </span>
          <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
            🩺 Panchakarma
          </span>
          <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
            💚 Holistic Care
          </span>
        </div>

        <Button className="mt-6" asChild>
          <Link to="/about">
            View Full Profile
          </Link>
        </Button>
      </motion.div>

    </div>
  </div>
</section>

      <section className="py-20 bg-white border-t border-gray-100">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        Begin Your Healing Journey Today
      </h2>

      <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
        Take the first step towards natural wellness. Book a consultation with
        Dr. Harsh Vardhan Sharma.
      </p>

      <Button size="lg" variant="secondary" className="mt-8" asChild>
        <Link to="/consultation">
          Book Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  </div>
</section>
    </>
  );
};

export default Index;
