import { User } from './models/User';

const user = new User({ name: 'Ethan', age: 26 });

user.on('save', () => {
  console.log('save');
});

user.save();
