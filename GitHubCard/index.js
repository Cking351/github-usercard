/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/Cking351')
//   .then(response => {
//     console.log('Heres a response from the API', response)
//   })
//   .catch(error => {
//     console.log('DAS HECKIN ERROR', error)
//   })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



  let myKey = axios.get('https://api.github.com/users/Cking351')
    .then(response => {
      console.log('Heres a response from the API', response)
    })
    .catch(error => {
      console.log('DAS HECKIN ERROR', error)
    })


 function githubCardMaker (attributes) {

  const {avatar_url, bio, followers, following, html_url, location, login, name} = attributes

  // Create variables holding HTML elements
  const card = document.querySelector('.cards')
  const gitHubCard = document.createElement('div')
  const cardImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUser = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfileContainer = document.createElement('p')
  const cardProfileContents = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  // Assign classes to variables
  gitHubCard.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardUser.classList.add('username')
  
  // Create Text Content for variables
  cardImage.href = `${avatar_url}`
  cardName.textContent = `${name}`
  cardUser.textContent = `${login}`
  cardLocation.textContent = `${location}`
  cardProfileContainer.textContent = 'Profile: '
  cardProfileContents.href = `${html_url}`
  cardFollowers.textContent = `${followers}`
  cardFollowing.textContent = `${following}`
  cardBio.textContent = `${bio}`


  cardProfileContainer.appendChild(cardProfileContents)



  //Create structure for variables
  card.appendChild(gitHubCard)
  gitHubCard.appendChild(cardImage)
  gitHubCard.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUser)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfileContainer)
  cardInfo.appendChild(cardProfileContents)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  let elements = [avatar_url, bio, followers, following, html_url, location, login, name]

  elements.forEach(obj => {
    
  })
  


  console.log(card)
  return card

}
githubCardMaker(myKey)



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
