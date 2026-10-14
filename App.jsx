import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Bot, Check, ChevronDown, Cloud, Code2, ExternalLink,
  Globe2, Menu, MessageCircle, MonitorSmartphone, Puzzle, Rocket, ShieldCheck,
  ShoppingCart, Smartphone, Sparkles, Wrench, X
} from "lucide-react";

const whatsappNumber = "919830015487";

const services = [
  { icon: MonitorSmartphone, title: "Business Websites", summary: "Fast, responsive websites that explain your offer clearly and make it easy for customers to contact you.", details: ["Landing pages and corporate websites", "Mobile-first responsive design", "WhatsApp and enquiry integration", "Basic technical SEO setup"] },
  { icon: Code2, title: "Web Applications", summary: "Customer portals, dashboards and workflow applications shaped around how your organisation works.", details: ["Frontend and backend development", "Secure user accounts and roles", "Admin panels and reporting", "Deployment and handover"] },
  { icon: Smartphone, title: "Mobile Applications", summary: "Practical Android, iOS and cross-platform applications for customers, teams and field operations.", details: ["Product discovery and UI planning", "Cross-platform development", "API and payment integration", "Store-launch support"] },
  { icon: Puzzle, title: "Custom Software", summary: "Purpose-built software for processes that spreadsheets and off-the-shelf tools can no longer handle.", details: ["Workflow analysis", "Custom architecture", "Automation and reporting", "Integration with existing systems"] },
  { icon: ShoppingCart, title: "E-commerce & Portals", summary: "Online stores and self-service portals with product, payment, order and customer workflows.", details: ["Catalogue and checkout", "Payment gateway integration", "Order and customer management", "Admin controls"] },
  { icon: Bot, title: "AI & Automation", summary: "Focused automation that reduces repetitive work and helps teams act on information faster.", details: ["AI-assisted workflows", "Document automation", "Chat and support tools", "Human review controls"] },
  { icon: Cloud, title: "Cloud & Integration", summary: "Cloud deployment and reliable connections between platforms, APIs, payments and business data.", details: ["Cloud deployment", "REST API development", "Third-party integrations", "Monitoring and recovery"] },
  { icon: Wrench, title: "Support & Maintenance", summary: "Structured technical support, upgrades and improvements after your website or product launches.", details: ["Issue resolution", "Security and dependency updates", "Performance improvement", "Ongoing enhancements"] },
];

const projects = [
  {
    name: "NextGenRoboticX",
    category: "Robotics education platform",
    url: "https://www.nextgenroboticx.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.nextgenroboticx.com%2F?w=1200",
    description: "A responsive learning platform with courses, projects, student access and structured educational content.",
    tags: ["Education", "Courses", "Student portal"]
  },
  {
    name: "Sanhita360",
    category: "Legal learning platform",
    url: "https://www.sanhita360.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sanhita360.com%2F?w=1200",
    description: "A legal-education ecosystem combining course discovery, student learning, examinations and legal resources.",
    tags: ["Legal education", "Learning portal", "Content"]
  },
  {
    name: "ConsultKaro",
    category: "Property registration consultancy",
    url: "https://www.consultkaro.org/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.consultkaro.org%2F?w=1200",
    description: "A service-led website designed to explain property-registration support and convert visitors into consultations.",
    tags: ["Consulting", "Local SEO", "Lead generation"]
  },
  {
    name: "Tanmoy Sarkar",
    category: "Video journalist & digital creator",
    url: "https://www.tanmoysarkar.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tanmoysarkar.com%2F?w=1200",
    description: "A visual portfolio that presents creative work, professional experience and collaboration opportunities.",
    tags: ["Portfolio", "Media", "Personal brand"]
  }
];

const process = [
  { icon: Sparkles, title: "Understand", text: "We clarify your audience, goal, content, must-have features and definition of success." },
  { icon: Globe2, title: "Plan", text: "You receive a clear scope, delivery approach and responsibilities before work begins." },
  { icon: Code2, title: "Build", text: "We design, develop and review the solution with visible progress and practical feedback." },
  { icon: Rocket, title: "Launch", text: "We test, deploy and hand over the project, then support the next improvements." }
];

const faqs = [
  ["What is included in the ₹999 starter website?", "A responsive one-page website with up to five content sections, a WhatsApp contact button, basic on-page SEO, one revision and deployment assistance. You supply the final text, logo and images."],
  ["Are domain and hosting included in ₹999?", "No. Domain, hosting and paid third-party services are separate. We can guide you in choosing them and keep the accounts in your control."],
  ["Can the ₹999 website include online payments or a login?", "Those features require backend development and are quoted separately. The starter offer is designed for a simple, professional online presence."],
  ["Do you build larger websites and applications?", "Yes. We build multi-page business websites, portals, e-commerce platforms, web applications, mobile applications and custom software after scoping the requirements."],
  ["How do we start?", "Send your business type, required service, expected timeline and budget through the enquiry form or WhatsApp. We will respond with the next practical step."]
];

function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const SelectedServiceIcon = selectedService?.Icon;

  const closeMenu = () => setMenuOpen(false);

  const submitEnquiry = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Emplementer, I would like to discuss a project.",
      `Name: ${form.get("name")}`,
      `Business: ${form.get("business")}`,
      `Service: ${form.get("service")}`,
      `Budget: ${form.get("budget")}`,
      `Requirement: ${form.get("requirement")}`
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <div className="offer-strip">
        <div className="offer-track">
          <span>Responsive one-page business website from ₹999</span><i>•</i>
          <span>Mobile friendly</span><i>•</i><span>WhatsApp enabled</span><i>•</i>
          <span>Basic SEO included</span><i>•</i>
          <span aria-hidden="true">Responsive one-page business website from ₹999</span><i aria-hidden="true">•</i>
          <span aria-hidden="true">Mobile friendly</span><i aria-hidden="true">•</i>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Emplementer home">
            <img src="/logo-emplementer.png" alt="Emplementer" />
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div id="nav-menu" className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#starter" onClick={closeMenu}>₹999 offer</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-button" href={waLink("Hello Emplementer, I would like to discuss a project.")} target="_blank" rel="noreferrer">WhatsApp us</a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-glow" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span /> Website & software development partner</p>
            <h1>Turn your business idea into a <em>digital product that works.</em></h1>
            <p className="hero-lead">Emplementer builds responsive websites, portals, web applications and custom digital solutions for businesses, professionals, educators and creators.</p>
            <div className="hero-actions">
              <a className="button primary" href="#starter">See the ₹999 starter offer <ArrowRight /></a>
              <a className="button ghost" href="#work">View live projects</a>
            </div>
            <div className="hero-points">
              <span><Check /> Clear scope</span><span><Check /> Responsive build</span><span><Check /> Direct support</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/right-plane-banner-v6.jpg" width="1145" height="804" alt="Emplementer transforms business ideas into responsive digital products" fetchPriority="high" />
            <div className="floating-card">
              <strong>Start small. Grow when ready.</strong>
              <span>A focused website now, custom features next.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="shell trust-grid">
          <article><BadgeCheck /><div><strong>Real project portfolio</strong><span>Explore websites currently online</span></div></article>
          <article><ShieldCheck /><div><strong>Scope before development</strong><span>Know what is included before work begins</span></div></article>
          <article><MessageCircle /><div><strong>Direct communication</strong><span>Discuss the project through WhatsApp</span></div></article>
        </div>
      </section>

      <section id="starter" className="starter section">
        <div className="shell starter-grid">
          <div className="section-copy">
            <p className="eyebrow">A practical first step</p>
            <h2>Launch a responsive business website for <span>₹999</span></h2>
            <p>This starter package is for a professional one-page presence—not a custom application. Its scope is intentionally clear so you know exactly what you receive.</p>
            <a className="button primary" href={waLink("Hello Emplementer, I am interested in the ₹999 one-page responsive website offer.")} target="_blank" rel="noreferrer">Ask about the ₹999 offer <ArrowRight /></a>
          </div>
          <div className="price-card">
            <div className="price-head"><span>Starter website</span><strong><small>₹</small>999</strong><em>one-time development fee</em></div>
            <ul>
              <li><Check /> One responsive webpage</li>
              <li><Check /> Up to five content sections</li>
              <li><Check /> WhatsApp contact button</li>
              <li><Check /> Basic on-page SEO</li>
              <li><Check /> One revision</li>
              <li><Check /> Deployment assistance</li>
            </ul>
            <div className="scope-note"><strong>Please note:</strong> You provide final text, logo and images. Domain, hosting, custom backend, payment gateway, login and e-commerce features are quoted separately.</div>
          </div>
        </div>
      </section>

      <section id="services" className="services section dark">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">What we build</p><h2>Choose the solution your business actually needs.</h2></div>
            <p>Start with a focused website or work with us on a larger product. Every engagement begins with a defined problem and scope.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, summary, details }) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon /></div>
                <h3>{title}</h3><p>{summary}</p>
                <button type="button" onClick={() => setSelectedService({ Icon, title, summary, details })}>Know more <ArrowRight /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Live projects—not placeholder concepts.</h2></div>
            <p>These platforms demonstrate our work across education, legal learning, consulting and creator portfolios.</p>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.name}>
                <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                  <img src={project.image} alt={`${project.name} website homepage`} loading="lazy" width="1200" height="675" />
                  <span>Visit live website <ExternalLink /></span>
                </a>
                <div className="project-body">
                  <p>{project.category}</p><h3>{project.name}</h3><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <p className="project-description">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process section soft">
        <div className="shell">
          <div className="section-heading compact"><div><p className="eyebrow">How we work</p><h2>A visible path from requirement to launch.</h2></div></div>
          <div className="process-grid">
            {process.map(({ icon: Icon, title, text }, index) => (
              <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="fit section">
        <div className="shell fit-grid">
          <div><p className="eyebrow">A good fit</p><h2>Built for people who need technology to solve a real business problem.</h2></div>
          <div className="fit-list">
            {["Small businesses establishing an online presence","Professionals and consultants generating enquiries","Educators creating learning platforms","Creators presenting work and partnerships","Teams replacing manual workflows","Founders validating a digital-product idea"].map(item => <div key={item}><Check />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="faq section soft">
        <div className="shell faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><h2>Clear answers before you begin.</h2></div>
          <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us what you want to build.</h2>
            <p>Share the essential details. Submitting this form prepares a structured WhatsApp message so we can understand your requirement faster.</p>
            <a className="direct-link" href={waLink("Hello Emplementer, I would like to discuss a project.")} target="_blank" rel="noreferrer"><MessageCircle /> Chat directly on WhatsApp</a>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <label>Your name<input name="name" required placeholder="Name" /></label>
            <label>Business or organisation<input name="business" required placeholder="Business name or type" /></label>
            <div className="form-row">
              <label>Required service<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(service => <option key={service.title}>{service.title}</option>)}<option>Not sure yet</option></select></label>
              <label>Approximate budget<select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>₹999 starter website</option><option>₹1,000–₹10,000</option><option>₹10,000–₹50,000</option><option>₹50,000+</option><option>Need guidance</option></select></label>
            </div>
            <label>What do you need?<textarea name="requirement" required rows="4" placeholder="Briefly describe your goal, important features and expected timeline." /></label>
            <button className="button primary form-button" type="submit">Continue on WhatsApp <ArrowRight /></button>
            <small>No information is stored on this website. The details are placed into a WhatsApp message for you to review before sending.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div><img src="/logo-emplementer.png" alt="Emplementer" /><p>Responsive websites and digital solutions for businesses ready to move forward.</p></div>
          <div><strong>Explore</strong><a href="#services">Services</a><a href="#work">Our work</a><a href="#starter">₹999 offer</a></div>
          <div><strong>Contact</strong><a href="#contact">Project enquiry</a><a href={waLink("Hello Emplementer, I would like to discuss a project.")} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.emplementer.com/">emplementer.com</a></div>
        </div>
        <div className="shell footer-bottom">© {new Date().getFullYear()} Emplementer. All rights reserved.</div>
      </footer>

      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={event => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)} aria-label="Close details"><X /></button>
            <div className="service-icon large">{SelectedServiceIcon && <SelectedServiceIcon />}</div>
            <p className="eyebrow">Emplementer service</p><h2 id="modal-title">{selectedService.title}</h2><p>{selectedService.summary}</p>
            <ul>{selectedService.details.map(item => <li key={item}><Check />{item}</li>)}</ul>
            <a className="button primary" href={waLink(`Hello Emplementer, I would like to discuss ${selectedService.title}.`)} target="_blank" rel="noreferrer">Discuss this service <ArrowRight /></a>
          </section>
        </div>
      )}
    </main>
  );
}
