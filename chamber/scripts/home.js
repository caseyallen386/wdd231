import { getData } from "./getdata.js";
import { displayMembers } from "./members.js";

const url = 'data/members.json';

function displayMembersHomepage(members) {

    const numbToDisplay = 3;
    let membersToDisplay = [],
        randomMember;

    let goldOrBronzeMembers = members.filter( member => member.membershipLevel > 1);

    for (let i = 0; i < 3; i++){
        randomMember = Math.floor(Math.random() * goldOrBronzeMembers.length);

        membersToDisplay.push(goldOrBronzeMembers[randomMember]);
    }

    // console.log(membersToDisplay);
    displayMembers(membersToDisplay);


}

getData(url, displayMembersHomepage);