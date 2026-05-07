import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BoxesBackground from '@/components/BoxesBackground';
import ScrollReveal from '@/components/ScrollReveal';
import GlowCard from '@/components/GlowCard';

export const metadata: Metadata = {
  title: 'About Northbridge | Leading Supported Living Provider in Leeds',
  description: "Learn about the Northbridge 'Separation of Care' model and our commitment to dignity, independence, and professional coaching in Leeds.",
};

export default function About() {
  return (
    <>
      <ScrollReveal />

      {/* Page Hero */}
      <section className="page-hero">
        <BoxesBackground />
        <div className="container">
          <div className="page-hero-content">
            <div className="page-hero-eyebrow"><span>Our Story</span></div>
            <h1>Professional Support.<br />People-First Values.</h1>
            <p>We believe the right support should act as a catalyst — not a dependency. Everything we do is designed to build capability, confidence, and lasting independence.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-dark on-dark">
        <div className="container">
          <div className="philosophy-layout">
            <div className="philosophy-sticky reveal">
              <div className="section-label"><span>Philosophy</span></div>
              <h2 className="section-title">Built on Respect &amp; Expertise</h2>
              <p className="section-body">At Northbridge, we combine professional rigour with genuine warmth — creating environments where individuals don&apos;t just survive, but genuinely flourish.</p>
              <Image
                src="/images/patrick-perkins-3wylDrjxH-E-unsplash.jpg"
                alt="Northbridge coaching approach"
                width={400}
                height={300}
                className="philosophy-img"
                style={{ marginTop: 32 }}
              />
            </div>
            <div className="philosophy-content">
              <div className="reveal">
                <p>At Northbridge Support Services, we believe that the right support should act as a catalyst for personal growth. Our philosophy is built upon providing expert coaching that respects the dignity and autonomy of every resident — treating each person not as a case, but as an individual with unique goals and potential.</p>
                <p>We are committed to a model of care that is non-intrusive, professional, and ultimately aimed at making itself unnecessary. Our measure of success is not how long someone stays with us, but how confidently they move forward without us.</p>
              </div>

              <h3 className="reveal reveal-d1">The Northbridge Model</h3>
              <p className="reveal reveal-d1">We operate a <strong>&lsquo;Separation of Care&rsquo;</strong> model to ensure the highest standards of professional integrity and resident continuity. By keeping housing support and personal care functions legally distinct, we allow our residents to remain in their homes even if their clinical or care needs evolve over time.</p>
              <p className="reveal reveal-d2">This approach gives residents the stability of a consistent, familiar home environment whilst ensuring they always receive the appropriate level of care from the most suitable professionals.</p>

              <div className="model-cards reveal reveal-d2">
                <GlowCard innerClassName="model-card">
                  <div className="model-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h4>Independent Living Coaches</h4>
                    <p>Our team does not just assist — they mentor and coach individuals toward total self-reliance. Every interaction is intentionally designed to build capability, not dependency.</p>
                  </div>
                </GlowCard>
                <GlowCard innerClassName="model-card">
                  <div className="model-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                  </div>
                  <div>
                    <h4>Strategic Partnerships</h4>
                    <p>When personal care is required, we facilitate warm referrals to external CQC-registered providers, ensuring a seamless, dignified experience for the resident at every stage.</p>
                  </div>
                </GlowCard>
                <GlowCard innerClassName="model-card">
                  <div className="model-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <div>
                    <h4>Housing-Related Support</h4>
                    <p>All our services fall within non-regulated housing-related support. This distinction is central to our model — ensuring clarity, transparency, and the right boundaries for both staff and residents.</p>
                  </div>
                </GlowCard>
              </div>

              <h3 className="reveal" style={{ marginTop: 48 }}>Our Commitment to Leeds</h3>
              <p className="reveal reveal-d1">Northbridge is proudly rooted in Leeds. We understand the local housing landscape, the community networks, and the pathways available to our residents. Our goal is to ensure that every person we support feels genuinely connected to — and capable of thriving within — their local community.</p>
              <p className="reveal reveal-d2">We work closely with housing associations, local authorities, and healthcare providers across the city to offer a truly integrated support experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-olive on-dark">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}><span>What We Stand For</span></div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="pillars-grid">
            <GlowCard className="reveal reveal-d1" innerClassName="pillar-card">
              <span className="pillar-num">01</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="pillar-title">Dignity</h3>
              <p className="pillar-body">Every resident is treated with unconditional respect. We create environments where people feel valued, heard, and in control of their own lives.</p>
            </GlowCard>
            <GlowCard className="reveal reveal-d2" innerClassName="pillar-card">
              <span className="pillar-num">02</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="pillar-title">Transparency</h3>
              <p className="pillar-body">Clear communication, honest expectations, and professional accountability are non-negotiable. Residents, families, and referrers can always trust what we say.</p>
            </GlowCard>
            <GlowCard className="reveal reveal-d3" innerClassName="pillar-card">
              <span className="pillar-num">03</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="pillar-title">Progress</h3>
              <p className="pillar-body">Our success is measured by the independence of those we support. Every support plan is forward-looking, goal-driven, and celebrates every step forward.</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="cta-band bg-lime on-lime">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-copy reveal">
              <h2>Explore Our Services</h2>
              <p>See how our Independent Living Coaches can support you or someone you care for.</p>
            </div>
            <Link href="/services" className="btn btn-sage btn-arrow reveal reveal-d2">View Services</Link>
          </div>
        </div>
      </div>
    </>
  );
}
