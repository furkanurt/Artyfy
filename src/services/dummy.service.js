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
        productPrice: 800,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=6',
          'https://source.unsplash.com/random?sig=24',
          'https://source.unsplash.com/random?sig=19',
          'https://source.unsplash.com/random?sig=74',
        ],
        likeCount: '30',
        isLikeIt: false,
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
        productPrice: null,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=1',
          'https://source.unsplash.com/random?sig=2',
        ],
        likeCount: '10',
        isLikeIt: true,
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
        productPrice: 400,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
          'https://source.unsplash.com/random?sig=62',
        ],
        likeCount: '45',
        isLikeIt: false,
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
      {
        id: 14,
        name: 'Jordan Man',
        userName: 'manjordan',
        avatar: 'https://i.pravatar.cc/330',
        time: '32m',
        isOnSale: false,
        productPrice: null,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
        ],
        likeCount: '45',
        isLikeIt: true,
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
        ],
      },
      {
        id: 15,
        name: 'Deneme',
        userName: 'denemebir',
        avatar: 'https://i.pravatar.cc/330',
        time: '32m',
        isOnSale: true,
        productPrice: 1000,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
        ],
        likeCount: '45',
        isLikeIt: false,
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
        ],
      },
      {
        id: 16,
        name: 'Deneme 2',
        userName: 'denemeiki',
        avatar: 'https://i.pravatar.cc/330',
        time: '32m',
        isOnSale: false,
        productPrice: null,
        postDescription:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, culpa.',
        postImage: [
          'https://source.unsplash.com/random?sig=36',
          'https://source.unsplash.com/random?sig=9',
        ],
        likeCount: '45',
        isLikeIt: true,
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
        ],
      },
    ];
  }
}

export default new DummyService();
