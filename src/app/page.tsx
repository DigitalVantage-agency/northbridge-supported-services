import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import ScrollReveal from '@/components/ScrollReveal';

const marqueeItems = [
  'Tenancy Management', 'Financial Literacy', 'Life Skills Coaching',
  'Employment & Education', 'Emotional Wellbeing', 'Medication Prompts', 'Tech-Enabled Safety',
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <HeroSlider />

      {/* Marquee Belt */}
      <div className="marquee-belt">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* Split — About Preview */}
      <section className="split bg-green on-dark">
        <div className="split-image">
          <Image
            src="/images/vitaly-gariev-oKd3gF2ZXMY-unsplash.jpg"
            alt="Resident at home"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="split-content">
          <span className="split-tag">About NorthBridge</span>
          <h2 className="split-title">Scaffolding for<br />Independent Life</h2>
          <p className="split-body">Like scaffolding on a building, our support is structured and purposeful — and designed to be removed once the work is done. We measure our success by how confidently residents move forward without us.</p>
          <div className="split-stats">
            <div>
              <span className="stat-num">7</span>
              <span className="stat-label">Service Areas</span>
            </div>
            <div>
              <span className="stat-num">100%</span>
              <span className="stat-label">Leeds-Based</span>
            </div>
            <div>
              <span className="stat-num">1:1</span>
              <span className="stat-label">Coaching Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-sage on-sage">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}><span>Our Promise</span></div>
            <h2 className="section-title">Three Pillars of<br />Supported Living</h2>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card reveal reveal-d1">
              <span className="pillar-num">01</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="pillar-title">Professionalism</h3>
              <p className="pillar-body">Every member of our team is trained to the highest standards. We bring professional rigour to every interaction, every support plan, and every outcome.</p>
            </div>
            <div className="pillar-card reveal reveal-d2">
              <span className="pillar-num">02</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="pillar-title">Empowerment</h3>
              <p className="pillar-body">We don&apos;t create dependency — we build capability. Our coaching model is designed to give residents the skills and confidence to live truly independently.</p>
            </div>
            <div className="pillar-card reveal reveal-d3">
              <span className="pillar-num">03</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="pillar-title">Safety</h3>
              <p className="pillar-body">From our separation of care model to smart-home technology, we ensure every resident lives in a safe, comfortable, and dignified environment at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="pull-quote bg-forest on-dark">
        <div className="container">
          <p className="pull-quote-text reveal">&ldquo;Our measure of success is not how long someone stays with us, but how confidently they move forward without us.&rdquo;</p>
          <span className="pull-quote-attr reveal reveal-d1">NorthBridge Support Services · Leeds</span>
        </div>
      </section>

      {/* CTA Band */}
      <div className="cta-band bg-cream on-cream">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-copy reveal">
              <h2>Ready to Find Out More?</h2>
              <p>Speak with our team about how NorthBridge can support you, a family member, or a client.</p>
            </div>
            <Link href="/contact" className="btn btn-sage btn-arrow reveal reveal-d2">Get in Touch</Link>
          </div>
        </div>
      </div>
    </>
  );
}
