import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: 'Home',
    develop: 'Develop',
    botCoin: 'BOTCoin',
    api: 'API',
    docs: 'Docs',
    faucet: 'Faucet',
    ecology: 'Ecology',
    explorer: 'Explorer',
    wallet: 'Wallet',
    ros2: 'ROS2',
    whitepaper: 'Whitepaper',
    homeSection: {
      introTitle: 'BOTCoin Netwoek',
      buildButton: 'Build',
      constructionTitle: 'Platform Construction',
      featuresTitle: 'Core Features',
      socialTitle: 'Social Connections',
      introContent: 'Efficient Robot Peer to Peer Network',
      constructionContent: 'Building next-generation blockchain infrastructure',
      featuresList: 'Multi-chain wallet | Staking rewards | NFT marketplace',
      socialLinks: 'Community Forum | Telegram Group | Twitter'
      //Ecological consensus
    }
  },
  'zh-CN': {
    home: '首页',
    develop: '开发',
    botCoin: 'BOTCoin',
    api: '接口文档',
    docs: '开发文档',
    faucet: '水龙头',
    ecology: '生态',
    explorer: '浏览器',
    wallet: '钱包',
    ros2: 'ROS2',
    whitepaper: '白皮书',
    homeSection: {
      introTitle: 'BOTCoin Netwoek',
      buildButton: '建造',
      constructionTitle: '平台建设',
      featuresTitle: '核心功能',
      socialTitle: '社交连接',
      introContent: '高效的机器人对等网络',
      constructionContent: '构建新一代区块链基础设施',
      featuresList: '多链钱包 | 质押奖励 | NFT市场',
      socialLinks: '社区论坛 | Telegram群组 | 推特'
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;