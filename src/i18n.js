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
      deployButton: 'Deploy',
      deployButtonText: 'Deploy the node on my robot',
      buildButton: 'Build',
      buildButtonText: 'Building BOTCoin Ecosystem',
      constructionTitle: 'Platform Construction',

      featuresTitle: 'Core Features',
      featuresItem1TitleDe: 'Decentralization',
      featuresItem1ContentDe: 'The underlying layer of BOTCoin adopts peer-to-peer network system technology, allowing intelligent robots to become autonomous nodes in the decentralized network.',
      featuresItem1TitleAsyn: 'Asynchronous',
      featuresItem1ContenteAsyn: 'Participants have the freedom to process commands at different times.',
      featuresItem1TitleBot: 'Deployment of robots',
      featuresItem1ContenteBot: 'Supports deployment of peer-to-peer network nodes on Low-energy/Mobile Robots.',
      featuresItem1TitleHardware: 'Hardware smart contract',
      featuresItem1ContenteHardware: ' BVM implements hardware-level smart contracts, binds to Robots hardware, and enables direct interaction between the crypto world and the real world without going through an intermediary, meeting the needs of multi-BOTs and crypto collaboration.',

      EconomyTitle:'BOT Economy',
      EconomyNext:'Enter the next civilization',
      ResidualValueHuman:'Human Surplus value',
      ResidualValueBot:'Bot Surplus value',

      socialTitle: 'Social Connections',
      introContent: 'Peer-to-peer network supporting robots',
      constructionContent: 'Building next-generation blockchain infrastructure',
      featuresList: 'Multi-chain wallet | Staking rewards | NFT marketplace',
      socialLinks: 'Github,Telegram,X',
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
      deployButton: '部署',
      deployButtonText: '部署节点在我的机器人',
      buildButton: '建造',
      bbuildButtonText: '建造BOTCoin生态',
      constructionTitle: '平台建设',

      featuresTitle: '核心功能',
      featuresItem1TitleDe: '去中心化',
      featuresItem1ContentDe: 'BOTCoin底层采用对等网络系统技术，让智能机器人成为去中心化网络的自主节点。',
      featuresItem1TitleAsyn: '异步交易',
      featuresItem1ContenteAsyn: '参与者可以自由地在不同时间处理命令。',
      featuresItem1TitleBot: '部在署机器人',
      featuresItem1ContenteBot: '支持在低能耗/移动的Robots上部署对等网络节点。',
      featuresItem1TitleHardware: 'BVM硬件智能合约',
      featuresItem1ContenteHardware: 'BVM实现硬件级别智能合约，与BOT硬件绑定，实现加密世界与现实世界直接交互，无需经过中介。满足多BOTs与加密协同。',

      EconomyTitle:'BOT 经济',
      EconomyNext:'进入下一个文明',
      ResidualValueHuman:'人类 剩余价值',
      ResidualValueBot:'BOT 剩余价值',

      socialTitle: '社交连接',
      introContent: '支持机器人的对等网络',
      constructionContent: '构建新一代区块链基础设施',
      featuresList: '多链钱包 | 质押奖励 | NFT市场',
      socialLinks: 'Github,电报群组,推特',
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