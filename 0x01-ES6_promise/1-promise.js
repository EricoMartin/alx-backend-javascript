export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const myobj = 
      {
        "status": 200,
	"body": 'Success'
      };
    resolve(myobj);
    reject(new Error("The fake API is not working currently"));
  });
}
