<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Hi, I'm <span class="highlight">Rayen Ben Amor</span></h1>
        <h2>Full Stack Developer</h2>
        <p class="subtitle">Junior Django developer with hands-on experience</p>
        <div class="cta-buttons">
          <router-link to="/projects" class="btn">View My Work</router-link>
          <router-link to="/contact" class="btn btn-outline">Contact Me</router-link>
        </div>
      </div>
      <div class="hero-image">
        <div class="code-snippet">
          <pre style="margin:0;">
<span style="color: gray;"># I love Django (the movie too)</span>
<span style="color: orange;">class</span> Me(models.Model):
    name = models.CharField(max_length=100, default=<span style="color: orange;">"Rayen Ben Amor"</span>)
    location = models.CharField(max_length=100, default=<span style="color: orange;">"Tunisia"</span>)
    coffee = models.PositiveIntegerField(default=1)

    <span style="color: violet;">@property</span>
    <span style="color: orange;">def</span> get_default_stack(self):
        return {
            <span style="color: orange;">"frontend"</span>: [ <span style="color: orange;">"JavaScript"</span>, <span style="color: orange;">"Vue.js"</span>],
            <span style="color: orange;">"backend"</span>: [<span style="color: orange;">"Python"</span>, <span style="color: orange;">"Django"</span>, <span style="color: orange;">"DRF"</span>],
            <span style="color: orange;">"database"</span>: [<span style="color: orange;">"PostgreSQL"</span>, <span style="color: orange;">"SQLite"</span>],
            <span style="color: orange;">"devops"</span>: [<span style="color: orange;">"Docker"</span>, <span style="color: orange;">"GitHub"</span>, <span style="color: orange;">"Linux"</span>],
        }
</pre>
        </div>
      </div>
    </section>


    <section class="motivation-section">
      <h2>What motivates me to do web dev?</h2>

      <ol>
        <li>Flexibility to work from anywhere</li>
        <li><i>Ability to keep learning new things</i></li>
        <li>The little pride of deploying something online</li>
      </ol>

      <p class="setup">But most importantly...</p>
      <currency-component />
    </section>




  </div>
</template>

<script>
import CurrencyComponent from '@/components/CurrencyComponent.vue';

export default {
  name: 'HomeView',
  components: { CurrencyComponent }
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 80px);
  /*   display: flex;
  align-items: center; */
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  gap: 3rem;
}

.hero-content {
  flex: 1;
  min-width: 300px;
  padding: 1rem 0;
}

.hero-image {
  flex: 1;
  min-width: 300px;
}

.code-snippet {
  background-color: var(--blue-grey-900);
  padding: 1.5rem;
  border-radius: 8px;
  color: var(--teal-100);
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  overflow-x: auto;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}



h1 {
  font-size: clamp(2.5rem, 5vw, 3rem);
  color: var(--blue-grey-900);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: var(--teal-600);
}

h2 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: var(--blue-grey-700);
  font-weight: 400;
  margin-bottom: 0.75rem;
}

.subtitle {
  color: var(--blue-grey-600);
  margin-bottom: 2.5rem;
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 80%;
  line-height: 1.5;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  text-align: center;
  flex-grow: 1;
  max-width: 200px;
}

.btn {
  background-color: var(--teal-500);
  color: white;
}

.btn:hover {
  background-color: var(--teal-600);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--teal-500);
  color: var(--teal-500);
}

.btn-outline:hover {
  background-color: var(--teal-500);
  color: white;
  transform: translateY(-2px);
}

@media screen and (max-width: 768px) {
  .hero {
    padding: 1rem;
    gap: 2rem;
  }

  .subtitle {
    max-width: 100%;
  }



  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    max-width: 100%;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 2.25rem;
  }

  .hero-content,
  .hero-image {
    min-width: 100%;
  }
}

/** section 2 */
.motivation-section {
  max-width: 480px;
  margin: 2rem auto;
  line-height: 1.6;
}

.motivation-section h2 {
  color: var(--blue-grey-900);
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.motivation-section ol {
  font-size: 20px;
  margin: 0 0 1.5rem 1.2rem;
  padding: 0;
}

.motivation-section ol li {
  margin: 0.4rem 0;
  list-style: none;
  position: relative;
  padding-left: 1.2rem;
}

.motivation-section ol li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 0.5em;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--teal-500);
}

.motivation-section .setup {
  font-size: 20px;
  color: var(--blue-grey-900);
  margin: 1.5rem 0 0.5rem;
  font-weight: 600;
}
</style>
