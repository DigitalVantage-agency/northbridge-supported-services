import type { Metadata } from 'next';
import Link from 'next/link';
import BoxesBackground from '@/components/BoxesBackground';
import ScrollReveal from '@/components/ScrollReveal';
import GlowCard from '@/components/GlowCard';

export const metadata: Metadata = {
  title: 'Independent Living Services Leeds | Northbridge Support Services',
  description: 'Explore our housing-related support services in Leeds — tenancy management, financial literacy, life-skills coaching, and more.',
};

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Tenancy Management',
    desc: 'Professional coaching and support with housing benefits, utility management, rent obligations, and tenancy rights — helping residents maintain their tenancy with confidence.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    title: 'Financial Literacy',
    desc: 'Practical coaching for personal budgeting, expense tracking, and financial planning. We also facilitate warm referrals to specialist debt management services where needed.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 4.5l-.98.49a2.25 2.25 0 01-2.27-.163 2.25 2.25 0 00-2.545-.143l-.4.2m12.485.656l-.98.49a2.25 2.25 0 01-2.27-.163 2.25 2.25 0 00-2.545-.143l-.4.2" />
      </svg>
    ),
    title: 'Life Skills Coaching',
    desc: 'Side-by-side guidance for meal planning, grocery shopping, nutrition awareness, and household management — the essential skills for a self-sufficient, healthy lifestyle.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Employment & Education',
    desc: 'Hands-on assistance with CV building, job applications, interview preparation, and enrolling in local Leeds-based vocational and educational courses.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Emotional Wellbeing',
    desc: 'Regular 1-to-1 check-ins to monitor mental health recovery, build social connections, and reduce isolation — supporting residents to feel anchored and valued in their community.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Medication Prompts',
    desc: 'Safe, non-physical verbal and visual reminders to support medication consistency. Our coaches help residents build healthy routines around their health management.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'Tech-Enabled Safety',
    desc: 'The thoughtful integration of smart-home technology to maintain a safe, modern, and comfortable living environment — giving residents and their families genuine peace of mind.',
  },
];

const delayClasses = ['reveal-d1', 'reveal-d2', 'reveal-d3'];

export default function Services() {
  return (
    <>
      <ScrollReveal />

      {/* Page Hero */}
      <section className="page-hero">
        <BoxesBackground />
        <div className="container">
          <div className="page-hero-content">
            <div className="page-hero-eyebrow"><span>What We Offer</span></div>
            <h1>Coaching for<br />Independence</h1>
            <p>Our staff act as Independent Living Coaches — providing tailored, practical support to help residents navigate the complexities of modern life with skill and confidence.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-dark on-dark">
        <div className="container">
          <div className="services-intro reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}><span>Our Core Service Areas</span></div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Seven Pillars of<br />Supported Living</h2>
            <p className="section-body" style={{ margin: '16px auto 0', textAlign: 'center' }}>Every service we provide is designed to build capability and independence — not reliance. We meet residents where they are and coach them toward where they want to be.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <GlowCard key={i} className={`reveal ${delayClasses[i % 3]}`} innerClassName="service-card">
                <div className="service-icon-wrap">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </GlowCard>
            ))}
          </div>

          <div className="service-note reveal" style={{ marginTop: 52 }}>
            <strong>Important Note:</strong> In accordance with our Statement of Purpose and the Northbridge model, we do not provide regulated personal care — such as assistance with personal hygiene, dressing, or clinical tasks. Where personal care needs arise, we facilitate referrals to appropriate CQC-registered providers.
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-olive on-dark">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}><span>Our Approach</span></div>
            <h2 className="section-title">The Scaffolding<br />Approach</h2>
            <p className="section-body" style={{ margin: '16px auto 0', textAlign: 'center', maxWidth: 580 }}>Like scaffolding on a building, our support is strong, structured, and purposeful — and designed to be removed once the work is done.</p>
          </div>
          <div className="pillars-grid" style={{ marginTop: 56 }}>
            <GlowCard className="reveal reveal-d1" innerClassName="pillar-card">
              <span className="pillar-num">01</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="pillar-title">Assess</h3>
              <p className="pillar-body">We begin with a thorough assessment of each individual&apos;s strengths, challenges, goals, and circumstances — building a detailed picture before any support begins.</p>
            </GlowCard>
            <GlowCard className="reveal reveal-d2" innerClassName="pillar-card">
              <span className="pillar-num">02</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <h3 className="pillar-title">Plan</h3>
              <p className="pillar-body">A bespoke support plan is created in partnership with the resident, outlining specific goals, milestones, and the coaching interventions that will help achieve them.</p>
            </GlowCard>
            <GlowCard className="reveal reveal-d3" innerClassName="pillar-card">
              <span className="pillar-num">03</span>
              <div className="pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 22, height: 22 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="pillar-title">Empower</h3>
              <p className="pillar-body">Coaches work alongside residents — not for them — building real skills and genuine confidence, until independence is not just possible but sustainable.</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="cta-band bg-lime on-lime">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-copy reveal">
              <h2>Need More Information?</h2>
              <p>Our team is available to discuss how our approach can support you, a family member, or a client.</p>
            </div>
            <Link href="/contact" className="btn btn-sage btn-arrow reveal reveal-d2">Get in Touch</Link>
          </div>
        </div>
      </div>
    </>
  );
}
