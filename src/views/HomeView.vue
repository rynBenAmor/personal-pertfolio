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
<span style="color: orange;">class</span> WebDev(models.Model):
    coffee = models.IntegerField(default=0)
    deadlines = models.ManyToManyField(Project)
    sanity = models.BooleanField(default=True)

    <span style="color: violet;">@property</span>
    <span style="color: orange;">def</span> is_working(self):
        self.coffee += 1
        if self.deadlines.exists():
            self.sanity = False
        return "It works on my machine"  <span style="color: gray; display: inline-flex;"># Just ship it <img src="../assets/nike.png" class="nike-image" alt="™?" draggable="false" loading="lazy"></span>
</pre>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>

<style scoped>
.home {
    min-height: calc(100vh - 80px); /* Adjust based on your navbar height */
    display: flex;
    align-items: center;
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

.nike-image {
    object-fit: contain;
    max-width: 100%;
    height: 1.4em;
    vertical-align: middle;
      filter: invert(50%) sepia(100%) saturate(5000%) hue-rotate(100deg);
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

    .nike-image {
        display: none;
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

    .hero-content, .hero-image {
        min-width: 100%;
    }
}
</style>
