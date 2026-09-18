import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Instagram, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/lavina-portrait.jpeg.asset.json";
import starRedAsset from "@/assets/star-red.jpeg.asset.json";
import starBlackAsset from "@/assets/star-black.jpeg.asset.json";
import cameraAsset from "@/assets/camera-art.jpeg.asset.json";
import phoneAsset from "@/assets/phone-art.jpeg.asset.json";
import telephoneAsset from "@/assets/telephone-art.jpeg.asset.json";
import zippAsset from "@/assets/zipp-logo.jpeg.asset.json";
import resumeAsset from "@/assets/Lavina-Dangi-Resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lavina Dangi — Creative Developer & CSE Student" },
      { name: "description", content: "Portfolio of Lavina Dangi, a creative developer, Shopify builder, and Computer Science student in Jaipur." },
      { property: "og:title", content: "Lavina Dangi — Creative Developer & CSE Student" },
      { property: "og:description", content: "Fashion, technology, Shopify, and ambitious ideas — selected work by Lavina Dangi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  "Shopify", "Liquid", "HTML / CSS", "JavaScript", "C / C++", "Python",
  "Canva", "Adobe Suite", "ChatGPT", "Creative Strategy", "E-commerce", "Product Pages",
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-10" aria-label="Main navigation">
          <a href="#top" className="font-display text-xl font-black uppercase">Lavina<span className="text-primary">*</span></a>
          <div className="hidden items-center gap-7 text-xs font-bold uppercase md:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#work" className="transition-colors hover:text-primary">Work</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <Link to="/gallery" className="transition-colors hover:text-primary">Gallery</Link>
          </div>
          <Button asChild size="sm" className="rounded-none uppercase">
            <a href="#contact">Let’s talk <ArrowUpRight /></a>
          </Button>
        </nav>
      </header>

      <section id="top" className="relative min-h-[94svh] border-b border-border pt-24">
        <img src={starRedAsset.url} alt="" className="star-drift pointer-events-none absolute -left-14 top-32 w-40 mix-blend-multiply md:left-[5%] md:w-56" />
        <img src={starBlackAsset.url} alt="" className="star-drift-slow pointer-events-none absolute -right-20 top-20 w-44 opacity-80 mix-blend-multiply md:right-[4%] md:w-64" />
        <div className="mx-auto grid min-h-[calc(94svh-6rem)] max-w-[1500px] grid-cols-1 items-end gap-8 px-5 pb-10 md:grid-cols-[1.35fr_0.65fr] md:px-10 md:pb-16">
          <div className="relative z-10">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground"><span className="h-2 w-2 bg-accent" /> Jaipur, India · Available for opportunities</p>
            <h1 className="font-display text-[clamp(4.25rem,12vw,11rem)] font-black uppercase leading-[0.78]">
              Lavina<br/><span className="outline-word">Dangi</span>
            </h1>
            <div className="mt-7 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">I build at the intersection of <strong className="text-foreground">code, commerce, and culture.</strong> CSE student, Shopify developer, creative marketer, and founder in progress.</p>
              <a href="#about" aria-label="Scroll to about" className="grid h-14 w-14 shrink-0 place-items-center border border-foreground transition-colors hover:bg-foreground hover:text-background"><ArrowDown /></a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:mx-0 md:ml-auto">
            <div className="absolute -left-10 top-16 z-10 bg-primary px-4 py-2 text-xs font-black uppercase text-primary-foreground -rotate-6">20 yrs / building early</div>
            <div className="portrait-frame relative aspect-[3/4] overflow-hidden bg-secondary">
              <img src={portraitAsset.url} alt="Lavina Dangi" className="h-full w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0" />
              <div className="absolute inset-x-0 bottom-0 flex justify-between bg-foreground px-4 py-3 text-[10px] font-bold uppercase text-background"><span>Creative technologist</span><span>01 / 06</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker border-b border-border bg-primary py-3 text-primary-foreground">
        <div className="ticker-track font-display text-sm font-black uppercase">Shopify Developer ✦ Creative Marketer ✦ CSE Student ✦ Founder @ Zipp ✦ Shopify Developer ✦ Creative Marketer ✦ CSE Student ✦ Founder @ Zipp ✦</div>
      </div>

      <section id="about" className="relative mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-[0.6fr_1.4fr]">
          <div><span className="section-index">01</span><p className="mt-3 text-xs font-bold uppercase text-muted-foreground">About / now</p></div>
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] md:text-7xl">Not waiting for the degree to <span className="text-primary">begin.</span></h2>
            <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed">I’m a first-year B.Tech Computer Science Engineering student at <strong>JECRC University, Jaipur</strong>, already bringing ideas to life beyond the classroom.</p>
              <p className="leading-relaxed text-muted-foreground">My work moves between writing code, shaping visual campaigns, optimizing Shopify experiences, and building an on-demand vehicle-care concept from zero.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-foreground text-background">
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-32">
          <div className="mb-14 flex items-end justify-between"><div><span className="section-index text-primary">02</span><h2 className="font-display text-5xl font-black uppercase md:text-8xl">Selected work</h2></div><span className="hidden text-xs font-bold uppercase text-background/60 md:block">Scroll to inspect ↓</span></div>

          <article className="grid border-t border-background/30 py-12 md:grid-cols-2 md:gap-16">
            <div className="relative overflow-hidden bg-secondary aspect-[4/3]">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <img src={cameraAsset.url} alt="Fashion collage camera artwork" className="relative h-full w-full object-contain mix-blend-multiply transition duration-500 hover:scale-105" />
            </div>
            <div className="flex flex-col justify-between pt-8 md:pt-0">
              <div><p className="text-xs font-bold uppercase text-primary">01 · Industry experience</p><h3 className="mt-4 font-display text-4xl font-black uppercase md:text-6xl">Pixellab Media</h3><p className="mt-5 max-w-xl text-background/70">Creative Intern & Shopify Developer — designing conversion-led assets, modifying storefronts, and managing product operations from idea to live listing.</p></div>
              <div className="mt-10 grid grid-cols-2 gap-px bg-background/30 border border-background/30">
                <div className="bg-foreground p-5"><b className="font-display text-4xl text-accent">112</b><p className="mt-1 text-xs uppercase text-background/60">Assets created</p></div>
                <div className="bg-foreground p-5"><b className="font-display text-4xl text-accent">2 days</b><p className="mt-1 text-xs uppercase text-background/60">Created + listed</p></div>
              </div>
            </div>
          </article>

          <article className="grid border-t border-background/30 py-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-between order-2 pt-8 md:order-1 md:pt-0">
              <div><p className="text-xs font-bold uppercase text-primary">02 · Live Shopify store</p><h3 className="mt-4 font-display text-4xl font-black uppercase md:text-6xl">GharSmart</h3><p className="mt-5 max-w-xl text-background/70">A live e-commerce storefront showcasing product presentation, merchandising, and Shopify store-building experience.</p></div>
              <Button asChild variant="outline" className="mt-10 w-fit rounded-none border-background bg-transparent text-background hover:bg-background hover:text-foreground">
                <a href="https://gharsmart.store/" target="_blank" rel="noreferrer">Visit live store <ArrowUpRight /></a>
              </Button>
            </div>
            <div className="order-1 flex aspect-[4/3] items-center justify-center overflow-hidden bg-accent p-10 md:order-2">
              <div className="text-center text-accent-foreground"><p className="font-display text-6xl font-black md:text-8xl">G<span className="text-primary">H</span></p><p className="mt-2 text-sm font-bold uppercase tracking-widest">GharSmart.store</p><div className="mx-auto mt-8 h-px w-24 bg-accent-foreground" /></div>
            </div>
          </article>

          <article className="grid border-t border-background/30 py-12 md:grid-cols-2 md:gap-16">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-background p-12">
              <img src={zippAsset.url} alt="Zipp vehicle care logo" className="h-2/3 w-2/3 object-contain transition duration-500 hover:rotate-3 hover:scale-105" />
              <span className="absolute right-4 top-4 bg-primary px-3 py-2 text-[10px] font-bold uppercase text-primary-foreground">Pre-launch concept</span>
            </div>
            <div className="flex flex-col justify-between pt-8 md:pt-0">
              <div><p className="text-xs font-bold uppercase text-primary">03 · Founder concept</p><h3 className="mt-4 font-display text-4xl font-black uppercase md:text-6xl">Zipp</h3><p className="mt-3 font-display text-xl font-bold text-accent">The future of on-demand vehicle care.</p><p className="mt-5 max-w-xl text-background/70">Reimagining a broken auto-repair experience through instant, accessible mechanical assistance designed around speed and convenience.</p></div>
              <div className="mt-10 flex items-center gap-2 text-xs font-bold uppercase text-background/60"><Sparkles className="text-accent" /> In development</div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative border-b border-border bg-secondary py-24 md:py-32">
        <img src={telephoneAsset.url} alt="" className="pointer-events-none absolute -right-16 bottom-0 hidden h-full w-1/3 object-contain mix-blend-multiply md:block" />
        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <span className="section-index">03</span>
          <div className="mt-4 max-w-4xl"><p className="text-xs font-bold uppercase text-primary">Early career / real output</p><blockquote className="mt-5 font-display text-4xl font-black uppercase leading-tight md:text-7xl">“Seven product images each, across sixteen products — live in two days.”</blockquote><p className="mt-6 text-muted-foreground">Creative production, e-commerce operations, and speed — working as one system.</p></div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <div><span className="section-index">04</span><h2 className="mt-3 font-display text-5xl font-black uppercase">Toolkit</h2></div>
          <div>
            <div className="flex flex-wrap gap-2">{skills.map((skill, index) => <span key={skill} className={`skill-chip ${index % 4 === 0 ? "skill-chip-accent" : ""}`}>{skill}</span>)}</div>
            <div className="mt-16 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <div><p className="text-xs font-bold uppercase text-primary">Education</p><h3 className="mt-3 font-display text-2xl font-black">B.Tech · Computer Science Engineering</h3><p className="mt-2 text-muted-foreground">JECRC University, Jaipur · Present</p></div>
              <div><p className="text-xs font-bold uppercase text-primary">Schooling</p><h3 className="mt-3 font-display text-2xl font-black">St. Anselm’s Pink City School</h3><p className="mt-2 text-muted-foreground">Malviya Nagar, Jaipur</p></div>
            </div>
            <Button asChild variant="outline" className="mt-10 rounded-none"><a href={resumeAsset.url} target="_blank" rel="noreferrer"><Download /> Download resume</a></Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden border-b border-primary-foreground/20 p-5 md:border-b-0 md:border-r md:p-10">
            <img src={phoneAsset.url} alt="Experimental black and white phone artwork" className="absolute inset-0 h-full w-full object-contain mix-blend-multiply" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16">
            <p className="text-xs font-bold uppercase">Creative archive</p><h2 className="mt-5 font-display text-5xl font-black uppercase md:text-7xl">Art lives here, too.</h2><p className="mt-6 max-w-lg text-primary-foreground/75">Selected fashion graphics and visual experiments — where music, streetwear, and digital collage meet.</p>
            <Button asChild className="mt-8 w-fit rounded-none bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground"><Link to="/gallery">Enter Lavina’s Gallery <ArrowUpRight /></Link></Button>
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <img src={starRedAsset.url} alt="" className="star-drift pointer-events-none absolute right-0 top-8 w-40 mix-blend-multiply md:w-64" />
        <p className="text-xs font-bold uppercase text-primary">05 · Contact</p><h2 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[0.9] md:text-8xl">Let’s build something <span className="outline-word">great</span> together.</h2>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-none"><a href="https://www.instagram.com/lavinadangii/" target="_blank" rel="noreferrer"><Instagram /> Connect on Instagram</a></Button>
        </div>
      </section>

      <footer className="border-t border-border bg-foreground px-5 py-8 text-background md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 text-xs font-bold uppercase md:flex-row md:items-center md:justify-between"><span>© 2026 Lavina Dangi</span><span className="flex items-center gap-2 text-background/60"><MapPin className="size-3" /> Jaipur, India</span><a href="#top" className="transition-colors hover:text-primary">Back to top ↑</a></div>
      </footer>
    </main>
  );
}