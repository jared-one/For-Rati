/* ==========================================================
   GLOBAL RESET
   ========================================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ==========================================================
   FONTS & COLORS
   ========================================================== */
:root {
  --black: #000000;
  --blue-accent: #1E90FF;
  --white: #FFFFFF;
  --gray-light: #333333;
  --duration: 0.3s;
  --font-primary: 'Helvetica Neue', Arial, sans-serif;
}

body {
  background-color: var(--black);
  color: var(--white);
  font-family: var(--font-primary);
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* ==========================================================
   HERO SECTION
   ========================================================== */
#hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../static/rati media folder/Baby Rati photos/Baby Rati.jpg')
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.hero-content {
  position: relative;
  text-align: center;
  max-width: 800px;
  padding: 0 1rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--blue-accent);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-content .subtitle {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.hero-content button {
  background-color: var(--blue-accent);
  border: 2px solid var(--blue-accent);
  color: var(--black);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color var(--duration),
    color var(--duration), transform var(--duration);
}

.hero-content button:hover {
  background-color: var(--black);
  color: var(--blue-accent);
  transform: scale(1.05);
}

/* ==========================================================
   SECTIONS COMMON STYLES
   ========================================================== */
main {
  padding: 4rem 1rem;
  background-color: var(--black);
}

section {
  margin-bottom: 4rem;
}

section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--blue-accent);
}

.section-intro {
  text-align: center;
  color: var(--gray-light);
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* ==========================================================
   GALLERY GRID
   ========================================================== */
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.thumb {
  position: relative;
  overflow: hidden;
  border: 2px solid var(--gray-light);
  border-radius: 8px;
  cursor: pointer;
}

.thumb img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--duration);
}

.thumb:hover img {
  transform: scale(1.05);
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  padding: 0.75rem;
  text-align: center;
  opacity: 0;
  transition: opacity var(--duration);
  font-size: 0.9rem;
}

.thumb:hover .caption {
  opacity: 1;
}

/* ==========================================================
   VIDEO SECTION
   ========================================================== */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container video {
  width: 100%;
  max-width: 800px;
  border: 3px solid var(--gray-light);
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

/* ==========================================================
   MESSAGE SECTION
   ========================================================== */
.message-container {
  max-width: 800px;
  margin: 0 auto;
  color: var(--white);
  font-size: 1.1rem;
}

.message-container p {
  margin-bottom: 1.25rem;
}

.message-container .signature {
  margin-top: 2rem;
  font-style: italic;
  text-align: right;
  color: var(--blue-accent);
  font-size: 1rem;
}

/* ==========================================================
   FOOTER
   ========================================================== */
#footer {
  text-align: center;
  padding: 2rem 1rem;
  background-color: var(--gray-light);
  color: var(--white);
  font-size: 0.9rem;
}

/* ==========================================================
   MEDIA QUERIES
   ========================================================== */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .hero-content .subtitle {
    font-size: 1rem;
  }
  .section-intro,
  .message-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
