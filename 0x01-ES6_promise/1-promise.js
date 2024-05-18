export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === false) {
      reject(new Error("The fake API is not working currently"));
    }
     const myobj = 
	{
	  "status": 200,
	  "body": 'Success'
	}
      resolve(myobj);
  });
}
