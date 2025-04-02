<template>
  <div class="home-container">
    <section class="section intro">
      <div class="intro-left">
        <h2>{{ $t('homeSection.introTitle') }}</h2>
        <p class="content">{{ $t('homeSection.introContent') }}</p>
        <div class="install-buttons">
          <span>Deploy nodes</span>
          <button class="build-button" >GitHub</button>
        </div>
        <div class="build-buttons">
          <span>Build hardware programming</span>
          <button class="build-button">{{ $t('homeSection.buildButton') }}</button>
        </div>
      </div>
      <div class="intro-right">
        <img src="@/assets/image/robots_work_5.png" alt="Illustration" />
      </div>
    </section>
    
    <section class="section construction">
      <h2>{{ $t('homeSection.constructionTitle') }}</h2>
      <ul class="feature-list">
        <li v-for="(item, index) in $t('homeSection.featuresList').split('|')" :key="index">{{ item.trim() }}</li>
      </ul>
    </section>
    
    <section class="section features">
      <h2>{{ $t('homeSection.featuresTitle') }}</h2>

    </section>
    
    <section class="section social">
      <h2>{{ $t('homeSection.socialTitle') }}</h2>
      <div class="social-links">
        <a v-for="(link, index) in $t('homeSection.socialLinks').split('|')" :key="index" href="#">{{ link.trim() }}</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
}
.section {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}
.section h2 {
  color: #42b983;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center
}

.intro {
  display: flex;
  gap: 2rem;
}

.intro-left {
  flex: 1;
}

.intro-right {
  flex: 1;
}

.intro-right img {
  width: 100%;
  height: auto;
}

.build-button {
  margin-top: 2rem;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>