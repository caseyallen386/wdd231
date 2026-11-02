
// Json Data key: value pairs

// name	"Joseph"
// lastname	"Smith"
// birthdate	"23 December 1805"
// death	"27 June 1844"
// length	14
// order	1
// birthplace	"Vermont"
// numofchildren	11
// imageurl	"https://byui-cse.github.io/cse-ww-program/data/images/prophets/joseph-smith.jpg"


const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const heading = document.createElement('h2');

    const img = document.createElement('img')

    
    heading.innerHTML = `${prophet.name} ${prophet.lastname}`

    img.setAttribute('src', prophet.imageurl );
    img.setAttribute('alt', `Protrait of ${prophet.name} ${prophet.lastname}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '340px');
    img.setAttribute('height', '440px');

    card.appendChild(heading);
    card.appendChild(img);

    cards.appendChild(card);


  });
}

const getProphetData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`$response.status`);
    }

    const data = await response.json();
    
    displayProphets(data.prophets);
  } catch(err) {
    console.log(err)
  }
};

getProphetData();