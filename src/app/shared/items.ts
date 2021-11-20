import {Item} from './item';

export let ITEMS: Item[] = [];

for (let i = 0; i < 6; i++) {

  ITEMS[i] = {
    id: i.toString(),
    name: 'Item' + i.toString(),
    image: 'https://picsum.photos/id/' + i.toString() + '/200/200',
    category: i < 3 ? 'Category1' : 'Category2',
    label: 'Label' + i.toString(),
    price: (Math.random() * 10 + i).toString(),
    description: 'Simple description for Item' + i.toString(),
    featured: i % 2 == 0,
    comments: [{
      rating: Math.floor(Math.random() * 4 + 1),
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      author: 'Psevdo Author' + i + 1,
      date: '2021-11-14T12:11:23.5432423Z',
    },
      {
        rating: Math.floor(Math.random() * 4 + 1),
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
        author: 'Psevdo Author' + i + 2,
        date: '2021-11-14T12:11:23.5432423Z',
      },
      {
        rating: Math.floor(Math.random() * 4 + 1),
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        author: 'Psevdo Author' + i + 3,
        date: '2021-11-14T12:11:23.5432423Z',
      }]
  };
}

