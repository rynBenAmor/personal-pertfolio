<template>
  <div class="skills">
    <section class="skills-section">
      <h1>My <span class="highlight">Skills</span></h1>
      <p class="subtitle">Technologies I work with</p>
      <div>
        <router-link class="primary-link" :to="{ name: 'projects' }">
          see my projects <font-awesome-icon icon="fas fa-arrow-up-right-from-square"></font-awesome-icon>
        </router-link>

      </div>
      <div class="divider"></div>


      <div class="skills-categories">
        <div class="category">
          <h2>Frontend</h2>
          <div class="skills-grid">
            <SkillBadge skillName="Vue.js" :icon="['fab', 'vuejs']" bgColor="var(--teal-100)"
              textColor="var(--teal-900)" />
            <SkillBadge skillName="Bootstrap" :icon="['fab', 'bootstrap']" bgColor="var(--purple-100)"
              textColor="var(--purple-900)" />
            <SkillBadge skillName="JavaScript" :icon="['fab', 'js']" bgColor="var(--yellow-100)"
              textColor="var(--yellow-900)" />
            <SkillBadge skillName="HTML5" :icon="['fab', 'html5']" bgColor="var(--red-100)"
              textColor="var(--red-900)" />
            <SkillBadge skillName="CSS3" :icon="['fab', 'css3-alt']" bgColor="var(--blue-100)"
              textColor="var(--blue-900)" />


          </div>
        </div>

        <div class="category">
          <h2>Backend</h2>
          <div class="skills-grid">
            <SkillBadge skillName="Django" :icon="['fas', 'd']" bgColor="var(--teal-100)" textColor="var(--teal-900)" />
            <SkillBadge skillName="Python" :icon="['fab', 'python']" bgColor="var(--yellow-100)"
              textColor="var(--yellow-900)" />
            <SkillBadge skillName="PostgreSQL" :icon="['fas', 'database']" bgColor="var(--blue-100)"
              textColor="var(--blue-900)" />
            <SkillBadge skillName="REST API" :icon="['fas', 'server']" bgColor="var(--purple-100)"
              textColor="var(--purple-900)" />
            <SkillBadge skillName="Electron.js" :icon="['fab', 'react']" bgColor="var(--blue-100)"
              textColor="var(--blue-900)" />

          </div>
        </div>

        <div class="category">
          <h2>Tools & Others</h2>
          <div class="skills-grid">
            <SkillBadge skillName="Git" :icon="['fab', 'git-alt']" bgColor="var(--red-100)"
              textColor="var(--red-900)" />
            <SkillBadge skillName="Docker" :icon="['fab', 'docker']" bgColor="var(--blue-100)"
              textColor="var(--blue-900)" />
            <SkillBadge skillName="VPS" :icon="['fas', 'cloud']" bgColor="var(--yellow-100)"
              textColor="var(--yellow-900)" />
            <SkillBadge skillName="Linux" :icon="['fab', 'linux']" bgColor="var(--yellow-100)"
              textColor="var(--yellow-900)" />

            <SkillBadge skillName="CI/CD" :icon="['fas', 'code-branch']" bgColor="var(--blue-grey-100)"
              textColor="var(--blue-grey-900)" />

            <SkillBadge skillName="NGINX" :icon="['fas', 'n']" bgColor="var(--teal-100)" textColor="var(--teal-900)" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SkillBadge from '@/components/SkillBadge.vue'

export default {
  name: 'SkillsView',
  components: {
    SkillBadge
  }
}
</script>

<style scoped>
.skills-section {
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
  margin-bottom: .5rem;
  font-size: 1.1rem;
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.category {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.category h2 {
  color: var(--teal-700);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.divider {
  height: 1px;
  background-color: var(--blue-grey-200);
  margin: 2rem 0;
}

.primary-link {
  color: var(--teal-600);
  font-weight: 600;
  text-decoration: none;
}
</style>
