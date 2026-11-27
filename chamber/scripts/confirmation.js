


const params = new URLSearchParams(window.location.search);

document.querySelector('#application-date').innerHTML = params.get('application-date');

// The thank you page displays the first name, last name, email address, phone number, business/organization name, and the date from the hidden input. 


const div = document.createElement('div');

div.classList.add('details-grid');

div.innerHTML = 
`
<span>Name:</span><span>${params.get('first-name')} ${params.get('last-name')}</span>
<span>Business/Organization:</span><span>${params.get('business-name')}</span>
<span>Title:</span><span>${params.get('organization-title')}</span>
<span>Email:</span><span>${params.get('email')}</span>
<span>Phone:</span><span>${params.get('phone')}</span>

`


document.querySelector('#applicant-info').appendChild(div);

// const keys