import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import artJuice from "@/assets/artwork-juicewrld.JPG.asset.json";
import artLav from "@/assets/artwork-lav.JPG.asset.json";
import artBreathe from "@/assets/artwork-breathe.JPG.asset.json";
import artBlue from "@/assets/artwork-blue.jpg.asset.json";
import artWeeknd from "@/assets/artwork-weeknd.jpg.asset.json";
import starRed from "@/assets/star-red.jpeg.asset.json";
import meevyyEarrings from "@/assets/meevyy-earrings-fabric.png.asset.json";
import meevyyBangles from "@/assets/meevyy-bangles-bottle.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Lavina’s Gallery — Fashion Graphics & Digital Art" },
      { name: "description", content: "A visual archive of fashion graphics, streetwear concepts, and digital collage by Lavina Dangi." },
      { property: "og:title", content: "Lavina’s Gallery — Fashion Graphics & Digital Art" },
      { property: "og:description", content: "Fashion graphics, streetwear concepts, and digital collage by Lavina Dangi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const artwork = [
  { src: artJuice.url, title: "Juicewrld Tribute", type: "Collage tee concept", className: "md:col-span-7" },
  { src: artLav.url, title: "Eyes That Speak", type: "Streetwear identity", className: "md:col-span-5" },
  { src: artBreathe.url, title: "Breathe", type: "Graphic tee concept", className: "md:col-span-5" },
  { src: artBlue.url, title: "So Blue", type: "Music-led apparel", className: "md:col-span-7" },
  { src: artWeeknd.url, title: "Overdose", type: "Artist collage", className: "md:col-span-12" },
  { src: meevyyEarrings.url, title: "MEEVYY Draped Edit", type: "Product campaign · Pixellab Media", className: "md:col-span-6" },
  { src: meevyyBangles.url, title: "MEEVYY Bangle Story", type: "Product campaign · Pixellab Media", className: "md:col-span-6" },
];

function Gallery() {
  return <main className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-10"><Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase"><ArrowLeft className="size-4" /> Portfolio</Link><span className="font-display text-xl font-black uppercase">Lavina<span className="text-primary">*</span></span></div>
    </header>
    <section className="relative mx-auto max-w-[1500px] overflow-hidden px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <img src={starRed.url} alt="" className="star-drift pointer-events-none absolute -right-16 top-4 w-48 mix-blend-multiply md:w-72" />
      <p className="text-xs font-bold uppercase text-primary">Visual archive / 2026</p><h1 className="mt-4 max-w-5xl font-display text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.82]">Lavina’s<br/><span className="outline-word">Gallery</span></h1><p className="mt-8 max-w-lg text-lg text-muted-foreground">Fashion graphics, streetwear studies, and digital collage — music and mood translated into things you can wear.</p>
    </section>
    <section className="border-t border-border bg-secondary px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 md:grid-cols-12">
        {artwork.map((art, index) => <article key={art.title} className={`art-card group relative overflow-hidden border border-border bg-background ${art.className}`}>
          <img src={art.src} alt={`${art.title} — ${art.type}`} className="h-full max-h-[800px] min-h-[420px] w-full object-contain p-5 transition duration-500 group-hover:scale-[1.025] md:p-8" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-foreground p-4 text-background"><div><p className="text-[10px] font-bold uppercase text-primary">0{index + 1} / Artwork</p><h2 className="font-display text-xl font-black uppercase">{art.title}</h2></div><p className="text-xs text-background/60">{art.type}</p></div>
        </article>)}
      </div>
    </section>
    <section className="bg-primary px-5 py-20 text-primary-foreground md:px-10"><div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-3xl font-display text-4xl font-black uppercase md:text-7xl">More experiments are always in motion.</h2><Button asChild className="rounded-none bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground"><a href="https://www.instagram.com/lavinadangii/" target="_blank" rel="noreferrer">Follow the process <ArrowUpRight /></a></Button></div></section>
  </main>;
}