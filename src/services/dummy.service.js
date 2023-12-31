import ArtyfyService from './artyfy.service';

class DummyService extends ArtyfyService {
  fetchPost() {
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
}

export default new DummyService();
