<template>
  <div class="home-container">
    <section class="section intro">
      <div class="intro-left">
        <h2>{{ $t('homeSection.introTitle') }}</h2>
        <p class="content">{{ $t('homeSection.introContent') }}</p>
        <div class="build-buttons build-buttons-one">
          <button class="build-button" @click="handleDeployClick">{{ $t('homeSection.deployButton') }}</button>
          <span>{{ $t('homeSection.deployButtonText') }}</span>
        </div>
        <div class="build-buttons">
          <button class="build-button" @click="handleBuildClick">{{ $t('homeSection.buildButton') }}</button>
          <span>{{ $t('homeSection.buildButtonText') }}</span>
        </div>
      </div>
      <div class="intro-right">
        <img src="@/assets/image/robots_work_5.png" alt="Illustration" />
      </div>
    </section>
    
    <section class="section features">
      <h2>{{ $t('homeSection.featuresTitle') }}</h2>
      <div class="feature-list">
        <div class="feature-item">
          <h3>{{ $t('homeSection.featuresItem1TitleDe') }}</h3>
          <p>{{ $t('homeSection.featuresItem1ContentDe') }}</p>
        </div>
        <div class="feature-item">
          <h3>{{ $t('homeSection.featuresItem1TitleAsyn') }}</h3>
          <p>{{ $t('homeSection.featuresItem1ContenteAsyn') }}</p>
        </div>
        <div class="feature-item">
          <h3>{{ $t('homeSection.featuresItem1TitleBot') }}</h3>
          <p>{{ $t('homeSection.featuresItem1ContenteBot') }}</p>
        </div>
        <div class="feature-item">
          <h3>{{ $t('homeSection.featuresItem1TitleHardware') }}</h3>
          <p>{{ $t('homeSection.featuresItem1ContenteHardware') }}</p>
        </div>
      </div>
    </section>

    <section class="section economy">
      <h2>{{ $t('homeSection.EconomyTitle') }}</h2>
      <h4>{{ $t('homeSection.EconomyNext') }}</h4>
      <div class="economy-content">
        <div class="residualValue" >
          <span class="residualValue-left">{{ $t('homeSection.ResidualValueHuman') }}</span>  <span>→</span>  <span class="residualValue-right">{{ $t('homeSection.ResidualValueBot') }}</span>
        </div>
        <img src="@/assets/image/bot_economy.png" alt="Economy Illustration" />
      </div>
    </section>

    <section class="section social">
      <h2>{{ $t('homeSection.socialTitle') }}</h2>
      
      <div class="social-links">
       <a v-for="(link, index) in links" :key="index" :href="link" target="_blank">
         <img :src="linksImg[index]" alt="icon" />
         {{ $t('homeSection.socialLinks').split(',')[index] }}
       </a>
      </div>
      <!-- <ul class="feature-list">
        <li v-for="(item, index) in $t('homeSection.featuresList').split('|')" :key="index">{{ item.trim() }}</li>
      </ul> -->
    </section>
  </div>
</template>

<script setup>

import github from '@/assets/image/github.png'
import telegram from '@/assets/image/telegram.png'
import x from '@/assets/image/x.png'

const links = [
  'https://github.com/BOTCoinNetwork/Botcoin',
  'https://t.me/BOTCoin_Network',
  'https://x.com/BOTCoinNetwork'
]

const handleDeployClick = () => {
  window.location.href = 'https://github.com/BOTCoinNetwork/Botcoin';
};

const handleBuildClick = () => {
  window.location.href = 'https://botcoin.network/docs/html/index.html';
};
const linksImg = [
  github,telegram, x,
]
</script>

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
.build-buttons-one {
  margin-top: 2rem;
}

.build-button {
  width:5rem;
  height: 2.2rem;
  margin-top: 3rem;
  margin-left: 2rem;
  background-color:#42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.intro-left .content {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align:center;
}
.build-buttons span {
  margin-left: 2rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.feature-item h3{
  color:rgb(83, 235, 235); 
  text-align:center;
}
.feature-item p {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.5rem;
}

.economy h4 {
  text-align:center;
  font-size: 1.5rem;
  color:rgb(172, 177, 177);
  margin-bottom: 1rem;
}

.residualValue {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
}

.residualValue span {
  color:rgb(253, 252, 252);
  font-size: 1.5rem;
}

.residualValue span.residualValue-left {
  color:rgb(247, 167, 114);
}
.residualValue span.residualValue-right{
  color:rgb(143, 172, 216);
}
.economy-content img {
  width: 100%;
  height: auto; 
}

.social-links {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem; 
}
.social-links a {
  margin-left: 2rem;
  color:rgb(253, 252, 252);
  font-size: 1.5rem;
  text-decoration: none;
}
.social-links img{
  width: 2rem;
  height: auto;
  margin-right: 0.3rem;
  float: left;
  margin-top: 0.2rem;
}

@media (max-width: 768px) {
  .section {
    padding: 1rem;
  }
  .intro {
    flex-direction: column;
  }
  .feature-list {
    grid-template-columns: 1fr;
  }
  .build-buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;
  }
  .build-button {
    width: 40%;
    margin: 0rem auto;
  }
  .build-buttons span {
    margin: 0.2rem auto;
    display: block;
    text-align: center;
  }
  .residualValue span {
    font-size: 1rem;
  }
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  .social-links a {
    margin-left: 0;
    margin-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  .feature-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>