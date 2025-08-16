<template>
  <div class="skill-badge" :style="{ backgroundColor: bgColor, color: textColor }">
    <font-awesome-icon :icon="icon" />
    <span>{{ skillName }}</span>
  </div>
</template>

<script>
export default {
  name: 'SkillBadge',
  props: {
    skillName: String,
    icon: [String, Array],
    bgColor: {
      type: String,
      default: 'var(--blue-100)'
    },
    textColor: {
      type: String,
      default: 'var(--blue-800)'
    }
  }
}
</script>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-badge i {
  font-size: 1.2rem;
}
</style>
