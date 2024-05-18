export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName === null || lastName === null) {
      reject(new Error('Invalid  format'));
    }
    const user = {
      firstName,
      lastName,
    };
    resolve(user);
  });
}
