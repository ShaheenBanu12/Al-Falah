
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  ArrowUpRight,
  BookOpen,
  BookMarked,
  Languages,
  GraduationCap,
  Heart,
  MessageCircle,
  Sparkles
} from "lucide-react";
import "./styles.css";

const WHATSAPP_NUMBER = "919841994420";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const generalMessage =
  "Assalamu Alaikum, I would like to know more about Al Falah Islamic Academy.";

// GitHub Pages-compatible logo path
const LOGO_URL = `${import.meta.env.BASE_URL}images/al-falah-logo.jpeg`;

const courses = [
  {
    n: "01",
    title: "Tajweed",
    tag: "Qur’an Studies",
    icon: BookOpen,
    desc: "Learn to recite the Qur’an with correct pronunciation, articulation and the rules of Tajweed."
  },
  {
    n: "02",
    title: "Tafsir",
    tag: "Qur’an Studies",
    icon: BookMarked,
    desc: "Explore the meanings and explanations of Qur’anic verses through guided study."
  },
  {
    n: "03",
    title: "Tarjuma + Tafsir",
    tag: "Qur’an Studies",
    icon: Languages,
    desc: "Understand the Qur’an through translation alongside explanation and reflection."
  },
  {
    n: "04",
    title: "Seerah of Prophets",
    tag: "Islamic Studies",
    icon: Heart,
    desc: "Study the lives, teachings and examples of the Prophets and lessons for daily life."
  },
  {
    n: "05",
    title: "Hifz",
    tag: "Qur’an Studies",
    icon: GraduationCap,
    desc: "Build a steady Qur’an memorisation practice with structured learning and revision."
  }
];

function App() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={close}>
            <img src={LOGO_URL} alt="Al Falah logo" />
            <span>
              <b>AL FALAH</b>
              <small>ISLAMIC ACADEMY</small>
            </span>
          </a>

          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? "links show" : "links"}>
            <a href="#home" onClick={close}>Home</a>
            <a href="#about" onClick={close}>About</a>
            <a href="#courses" onClick={close}>Courses</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a
              className="navbtn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              WhatsApp us <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="orb"></div>

          <div className="container hero-grid">
            <div>
              <div className="kicker">
                <i /> AL FALAH ISLAMIC ACADEMY
              </div>

              <h1>
                Knowledge that <em>nourishes</em> the soul.
              </h1>

              <p className="lead">
                A thoughtful space for girls and women to learn, understand
                and grow in Islamic knowledge.
              </p>

              <div className="actions">
                <a className="btn" href="#courses">
                  Explore our courses <ArrowUpRight size={17} />
                </a>

                <a className="simple-link" href="#about">
                  Discover the academy <span>→</span>
                </a>
              </div>

              <div className="hero-note">
                <i /> Rooted in tradition. Guided by knowledge.
              </div>
            </div>

            <div className="logo-card">
              <img
                src={LOGO_URL}
                alt="Official Al Falah Islamic Academy emblem"
              />
              <div><i /> LEARNING • FAITH • GROWTH</div>
            </div>
          </div>

          <div className="container hero-foot">
            <span>01 / LEARN WITH PURPOSE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="section intro" id="about">
          <div className="container intro-grid">
            <div className="kicker">A PLACE TO BEGIN</div>

            <div>
              <h2>
                Faith is a journey.
                <br />
                <em>Let learning guide yours.</em>
              </h2>

              <p className="large">
                At Al Falah Islamic Academy, we aim to make the study of Islam
                clear, meaningful and accessible through structured courses
                in Qur’anic and Islamic studies.
              </p>

              <p>
                Whether you are beginning your learning journey or deepening
                what you already know, our courses offer a space to build
                understanding with consistency and care.
              </p>

              <a className="under-link" href="#courses">
                Find a course to begin <span>↗</span>
              </a>
            </div>

            <aside>
              <div className="quote">“</div>
              <p>
                Seek knowledge with sincerity. Grow through understanding.
                Carry what you learn into everyday life.
              </p>
              <i />
              <small>THE AL FALAH APPROACH</small>
            </aside>
          </div>
        </section>

        <section className="section courses" id="courses">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">LEARN WITH AL FALAH</div>
                <h2>
                  Courses for a <em>deeper understanding.</em>
                </h2>
              </div>

              <p>
                Explore our areas of study and choose the learning path that
                speaks to your goals.
              </p>
            </div>

            <div className="course-grid">
              {courses.map(({ n, title, tag, icon: Icon, desc }) => (
                <article className="course" key={title}>
                  <div className="course-top">
                    <span>{n}</span>
                    <Icon size={23} />
                  </div>

                  <small>{tag}</small>
                  <h3>{title}</h3>
                  <p>{desc}</p>

                  <a href="#contact">
                    Ask about this course <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>

            <div className="footnote">
              <Sparkles size={16} />
              Have questions about a course? Contact us directly on WhatsApp.
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container value-grid">
            <div>
              <div className="kicker light">OUR PURPOSE</div>
              <h2>
                Learning with
                <br />
                <em>meaning.</em>
              </h2>
            </div>

            {[
              [
                "01",
                "Knowledge",
                "Build a sound foundation through organised and purposeful study."
              ],
              [
                "02",
                "Understanding",
                "Go beyond memorising and develop a meaningful connection with what you learn."
              ],
              [
                "03",
                "Growth",
                "Bring learning into daily life through reflection, practice and consistency."
              ]
            ].map(([n, t, d]) => (
              <article className="value" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="kicker">LET’S CONNECT</div>
              <h2>
                Have a question?
                <br />
                <em>We’re here to help.</em>
              </h2>
            </div>

            <div className="contact-details">
              <p>
                For course enquiries, admissions and further information,
                contact Al Falah Islamic Academy directly.
              </p>

              <div className="contact-number-label">
                WHATSAPP CONTACT NUMBER
              </div>

              <a
                className="contact-number"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                +91 98419 94420
              </a>

              <a
                className="light-btn"
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(generalMessage)}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                Chat with us on WhatsApp
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <a className="brand" href="#home">
            <img src={LOGO_URL} alt="Al Falah logo" />
            <span>
              <b>AL FALAH</b>
              <small>ISLAMIC ACADEMY</small>
            </span>
          </a>

          <p>
            Rooted in tradition.
            <br />
            Guided by knowledge.
          </p>

          <a className="back" href="#home">BACK TO TOP ↑</a>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Al Falah Islamic Academy</span>
          <span>Made with purpose & care.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={`${WHATSAPP_URL}?text=${encodeURIComponent(generalMessage)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Al Falah on WhatsApp"
        title="Chat with Al Falah on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
