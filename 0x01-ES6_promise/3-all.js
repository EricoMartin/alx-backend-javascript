import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    }).catch(() => new Error('Signup system offline'));
}
