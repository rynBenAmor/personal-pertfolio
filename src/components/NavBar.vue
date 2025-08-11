<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo-container">
        <router-link to="/" class="logo">DevPortfolio
          <img src="../assets/django-heart.svg" class="logo-image" alt="logo-image">
        </router-link>
      </div>

      <!-- Hamburger menu button (mobile only) -->
      <button 
        class="hamburger" 
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navigation links - now wrapped in a div with dynamic class -->
      <div 
        class="nav-links-container" 
        :class="{ 'active': isMenuOpen }"
      >
        <ul class="nav-links">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
          <li><router-link to="/skills" @click="closeMenu">Skills</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--teal-900);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  z-index: 1001; /* Ensure logo stays above mobile menu */
}

.logo {
  color: var(--teal-100);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.logo-image {
  width: 40px;
  aspect-ratio: 1;
  padding: 16px 0 0 0;
}

/* Hamburger menu styles */
.hamburger {
  display: none; /* Hidden by default on desktop */
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--teal-100);
  margin: 5px 0;
  transition: all 0.3s ease;
}

/* Navigation links container */
.nav-links-container {
  display: flex;
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--teal-100);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--teal-300);
}

.nav-links a.router-link-exact-active {
  color: var(--teal-300);
  border-bottom: 2px solid var(--teal-300);
}

/* Mobile styles */
@media (max-width: 768px) {
  .hamburger {
    display: block; /* Show hamburger on mobile */
  }

  /* Transform hamburger to X when menu is open */
  .hamburger.active .hamburger-line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .hamburger-line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-links-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--teal-900);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    clip-path: circle(0px at 90% -10%);
    -webkit-clip-path: circle(0px at 90% -10%);
    transition: all 0.5s ease-out;
    pointer-events: none;
    z-index: 1000;
  }

  .nav-links-container.active {
    clip-path: circle(1000px at 90% -10%);
    -webkit-clip-path: circle(1000px at 90% -10%);
    pointer-events: all;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .nav-links a {
    font-size: 1.5rem;
  }
}
</style>