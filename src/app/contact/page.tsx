'use client';

import { useState } from 'react';
import BoxesBackground from '@/components/BoxesBackground';
import ScrollReveal from '@/components/ScrollReveal';
import GlowCard from '@/components/GlowCard';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <ScrollReveal />

      {/* Page Hero */}
      <section className="page-hero">
        <BoxesBackground />
        <div className="container">
          <div className="page-hero-content">
            <div className="page-hero-eyebrow"><span>Reach Out</span></div>
            <h1>We Welcome<br />Your Enquiries</h1>
            <p>Whether you are an individual, a family member, or a healthcare professional — we are here to discuss how NorthBridge can support a journey toward independence.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-dark on-dark">
        <div className="container">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <GlowCard className="reveal" innerClassName="contact-form-card">
              <h3>Send Us a Message</h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(202,204,144,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '1.6rem', color: 'var(--clr-sage)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 28, height: 28 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--clr-white)', marginBottom: 12 }}>Message Received</h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(246,244,240,0.6)', lineHeight: 1.7 }}>Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first-name">First Name</label>
                      <input type="text" id="first-name" name="first_name" required placeholder="Jane" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name">Last Name</label>
                      <input type="text" id="last-name" name="last_name" required placeholder="Smith" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-type">Nature of Enquiry</label>
                    <input type="text" id="enquiry-type" name="enquiry_type" placeholder="e.g. Referral, General Information, Family Enquiry" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" required placeholder="Tell us a little about your situation and how we might help…" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-arrow" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Enquiry
                  </button>
                  <p style={{ marginTop: 16, fontSize: '0.78rem', color: 'var(--clr-muted)', textAlign: 'center', lineHeight: 1.6 }}>
                    We treat all enquiries in strict confidence. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="pull-quote bg-olive on-dark">
        <div className="container">
          <p className="pull-quote-text reveal">&ldquo;We welcome enquiries from individuals, families, and professionals. Every conversation starts with listening.&rdquo;</p>
          <span className="pull-quote-attr reveal reveal-d1">NorthBridge Support Services · Leeds</span>
        </div>
      </section>
    </>
  );
}
