import React, { useState, useRef, useEffect } from 'react';
import { 
  Settings, 
  Cpu, 
  Layers, 
  FileText, 
  PenTool, 
  Activity, 
  Droplets, 
  Truck, 
  Car, 
  Shield, 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight,
  Award,
  CheckCircle2,
  Upload,
  X,
  FileArchive,
  Globe,
  Plus,
  Trash2,
  Lock,
  LogOut,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, languages, translations } from './translations';

// --- Constants & Data ---

const COMPANY_NAME = "Manes Makina Mühendislik";
const ADDRESS = "Ostim Teknopark Turuncu Bina: Ostim osb mah. Cevat Dündar caddesi No:1/1/10 Yenimahalle/ANKARA";

const CAPABILITIES = [
  { title: "Otomasyon Projeleri", icon: Settings, desc: "Endüstriyel süreçlerin verimliliğini artıran modern otomasyon çözümleri." },
  { title: "Robotik Otomasyon", icon: Cpu, desc: "Hassas ve hızlı üretim için özelleştirilmiş robotik sistem entegrasyonu." },
  { title: "Kaynaklı İmalat", icon: Layers, desc: "Uluslararası standartlarda sertifikalı kaynaklı üretim ve montaj." },
  { title: "Proje İmalatları", icon: FileText, desc: "Fikir aşamasından anahtar teslim üretime kadar tam kapsamlı proje yönetimi." },
  { title: "Tasarım & Analiz", icon: PenTool, desc: "CAD/CAM tasarımı ve gelişmiş mühendislik analizleri (FEA, CFD)." },
  { title: "Hidrolik-Pnömatik", icon: Droplets, desc: "Güç ve hareket kontrolü için yüksek performanslı akışkan sistemleri." }
];

const SECTORS = [
  { title: "İş Makinesi", icon: Truck },
  { title: "Otomotiv", icon: Car },
  { title: "Savunma Sanayi", icon: Shield },
  { title: "Özel Tasarım & İmalat", icon: Wrench },
  { title: "Test Üniteleri", icon: Activity }
];

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex items-center ${className}`}>
    <img 
      src="/logo.png" 
      alt="Manes Makina Logo" 
      className="h-12 w-auto object-contain" 
      onError={(e) => {
        // Dosya bulunamazsa kırık resim yerine metin göster
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-2xl font-bold text-zinc-900">MANES</span>');
      }}
    />
  </div>
);

const Navbar = ({ onOpenQuote, currentLang, onLangChange, t }: { onOpenQuote: () => void, currentLang: Language, onLangChange: (lang: Language) => void, t: any }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden sm:block h-8 w-px bg-zinc-300"></div>
            <div className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold leading-tight">
              {t.nav.companySub.split(' ').map((word: string, i: number) => (
                <React.Fragment key={i}>
                  {word}{i === 0 ? <br/> : ''}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600">
            <a href="#kabiliyetler" className="hover:text-zinc-900 transition-colors">{t.nav.capabilities}</a>
            <a href="#sektorler" className="hover:text-zinc-900 transition-colors">{t.nav.sectors}</a>
            <a href="#belgeler" className="hover:text-zinc-900 transition-colors">{t.nav.documents}</a>
            <a href="#iletisim" className="hover:text-zinc-900 transition-colors">{t.nav.contact}</a>
            
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 hover:text-zinc-900 transition-colors py-2"
              >
                <Globe size={18} />
                <span className="uppercase">{currentLang}</span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLangChange(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-50 flex items-center gap-3 ${currentLang === lang.code ? 'text-zinc-900 font-bold bg-zinc-50' : 'text-zinc-600'}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <button 
            onClick={onOpenQuote}
            className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
          >
            {t.nav.getQuote}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenQuote, t }: { onOpenQuote: () => void, t: any }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsShrunk(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <AnimatePresence>
        {!isShrunk && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="fixed inset-0 z-[100] bg-zinc-900 flex items-center justify-center overflow-hidden"
          >
            <motion.div 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute inset-0"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover opacity-60"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-welding-work-in-a-metal-factory-4116-large.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className="relative z-10 text-center">
              <Logo className="scale-[2] invert brightness-0 mb-8" />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 tracking-[0.5em] uppercase text-sm font-bold"
              >
                {t.hero.subtitle} & {t.hero.manufacturing}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isShrunk ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              {t.hero.title.split(' ').slice(0, -1).join(' ')} <span className="text-zinc-400 italic font-serif">{t.hero.title.split(' ').pop()}</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl">
              {t.hero.desc}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={onOpenQuote}
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:gap-4 transition-all"
              >
                {t.hero.cta} <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
          
          <div className="mt-12 lg:mt-0 relative h-[450px] lg:h-[550px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isShrunk ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-200"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-welding-work-in-a-metal-factory-4116-large.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {isShrunk && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-zinc-900 text-white p-3 rounded-xl">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-zinc-900">{t.hero.badge}</div>
                    <div className="text-sm text-zinc-500">{t.hero.badgeDesc}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-10 skew-x-12 transform translate-x-1/2"></div>
    </section>
  );
};

const CapabilitiesSection = ({ t }: { t: any }) => (
  <section id="kabiliyetler" className="py-24 bg-zinc-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500">{t.capabilities.title}</h2>
        <p className="mt-4 text-4xl font-bold">{t.capabilities.subtitle}</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.capabilities.items.map((cap: any, idx: number) => {
          const icons = [Settings, Cpu, Layers, FileText, PenTool, Droplets];
          const Icon = icons[idx] || Settings;
          return (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700 hover:border-zinc-500 transition-all group"
            >
              <div className="w-14 h-14 bg-zinc-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const SectorsSection = ({ t }: { t: any }) => {
  const sectorIcons = [Truck, Car, Shield, Wrench, Activity];
  const sectorKeys = ['construction', 'automotive', 'defense', 'custom', 'test'];
  
  return (
    <section id="sektorler" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">{t.sectors.title}</h2>
            <p className="mt-4 text-4xl font-bold text-zinc-900">{t.sectors.subtitle}</p>
          </div>
          <p className="text-zinc-500 max-w-sm">
            {t.sectors.desc}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {sectorKeys.map((key, idx) => {
            const Icon = sectorIcons[idx];
            return (
              <div key={idx} className="aspect-square rounded-3xl bg-zinc-50 border border-zinc-200 p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all cursor-default group">
                <div className="text-zinc-400 group-hover:text-zinc-900 transition-colors mb-4">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <span className="font-bold text-zinc-900 tracking-tight">{(t.sectors.items as any)[key]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MachinePark = ({ t, machines }: { t: any, machines: any[] }) => (
  <section id="makina-parkuru" className="py-24 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">{t.machines.title}</h2>
        <p className="mt-4 text-4xl font-bold text-zinc-900">{t.machines.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {machines.map((machine, idx) => (
          <div key={idx} className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-white border border-zinc-200">
            <img 
              src={machine.image_url} 
              alt={machine.name} 
              className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="text-white">
                <div className="font-bold text-lg">{machine.name}</div>
                {machine.description && <div className="text-xs opacity-80">{machine.description}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReferencesSection = ({ t, references }: { t: any, references: any[] }) => (
  <section id="referanslar" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">{t.references.title}</h2>
        <p className="mt-4 text-4xl font-bold text-zinc-900">{t.references.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {references.map((ref, idx) => (
          <div key={idx} className="aspect-square rounded-2xl border border-zinc-100 p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:shadow-lg">
            <img src={ref.image_url} alt={ref.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SamplesSection = ({ t, samples }: { t: any, samples: any[] }) => (
  <section id="ornek-uretimler" className="py-24 bg-zinc-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500">{t.samples.title}</h2>
        <p className="mt-4 text-4xl font-bold">{t.samples.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samples.map((sample, idx) => (
          <div key={idx} className="group relative aspect-square rounded-[2rem] overflow-hidden">
            <img 
              src={sample.image_url} 
              alt={sample.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold text-xl">{sample.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CertificatesSection = ({ t, certificates }: { t: any, certificates: any[] }) => (
  <section id="belgeler" className="py-24 border-y border-zinc-200 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">{t.documents.title}</h2>
        <p className="mt-4 text-4xl font-bold text-zinc-900">{t.documents.subtitle}</p>
        <p className="mt-6 text-zinc-600 max-w-2xl mx-auto">
          {t.documents.desc}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[1/1.4] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm group-hover:shadow-xl transition-all duration-300">
              <img 
                src={cert.image_url} 
                alt={cert.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">{cert.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = ({ t }: { t: any }) => (
  <section id="iletisim" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="lg:grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 text-white">
            <h2 className="text-4xl font-bold mb-8">{t.contact.title}</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">{t.contact.address}</div>
                  <p className="text-zinc-400 leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">{t.contact.email}</div>
                  <p className="text-zinc-400">info@manesmakina.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">{t.contact.phone}</div>
                  <p className="text-zinc-400">+90 (312) --- -- --</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-100 p-12 lg:p-20">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">{t.contact.form.name}</label>
                  <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">{t.contact.form.email}</label>
                  <input type="email" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">{t.contact.form.subject}</label>
                <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">{t.contact.form.message}</label>
                <textarea rows={4} className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all">
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ t }: { t: any }) => (
  <footer className="py-12 border-t border-zinc-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <Logo className="scale-75 origin-left" />
          <div className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 font-semibold leading-tight">
            {t.nav.companySub.split(' ').map((word: string, i: number) => (
              <React.Fragment key={i}>
                {word}{i === 0 ? <br/> : ''}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {COMPANY_NAME}. {t.footer.rights}
        </div>
        <div className="flex gap-6 text-zinc-400">
          <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

const QuoteModal = ({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: any }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 250 * 1024 * 1024) {
        setError(t.quote.errorSize);
        setFile(null);
      } else if (!selectedFile.name.toLowerCase().endsWith('.zip') && !selectedFile.name.toLowerCase().endsWith('.rar')) {
        setError(t.quote.errorType);
        setFile(null);
      } else {
        setFile(selectedFile);
        setError(null);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900">{t.quote.title}</h2>
                <p className="text-zinc-500 mt-2">{t.quote.subtitle}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 tracking-wider">{t.quote.name}</label>
                  <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="Örn: Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 tracking-wider">{t.quote.company}</label>
                  <input type="text" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="Örn: Manes Makina" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 tracking-wider">{t.quote.email}</label>
                  <input type="email" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="ahmet@firma.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 tracking-wider">{t.quote.phone}</label>
                  <input type="tel" required className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="05xx xxx xx xx" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 tracking-wider">{t.quote.file}</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${file ? 'border-emerald-500 bg-emerald-50' : 'border-zinc-200 hover:border-zinc-400 bg-zinc-50'}`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept=".zip,.rar"
                    onChange={handleFileChange}
                  />
                  {file ? (
                    <div className="flex flex-col items-center text-emerald-700">
                      <FileArchive size={40} className="mb-2" />
                      <span className="font-bold">{file.name}</span>
                      <span className="text-xs opacity-70">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-zinc-400">
                      <Upload size={40} className="mb-2" />
                      <span className="font-medium">{t.quote.filePlaceholder}</span>
                      <span className="text-xs mt-1">{t.quote.fileHint}</span>
                    </div>
                  )}
                </div>
                {error && <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>}
              </div>

              <button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200">
                {t.quote.submit}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const AdminPanel = ({ onLogout, onRefresh }: { onLogout: () => void, onRefresh: () => void }) => {
  const [activeTab, setActiveTab] = useState<'certs' | 'machines' | 'refs' | 'samples'>('certs');
  const [data, setData] = useState<any>({ certificates: [], machines: [], references: [], samples: [] });
  const [newItem, setNewItem] = useState<any>({ name: '', description: '', image_url: '' });

  const fetchData = async () => {
    const res = await fetch('/api/content');
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpointMap: any = {
      certs: '/api/admin/certificates',
      machines: '/api/admin/machines',
      refs: '/api/admin/references',
      samples: '/api/admin/samples'
    };
    await fetch(endpointMap[activeTab], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });
    setNewItem({ name: '', description: '', image_url: '' });
    fetchData();
    onRefresh();
  };

  const handleDelete = async (id: number) => {
    const endpointMap: any = {
      certs: `/api/admin/certificates/${id}`,
      machines: `/api/admin/machines/${id}`,
      refs: `/api/admin/references/${id}`,
      samples: `/api/admin/samples/${id}`
    };
    await fetch(endpointMap[activeTab], { method: 'DELETE' });
    fetchData();
    onRefresh();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({ ...newItem, image_url: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">Admin Paneli</h1>
          <button onClick={onLogout} className="flex items-center gap-2 text-red-600 font-bold hover:text-red-700">
            <LogOut size={20} /> Çıkış Yap
          </button>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'certs', label: 'Belgeler' },
            { id: 'machines', label: 'Makinalar' },
            { id: 'refs', label: 'Referanslar' },
            { id: 'samples', label: 'Örnek Üretimler' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-600 border border-zinc-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-6">Yeni Ekle</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">İsim / Başlık</label>
                  <input 
                    type="text" 
                    required 
                    value={newItem.name}
                    onChange={e => setNewItem({...newItem, name: e.target.value})}
                    className="w-full border border-zinc-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-zinc-900 outline-none" 
                  />
                </div>
                {activeTab === 'machines' && (
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Açıklama</label>
                    <textarea 
                      value={newItem.description}
                      onChange={e => setNewItem({...newItem, description: e.target.value})}
                      className="w-full border border-zinc-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-zinc-900 outline-none" 
                    />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Fotoğraf Yükle</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                    />
                    <div className="border-2 border-dashed border-zinc-200 rounded-xl p-8 text-center group-hover:border-zinc-400 transition-all">
                      {newItem.image_url ? (
                        <img src={newItem.image_url} className="max-h-32 mx-auto rounded-lg" />
                      ) : (
                        <div className="text-zinc-400">
                          <ImageIcon size={32} className="mx-auto mb-2" />
                          <span className="text-sm">Tıkla veya Sürükle</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full bg-zinc-900 text-white font-bold py-3 rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                  <Plus size={20} /> Kaydet
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {(data as any)[activeTab === 'certs' ? 'certificates' : activeTab === 'machines' ? 'machines' : activeTab === 'refs' ? 'references' : 'samples'].map((item: any) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-zinc-200 flex gap-4 group">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-zinc-50 shrink-0">
                    <img src={item.image_url} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-zinc-900 truncate">{item.name}</div>
                    {item.description && <div className="text-xs text-zinc-500 line-clamp-2">{item.description}</div>}
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="mt-2 text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [lang, setLang] = useState<Language>('tr');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [content, setContent] = useState<any>({ certificates: [], machines: [], references: [], samples: [] });
  const t = translations[lang];

  const fetchContent = async () => {
    const res = await fetch('/api/content');
    const json = await res.json();
    setContent(json);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  useEffect(() => {
    const currentLangData = languages.find(l => l.code === lang);
    document.documentElement.dir = currentLangData?.dir || 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: adminPass })
    });
    const json = await res.json();
    if (json.success) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPass('');
    } else {
      alert('Hatalı şifre!');
    }
  };

  if (isAdmin) {
    return <AdminPanel onLogout={() => setIsAdmin(false)} onRefresh={fetchContent} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Navbar 
        onOpenQuote={() => setIsQuoteOpen(true)} 
        currentLang={lang} 
        onLangChange={setLang}
        t={t}
      />
      <main>
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} t={t} />
        <CapabilitiesSection t={t} />
        <SectorsSection t={t} />
        <MachinePark t={t} machines={content.machines} />
        <ReferencesSection t={t} references={content.references} />
        <SamplesSection t={t} samples={content.samples} />
        <CertificatesSection t={t} certificates={content.certificates} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <div className="py-4 text-center bg-zinc-50">
        <button 
          onClick={() => setShowAdminLogin(true)}
          className="text-[10px] text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest flex items-center gap-1 mx-auto"
        >
          <Lock size={10} /> Yönetici Girişi
        </button>
      </div>

      <AnimatePresence>
        {showAdminLogin && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdminLogin(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">Yönetici Girişi</h2>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Şifre</label>
                  <input 
                    type="password" 
                    autoFocus
                    value={adminPass}
                    onChange={e => setAdminPass(e.target.value)}
                    className="w-full border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-zinc-900 outline-none" 
                  />
                </div>
                <button className="w-full bg-zinc-900 text-white font-bold py-3 rounded-xl hover:bg-zinc-800 transition-all">
                  Giriş Yap
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} t={t} />
    </div>
  );
}
