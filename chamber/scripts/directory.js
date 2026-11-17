import { getData } from "./getdata.js";
import { displayMembers, changeDisplayType } from "./members.js";

const url = 'data/members.json';
const displayChangeButtons = document.getElementsByClassName('change-list');

for (let i = 0; i < displayChangeButtons.length; i++) {

    displayChangeButtons[i].addEventListener( 'click', (event) => {
        changeDisplayType(displayChangeButtons[i]);
    });

}

getData(url, displayMembers);