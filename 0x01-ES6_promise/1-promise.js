export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const myobj = {
        status: 200,
        body: 'Success',
      };
      resolve(myobj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
