import { User } from './models/User';

const user = new User({ name: 'Ethan', age: 26 });

user.on('change', () => {
  console.log('change');
});
user.trigger('change');
