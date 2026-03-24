import { work, elsewhere } from "@/data/content";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <p className='location-line' aria-label='Location and availability'>
            Europe · Available
          </p>
          <h1>
            Francesco
            <br />
            <em>Fera</em>
          </h1>
          <p className='tagline'>
            I build software products — from idea to market, across Europe.
          </p>
        </header>

        {/* About */}
        <section className='about-section' aria-labelledby='about-heading'>
          <h2 className='label' id='about-heading'>About</h2>
          <p className='about-text'>
            <strong>Software developer</strong> and{" "}
            <strong>entrepreneur</strong>. I design and build digital products —
            SaaS platforms, APIs, web applications. I work at the intersection
            of <strong>software engineering</strong>,{" "}
            <strong>product thinking</strong>, and{" "}
            <strong>business development</strong>.
          </p>
          <a href='mailto:me@francescofera.com' className='contact-link' aria-label='Send email to me@francescofera.com'>
            me@francescofera.com
          </a>
        </section>

        <hr className='divider' />

        {/* Selected Work */}
        <section className='work-section' aria-labelledby='work-heading'>
          <h2 className='label' id='work-heading'>Selected Work</h2>
          <div className='work-items' role='list'>
            {work.map((item) => (
              <div key={item.name} className='work-item' role='listitem'>
                <span className='work-name'>{item.name}</span>
                <span className='work-sector'>{item.sector}</span>
              </div>
            ))}
          </div>
        </section>

        <hr className='divider' />

        {/* Elsewhere */}
        <nav className='elsewhere-section' aria-labelledby='elsewhere-heading'>
          <h2 className='label' id='elsewhere-heading'>Elsewhere</h2>
          <div className='elsewhere-items'>
            {elsewhere.map((item) => (
              <a
                key={item.name}
                className='elsewhere-item'
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='elsewhere-name'>{item.name}</span>
                <span className='elsewhere-url'>{item.url}</span>
              </a>
            ))}
          </div>
        </nav>
      </main>

      <footer>
        <div className='footer-inner'>
          <span>© {new Date().getFullYear()} Francesco Fera</span>
          <span>Europe</span>
        </div>
      </footer>
    </>
  );
}
