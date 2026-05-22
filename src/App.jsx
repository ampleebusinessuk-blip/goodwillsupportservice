import React from 'react';
import {
  Brain,
  BriefcaseMedical,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Facebook,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Home,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  UsersRound
} from 'lucide-react';

import logoImage from '../Logo.png';
import heroImage from '../parents talking.jpeg';
import aboutImage from '../talking.jpeg';
import buildingImage from '../WhatsApp Image 2026-05-22 at 17.06.00.jpeg';
import officeImage from '../WhatsApp Image 2026-05-22 at 17.06.22.jpeg';
import homeImage from '../home_.jpeg';
import washingImage from '../washing_.jpeg';
import toiletImage from '../toilet.jpeg';
import roomImage from '../room.jpeg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services', dropdown: true },
  { label: 'Supported Living', path: '/supported-living' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' }
];

const contactInfo = {
  phoneDisplay: '0203 648 5657',
  phoneHref: 'tel:02036485657',
  infoEmail: 'info@goodwillsupportservices.co.uk',
  recruitmentEmail: 'recruitment@goodwillsupportservices.co.uk',
  addressLines: ['31 Dormers Wells Lane', 'Southall, Middlesex', 'United Kingdom', 'UB1 3HX'],
  hoursLines: ['Mon-Fri: 9:00am - 5:00pm', 'Saturday: Closed', 'Sunday: Closed']
};

const services = [
  {
    title: 'Supported Living',
    text: 'Helping individuals live independently in a safe and supportive environment.',
    icon: Home,
    color: 'green',
    image: buildingImage
  },
  {
    title: 'Elderly Care',
    text: 'Compassionate care for older adults to help them live comfortably and safely.',
    icon: UsersRound,
    color: 'purple',
    image: homeImage
  },
  {
    title: 'Dementia Care',
    text: 'Specialist dementia care in a safe, structured and understanding environment.',
    icon: Brain,
    color: 'pink',
    image: roomImage
  },
  {
    title: 'Mental Health Support',
    text: 'Support for individuals with mental health needs to live a fulfilling life.',
    icon: CircleUserRound,
    color: 'blue',
    image: officeImage
  },
  {
    title: 'Learning Disabilities Support',
    text: 'Empowering individuals with learning disabilities to live independently.',
    icon: GraduationCap,
    color: 'orange',
    image: toiletImage
  },
  {
    title: 'Respite Care',
    text: 'Short-term care and support for individuals and relief for families.',
    icon: HeartHandshake,
    color: 'teal',
    image: washingImage
  }
];

const badges = [
  { label: 'Personalised', sub: 'Care', icon: HeartHandshake },
  { label: 'DBS Checked', sub: 'Staff', icon: LockKeyhole },
  { label: 'Mon-Fri', sub: '9am-5pm', icon: Clock3 },
  { label: 'Fully Trained', sub: 'Carers', icon: ShieldCheck },
  { label: 'Safeguarding', sub: 'Focused', icon: ShieldCheck }
];

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Daughter of Service User',
    quote: 'Goodwill Support Services has been amazing. The staff are caring, kind and always go the extra mile.'
  },
  {
    name: 'Michael T.',
    role: 'Brother of Service User',
    quote: 'The team helped my brother gain independence and confidence. We are so grateful for their support.'
  },
  {
    name: 'Aisha R.',
    role: 'Service User',
    quote: 'Professional, reliable and caring. I highly recommend Goodwill Support Services.'
  }
];

const blogPosts = [
  {
    title: 'Choosing the Right Supported Living Provider',
    text: 'A practical guide to checking values, staffing, safeguarding and day-to-day support.'
  },
  {
    title: 'What Person-Centred Care Looks Like',
    text: 'How care plans can reflect routines, preferences, goals and family involvement.'
  },
  {
    title: 'Building Confidence at Home and in the Community',
    text: 'Small steps that help people feel safe, independent and connected.'
  }
];

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

function goTo(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Logo() {
  return (
    <a className="logo" href="/" onClick={(event) => { event.preventDefault(); goTo('/'); }} aria-label="Goodwill Support Services home">
      <img src={logoImage} alt="Goodwill Support Services" />
    </a>
  );
}

function Link({ path, className, children }) {
  return (
    <a className={className} href={`#${path}`} onClick={(event) => { event.preventDefault(); goTo(path); }}>
      {children}
    </a>
  );
}

function Stars() {
  return (
    <span className="stars" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((item) => <Star key={item} size={15} fill="currentColor" />)}
    </span>
  );
}

function Header({ currentPath }) {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <span><Clock3 size={15} />Mon-Fri: 9:00am - 5:00pm</span>
            <span><Mail size={15} />{contactInfo.infoEmail}</span>
          </div>
          <div className="topbar-group right">
            <Facebook size={15} />
            <Linkedin size={15} />
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-inner">
          <Logo />
          <button className="menu-btn" aria-label="Open menu"><Menu size={24} /></button>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.path} path={item.path} className={currentPath === item.path ? 'active' : ''}>
                {item.label} {item.dropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>
          <a className="nav-call" href={contactInfo.phoneHref}><Phone size={18} />{contactInfo.phoneDisplay}</a>
        </div>
      </nav>
    </>
  );
}

function ServiceGrid() {
  return (
    <div className="container service-grid">
      {services.map(({ title, text, icon: Icon, color, image }) => (
        <article className="service-card" key={title}>
          <div className={`service-icon ${color}`}>
            <Icon size={36} />
            <img src={image} alt="" aria-hidden="true" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link path="/contact">Learn More <ChevronRight size={15} /></Link>
          </div>
        </article>
      ))}
    </div>
  );
}

const heroSlides = [heroImage, aboutImage, homeImage, roomImage];

function HeroSlider() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-slides" aria-hidden="true">
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`hero-slide${i === index ? ' active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-dots" role="tablist" aria-label="Hero image slider">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot${i === index ? ' active' : ''}`}
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroSlider />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Compassionate Care. Trusted Support.</p>
            <h1>Quality Care &amp; Supported Living Services in London</h1>
            <p className="lead">We provide high-quality, person-centred care and support for adults, elderly individuals and vulnerable people to live safe, independent and fulfilling lives.</p>
            <div className="hero-actions">
              <Link className="btn primary" path="/contact">Request a Care Assessment <ChevronRight size={19} /></Link>
              <a className="btn secondary" href={contactInfo.phoneHref}>Speak to Our Team <Phone size={18} /></a>
            </div>
          </div>
          <div className="rating-card">
            <span className="google">G</span>
            <div><strong>5.0 <Stars /></strong><span>Based on 45+ Reviews</span></div>
          </div>
          <div className="trust-row">
            {badges.map(({ label, sub, icon: Icon }) => (
              <div className="trust-item" key={label}>
                <Icon size={26} />
                <span><strong>{label}</strong>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesIntro />
      <AboutIntro />
      <Testimonials />
    </>
  );
}

function ServicesIntro() {
  return (
    <section className="section services-section">
      <div className="container narrow section-heading">
        <p className="eyebrow small">What We Offer</p>
        <h2>Care Services Tailored to Your Needs</h2>
        <p>We offer a wide range of care and supported living services designed to promote independence, dignity and well-being.</p>
      </div>
      <ServiceGrid />
      <div className="center">
        <Link className="btn dark" path="/services">View All Services <ChevronRight size={18} /></Link>
      </div>
    </section>
  );
}

function AboutIntro() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div className="about-photo">
          <img src={aboutImage} alt="Goodwill carer speaking with elderly service users in a comfortable lounge" />
          <div className="experience"><strong>10+</strong><span>Years of Experience<br />in Care Services</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow small">About Us</p>
          <h2>Trusted Care. Built on Compassion and Integrity.</h2>
          <p>Goodwill Support Services provides care and supported living services in London. We are committed to delivering support that is personalised, respectful and empowering.</p>
          <ul>
            <li><Check size={17} />Person-centred approach</li>
            <li><Check size={17} />Highly trained and experienced staff</li>
            <li><Check size={17} />Safe, comfortable and homely environments</li>
            <li><Check size={17} />Promoting independence and well-being</li>
          </ul>
          <Link className="btn dark" path="/about">Learn More About Us <ChevronRight size={18} /></Link>
        </div>
        <aside className="quality-card">
          <ShieldCheck size={46} />
          <strong>Quality Led</strong>
          <span>Safe, respectful and reliable support</span>
        </aside>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container testimonial-layout">
        <div className="testimonial-title">
          <p className="eyebrow small">What Families Say</p>
          <h2>Trusted by Families. Proven by Care.</h2>
        </div>
        <button className="arrow" aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
        <div className="testimonial-cards">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <span className="quote">"</span>
              <p>{item.quote}</p>
              <div className="person">
                <div className="avatar">{item.name.charAt(0)}</div>
                <div><strong>{item.name}</strong><span>{item.role}</span></div>
              </div>
              <Stars />
            </article>
          ))}
        </div>
        <button className="arrow" aria-label="Next testimonial"><ChevronRight size={20} /></button>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, text, image = buildingImage }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow small">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{text}</p>
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Care, Comfort and Compassion" text="We support people to live with dignity, choice and confidence across London." image={aboutImage} />
      <AboutIntro />
      <section className="section">
        <div className="container values-grid">
          {['Compassion', 'Respect', 'Dignity', 'Excellence'].map((value) => (
            <article className="value-card" key={value}>
              <ShieldCheck size={30} />
              <h3>{value}</h3>
              <p>Every service is shaped around the individual, their goals and their preferred way of living.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Flexible Support for Different Needs" text="From supported living to respite care, our team builds support around each person." image={homeImage} />
      <ServicesIntro />
    </>
  );
}

function SupportedLivingPage() {
  return (
    <>
      <PageHero eyebrow="Supported Living" title="Independent Living With Reliable Support" text="We help people build skills, confidence and routines in a safe, supportive home environment." image={buildingImage} />
      <section className="section">
        <div className="container split-content">
          <img src={roomImage} alt="Comfortable supported living lounge" />
          <div>
            <h2>Support That Fits Daily Life</h2>
            <p>Our supported living service focuses on independence, wellbeing, community access and practical daily support.</p>
            <ul>
              <li><Check size={17} />Personal care and daily routines</li>
              <li><Check size={17} />Medication prompts and appointments</li>
              <li><Check size={17} />Shopping, cooking and household skills</li>
              <li><Check size={17} />Community access and social confidence</li>
            </ul>
            <Link className="btn dark" path="/contact">Talk to Our Team <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Join a Caring, Professional Team" text="We are looking for reliable people who care deeply about dignity, respect and great support." image={officeImage} />
      <section className="section">
        <div className="container values-grid">
          {['Support Worker', 'Senior Support Worker', 'Care Coordinator'].map((role) => (
            <article className="value-card" key={role}>
              <BriefcaseMedical size={30} />
              <h3>{role}</h3>
              <p>Send your CV and availability to {contactInfo.recruitmentEmail}.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Care Guidance and Family Support" text="Helpful notes for families, service users and people exploring care options." image={washingImage} />
      <section className="section">
        <div className="container values-grid">
          {blogPosts.map((post) => (
            <article className="value-card" key={post.title}>
              <CalendarDays size={30} />
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Speak to Goodwill Support Services" text="Tell us what support you need and our team will guide you through the next step." image={buildingImage} />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <h2>Contact Details</h2>
            <p><MapPin size={18} />{contactInfo.addressLines.join(', ')}</p>
            <p><Phone size={18} />{contactInfo.phoneDisplay}</p>
            <p><Mail size={18} />{contactInfo.infoEmail}</p>
            <p><Mail size={18} />{contactInfo.recruitmentEmail}</p>
            <p><Clock3 size={18} />{contactInfo.hoursLines.join(' | ')}</p>
          </div>
          <form className="contact-form">
            <input aria-label="Name" placeholder="Name" />
            <input aria-label="Email" placeholder="Email" />
            <input aria-label="Phone" placeholder="Phone" />
            <textarea aria-label="Message" placeholder="How can we help?" rows="5"></textarea>
            <button className="btn primary" type="button">Request a Callback <ChevronRight size={18} /></button>
          </form>
        </div>
      </section>
    </>
  );
}

function SupportCta() {
  return (
    <section className="support-cta">
      <div className="container support-inner">
        <div>
          <Headphones size={46} />
          <span><strong>Need Support or Have Questions?</strong><small>Our team is here to help you find the right care solution.</small></span>
        </div>
        <a className="btn light" href={contactInfo.phoneHref}><Phone size={18} />Call Us: {contactInfo.phoneDisplay}</a>
        <Link className="btn purple" path="/contact"><CalendarDays size={18} />Request a Callback</Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Providing safe, high-quality care and supported living services across London.</p>
          <div className="socials"><Facebook size={18} /><Linkedin size={18} /></div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {navItems.map((item) => <Link key={item.path} path={item.path}>{item.label}</Link>)}
        </div>
        <div>
          <h4>Our Services</h4>
          {services.map((service) => <Link key={service.title} path="/services">{service.title}</Link>)}
        </div>
        <div>
          <h4>Information</h4>
          <Link path="/about">Company Information</Link><Link path="/about">Safeguarding</Link><Link path="/contact">Privacy Policy</Link><Link path="/contact">Complaints Procedure</Link><Link path="/contact">Accessibility</Link><Link path="/contact">Cookie Policy</Link>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p><MapPin size={18} />31 Dormers Wells Lane,<br />Southall, Middlesex,<br />United Kingdom,<br />UB1 3HX</p>
          <p><Phone size={18} />{contactInfo.phoneDisplay}</p>
          <p><Mail size={18} />{contactInfo.infoEmail}</p>
          <p><Mail size={18} />{contactInfo.recruitmentEmail}</p>
          <p><Clock3 size={18} />Mon-Fri: 9:00am - 5:00pm<br />Saturday: Closed<br />Sunday: Closed</p>
        </div>
      </div>
      <div className="container copyright">
        <span>Copyright 2024 Goodwill Support Services. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

function CurrentPage({ path }) {
  switch (path) {
    case '/about':
      return <AboutPage />;
    case '/services':
      return <ServicesPage />;
    case '/supported-living':
      return <SupportedLivingPage />;
    case '/careers':
      return <CareersPage />;
    case '/blog':
      return <BlogPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  const [path, setPath] = React.useState(getRoute());

  React.useEffect(() => {
    const handleChange = () => setPath(getRoute());
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  return (
    <div className="site-shell">
      <Header currentPath={path} />
      <main>
        <CurrentPage path={path} />
      </main>
      <SupportCta />
      <Footer />
    </div>
  );
}

export default App;
