<template>
  <div :class="['project-card', extraClass]">
    <div class="project-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="project-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="project-links">
        <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener noreferrer" class="btn">Live Demo</a>
        <a v-if="codeUrl" :href="codeUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Code</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    image: String,
    tags: Array,
    demoUrl: String,
    codeUrl: String,
    extraClass: String
  }
}
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: fill;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: var(--teal-800);
  margin-bottom: 0.5rem;
}

.project-content p {
  color: var(--blue-grey-600);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: var(--teal-100);
  color: var(--teal-800);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.btn {
  background-color: var(--teal-500);
  color: white;
}

.btn:hover {
  background-color: var(--teal-600);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--teal-500);
  color: var(--teal-500);
}

.btn-outline:hover {
  background-color: var(--teal-500);
  color: white;
}
</style>
