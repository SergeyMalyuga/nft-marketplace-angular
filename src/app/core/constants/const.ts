import {TrendCard} from '../models/trend-card.model';
import {CreatorCard} from '../models/creator-card';
import {CategoryCard} from '../models/category-card.model';
import {NftCard} from '../models/nft-card.model';
import {AboutCard} from '../models/about-card.model';

export enum AppRoute {
  MAIN = '',
  LOGIN = 'login',
  WALLET = 'wallet',
  ARTIST = 'artist',
}

export const TREND_CARDS: TrendCard[] = [
  {
    id: '1',
    previewImage: {
      url: '/assets/images/raster/trend-card-primary-dog.png',
      width: 330,
      height: 330,
      alt: 'Dog'
    },
    images: [
      {
        url: '/assets/images/raster/trend-card-cat.png',
        width: 100,
        height: 100,
        alt: 'Cat'
      },
      {
        url: '/assets/images/raster/trend-card-bear.png',
        width: 100,
        height: 100,
        alt: 'Bear'
      }
    ],
    title: 'DSGN Animals',
    owner: {
      avatar: {
        url: '/assets/images/raster/trend-card-avatar-1.png',
        width: 24,
        height: 24,
        alt: 'MrFox'
      },
      name: 'MrFox'
    }
  },

  {
    id: '2',
    previewImage: {
      url: '/assets/images/raster/trend-card-primary-mushrooms.png',
      width: 330,
      height: 330,
      alt: 'Mushrooms'
    },
    images: [
      {
        url: '/assets/images/raster/trend-card-mushrooms-1.png',
        width: 100,
        height: 100,
        alt: 'Mushrooms red'
      },
      {
        url: '/assets/images/raster/trend-card-mushrooms-2.png',
        width: 100,
        height: 100,
        alt: 'Mushrooms blue'
      }
    ],
    title: 'Magic Mushrooms',
    owner: {
      avatar: {
        url: '/assets/images/raster/trend-card-avatar-2.png',
        width: 24,
        height: 24,
        alt: 'Shroomie'
      },
      name: 'Shroomie'
    }
  },

  {
    id: '3',
    previewImage: {
      url: '/assets/images/raster/trend-card-primary-robot.png',
      width: 330,
      height: 330,
      alt: 'Robot'
    },
    images: [
      {
        url: '/assets/images/raster/trend-card-robot-1.png',
        width: 100,
        height: 100,
        alt: 'Robot red'
      },
      {
        url: '/assets/images/raster/trend-card-robot-2.png',
        width: 100,
        height: 100,
        alt: 'Robot blue'
      }
    ],
    title: 'Disco Machines',
    owner: {
      avatar: {
        url: '/assets/images/raster/trend-card-avatar-3.png',
        width: 24,
        height: 24,
        alt: 'BeKind2Robots'
      },
      name: 'BeKind2Robots'
    }
  }
]

export const CREATOR_CARDS: CreatorCard[] = [
  {
    id: '1',
    rank: 1,
    image: {
      url: '/assets/images/vector/keepitreal.svg',
      width: 120,
      height: 120,
      alt: 'Keepitreal'
    },
    name: 'Keepitreal',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '2',
    rank: 2,
    image: {
      url: '/assets/images/vector/digi-lab.svg',
      width: 120,
      height: 120,
      alt: 'DigiLab'
    },
    name: 'DigiLab',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '3',
    rank: 3,
    image: {
      url: '/assets/images/vector/gravity-one.svg',
      width: 120,
      height: 120,
      alt: 'GravityOne'
    },
    name: 'GravityOne',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '4',
    rank: 4,
    image: {
      url: '/assets/images/vector/juanie.svg',
      width: 120,
      height: 120,
      alt: 'Juanie'
    },
    name: 'Juanie',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '5',
    rank: 5,
    image: {
      url: '/assets/images/vector/blue-whale.svg',
      width: 120,
      height: 120,
      alt: 'BlueWhale'
    },
    name: 'BlueWhale',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '6',
    rank: 6,
    image: {
      url: '/assets/images/vector/mr-fox.svg',
      width: 120,
      height: 120,
      alt: 'Mr Fox'
    },
    name: 'Mr Fox',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '7',
    rank: 7,
    image: {
      url: '/assets/images/vector/shroomie.svg',
      width: 120,
      height: 120,
      alt: 'Shroomie'
    },
    name: 'Shroomie',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '8',
    rank: 8,
    image: {
      url: '/assets/images/vector/robotica.svg',
      width: 120,
      height: 120,
      alt: 'Robotica'
    },
    name: 'Robotica',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '9',
    rank: 9,
    image: {
      url: '/assets/images/vector/rusty-robot.svg',
      width: 120,
      height: 120,
      alt: 'RustyRobot'
    },
    name: 'RustyRobot',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '10',
    rank: 10,
    image: {
      url: '/assets/images/vector/animakid.svg',
      width: 120,
      height: 120,
      alt: 'Animakid'
    },
    name: 'Animakid',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '11',
    rank: 11,
    image: {
      url: '/assets/images/vector/dotgu.svg',
      width: 120,
      height: 120,
      alt: 'Dotgu'
    },
    name: 'Dotgu',
    totalSales: 34.53,
    href: '#'
  },

  {
    id: '12',
    rank: 12,
    image: {
      url: '/assets/images/vector/ghiblier.svg',
      width: 120,
      height: 120,
      alt: 'Ghiblier'
    },
    name: 'Ghiblier',
    totalSales: 34.53,
    href: '#'
  },
]

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: "1",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-art.png",
      width: 240,
      height: 240,
      alt: "Art"
    },
    name: "Art",
    decor: {
      url: "/assets/images/vector/categories-paint-brush.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "2",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-collectibles.png",
      width: 240,
      height: 240,
      alt: "Collectibles"
    },
    name: "Collectibles",
    decor: {
      url: "/assets/images/vector/categories-swatches.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "3",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-music.png",
      width: 240,
      height: 240,
      alt: "Music"
    },
    name: "Music",
    decor: {
      url: "/assets/images/vector/categories-music-notes.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "4",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-photography.png",
      width: 240,
      height: 240,
      alt: "Photography"
    },
    name: "Photography",
    decor: {
      url: "/assets/images/vector/categories-сamera.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "5",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-video.png",
      width: 240,
      height: 240,
      alt: "Video"
    },
    name: "Video",
    decor: {
      url: "/assets/images/vector/categories-video-сamera.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "6",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-utility.png",
      width: 240,
      height: 240,
      alt: "Utility"
    },
    name: "Utility",
    decor: {
      url: "/assets/images/vector/categories-magic-wand.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "7",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-sport.png",
      width: 240,
      height: 240,
      alt: "Sport"
    },
    name: "Sport",
    decor: {
      url: "/assets/images/vector/categories-basketball.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },

  {
    id: "8",
    href: "#",
    image: {
      url: "/assets/images/raster/categories-virtual-worlds.png",
      width: 240,
      height: 240,
      alt: "Virtual worlds"
    },
    name: "Virtual worlds",
    decor: {
      url: "/assets/images/vector/categories-planet.svg",
      width: 100,
      height: 100,
      alt: ""
    }
  },
]

export const NFT_CARDS: NftCard[] = [
  {
    id: "1",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-distant-galaxy.png",
      width: 420,
      height: 296,
      alt: "Distant galaxy"
    },
    title: "Distant galaxy",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-moon-dancer.svg",
        width: 24,
        height: 24,
        alt: "MoonDancer avatar"
      },
      name: "MoonDancer",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "2",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-life-on-edena.png",
      width: 420,
      height: 296,
      alt: "Life on Edena"
    },
    title: "Life on Edena",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-nebula-kid.svg",
        width: 24,
        height: 24,
        alt: "NebulaKid avatar"
      },
      name: "NebulaKid",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "3",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-astro-fiction.png",
      width: 420,
      height: 296,
      alt: "AstroFiction"
    },
    title: "AstroFiction",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-spaceone.svg",
        width: 24,
        height: 24,
        alt: "Spaceone avatar"
      },
      name: "Spaceone ",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "4",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-crypto-city.png",
      width: 420,
      height: 296,
      alt: "Crypto city"
    },
    title: "Crypto city",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-moon-dancer.svg",
        width: 24,
        height: 24,
        alt: "MoonDancer avatar"
      },
      name: "MoonDancer",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "5",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-color-dog.png",
      width: 420,
      height: 296,
      alt: "Color dog"
    },
    title: "Color dog",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-nebula-kid.svg",
        width: 24,
        height: 24,
        alt: "NebulaKid avatar"
      },
      name: "NebulaKid",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "6",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-space-tales.png",
      width: 420,
      height: 296,
      alt: "Space tales"
    },
    title: "Space tales",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-spaceone.svg",
        width: 24,
        height: 24,
        alt: "Spaceone avatar"
      },
      name: "Spaceone ",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "7",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-space-cherry.png",
      width: 420,
      height: 296,
      alt: "Space cherry"
    },
    title: "Space cherry",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-spaceone.svg",
        width: 24,
        height: 24,
        alt: "Spaceone avatar"
      },
      name: "Spaceone ",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "8",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-dancing-robots.png",
      width: 420,
      height: 296,
      alt: "Dancing robots"
    },
    title: "Dancing robots",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-spaceone.svg",
        width: 24,
        height: 24,
        alt: "Spaceone avatar"
      },
      name: "Spaceone ",
    },
    price: 1.63,
    highestBid: 0.33
  },

  {
    id: "9",
    href: "#",
    image: {
      url: "/assets/images/raster/nft-ice-cream-age.png",
      width: 420,
      height: 296,
      alt: "Ice cream age"
    },
    title: "Ice cream age",
    owner: {
      avatar: {
        url: "/assets/images/vector/nft-avatar-spaceone.svg",
        width: 24,
        height: 24,
        alt: "Spaceone avatar"
      },
      name: "Spaceone ",
    },
    price: 1.63,
    highestBid: 0.33
  }
]

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "1",
    image: {
      url: "/assets/images/raster/about-wallet.png",
      width: 250,
      height: 250,
      alt: "WalletComponent"
    },
    title: "Setup Your wallet",
    description: "Set up your wallet of choice. Connect it to " +
      "the Animarket by clicking the wallet icon in the top right corner."
  },

  {
    id: "2",
    image: {
      url: "/assets/images/raster/about-collection.png",
      width: 250,
      height: 250,
      alt: "WalletComponent"
    },
    title: "Setup Your wallet",
    description: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },

  {
    id: "3",
    image: {
      url: "/assets/images/raster/about-earning.png",
      width: 250,
      height: 250,
      alt: "WalletComponent"
    },
    title: "Setup Your wallet",
    description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
]
