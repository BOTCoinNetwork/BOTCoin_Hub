<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="@/assets/Botcoin_logo.png" alt="BOTCoin Logo" class="logo-img">
        <span class="logo-text">BOTCoin</span>
      </router-link>
      
      <div class="menu-container">
        <router-link to="/" class="menu-item">{{ $t('home') }}</router-link>
        
        <div class="dropdown">
          <button class="dropdown-toggle">{{ $t('develop') }}</button>
          <div class="dropdown-content">
            <a href="https://github.com/BOTCoinNetwork/Botcoin" target="_blank">{{ $t('botCoin') }}</a>
            <a href="https://botcoin.network/docs/html/botcoin_api.html" target="_blank">{{ $t('api') }}</a>
            <a href="https://botcoin.network/docs/html/index.html" target="_blank">{{ $t('docs') }}</a>
            <a href="https://explorer.botcoin.network/" target="_blank">{{ $t('faucet') }}</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropdown-toggle">{{ $t('ecology') }}</button>
          <div class="dropdown-content">
            <a href="https://explorer.botcoin.network/" target="_blank">{{ $t('explorer') }}</a>
            <a href="https://explorer.botcoin.network/" target="_blank">{{ $t('wallet') }}</a>
            <a href="https://ros.org/" target="_blank">{{ $t('ros2') }}</a>
          </div>
        </div>

        <a href="https://botcoin.network/BOTCoin_en.pdf" target="_blank" class="menu-item">Whitepaper</a>
        <a href="https://github.com/BOTCoinNetwork/Botcoin" target="_blank" class="menu-item">GitHub</a>

        <div class="language-switcher">
          <select v-model="currentLanguage" @change="switchLanguage(currentLanguage)">
            <option value="en">EN</option>
            <option value="zh-CN">简体中文</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const currentLanguage = ref(locale.value)

const switchLanguage = (lang) => {
  locale.value = lang
  currentLanguage.value = lang
  document.documentElement.lang = lang
}
</script>

<style scoped>
.navbar {
  
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 0;
  /* position: fixed; */
  top: 0;
  z-index: 1000;
  
}

.container {
  max-width: 1200px;
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  margin-right: 3rem;
}

.logo-img {
  width: 40px;
  height: auto;
}

.logo-text {
  color: #42b983;
  font-size: 1.5rem;
  font-weight: bold;
}

.menu-item {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.menu-item:hover {
  color: #42b983;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.8); /* 调整背景色为接近网站背景色 */
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid #ddd; /* 添加边框样式 */
  border-radius: 4px; /* 添加圆角 */
}
.dropdown-content a {
  color: #fff; /* 调整字体颜色 */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background: #e9e9e9; /* 调整悬停背景色 */
}

.dropdown:hover .dropdown-content {
  display: block;
}

.language-switcher {
  margin-left: 1rem;
  margin-right: 0.3rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.language-switcher select {
  width: 3rem;
  background: none;
  border: none;
  color: white;
  background-color: #181818; /* 调整按钮背景色 */;
  cursor: pointer;
  padding: 0.25rem 0.3rem;
}

.language-switcher select.active {
  color: #42b983;
  font-weight: bold;
}

@media (max-width: 768px) {
  .logo {
    margin-right: 1rem;
  }
  .logo-img {
    width: 30px;
  }
  .logo-text {
    font-size: 1.2rem;
  }
}
@media (max-width: 480px) {
 .logo {
    margin-right: 0.5rem;
  }
 .logo-img {
    width: 25px;
  }
 .logo-text {
    font-size: 1rem;
  }
}

</style>
