import { getData } from "./getData.js";

const membershipDetailsUrl = "data/memberships.json";
const membershipDetails = document.querySelector("#membership-details");

const displayMembershipDetails = (details) => {

    membershipDetails.innerHTML = 
    `


    `


}

// console.log();

document.querySelector("#close-modal").addEventListener('click', () => membershipDetails.close());

document.querySelectorAll("li.card a").forEach((learnMore) => {
    learnMore.addEventListener('click', event => {
        event.preventDefault();

        membershipDetails.showModal();
    });
});