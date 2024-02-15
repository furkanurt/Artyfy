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
      },
      {
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
      },
      {
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
      },
    ];
  }
}

export default new DummyService();
