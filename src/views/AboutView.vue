<template>
  <div class="about">
    <section class="about-section">
      <div class="about-content">
        <h1>About <span class="highlight">Me</span></h1>
        <p class="intro">
          Junior developer from Tunisia, with hands-on experience building and deploying full-stack apps.
          Super comfortable with <span class="highlight">Django</span> and <span class="highlight">Vue</span>.
          Always up for learning new tech, tackling tricky projects, and connecting with people in the industry.
        </p>
        <div class="about-details">
          <div class="personal-info">
            <h3>Personal Info</h3>
            <ul>
              <li><strong>Name:</strong> Rayen Ben Amor</li>
              <li><strong>Email:</strong> benamor.rayen@protonmail.com</li>
              <li><strong>Location:</strong> Tunisia, Nabeul</li>
              <li><strong>Education:</strong> Graduated from <a href="https://fst.rnu.tn/en"
                  class="highlight underlined fw-bold" target="_blank" rel="noopener noreferrer">
                  FST
                  <font-awesome-icon icon="fas fa-arrow-up-right-from-square"></font-awesome-icon>
                </a>
                with an <span class="highlight">ICT</span> degree</li>
            </ul>
          </div>
          <div class="experience">
            <h3>Experience</h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4>web Developer @ Sté Fathi Ben Slimene</h4>
                <p class="timeline-date">2024 - Present</p>
                <p>Developed my first full e-commerce platform from A to Z, making the most of Django's robust
                  ecosystem.</p>
              </div>

              <div class="timeline-item">
                <h4>web Developer @ Artiplast</h4>
                <p class="timeline-date">2024 - Present</p>
                <p>Developed a serverless Vue SPA on Vercel, centered on static product display and UI design.</p>
              </div>
              <div class="timeline-item">
                <h4>Web Developer @ ATGT Tunisie</h4>
                <p class="timeline-date">2023 - 2024</p>
                <p>Built a Wagtail-powered CMS from scratch for my PFE.</p>
              </div>
              <div class="timeline-item">
                <h4>College Student</h4>
                <p class="timeline-date">2021 - 2024</p>
                <p>Studied ICT at college, building my foundation in tech.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--blue-grey-900);
  margin-bottom: 2rem;
}

.highlight {
  color: var(--teal-600);
  font-weight: bold;
}

.underlined {
  position: relative;
  text-decoration: none;
}

.underlined::after {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  left: 0%;
  bottom: -2px;
  background-color: var(--teal-600);

}

.intro {
  color: var(--blue-grey-700);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

/* On small screens, stack items full width */
@media (max-width: 768px) {
  .about-details {
    grid-template-columns: 1fr;
  }
}


h3 {
  color: var(--teal-700);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.personal-info ul {
  list-style: none;
  padding: 0;
}

.personal-info li {
  margin-bottom: 0.8rem;
  color: var(--blue-grey-700);
}

.personal-info strong {
  color: var(--blue-grey-900);
  margin-right: 0.5rem;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--teal-300);
  position: relative;
}

.timeline-item:before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 0.3rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--teal-500);
}

.timeline-item h4 {
  color: var(--blue-grey-800);
  margin-bottom: 0.5rem;
}

.timeline-date {
  color: var(--blue-grey-600);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-item p {
  color: var(--blue-grey-700);
  line-height: 1.5;
}
</style>
