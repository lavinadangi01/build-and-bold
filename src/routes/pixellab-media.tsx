import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import campaignHero from "@/assets/meevyy-bangle-campaign.webp";
import fabricEarrings from "@/assets/meevyy-earrings-fabric.png";
import bottleBangles from "@/assets/meevyy-bangles-bottle.png";
import pineappleEarrings from "@/assets/meevyy-pineapple-earrings.png";
import croissantEarrings from "@/assets/meevyy-croissant-earrings.png";
import watermelonEarrings from "@/assets/meevyy-watermelon-earrings.webp";
import cherryEarrings from "@/assets/meevyy-cherry-earrings.webp";

export const Route = createFileRoute("/pixellab-media")({
  head: () => ({
    meta: [
      { title: "Pixellab Media Work — Lavina Dangi" },
      { name: "description", content: "MEEVYY product campaigns and creative commerce work by Lavina Dangi during her time at Pixellab Media." },
      { property: "og:title", content: "Pixellab Media Work — Lavina Dangi" },
      { property: "og:description", content: "A selection of MEEVYY product imagery and campaign work created for Pixellab Media." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PixellabMedia,
});

const campaignWork = [
  { src: fabricEarrings, title: "Draped Jhumka Edit", detail: "Product composition" },
  { src: bottleBangles, title: "Bangle Bottle Story", detail: "Campaign art direction" },
  { src: pineappleEarrings, title: "Tropical Earring Edit", detail: "Product styling" },
  { src: croissantEarrings, title: "Breakfast Jewellery", detail: "Campaign concept" },
  { src: watermelonEarrings, title: "Summer Drop", detail: "Seasonal product story" },
  { src: cherryEarrings, title: "Cherry Line-up", detail: "Social campaign creative" },
];

function PixellabMedia() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase"><ArrowLeft className="size-4" /> Portfolio</Link>
          <span className="font-display text-xl font-black uppercase">Lavina<span className="text-primary">*</span></span>
        </div>
      </header>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-end px-5 py-16 md:px-10 md:py-24">
            <p className="text-xs font-bold uppercase text-primary">Pixellab Media / MEEVYY</p>
            <h1 className="mt-4 font-display text-[clamp(3.75rem,8vw,8rem)] font-black uppercase leading-[0.84]">Creative<br/><span className="outline-word">Commerce</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">A selection of product-led campaign visuals created while working as a Creative Intern and Shopify Developer.</p>
            <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border">
              <div className="bg-background p-5"><b className="font-display text-4xl text-primary">112</b><p className="mt-1 text-xs uppercase text-muted-foreground">Assets created</p></div>
              <div className="bg-background p-5"><b className="font-display text-4xl text-primary">2 days</b><p className="mt-1 text-xs uppercase text-muted-foreground">Created + listed</p></div>
            </div>
          </div>
          <div className="min-h-[560px] overflow-hidden bg-secondary md:min-h-[760px]">
            <img src={campaignHero} alt="MEEVYY bangles styled with a fruit bag" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-border pb-8 md:flex-row md:items-end">
            <div><p className="text-xs font-bold uppercase text-primary">Selected campaign work</p><h2 className="mt-3 font-display text-4xl font-black uppercase md:text-7xl">MEEVYY Studies</h2></div>
            <p className="max-w-md text-muted-foreground">Jewellery transformed into playful, scroll-stopping product stories for digital commerce.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {campaignWork.map((work, index) => (
              <article key={work.title} className="group overflow-hidden border border-border bg-background">
                <div className="aspect-[4/5] overflow-hidden"><img src={work.src} alt={`${work.title} for MEEVYY`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
                <div className="flex items-end justify-between gap-4 border-t border-border p-4"><div><p className="text-[10px] font-bold uppercase text-primary">0{index + 1} / MEEVYY</p><h3 className="font-display text-xl font-black uppercase">{work.title}</h3></div><p className="text-right text-xs text-muted-foreground">{work.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-4xl font-black uppercase md:text-7xl">See the wider creative archive.</h2>
          <Button asChild className="rounded-none bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground"><Link to="/gallery">Open gallery <ArrowUpRight /></Link></Button>
        </div>
      </section>
    </main>
  );
}