export function myFetch(url: string, callback: any) {
  return fetch(`${process.env.REACT_APP_API_URL}${url}`)
    .then((Response) => Response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error))
}
