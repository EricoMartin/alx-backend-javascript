export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const myobj = {
        status: 200,
        body: 'success',
      };
      return myobj;
    })
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
