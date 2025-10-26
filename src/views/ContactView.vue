<template>
  <div class="contact">
    <section class="contact-section">
      <h1>Get In <span class="highlight">Touch</span></h1>
      <p class="subtitle">Feel free to reach out for collaborations or just a friendly hello</p>

      <div class="contact-container">
        <div class="contact-info">
          <div class="info-item">
            <font-awesome-icon icon="fas fa-envelope" />
            <div>
              <h3>Email</h3>
              <p>benamor.rayen@protonmail.com <br>
                benamor.rayen@outlook.com</p>
            </div>
          </div>

          <div class="info-item">

            <font-awesome-icon icon="fas fa-map-marker-alt" />
            <div>
              <h3>Location</h3>
              <p>Tunisia, Nabeul</p>
            </div>
          </div>

          <div class="social-links">
            <a href="https://github.com/rynBenAmor" title="GitHub" target="_blank" rel="noopener noreferrer"
              class="social-icon">
              <font-awesome-icon icon="fab fa-github"></font-awesome-icon>
            </a>

            <a href="https://www.linkedin.com/in/rayen-ben-amor-7775292a6/" title="LinkedIn" target="_blank"
              rel="noopener noreferrer" class="social-icon">
              <font-awesome-icon icon="fab fa-linkedin"></font-awesome-icon>
            </a>

            <!-- TODO: vue.js is screwing with my anchor tags -->
            <a href="/resume.pdf" class="social-icon" title="Resume" target="_blank" rel="noopener noreferrer external">
              <font-awesome-icon icon="fa-solid fa-file-pdf"></font-awesome-icon>
            </a>
          </div>
        </div>

        <iframe width="640px" height="640px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAX6CUEVUQ0lXWFpOQjJCUU1QQjU2RkdJQ1IwNFpXRy4u&embed=true"
          frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh"
          allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen>
        </iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',


}
</script>

<style scoped>
.contact-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--blue-grey-900);
  margin-bottom: 0.5rem;
}

.highlight {
  color: var(--teal-600);
}

.subtitle {
  color: var(--blue-grey-600);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

.contact-info {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

/* Target the SVG icons specifically */
.info-item svg {
  font-size: 1.5rem;
  color: var(--teal-500);
  margin-top: 0.3rem;
}

.info-item h3 {
  color: var(--blue-grey-800);
  margin-bottom: 0.3rem;
}

.info-item p {
  color: var(--blue-grey-600);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--blue-grey-100);
  color: var(--blue-grey-800);
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: var(--teal-500);
  color: white;
}

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--blue-grey-800);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--blue-grey-200);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--teal-500);
}

textarea {
  resize: vertical;
}

.submit-btn {
  background-color: var(--teal-500);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: var(--teal-600);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
