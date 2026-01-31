import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "me" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  me: {
    // Header
    "nav.about": "O nama",
    "nav.services": "Usluge",
    "nav.pricing": "Cijene",
    "nav.trainers": "Treneri",
    "nav.schedule": "Raspored",
    "nav.gallery": "Galerija",
    "nav.contact": "Kontakt",
    "nav.joinNow": "Pridruži se",
    
    // Hero
    "hero.subtitle": "Premium fitness u Budvi, Crna Gora",
    "hero.headline1": "DISCIPLINA.",
    "hero.headline2": "SNAGA.",
    "hero.headline3": "REZULTATI.",
    "hero.description": "Elitni personalni treninzi, boks časovi i vrhunski objekti. Transformiši svoje tijelo. Izgradi um. Postani nezaustavljiv.",
    "hero.joinNow": "Pridruži se",
    "hero.freeTrial": "Besplatni trening",
    
    // About
    "about.title": "O NAMA",
    "about.subtitle": "Više od teretane. Svetište za one koji zahtijevaju izvrsnost.",
    "about.heading": "GDJE SE DISCIPLINA SUSREĆE SA",
    "about.headingHighlight": "TRANSFORMACIJOM",
    "about.p1": "Osnovan u srcu Budve, Crna Gora, Fitness Original je izgrađen na jednom uvjerenju:",
    "about.p1Highlight": " prava snaga se kuje kroz disciplinu",
    "about.p2": "Naš elitni objekat kombinuje najsavremeniju opremu, vrhunske trenere i beskompromisnu posvećenost rezultatima. Bilo da prvi put ulazite u ring ili jurite svoj sljedeći lični rekord, ovo je mjesto gdje se stvaraju šampioni.",
    "about.p3": "Ne gradimo samo tijela. Mi kujemo mentalitete. Stvaramo ratnike.",
    "about.p3Highlight": " Bez izgovora. Samo rezultati.",
    "about.stat1": "Aktivnih članova",
    "about.stat2": "Godina iskustva",
    "about.stat3": "Stopa uspjeha",
    "about.stat4": "Sagorenih kalorija",
    
    // Services
    "services.title": "NAŠE",
    "services.titleHighlight": "USLUGE",
    "services.subtitle": "Elitni programi dizajnirani da transformišu vaše tijelo i um",
    "services.personal.title": "Personalni treninzi",
    "services.personal.desc": "Individualne sesije sa elitnim trenerima. Prilagođeni programi dizajnirani za vaše specifične ciljeve i tip tijela.",
    "services.boxing.title": "Boks časovi",
    "services.boxing.desc": "Naučite plemenitu vještinu od profesionalnih boraca. Izgradite snagu, brzinu i mentalnu čvrstinu.",
    "services.group.title": "Grupni treninzi",
    "services.group.desc": "Sesije visokog intenziteta koje pomjeraju vaše granice. Napajajte se energijom istomišljenika.",
    "services.weight.title": "Treninzi sa tegovima",
    "services.weight.desc": "Najsavremenija oprema i stručno vođenje. Izgradite figuru o kojoj ste uvijek sanjali.",
    "services.fatloss.title": "Programi mršavljenja",
    "services.fatloss.desc": "Protokoli zasnovani na nauci koji tope masti dok čuvaju mišiće. Pravi rezultati, garantovano.",
    "services.strength.title": "Snaga i kondicija",
    "services.strength.desc": "Atletski trening za sve nivoe. Postanite brži, jači, eksplozivniji.",
    
    // Pricing
    "pricing.title": "ČLANARINE",
    "pricing.titleHighlight": "PAKETI",
    "pricing.subtitle": "Investirajte u sebe. Izaberite plan koji odgovara vašoj ambiciji.",
    "pricing.starter": "STARTER",
    "pricing.warrior": "RATNIK",
    "pricing.elite": "ELITA",
    "pricing.annual": "GODIŠNJA ELITA",
    "pricing.mostPopular": "Najpopularnije",
    "pricing.month": "/mjesečno",
    "pricing.year": "/godišnje",
    "pricing.getStarted": "Započni",
    "pricing.feature.gymAccess": "Potpun pristup teretani",
    "pricing.feature.lockerRoom": "Pristup svlačionici",
    "pricing.feature.basicEquipment": "Obuka za osnovnu opremu",
    "pricing.feature.openGym": "Otvoreni termini",
    "pricing.feature.everythingStarter": "Sve iz Starter paketa",
    "pricing.feature.unlimitedGroup": "Neograničeni grupni treninzi",
    "pricing.feature.onePersonal": "1 personalni trening mjesečno",
    "pricing.feature.nutritionGuidance": "Savjeti o ishrani",
    "pricing.feature.boxingAccess": "Pristup boks časovima",
    "pricing.feature.priorityEquipment": "Prioritetna rezervacija opreme",
    "pricing.feature.everythingWarrior": "Sve iz Ratnik paketa",
    "pricing.feature.fourPersonal": "4 personalna treninga mjesečno",
    "pricing.feature.customMealPlans": "Prilagođeni planovi ishrane",
    "pricing.feature.recoveryRoom": "Pristup sobi za oporavak",
    "pricing.feature.trainerSupport": "24/7 podrška trenera",
    "pricing.feature.bodyComposition": "Analiza sastava tijela",
    "pricing.feature.vipLocker": "VIP ormarić",
    "pricing.feature.allElite": "Sve pogodnosti Elite",
    "pricing.feature.twoMonthsFree": "2 mjeseca gratis",
    "pricing.feature.merchandise": "Ekskluzivni paket opreme",
    "pricing.feature.guestPasses": "Ulaznice za goste (4/mjesečno)",
    "pricing.feature.priorityClass": "Prioritetna rezervacija časova",
    "pricing.feature.quarterlyReviews": "Kvartalni pregledi ciljeva",
    
    // Trainers
    "trainers.title": "UPOZNAJTE VAŠE",
    "trainers.titleHighlight": "TRENERE",
    "trainers.subtitle": "Elitni treneri koji su prošli taj put. Vodiće vas do veličine.",
    "trainers.trainer1.name": "Marko Petrović",
    "trainers.trainer1.specialty": "Snaga i kondicija",
    "trainers.trainer1.bio": "Bivši nacionalni prvak u powerliftingu. 12+ godina transformacije sportista i običnih ratnika.",
    "trainers.trainer2.name": "Ana Kovačević",
    "trainers.trainer2.specialty": "HIIT i mršavljenje",
    "trainers.trainer2.bio": "Sertifikovani nutricionista i trener. Poznata po programima visokog intenziteta koji daju brze rezultate.",
    "trainers.trainer3.name": "Nikola Vuković",
    "trainers.trainer3.specialty": "Boks i borbe",
    "trainers.trainer3.bio": "Profesionalni bokser sa 30+ mečeva. Predaje disciplinu, tehniku i ratnički mentalitet.",
    
    // Schedule
    "schedule.title": "RASPORED",
    "schedule.titleHighlight": "ČASOVA",
    "schedule.subtitle": "Planirajte svoje treninge. Nikada ne propustite sesiju.",
    "schedule.monday": "Ponedjeljak",
    "schedule.tuesday": "Utorak",
    "schedule.wednesday": "Srijeda",
    "schedule.thursday": "Četvrtak",
    "schedule.friday": "Petak",
    "schedule.saturday": "Subota",
    "schedule.sunday": "Nedjelja",
    "schedule.boxing": "Boks",
    "schedule.hiit": "HIIT",
    "schedule.strength": "Snaga",
    "schedule.groupTraining": "Grupni trening",
    "schedule.fatBurn": "Fat Burn",
    "schedule.conditioning": "Kondicija",
    "schedule.sparring": "Sparing",
    "schedule.openGym": "Otvorena sala",
    
    // Gallery
    "gallery.title": "NAŠA",
    "gallery.titleHighlight": "SALA",
    "gallery.subtitle": "Zavirite u naš vrhunski objekat",
    
    // Testimonials
    "testimonials.title": "PRIČE",
    "testimonials.titleHighlight": "USPJEHA",
    "testimonials.subtitle": "Pravi ljudi. Prave transformacije. Pravi rezultati.",
    "testimonials.t1.quote": "Smršao sam 25kg za 6 mjeseci. Ali još važnije, pronašao sam disciplinu za koju nisam znao da imam. Fitness Original mi je promijenio život.",
    "testimonials.t1.name": "Stefan M.",
    "testimonials.t1.result": "Izgubio 25kg",
    "testimonials.t2.quote": "Boks časovi su intenzivni. Nikola me je gurnuo dalje od onoga što sam mislio da je moguće. Sada se takmičim na amaterskom nivou.",
    "testimonials.t2.name": "Luka D.",
    "testimonials.t2.result": "Amaterski bokser",
    "testimonials.t3.quote": "Kao zaposleni profesionalac, trebala mi je efikasnost. Personalni treninzi ovdje vrijede svaki euro. Rezultati govore sami za sebe.",
    "testimonials.t3.name": "Marina K.",
    "testimonials.t3.result": "Dobila 8kg mišića",
    
    // Contact
    "contact.title": "ZAPOČNITE SVOJE",
    "contact.titleHighlight": "PUTOVANJE",
    "contact.subtitle": "Spremni za transformaciju? Javite nam se danas.",
    "contact.name": "Vaše ime",
    "contact.email": "Email adresa",
    "contact.phone": "Broj telefona",
    "contact.message": "Recite nam o vašim fitness ciljevima...",
    "contact.send": "Pošalji poruku",
    "contact.location": "Lokacija",
    "contact.phoneLabel": "Telefon",
    "contact.emailLabel": "Email",
    "contact.hours": "Radno vrijeme",
    "contact.hoursValue": "Pon-Sub: 6-22h | Ned: 8-18h",
    
    // Footer
    "footer.tagline": "Premium fitness objekat u Budvi, Crna Gora. Vaš originalni put do snage.",
    "footer.quickLinks": "BRZI LINKOVI",
    "footer.services": "USLUGE",
    "footer.contact": "KONTAKT",
    "footer.rights": "Sva prava zadržana.",
    "footer.privacy": "Politika privatnosti",
    "footer.terms": "Uslovi korišćenja",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.trainers": "Trainers",
    "nav.schedule": "Schedule",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.joinNow": "Join Now",
    
    // Hero
    "hero.subtitle": "Premium Fitness in Budva, Montenegro",
    "hero.headline1": "DISCIPLINE.",
    "hero.headline2": "POWER.",
    "hero.headline3": "RESULTS.",
    "hero.description": "Elite personal training, boxing classes, and world-class facilities. Transform your body. Forge your mind. Become unstoppable.",
    "hero.joinNow": "Join Now",
    "hero.freeTrial": "Book Free Trial",
    
    // About
    "about.title": "ABOUT",
    "about.subtitle": "More than a gym. A sanctuary for those who demand excellence.",
    "about.heading": "WHERE DISCIPLINE MEETS",
    "about.headingHighlight": "TRANSFORMATION",
    "about.p1": "Founded in the heart of Budva, Montenegro, Fitness Original was built on one belief:",
    "about.p1Highlight": " true strength is forged through discipline",
    "about.p2": "Our elite facility combines cutting-edge equipment, world-class trainers, and an uncompromising commitment to results. Whether you're stepping into the ring for the first time or chasing your next personal best, this is where champions are made.",
    "about.p3": "We don't just build bodies. We forge mindsets. We create warriors.",
    "about.p3Highlight": " No excuses. Only results.",
    "about.stat1": "Active Members",
    "about.stat2": "Years Experience",
    "about.stat3": "Success Rate",
    "about.stat4": "Calories Burned",
    
    // Services
    "services.title": "OUR",
    "services.titleHighlight": "SERVICES",
    "services.subtitle": "Elite programs designed to transform your body and mind",
    "services.personal.title": "Personal Training",
    "services.personal.desc": "One-on-one sessions with elite coaches. Customized programs designed for your specific goals and body type.",
    "services.boxing.title": "Boxing Classes",
    "services.boxing.desc": "Learn the sweet science from professional fighters. Build power, speed, and mental toughness.",
    "services.group.title": "Group Training",
    "services.group.desc": "High-energy sessions that push your limits. Feed off the energy of like-minded warriors.",
    "services.weight.title": "Weight Training",
    "services.weight.desc": "State-of-the-art equipment and expert guidance. Build the physique you've always wanted.",
    "services.fatloss.title": "Fat Loss Programs",
    "services.fatloss.desc": "Science-based protocols that torch fat while preserving muscle. Real results, guaranteed.",
    "services.strength.title": "Strength & Conditioning",
    "services.strength.desc": "Athletic performance training for all levels. Become faster, stronger, more explosive.",
    
    // Pricing
    "pricing.title": "MEMBERSHIP",
    "pricing.titleHighlight": "PLANS",
    "pricing.subtitle": "Invest in yourself. Choose the plan that matches your ambition.",
    "pricing.starter": "STARTER",
    "pricing.warrior": "WARRIOR",
    "pricing.elite": "ELITE",
    "pricing.annual": "ANNUAL ELITE",
    "pricing.mostPopular": "Most Popular",
    "pricing.month": "/month",
    "pricing.year": "/year",
    "pricing.getStarted": "Get Started",
    "pricing.feature.gymAccess": "Full gym access",
    "pricing.feature.lockerRoom": "Locker room access",
    "pricing.feature.basicEquipment": "Basic equipment training",
    "pricing.feature.openGym": "Open gym hours",
    "pricing.feature.everythingStarter": "Everything in Starter",
    "pricing.feature.unlimitedGroup": "Unlimited group classes",
    "pricing.feature.onePersonal": "1 personal training session/month",
    "pricing.feature.nutritionGuidance": "Nutrition guidance",
    "pricing.feature.boxingAccess": "Boxing classes access",
    "pricing.feature.priorityEquipment": "Priority equipment booking",
    "pricing.feature.everythingWarrior": "Everything in Warrior",
    "pricing.feature.fourPersonal": "4 personal training sessions/month",
    "pricing.feature.customMealPlans": "Custom meal plans",
    "pricing.feature.recoveryRoom": "Recovery room access",
    "pricing.feature.trainerSupport": "24/7 trainer support",
    "pricing.feature.bodyComposition": "Body composition analysis",
    "pricing.feature.vipLocker": "VIP locker",
    "pricing.feature.allElite": "All Elite benefits",
    "pricing.feature.twoMonthsFree": "2 months free",
    "pricing.feature.merchandise": "Exclusive merchandise pack",
    "pricing.feature.guestPasses": "Guest passes (4/month)",
    "pricing.feature.priorityClass": "Priority class booking",
    "pricing.feature.quarterlyReviews": "Quarterly goal reviews",
    
    // Trainers
    "trainers.title": "MEET YOUR",
    "trainers.titleHighlight": "COACHES",
    "trainers.subtitle": "Elite trainers who have walked the path. They'll guide you to greatness.",
    "trainers.trainer1.name": "Marko Petrović",
    "trainers.trainer1.specialty": "Strength & Conditioning",
    "trainers.trainer1.bio": "Former national powerlifting champion. 12+ years transforming athletes and everyday warriors.",
    "trainers.trainer2.name": "Ana Kovačević",
    "trainers.trainer2.specialty": "HIIT & Fat Loss",
    "trainers.trainer2.bio": "Certified nutritionist and trainer. Known for her high-intensity programs that deliver rapid results.",
    "trainers.trainer3.name": "Nikola Vuković",
    "trainers.trainer3.specialty": "Boxing & Combat",
    "trainers.trainer3.bio": "Professional boxer with 30+ fights. Teaches discipline, technique, and the warrior mindset.",
    
    // Schedule
    "schedule.title": "CLASS",
    "schedule.titleHighlight": "SCHEDULE",
    "schedule.subtitle": "Plan your workouts. Never miss a session.",
    "schedule.monday": "Monday",
    "schedule.tuesday": "Tuesday",
    "schedule.wednesday": "Wednesday",
    "schedule.thursday": "Thursday",
    "schedule.friday": "Friday",
    "schedule.saturday": "Saturday",
    "schedule.sunday": "Sunday",
    "schedule.boxing": "Boxing",
    "schedule.hiit": "HIIT",
    "schedule.strength": "Strength",
    "schedule.groupTraining": "Group Training",
    "schedule.fatBurn": "Fat Burn",
    "schedule.conditioning": "Conditioning",
    "schedule.sparring": "Sparring",
    "schedule.openGym": "Open Gym",
    
    // Gallery
    "gallery.title": "THE",
    "gallery.titleHighlight": "FORGE",
    "gallery.subtitle": "Step inside our world-class facility",
    
    // Testimonials
    "testimonials.title": "SUCCESS",
    "testimonials.titleHighlight": "STORIES",
    "testimonials.subtitle": "Real people. Real transformations. Real results.",
    "testimonials.t1.quote": "I lost 25kg in 6 months. But more importantly, I found discipline I never knew I had. Fitness Original changed my life.",
    "testimonials.t1.name": "Stefan M.",
    "testimonials.t1.result": "Lost 25kg",
    "testimonials.t2.quote": "The boxing classes are intense. Nikola pushed me beyond what I thought possible. Now I compete at amateur level.",
    "testimonials.t2.name": "Luka D.",
    "testimonials.t2.result": "Amateur Boxer",
    "testimonials.t3.quote": "As a busy professional, I needed efficiency. The personal training here is worth every euro. Results speak for themselves.",
    "testimonials.t3.name": "Marina K.",
    "testimonials.t3.result": "Gained 8kg muscle",
    
    // Contact
    "contact.title": "START YOUR",
    "contact.titleHighlight": "JOURNEY",
    "contact.subtitle": "Ready to transform? Get in touch today.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Tell us about your fitness goals...",
    "contact.send": "Send Message",
    "contact.location": "Location",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon-Sat: 6AM-10PM | Sun: 8AM-6PM",
    
    // Footer
    "footer.tagline": "Premium fitness facility in Budva, Montenegro. Your original path to strength.",
    "footer.quickLinks": "QUICK LINKS",
    "footer.services": "SERVICES",
    "footer.contact": "CONTACT",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "me";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["me"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
