function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve();
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
const mypromise = myprom.then(resolvePromise, rejectPromise).finally(logResponse);
export default mypromise;
