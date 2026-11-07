const url = 'data/members.json';
const directoryContainer = document.getElementById('directory-container');
const displayChangeButtons = document.getElementsByClassName('change-list');

const membersImageDirectory = "images/chamber-businesses/"


console.log(displayChangeButtons);


function displayMembers(members) {

    const memberLvl = ['Bronze', 'Silver', 'Gold']
    members.forEach(member => {
        const card = document.createElement('section');
    // "companyName": "Mountain Peak Outfitters",
    // "address": "2450 North Washington Blvd, North Ogden, UT 84414",
    // "phone": "801-555-0101",
    // "website": "https://mountainpeak.example.com",
    // "image": "mountain-peak.jpg",
    // "membershipLevel": 3
        
        card.classList.add('card')
        
        card.innerHTML = 
        `
        
            <div class="heading">
                <h2>${member.companyName}</h2>
                <span>${memberLvl[member.membershipLevel - 1]} Membership</span>
            </div>
            <div class="details">
                <img src="${membersImageDirectory}${member.image}" alt="${member.companyName} Logo" loading="lazy" height="75" width="75">
                <ul>
                    
                    <li><a href="tel:${member.phone}" class="button">${member.phone}</a></li>
                    <li><a href="${member.website}" class="button">Go to Website</a></li>
                    <li>${member.address}</li>
                </ul>
            </div>
        `;
        

        directoryContainer.appendChild(card);

        
    });
}

async function getMemberData() {
    try {
        
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

        const data = await response.json();

        displayMembers(data);

    } catch (error) {
        console.error(`The ${error} prevented member data from being retrieved`);
    }
}

function changeDisplayType(eventBtn) {

    switch(eventBtn.getAttribute('id')){
        case 'display-list' :

            directoryContainer.classList.add('list');

            break;

        case 'display-grid' :

            directoryContainer.classList.remove('list');
            break;
        
 
    }
}

for (let i = 0; i < displayChangeButtons.length; i++) {

    displayChangeButtons[i].addEventListener( 'click', (event) => {
        changeDisplayType(displayChangeButtons[i]);
    });

}

getMemberData();