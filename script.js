//You can edit ALL of the code here
// const API_URL = 'https://api.tvmaze.com/shows/82/episodes';
// const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY'
// const IMG_PATH = 'https://api.tvmaze.com/shows/82/images'

// const main = document.getElementById('main')
// const form =document.getElementById('form')
// // const search = document.getElementById('')

// fetch('https://api.tvmaze.com/shows/82/episodes')
// 	.then((response) => {
// 		console.log('we got a response');
// 		console.log(response);
//     return response.json();
// 	})
// 	.then((jsonData) => {
//     console.log('we have the data');
//     console.log(jsonData);
// 	// 	const results = jsonData.map((element) => element.name);
// 	// 	displaySearchResults(results);
// 	});


// function showEpisodes(jsonData) {
// 	 main.innerHTML = ''
	 
// 	 jsonData.forEach((data)=> {
// 		 const { name, season, episode.image.medium summary} = data

// 		 const episodeElement = document.createElement('div')
// 		 episodeElement.classList.add('episode')

// 		 episodeElement.innerHTML= `
// 		    <div class="episode">
//       <img src="${IMG_PATH + image.medium}" alt="">
//       <div class="epsiode-info">
//         <h3>Episode Title</h3>
//         <span class="SNumEpNum">0101</span>
//       </div>
//       <div class="overview">
//         <h3>Overview</h3>
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Quae quam totam ab officiis
//         ipsa quod doloribus error dicta. Consectetur,
//         recusandae? Consectetur ea explicabo libero.
//         Accusantium optio placeat corrupti eius corporis!
//       </div>
//     </div>
// 		 `
// 	 })
// }

// function allEpisodes(episode){
// const EPISODE_API = 'https://api.tvmaze.com/shows/82/episodes';
// fetch(EPISODE_API)
// 	.then((response) => {
// 		console.log('we got a response');
// 		console.log(response);
//     return response.json();
// 	})
// 	.then((jsonData) => {
//     const episodes = jsonData.map(element =>element.show.name);
//     //console.log('we have the data');
//     console.log(episodes);
// 		displayAllEpisodes(episodes);
// 	});

// }

// function displayAllEpisodes(episodes) {
//   const cardContainer = document.getElementById('card-container');
//   episodes.forEach((episode) =>{
//     const element1 = document.createElement('div');
// 	element.innerText = episode;
// 	cardContainer.appendChild(element1);
//   });
// }


function searchShow(query) { //function with string will search for
	const SEARCH_API = `https://api.tvmaze.com//search/shows?&q=${query}`; //use string interpolation to change string 
	fetch(SEARCH_API)
		.then((response) => {
			return response.json();
		})
		.then((jsonData) => {
      const results = jsonData.map(element => element.show.name);
			// console.log(results);
			displaySearchResults(results) 
		});
}

function displaySearchResults(results) {
	const list = document.getElementById('resultsList');
	list.innerHTML = '';              //clears list 
	results.forEach((result) => {
		const element = document.createElement('li');
		element.innerText = result;
		list.appendChild(element);
	});
}

let searchTimeoutToken = 0;

window.onload = () => {     //event to render on page
	const searchFieldElement = document.getElementById('searchField');
	searchFieldElement.oninput = (event) => {
		clearTimeout(searchTimeoutToken);

		searchTimeoutToken = setTimeout(() => {
			searchShow(searchFieldElement.value);
		}, 250);
	};
};


