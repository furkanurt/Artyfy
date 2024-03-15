import ArtyfyService from './artyfy.service';

class DummyService extends ArtyfyService {
  fetchTrendSuggestions() {
    return [
      {
        writer: 'artyboyx',
        text: 'Renaissance period of history is long over, it dramatically impacted the modern world. Great developments in the arts, architecture, and humanism took place during this period of history.',
        trending: 'enaissance',
        photo: 'https://picsum.photos/300',
      },
      {
        writer: 'squarexcat',
        text: 'In Ankara, finally I opened my first gallery.',
        trending: 'sudedemirel',
        photo: 'https://picsum.photos/300',
      },
      {
        writer: 'madonna',
        text: 'In my new Madame X World Tour, we had some ideas on visuals.',
        trending: 'madonna',
        photo: 'https://picsum.photos/300',
      },
    ];
  }

  fetchUserSuggestions() {
    return [
      {
        title: 'Bessie Cooper',
        subtitle: 'alessandroveronezi',
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        title: 'Jenny Wilson',
        subtitle: 'gabrielcantarin',
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
    ];
  }

  fetchPost() {
    return [
      {
        id: 11,
        name: 'Devon Lane',
        userName: 'devonlane',
        avatar: 'https://i.pravatar.cc/300',
        time: '5h',
        isOnSale: true,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=6',
          'https://source.unsplash.com/random?sig=24',
          'https://source.unsplash.com/random?sig=19',
          'https://source.unsplash.com/random?sig=74',
        ],
        likeCount: '30',
        commentCount: '5',
        shareCount: '2',
        comments: [
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
        ],
      },
      {
        id: 12,
        name: 'Darlene Roberts',
        userName: 'droberts',
        avatar: 'https://i.pravatar.cc/430',
        time: '10h',
        isOnSale: false,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=1',
          'https://source.unsplash.com/random?sig=2',
        ],
        likeCount: '10',
        commentCount: '7',
        shareCount: '3',
        comments: [
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
        ],
      },
      {
        id: 13,
        name: 'John Wick',
        userName: 'wickyjohn',
        avatar: 'https://i.pravatar.cc/320',
        time: '32m',
        isOnSale: true,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        likeCount: '45',
        commentCount: '17',
        shareCount: '13',
        comments: [
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle:
              'I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
          },
        ],
      },
    ];
  }

  fetchShopProduct() {
    return [
      {
        id: 1,
        userName: 'Rose Becker',
        productImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        productPrice: '150',
        productDescription:
          'neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum',
      },
      {
        id: 2,
        userName: 'Ivana Ayala',
        productImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        productPrice: '420',
        productDescription:
          'nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et',
      },
      {
        id: 3,
        userName: 'Colleen Frye',
        productImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        productPrice: '300',
        productDescription:
          'cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper',
      },
      {
        id: 4,
        userName: 'Ila Dennis',
        productImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        productPrice: '1000',
        productDescription:
          'et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum',
      },
      {
        id: 5,
        userName: 'Noah Blackwell',
        productImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        productPrice: '400',
        productDescription:
          'In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit',
      },
      {
        id: 6,
        userName: 'Noah Blackwell',
        productImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        productPrice: '400',
        productDescription:
          'In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit',
      },
    ];
  }
}

export default new DummyService();
