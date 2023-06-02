import { toggleMode } from "./domUpdates";
import { toggleRecipesToCook } from "./recipe";

const fetchAPI = type => {
 return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const savePromises = () => Promise.all([fetchAPI('users'), fetchAPI('recipes'), fetchAPI('ingredients')]);

const postAPI = (userID, recipeID) => {
  fetch('http://localhost:3001/api/v1/usersRecipes', {
    method: 'POST',
    body: JSON.stringify({ userID: userID, recipeID: recipeID }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(json => console.log(json.message))
  .catch(err => alert('Server is down. Please try again later.'));
}

export { savePromises, postAPI }