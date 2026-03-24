import { now, work, elsewhere } from "@/data/content";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <p className='location-line'>Europe · Available</p>
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
        <section className='about-section'>
          <p className='label'>About</p>
          <p className='about-text'>
            <strong>Software developer</strong> and{" "}
            <strong>entrepreneur</strong>. I design and build digital products —
            SaaS platforms, APIs, web applications. I work at the intersection
            of <strong>software engineering</strong>,{" "}
            <strong>product thinking</strong>, and{" "}
            <strong>business development</strong>.
          </p>
          <a href='mailto:me@francescofera.com' className='contact-link'>
            me@francescofera.com
          </a>
        </section>

        <hr className='divider' />

        {/* Selected Work */}
        <section className='work-section'>
          <p className='label'>Selected Work</p>
          <div className='work-items'>
            {work.map((item) => (
              <div key={item.name} className='work-item'>
                <span className='work-name'>{item.name}</span>
                <span className='work-sector'>{item.sector}</span>
              </div>
            ))}
          </div>
        </section>

        <hr className='divider' />

        {/* Now */}
        {/* <section className='now-section'>
          <p className='label'>Now</p>
          <div className='now-items'>
            {now.map((item) => (
              <div key={item.title} className='now-item'>
                <div>
                  <div className='now-item-title'>{item.title}</div>
                  <div className='now-item-desc'>{item.desc}</div>
                </div>
                <div className='now-item-tag'>{item.tag}</div>
              </div>
            ))}
          </div>
        </section>

        <hr className='divider' /> */}

        {/* Elsewhere */}
        <section className='elsewhere-section'>
          <p className='label'>Elsewhere</p>
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
        </section>
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
