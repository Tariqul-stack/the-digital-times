import Link from "next/link";

const TEAM = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    role: "Editor-in-Chief",
    since: "Est. 2018",
    bio: "Award-winning journalist with 20 years of experience covering national politics and international affairs.",
    initials: "RA",
  },
  {
    id: 2,
    name: "Nadia Islam",
    role: "Senior Correspondent",
    since: "Est. 2019",
    bio: "Specialises in investigative reporting, with bylines in major South Asian publications.",
    initials: "NI",
  },
  {
    id: 3,
    name: "Tanvir Hossain",
    role: "Technology Editor",
    since: "Est. 2020",
    bio: "Covers the intersection of technology, society, and digital rights across the region.",
    initials: "TH",
  },
  {
    id: 4,
    name: "Sadia Karim",
    role: "Sports Desk Chief",
    since: "Est. 2021",
    bio: "Former professional athlete turned journalist, bringing insider perspective to sports coverage.",
    initials: "SK",
  },
];

const STATS = [
  { value: "2.4M+", label: "Monthly Readers" },
  { value: "6", label: "Years of Publishing" },
  { value: "120+", label: "Staff Journalists" },
  { value: "40+", label: "Countries Reached" },
];

const VALUES = [
  {
    number: "I",
    title: "Independence",
    desc: "We are editorially independent. No government, corporation, or advertiser dictates our coverage.",
  },
  {
    number: "II",
    title: "Accuracy",
    desc: "Every fact is verified. Every source is protected. Every correction is made transparently.",
  },
  {
    number: "III",
    title: "Fairness",
    desc: "We present all sides with equal rigour, letting our readers draw their own informed conclusions.",
  },
  {
    number: "IV",
    title: "Courage",
    desc: "We publish difficult truths, hold power to account, and stand behind our reporters in the field.",
  },
];

const AboutPage = () => {
  return (
    <div style={s.page}>
      {/* ── Red top bar ── */}
      <div style={s.topBar} />

      <main style={s.main}>
        {/* ── Hero ── */}
        <section style={s.hero}>
          <div style={s.heroRule} />
          <div style={s.heroContent}>
            <p style={s.heroKicker}>
              Est. 2018 &nbsp;·&nbsp; Journalism Without Fear or Favour
            </p>
            <h1 style={s.heroHeadline}>
              About
              <br />
              The Digital
              <br />
              Times
            </h1>
            <div style={s.heroBody}>
              <p style={s.heroText}>
                Founded in 2018, <em>The Digital Times</em> set out with a
                single conviction — that rigorous, fearless journalism is not a
                luxury but a necessity for a functioning democracy.
              </p>
              <p style={s.heroText}>
                Today we serve over two million readers across the world,
                delivering breaking news, long-form investigations, and expert
                analysis across politics, technology, business, culture, and
                sport.
              </p>
            </div>
          </div>
          <div style={s.heroRule} />
        </section>

        {/* ── Stats ── */}
        <section style={s.statsSection}>
          {STATS.map((st, i) => (
            <div key={i} style={s.statItem}>
              <span style={s.statValue}>{st.value}</span>
              <span style={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </section>
        <div style={s.fullRule} />

        {/* ── Mission ── */}
        <section style={s.missionSection}>
          <div style={s.sectionLabel}>Our Mission</div>
          <div style={s.missionGrid}>
            <div style={s.missionLeft}>
              <h2 style={s.sectionHeadline}>
                The truth, told without compromise.
              </h2>
            </div>
            <div style={s.missionRight}>
              <p style={s.missionText}>
                We believe every reader deserves access to well-sourced,
                contextualised reporting — free from agenda, sensationalism, or
                undue influence. Our editorial charter demands that stories be
                verified through multiple independent sources before
                publication.
              </p>
              <p style={s.missionText}>
                <em>The Digital Times</em> operates as an independent media
                organisation. We are funded by reader subscriptions and a small
                number of carefully vetted advertising partners who have no
                editorial access.
              </p>
            </div>
          </div>
        </section>
        <div style={s.doubleRule} />

        {/* ── Values ── */}
        <section style={s.valuesSection}>
          <div style={s.sectionLabel}>Editorial Values</div>
          <div style={s.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.number} style={s.valueCard}>
                <span style={s.valueNumber}>{v.number}</span>
                <div style={s.valueDivider} />
                <h3 style={s.valueTitle}>{v.title}</h3>
                <p style={s.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div style={s.fullRule} />

        {/* ── Team ── */}
        <section style={s.teamSection}>
          <div style={s.sectionLabel}>The Newsroom</div>
          <h2 style={s.teamHeadline}>Meet Our Editorial Team</h2>
          <div style={s.teamGrid}>
            {TEAM.map((m) => (
              <div key={m.id} style={s.teamCard}>
                <div style={s.teamAvatar}>{m.initials}</div>
                <div style={s.teamInfo}>
                  <span style={s.teamSince}>{m.since}</span>
                  <h4 style={s.teamName}>{m.name}</h4>
                  <span style={s.teamRole}>{m.role}</span>
                  <p style={s.teamBio}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div style={s.doubleRule} />

        {/* ── CTA ── */}
        <section style={s.ctaSection}>
          <p style={s.ctaKicker}>Join Our Community</p>
          <h2 style={s.ctaHeadline}>Read without limits.</h2>
          <p style={s.ctaText}>
            Subscribe to <em>The Digital Times</em> and get unlimited access to
            every story, archive, and exclusive newsletter — starting from just
            ৳99/month.
          </p>
          <div style={s.ctaButtons}>
            <Link href="/subscribe" style={s.btnPrimary}>
              Subscribe Now
            </Link>
            <Link href="/contact" style={s.btnSecondary}>
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <span style={s.footerLogo}>The Digital Times</span>
          <span style={s.footerSep}>·</span>
          <span style={s.footerText}>
            © {new Date().getFullYear()} The Digital Times. All Rights Reserved.
          </span>
          <span style={s.footerSep}>·</span>
          <Link href="/privacy" style={s.footerLink}>
            Privacy Policy
          </Link>
          <span style={s.footerSep}>·</span>
          <Link href="/terms" style={s.footerLink}>
            Terms of Use
          </Link>
        </div>
      </footer>
    </div>
  );
};

/* ─────────── Styles ─────────── */
const SERIF = "'Georgia', 'Times New Roman', serif";
const SANS = "'Arial', Helvetica, sans-serif";
const RED = "#cc0000";
const INK = "#1a1a1a";
const PAPER = "#faf9f6";
const MUTED = "#666";
const RULE = "#ccc";

const s = {
  page: {
    minHeight: "100vh",
    background: PAPER,
    fontFamily: SERIF,
    color: INK,
    display: "flex",
    flexDirection: "column",
  },
  topBar: { height: "4px", background: RED, width: "100%", flexShrink: 0 },

  /* Main */
  main: {
    flex: 1,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 2rem 4rem",
    width: "100%",
  },

  /* Hero */
  hero: { padding: "3rem 0 2rem" },
  heroRule: {
    borderTop: `3px solid ${INK}`,
    borderBottom: `1px solid ${INK}`,
    height: "5px",
    marginBottom: "2.5rem",
  },
  heroContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "2rem",
    alignItems: "start",
  },
  heroKicker: {
    gridColumn: "1/-1",
    fontFamily: SANS,
    fontSize: "0.65rem",
    fontWeight: "700",
    letterSpacing: "0.2em",
    color: RED,
    textTransform: "uppercase",
    marginBottom: "-1rem",
  },
  heroHeadline: {
    gridColumn: "1/2",
    fontFamily: SERIF,
    fontSize: "clamp(2.5rem,5vw,4rem)",
    fontWeight: "700",
    lineHeight: 1.08,
    color: INK,
    margin: 0,
    letterSpacing: "-0.02em",
  },
  heroBody: {
    gridColumn: "2/4",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingTop: "0.5rem",
  },
  heroText: {
    fontFamily: SERIF,
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#333",
    margin: 0,
  },

  /* Stats */
  statsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    borderTop: `1px solid ${RULE}`,
    borderLeft: `1px solid ${RULE}`,
    margin: "2.5rem 0 0",
  },
  statItem: {
    borderRight: `1px solid ${RULE}`,
    borderBottom: `1px solid ${RULE}`,
    padding: "1.8rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    alignItems: "center",
    textAlign: "center",
  },
  statValue: {
    fontFamily: SERIF,
    fontSize: "2.4rem",
    fontWeight: "700",
    color: RED,
    lineHeight: 1,
    letterSpacing: "-0.02em",
  },
  statLabel: {
    fontFamily: SANS,
    fontSize: "0.62rem",
    fontWeight: "700",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: MUTED,
  },
  fullRule: { borderTop: `1px solid ${RULE}`, margin: "2.5rem 0" },

  /* Mission */
  missionSection: { padding: "0.5rem 0 2.5rem" },
  sectionLabel: {
    fontFamily: SANS,
    fontSize: "0.6rem",
    fontWeight: "700",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: RED,
    marginBottom: "1.2rem",
  },
  missionGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  missionLeft: {},
  sectionHeadline: {
    fontFamily: SERIF,
    fontSize: "clamp(1.6rem,3vw,2.4rem)",
    fontWeight: "700",
    lineHeight: 1.2,
    color: INK,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  missionRight: {},
  missionText: {
    fontFamily: SERIF,
    fontSize: "1rem",
    lineHeight: 1.85,
    color: "#333",
    marginBottom: "1rem",
  },
  doubleRule: {
    borderTop: `3px double ${INK}`,
    borderBottom: `1px solid ${INK}`,
    height: "5px",
    margin: "2.5rem 0",
  },

  /* Values */
  valuesSection: { padding: "0.5rem 0 2.5rem" },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "0",
    borderLeft: `1px solid ${RULE}`,
  },
  valueCard: {
    borderRight: `1px solid ${RULE}`,
    padding: "1.5rem 1.5rem 2rem",
    display: "flex",
    flexDirection: "column",
  },
  valueNumber: {
    fontFamily: SERIF,
    fontSize: "2rem",
    fontWeight: "700",
    color: RED,
    lineHeight: 1,
    marginBottom: "0.8rem",
  },
  valueDivider: {
    width: "2rem",
    height: "2px",
    background: INK,
    marginBottom: "0.8rem",
  },
  valueTitle: {
    fontFamily: SERIF,
    fontSize: "1.1rem",
    fontWeight: "700",
    color: INK,
    margin: "0 0 0.6rem",
    letterSpacing: "-0.01em",
  },
  valueDesc: {
    fontFamily: SERIF,
    fontSize: "0.88rem",
    lineHeight: 1.75,
    color: MUTED,
    margin: 0,
  },

  /* Team */
  teamSection: { padding: "0.5rem 0 2.5rem" },
  teamHeadline: {
    fontFamily: SERIF,
    fontSize: "clamp(1.4rem,2.5vw,2rem)",
    fontWeight: "700",
    color: INK,
    margin: "0 0 2rem",
    letterSpacing: "-0.01em",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "0",
    borderTop: `1px solid ${RULE}`,
    borderLeft: `1px solid ${RULE}`,
  },
  teamCard: {
    borderRight: `1px solid ${RULE}`,
    borderBottom: `1px solid ${RULE}`,
    padding: "1.5rem",
    display: "flex",
    gap: "1.2rem",
    alignItems: "flex-start",
  },
  teamAvatar: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: INK,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: SERIF,
    fontSize: "1rem",
    fontWeight: "700",
    flexShrink: 0,
    letterSpacing: "0.05em",
  },
  teamInfo: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  teamSince: {
    fontFamily: SANS,
    fontSize: "0.6rem",
    color: MUTED,
    letterSpacing: "0.1em",
  },
  teamName: {
    fontFamily: SERIF,
    fontSize: "1.05rem",
    fontWeight: "700",
    color: INK,
    margin: 0,
    lineHeight: 1.2,
  },
  teamRole: {
    fontFamily: SANS,
    fontSize: "0.62rem",
    fontWeight: "700",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: RED,
  },
  teamBio: {
    fontFamily: SERIF,
    fontSize: "0.85rem",
    lineHeight: 1.7,
    color: MUTED,
    margin: "0.4rem 0 0",
  },

  /* CTA */
  ctaSection: {
    textAlign: "center",
    padding: "3rem 1rem 2rem",
    borderTop: `3px solid ${INK}`,
    borderBottom: `1px solid ${INK}`,
  },
  ctaKicker: {
    fontFamily: SANS,
    fontSize: "0.6rem",
    fontWeight: "700",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: RED,
    marginBottom: "0.8rem",
  },
  ctaHeadline: {
    fontFamily: SERIF,
    fontSize: "clamp(1.8rem,4vw,3rem)",
    fontWeight: "700",
    color: INK,
    margin: "0 0 1rem",
    letterSpacing: "-0.02em",
  },
  ctaText: {
    fontFamily: SERIF,
    fontSize: "1rem",
    lineHeight: 1.8,
    color: MUTED,
    maxWidth: "460px",
    margin: "0 auto 2rem",
  },
  ctaButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: INK,
    color: "#fff",
    fontFamily: SANS,
    fontSize: "0.65rem",
    fontWeight: "700",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "0.75rem 1.8rem",
    border: `2px solid ${INK}`,
    display: "inline-block",
  },
  btnSecondary: {
    background: "transparent",
    color: INK,
    fontFamily: SANS,
    fontSize: "0.65rem",
    fontWeight: "700",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "0.75rem 1.8rem",
    border: `2px solid ${INK}`,
    display: "inline-block",
  },

  /* Footer */
  footer: {
    background: INK,
    borderTop: `4px solid ${RED}`,
    padding: "1.2rem 2rem",
  },
  footerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.7rem",
    flexWrap: "wrap",
  },
  footerLogo: {
    fontFamily: SERIF,
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "#fff",
    fontStyle: "italic",
  },
  footerSep: { color: "#555" },
  footerText: { fontFamily: SANS, fontSize: "0.68rem", color: "#aaa" },
  footerLink: {
    fontFamily: SANS,
    fontSize: "0.68rem",
    color: "#aaa",
    textDecoration: "none",
  },
};

export default AboutPage;
