<template>
  <div class="projects">
    <section class="projects-section">
      <h1>My <span class="highlight">Professional projects</span></h1>
      <p class="subtitle">Some of my recent work that did impact the net ever so slightly</p>

      <div class="projects-grid">
        <ProjectCard v-for="project in projects.filter(p => p.category === 'pro')" :key="project.id"
          :title="project.title" :description="project.description" :image="project.image" :tags="project.tags"
          :demoUrl="project.demoUrl" :codeUrl="project.codeUrl" extraClass="poggers" />
      </div>
    </section>

    <section class="projects-section">
      <h1>My <span class="highlight">Side Projects & Experiments
        </span></h1>
      <p class="subtitle">Some of these might see the light</p>

      <div class="projects-grid">
        <ProjectCard v-for="project in projects.filter(p => p.category === 'dev')" :key="project.id"
          :title="project.title" :description="project.description" :image="project.image" :tags="project.tags"
          :demoUrl="project.demoUrl" :codeUrl="project.codeUrl" />
      </div>
    </section>

  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import data from '@/data/projects.json'

export default {
  name: 'ProjectsView',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: data,
    }
  }
}
</script>

<style scoped>
.projects-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
