import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  BookOpen,
  ChevronRight,
  Flame,
  Globe,
  History,
  Landmark,
  Menu,
  Newspaper,
  Skull,
  Tv,
  Users,
  X,
  Zap,
} from 'lucide-react';

const V2_AVATAR = '/images/corentin-avatar-v2.jpg';
const V2_KEN = '/images/kenshiro-ken-le-survivant-v2.jpg';
const CLASSIC_AVATAR = '/images/corentin-avatar.jpg';
const CLASSIC_KEN = '/images/kenshiro-ken-le-survivant.jpg';
const BANNER_KEN = '/images/kenshiro-ken-le-survivant-v-banniere.jpg';

const homeSectionIds = new Set(['top', 'oeuvre', 'kenshiro', 'influences', 'heritage']);

type PageKey = 'home' | 'soten';

function getPageFromHash(hash: string): PageKey {
  return hash === '#soten-no-ken' ? 'soten' : 'home';
}

function getHashTarget(hash: string) {
  return hash.replace('#', '');
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white mb-2"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-orange-500 font-mono text-sm uppercase tracking-[0.3em]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function Card({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className="bg-zinc-900 border-l-4 border-orange-600 p-6 hover:bg-zinc-800 transition-colors group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-orange-600/10 group-hover:bg-orange-600/20 transition-colors">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <span className="text-zinc-700 font-mono text-xs">0{Math.floor(Math.random() * 9) + 1}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight italic">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function EditorialBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 border border-white/15 bg-white/6 text-white/90 uppercase tracking-[0.25em] text-[11px] font-bold rounded-full backdrop-blur-sm cursor-default">
      <span className="w-2 h-2 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

function NavigationLink({
  href,
  children,
  isActive = false,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={`transition-colors ${isActive ? 'text-orange-500' : 'hover:text-orange-500'}`}
    >
      {children}
    </a>
  );
}

function HomePage() {
  return (
    <>
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40 px-6">
        <div className="absolute inset-0 z-0">
          <img src={V2_KEN} alt="Kenshiro" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.24),transparent_38%),linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.78),rgba(0,0,0,0.5))]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base font-mono uppercase tracking-[0.45em] text-orange-500 mb-4"
            >
              Corentin Manga présente
            </motion.p>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[10vw] font-black uppercase italic leading-[0.86] tracking-tighter text-white mb-6"
            >
              Ken <br />
              <span className="text-orange-600">Le Survivant</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-xl md:text-2xl font-mono uppercase tracking-widest text-zinc-400 mb-8"
            >
              La Landing Page qui fracasse des tronches !
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-300 mb-10"
            >
              Une page principale excessive juste comme il faut, pour parler de Hokuto no Ken, de son aura,
              de ses cicatrices et de l&apos;art délicat qui consiste à casser des tronches avec une élégance quasi liturgique.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <EditorialBadge>Lecture continue, pas de blabla</EditorialBadge>
              <div className="flex items-center gap-4 text-left bg-black/45 border border-white/10 px-4 py-3 rounded-full backdrop-blur-sm">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border-2 border-zinc-700">
                  <img src={V2_AVATAR} alt="Portrait de Corentin Manga" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tighter text-zinc-500">Curateur du chaos sensible</p>
                  <p className="font-black italic text-white">Corentin Manga</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="justify-self-center lg:justify-self-end"
          >
            <div className="relative">
              <img
                src={V2_AVATAR}
                alt="Corentin Manga en portrait"
                className="w-56 h-56 md:w-80 md:h-80 object-cover object-[center_18%] rounded-full border-8 border-orange-600 shadow-[0_0_70px_rgba(234,88,12,0.35)]"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-5 border border-dashed border-orange-500/30 rounded-full"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black px-5 py-2 font-black italic uppercase text-sm shadow-xl border border-black/10">
                Corentin veille sur le Hokuto
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="oeuvre" className="py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTitle subtitle="Hokuto no Ken">L&apos;Œuvre Légendaire</SectionTitle>
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  Publié entre <span className="text-white font-bold italic">1983 et 1988</span>, Hokuto no Ken est la rencontre frontale entre la dramaturgie musclée de <span className="text-orange-500">Buronson</span> et la précision furieuse de<span className="text-orange-500"> Tetsuo Hara</span>.
                </p>
                <p>
                  Plus de <span className="text-white font-bold italic">100 millions d&apos;exemplaires</span> plus tard, l&apos;œuvre reste un bloc de granit pop : désert post-atomique, chevalerie de fin du monde et testostérone sculptée au burin. Également, mêlant kung-fu brutal, désert post-nucléaire et tragédie grecque
                </p>
                <div className="grid grid-cols-2 gap-4 pt-8">
                  <div className="border-l-2 border-zinc-800 pl-4">
                    <p className="text-3xl font-black text-white italic">1983</p>
                    <p className="text-xs uppercase font-bold text-zinc-600">Première parution</p>
                  </div>
                  <div className="border-l-2 border-zinc-800 pl-4">
                    <p className="text-3xl font-black text-white italic">100M+</p>
                    <p className="text-xs uppercase font-bold text-zinc-600">Ventes mondiales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-600/20 blur-2xl group-hover:bg-orange-600/30 transition-all" />
              <img src={V2_KEN} alt="Illustration de Kenshiro" className="relative z-10 w-full aspect-[4/5] object-cover border border-zinc-800" />
              <div className="absolute bottom-8 -left-4 md:-left-8 z-20 bg-white text-black p-6 font-black italic uppercase text-xl md:text-2xl transform -rotate-3 shadow-xl">
                Tu ne le sais pas encore...
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kenshiro" className="py-32 px-6 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionTitle subtitle="Héritier du Hokuto Shinken">L&apos;Héritier aux 7 cicatrices</SectionTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={Skull}
              title="Stoïcisme brutal"
              description="Kenshiro n'est pas là pour rigoler. Son visage de marbre cache une douleur infinie et une détermination qui brise les os."
            />
            <Card
              icon={Zap}
              title="Points de pression"
              description="Le Hokuto Shinken détruit de l'intérieur. Un doigt suffit à faire exploser ton corps dans 3 secondes."
              delay={0.1}
            />
            <Card
              icon={Flame}
              title="Romance sous cendres"
              description="À la recherche de sa bien-aimée Julia, il traverse un monde de cendres où seule la force fait la loi."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <section id="influences" className="py-32 bg-zinc-950 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Pop Culture Synthesis">Les Racines du Chaos</SectionTitle>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                name: 'Bruce Lee',
                type: 'Martial',
                text: 'La nervosité animale, la vitesse et la ligne du corps qui promet une catastrophe élégante.',
              },
              {
                name: 'Mad Max',
                type: 'Désert',
                text: 'Le monde vidé de sa douceur, où la mécanique rouillée devient presque une religion.',
              },
              {
                name: 'Yūsaku Matsuda',
                type: 'Charisme',
                text: 'Le regard froid, la silhouette longue et cette façon de faire monter la tension sans un mot de trop.',
              },
              {
                name: 'Frazetta',
                type: 'Épique',
                text: 'Des muscles, des ombres, une grandiloquence barbare qui ne demande jamais pardon.',
              },
            ].map((inf, index) => (
              <motion.div
                key={inf.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="relative min-h-72 border border-zinc-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 flex flex-col justify-between"
              >
                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-orange-500">{inf.type}</div>
                <div>
                  <h4 className="text-2xl font-black italic uppercase text-white mb-3">{inf.name}</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">{inf.text}</p>
                </div>
                <div className="h-px bg-zinc-800" />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-black italic uppercase text-white mb-4">Le mix parfait</h3>
              <p className="text-zinc-400 leading-relaxed">
                Hokuto no Ken assemble du kung-fu de cinéma, du western irradié, du mélodrame viril et un sens très sérieux du ridicule sublime. C&apos;est exactement pour cela que ça tient encore aussi bien.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-orange-600 flex items-center justify-center rotate-3">
                <Zap className="text-white w-10 h-10" />
              </div>
              <div className="w-20 h-20 bg-white flex items-center justify-center -rotate-6">
                <Skull className="text-black w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-orange-600 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-video bg-black flex items-center justify-center relative overflow-hidden">
              <Tv className="w-20 h-20 text-orange-600 relative z-10" />
              <div className="absolute inset-0 opacity-30">
                <img src={BANNER_KEN} alt="Bannière de Ken le Survivant" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">Le choc <br /> français</h2>
            <p className="text-xl font-bold mb-8 leading-tight">
              Entre Club Dorothée, doublages devenus mythiques et fascination pour les gros bras qui parlent comme des prophètes, la France a transformé Ken en monument parallèle, à la fois culte, étrange et parfaitement inoubliable.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-black/20" />
              <span className="font-mono text-sm uppercase tracking-widest">Culte et controversé</span>
              <div className="h-px flex-1 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="heritage" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="La légende continue">L&apos;Héritage immortel</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/50 p-10 border border-zinc-800">
              <History className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-3xl font-black italic uppercase text-white mb-4">Influence majeure</h3>
              <p className="text-zinc-400 mb-6">
                Sans Ken, pas de JoJo's Bizarre Adventure, pas de Berserk tel qu'on le connaît. Son influence sur le jeu vidéo (Yakuza, Fallout) est colossale.
              </p>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-wider text-zinc-500">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-orange-500" /> Manga shonen moderne</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-orange-500" /> Esthétique post-apo</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-orange-500" /> Culture du mème viril</li>
              </ul>
            </div>

            <div className="bg-white p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 rounded-full">
                  Veille permanente
                </div>
                <h3 className="text-4xl font-black italic uppercase text-black mb-4">Le retour du roi</h3>
                <p className="text-zinc-600 font-bold text-lg">
                  Entre nouveaux projets, rééditions et marées de clips partagés partout, la légende n&apos;est pas congelée dans les années 80. Elle continue de se réimprimer dans les cerveaux.
                </p>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 text-black/75 uppercase tracking-[0.28em] text-[11px] font-bold border border-black/10 px-5 py-3 rounded-full self-start cursor-default">
                <span className="w-2 h-2 rounded-full bg-orange-600" />
                Préparez vos points de pression : élégante menace
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SotenPage() {
  return (
    <section id="soten-no-ken" className="pt-32 md:pt-40 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start mb-20">
          <div>
            <EditorialBadge>Spin-off historique, toujours avec mauvaise foi mesurée</EditorialBadge>
            <h1 className="mt-6 text-5xl md:text-[7vw] font-black uppercase italic leading-[0.9] tracking-tighter text-white">
              Soten no Ken <br />
              <span className="text-orange-600">avant les grandes baffes</span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
              Avant Kenshiro, la famille avait déjà des problèmes très sérieux, mais dans un décor autrement plus chargé : Shanghai, ses concessions, ses trafics, ses humiliations coloniales et une crise de l&apos;opium qui n&apos;avait pas franchement besoin d&apos;un art martial fatal pour être dramatique.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-200 cursor-default">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Ici on explore l'apocalypse Hokuto
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-start">
            <img src={CLASSIC_KEN} alt="Illustration classique de Kenshiro" className="w-full h-[26rem] md:h-[34rem] object-cover border border-zinc-800" />
            <img src={CLASSIC_AVATAR} alt="Portrait classique de Corentin Manga" className="w-full h-[20rem] md:h-[26rem] object-cover border border-zinc-800 mt-12 md:mt-20" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card
            icon={Landmark}
            title="Shanghai, vraie poudrière"
            description="Le spin-off s&apos;amuse avec une ville coupée entre puissances étrangères, mafias et humiliations politiques. Le décor n&apos;est pas juste exotique : il est déjà sous haute tension."
          />
          <Card
            icon={Newspaper}
            title="Crise de l&apos;opium"
            description="Soten no Ken recycle l&apos;ombre des guerres de l&apos;opium, du commerce forcé et de la dépendance comme carburant dramatique. C&apos;est de l&apos;Histoire remixée au poing américain."
            delay={0.1}
          />
          <Card
            icon={BookOpen}
            title="Le bricolage Hokuto"
            description="Le manga prend des éléments historiques, serre les boulons, ajoute des manteaux, des mâchoires carrées et dit : parfait, maintenant faisons-en une dynastie tragique de casseurs mystiques."
            delay={0.2}
          />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start mb-20">
          <div className="bg-zinc-950 border border-zinc-800 p-8">
            <SectionTitle subtitle="Contexte historique">Ce que le fond raconte vraiment</SectionTitle>
            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                Shanghai des années 1930 concentre les contradictions d&apos;une Chine semi-colonisée : concessions étrangères, triades, nationalismes concurrents et pauvreté instrumentalisée. Le spin-off ne fait pas un cours magistral, mais il sent bien que le terrain est déjà tragique sans avoir besoin d&apos;une explosion de torses à chaque coin de rue.
              </p>
              <p>
                Ce qui est amusant, c&apos;est la manière dont la série remonte l&apos;arbre généalogique du mythe. On y cherche la noblesse des origines, tout en gardant le goût du baroque : grands discours, regards en biais, destin maudit et coups si précis qu&apos;ils donnent l&apos;impression de corriger l&apos;Histoire à mains nues.
              </p>
            </div>
          </div>

          <div className="bg-white text-black p-8 md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-600 mb-4">Version franche</p>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
              Un spin-off qui prend Shanghai,
              l&apos;opium, la guerre des nerfs et ajoute des épaules gigantesques
            </h2>
            <div className="space-y-5 text-zinc-700 leading-relaxed text-lg">
              <p>
                Ce n&apos;est pas de l&apos;histoire pure, et tant mieux. Soten no Ken fonctionne comme une grande machine à amplification : il prend des faits, les plie vers la légende familiale et leur donne un ton de feuilleton fataliste où chacun semble prêt à réciter son destin avant de fracasser une table.
              </p>
              <p>
                Le résultat est fascinant parce qu&apos;il reste bancal. On apprend des choses, puis soudain quelqu&apos;un surgit avec une coupe impeccable, un code d&apos;honneur en marbre et une capacité très inquiétante à régler des débats géopolitiques avec deux doigts. Franchement, ça se tient presque trop bien.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.35em] text-orange-500 mb-3">Conclusion parfaitement scientifique</p>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white mb-3">Soten no Ken, c&apos;est l&apos;Histoire en manteau long</h3>
            <p className="text-zinc-400 max-w-3xl leading-relaxed">
              On part de vraies tensions historiques, on ajoute du destin dynastique, un soupçon de mélodrame et suffisamment de nobles postures pour nourrir tout un quartier. Le sérieux du fond reste là, mais il passe par une machine à mythifier qui adore faire beaucoup. C&apos;est précisément pour ça que c&apos;est drôle et attachant.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 self-start md:self-center text-[11px] font-bold uppercase tracking-[0.28em] text-white border border-white/10 px-5 py-3 rounded-full cursor-default">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Pas un bouton, juste un verdict
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageKey>(() => getPageFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const nextPage = getPageFromHash(hash);
      setCurrentPage(nextPage);

      const targetId = getHashTarget(hash);
      if (nextPage === 'home' && homeSectionIds.has(targetId)) {
        requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = currentPage === 'soten'
      ? 'Corentin Manga | Soten no Ken, Shanghai et grandes baffes'
      : 'Corentin Manga | Ken le Survivant, la page qui fracasse des tronches';
  }, [currentPage]);

  const avatarSrc = currentPage === 'soten' ? CLASSIC_AVATAR : V2_AVATAR;

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-orange-600 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-black text-black italic overflow-hidden shrink-0">
              <img src={V2_AVATAR} alt="Corentin Manga" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <span className="block font-black text-xl tracking-tighter uppercase italic text-white truncate">Corentin Manga</span>
              <span className="block text-[10px] uppercase tracking-[0.32em] text-zinc-500 truncate">Ken le Survivant</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <NavigationLink href="#oeuvre">L&apos;Œuvre</NavigationLink>
            <NavigationLink href="#kenshiro">Kenshiro</NavigationLink>
            <NavigationLink href="#influences">Influences</NavigationLink>
            <NavigationLink href="#heritage">Héritage</NavigationLink>
            <NavigationLink href="#soten-no-ken" isActive={currentPage === 'soten'}>Soten no Ken</NavigationLink>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full text-zinc-300 bg-white/5 cursor-default">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Tu es déjà mort
            </div>
          </div>

          <button className="md:hidden text-white shrink-0" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Ouvrir le menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 flex flex-col gap-8 text-2xl font-black uppercase italic"
          >
            <NavigationLink href="#oeuvre" onNavigate={() => setIsMenuOpen(false)}>L&apos;Œuvre</NavigationLink>
            <NavigationLink href="#kenshiro" onNavigate={() => setIsMenuOpen(false)}>Kenshiro</NavigationLink>
            <NavigationLink href="#influences" onNavigate={() => setIsMenuOpen(false)}>Influences</NavigationLink>
            <NavigationLink href="#heritage" onNavigate={() => setIsMenuOpen(false)}>Héritage</NavigationLink>
            <NavigationLink href="#soten-no-ken" isActive={currentPage === 'soten'} onNavigate={() => setIsMenuOpen(false)}>
              Soten no Ken
            </NavigationLink>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === 'soten' ? <SotenPage /> : <HomePage />}

      <footer className="py-20 border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-black text-black italic text-sm overflow-hidden border-2 border-orange-500">
                <img src={avatarSrc} alt="Signature Corentin Manga" className="w-full h-full object-cover" />
              </div>
              <span className="font-black text-lg tracking-tighter uppercase italic text-white">Corentin Manga</span>
            </div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">© 2026 - L'Apocalypse est proche, dossier maison sous haute pression</p>
          </div>

          <div className="flex gap-8">
            <a href="#soten-no-ken" className="text-zinc-500 hover:text-white transition-colors" aria-label="Lire la page Soten no Ken">
              <Users className="w-6 h-6" />
            </a>
            <a href="#oeuvre" className="text-zinc-500 hover:text-white transition-colors" aria-label="Aller à la section L'oeuvre">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#heritage" className="text-zinc-500 hover:text-orange-500 transition-colors" aria-label="Aller à la section Héritage">
              <History className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white font-black italic uppercase">Omae wa mou shindeiru</p>
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">Naaaniii ?!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
