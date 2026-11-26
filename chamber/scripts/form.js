import { getData } from "./getData.js";

const membershipDetailsUrl = "data/memberships.json";
const membershipDetails = document.querySelector("#membership-details");

function displayMembershipDetails(details) {

    

    const benefits = [];

    for(const benefit of details.benefits){
        benefits.push(`<li>${benefit}</li>`);
    }    
    

    membershipDetails.innerHTML = 
    `
        <div class="heading">
            <button id="close-modal" aria-label="Close"><span></span><span></span></button>
            <h3>${details.level} Membership</h3>
            <span class="recommended-for">${details.recommendedFor}</span>
        </div>

        <div class="details">
            <h4>$${details.price} /${details.subscription ? 'year': 'Enrollment Fee'}</h4>
            
            <p>${details.description}</p>

            <div class="benefits">
                <h4>${details.level} Member Benefits</h4>
                <ul>
                    ${benefits.join('')}
                </ul>
            </div>
        </div>

    `;
    
    document.querySelector("#close-modal").addEventListener('click', () => membershipDetails.close());

}

function renewMembershipData() {
    return (Date.now() - new Date(localStorage.getItem('membership-time'))) > 86400; 
}

function loadMembershipDetails() {

    const memberships = localStorage.getItem('memberships');
    
    if (!memberships || renewMembershipData()){
        getData(membershipDetailsUrl, (memberships)=>{
            localStorage.setItem('memberships', JSON.stringify(memberships));
        });

        localStorage.setItem('membership-time', Date.now());
    }


}


// document.querySelector("#close-modal").addEventListener('click', () => membershipDetails.close());

document.querySelectorAll("li.card a").forEach((learnMore) => {
    learnMore.addEventListener('click', event => {
        event.preventDefault();

        const level = event.target.dataset.id;

        try {
            const memberships = JSON.parse(localStorage.getItem('memberships'));

            displayMembershipDetails(memberships[level]);
        } catch (error) {
            console.error(error);
        }

        

        membershipDetails.showModal();
    });
});


loadMembershipDetails();