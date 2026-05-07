import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <Link href="/" className="footer-logo">North<span>Bridge</span></Link>
            <p>Providing high-end supported living environments in Leeds, built on respect, professional coaching, and a genuine commitment to independence.</p>
            <span className="footer-tagline">Professionalism. Independence. Dignity.</span>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <p>Tenancy Management</p>
            <p>Financial Literacy</p>
            <p>Life Skills Coaching</p>
            <p>Emotional Wellbeing</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>10 Grange View<br />Leeds, LS7 4EP</p>
            <a href="mailto:contact@northbridge.org">contact@northbridge.org</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Northbridge Support Services Ltd. All rights reserved.</p>
          <span>Housing-Related Support · Leeds</span>
        </div>
      </div>
    </footer>
  );
}
