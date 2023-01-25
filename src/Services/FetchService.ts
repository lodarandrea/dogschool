export function myFetch(
  url: string,
  callback: (something: any) => void,
  init?: RequestInit
) {
  return fetch(`${process.env.REACT_APP_API_URL}${url}`, init)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error))
}
