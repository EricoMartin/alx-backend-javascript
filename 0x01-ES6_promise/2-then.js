export default function handleResponseFromAPI(promise) {
  return promise
    .then(function resolvePromise() {
      const myobj = {
        status: 200,
        body: "success",
      }
      return myobj;
    })
    .catch(function rejectPromise() {
      return new Error();
    })
    .finally(function logResponse() {
      console.log('Got a response from the API');
    });
}
