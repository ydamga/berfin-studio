import { useEffect, useState } from 'react';
import { about, brand, contact, contactSection, faq, hero, nav, packages, process, videos, type Package } from '../content/site';
import { videoSlots, type VideoSlot } from '../content/videos';
import { asset, Dialog, formatTL, whatsappUrl } from './primitives';

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className={`bar ${open ? 'is-open' : ''}`}>
      <a className="bar__logo" href="#top" onClick={close}>
        {brand.logo}
      </a>
      <button type="button" className="bar__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
        {open ? 'Kapat' : 'Menü'}
      </button>
      <nav id="menu" className="bar__nav" aria-label="Ana menü">
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={close}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="pill pill--cta" href="#iletisim" onClick={close}>
          Proje Başlat
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <h1 id="hero-title" className="display">
        {hero.before}
        <strong className="accent">{hero.accent}</strong>
        <br />
        {hero.after.trim()}
      </h1>
      <p className="mono hero__text">{hero.text}</p>
    </section>
  );
}

export function About() {
  return (
    <section className="band about" id="hakkimda" aria-labelledby="about-title">
      <div className="about__main">
        <h2 id="about-title" className="display">
          {about.heading}
        </h2>
        <div className="mono about__bio">
          {about.bio.map((p, i) => (
            <p key={i} className={i === about.bio.length - 1 ? 'is-bold' : ''}>
              {p}
            </p>
          ))}
        </div>
        <h3 className="title about__sub">{about.skillsTitle}</h3>
        <ul className="skills">
          {about.skills.map((s) => (
            <li key={s} className="pill">
              {s}
            </li>
          ))}
        </ul>
        <h3 className="title about__sub">{about.experienceTitle}</h3>
        <ul className="exps">
          {about.experience.map((x) => (
            <li key={x.role} className="exp">
              <p className="mono exp__role">
                {x.role}
                {x.dates && <span className="exp__dates">{x.dates}</span>}
              </p>
              {x.text && <p className="mono exp__text">{x.text}</p>}
            </li>
          ))}
        </ul>
      </div>
      <img
        className="about__photo"
        src={asset(about.photo.small)}
        srcSet={`${asset(about.photo.small)} 450w, ${asset(about.photo.src)} 900w`}
        sizes="(max-width: 760px) 70vw, 24vw"
        width={448}
        height={549}
        alt={about.photo.alt}
        loading="lazy"
      />
      <p className="about__more">
        {about.more.before}
        <a className="accent" href={contact.behance} target="_blank" rel="noopener">
          {about.more.link}
        </a>
      </p>
    </section>
  );
}

function VideoCard({ v, onOpen }: { v: VideoSlot; onOpen: () => void }) {
  const playable = !!(v.src || v.embed);
  const style = v.poster ? { backgroundImage: `url(${asset(v.poster)})` } : undefined;
  if (!playable) return <li className="vcard" style={style} aria-hidden="true" />;
  return (
    <li className="vcard is-playable" style={style}>
      <button type="button" className="vcard__btn" onClick={onOpen} aria-label={`Videoyu oynat: ${v.title}`}>
        <span className="vcard__play" aria-hidden="true" />
      </button>
    </li>
  );
}

export function Videos() {
  const [current, setCurrent] = useState<VideoSlot | null>(null);
  return (
    <section className="section videos" id="portfolyo" aria-labelledby="videos-title">
      <h2 id="videos-title" className="display">
        <span className="accent">{videos.headingAccent}</span>
        {videos.heading}
      </h2>
      <p className="mono muted section__text">{videos.text}</p>
      <ul className="vgrid">
        {videoSlots.map((v, i) => (
          <VideoCard key={i} v={v} onOpen={() => setCurrent(v)} />
        ))}
      </ul>
      <Dialog open={!!current} onClose={() => setCurrent(null)} label={current?.title ?? 'Video'}>
        {current &&
          (current.embed ? (
            <iframe className="player" src={current.embed} title={current.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          ) : (
            <video className="player" src={asset(current.src!)} poster={current.poster ? asset(current.poster) : undefined} controls autoPlay playsInline />
          ))}
      </Dialog>
    </section>
  );
}

export function Process() {
  return (
    <section className="band process" id="surec" aria-labelledby="process-title">
      <h2 id="process-title" className="display">
        {process.heading}
      </h2>
      <ol className="steps">
        {process.steps.map((s, i) => (
          <li key={i} className="row">
            <span className="row__mark" aria-hidden="true">
              {i + 1}
            </span>
            <span className="mono row__text">{s}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function choose(p: Package) {
  const text = `Merhaba Berfin, ${p.name} ile (${formatTL(p.price)} + KDV) ilgileniyorum.`;
  return contact.whatsapp ? whatsappUrl(contact.whatsapp, text) : `mailto:${contact.email}?subject=${encodeURIComponent(p.name)}&body=${encodeURIComponent(text)}`;
}

export function Packages() {
  return (
    <section className="section pricing" id="paketler" aria-labelledby="pricing-title">
      <h2 id="pricing-title" className="display">
        {packages.heading}
      </h2>
      <p className="mono muted section__text">{packages.text}</p>
      <div className="plans">
        {packages.items.map((p) => (
          <article key={p.id} className={`plan ${p.highlight ? 'plan--blue' : ''}`} aria-labelledby={`plan-${p.id}`}>
            <h3 className="plan__name" id={`plan-${p.id}`}>
              {p.name}
            </h3>
            <p className="plan__price">{formatTL(p.price)}</p>
            <p className="plan__text">{p.text}</p>
            <ul className="plan__features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a className="plan__cta" href={choose(p)} target="_blank" rel="noopener">
              {packages.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="band faq" id="sss" aria-labelledby="faq-title">
      <h2 id="faq-title" className="display">
        {faq.heading}
      </h2>
      <div className="steps">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`row qa ${isOpen ? 'is-open' : ''}`}>
              <h3 className="qa__q">
                <button type="button" id={`q-${i}`} aria-expanded={isOpen} aria-controls={`a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="row__mark" aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                  <span className="mono row__text">{item.q}</span>
                </button>
              </h3>
              <div className="mono qa__a" id={`a-${i}`} role="region" aria-labelledby={`q-${i}`} hidden={!isOpen}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="iletisim" aria-labelledby="contact-title">
      <h2 id="contact-title" className="display contact__title">
        {contactSection.heading}
      </h2>
      <p className="mono muted section__text">{contactSection.text}</p>
      <ul className="contact__links">
        <li>
          <a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
      </ul>
    </section>
  );
}
