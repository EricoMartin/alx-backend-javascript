export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve(promise);
    }
  });
}

function resolvePromise() {
  const myobj = {
        status: 200,
        body: "success",
  }
  return myobj;
}

function rejectPromise() {
  return new Error();
}

function logResponse() {
  console.log('Got a response from the API');
}

const myprom = handleResponseFromAPI(promise)
myprom.then(resolvePromise, rejectPromise).finally(logResponse);
