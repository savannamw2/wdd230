const url = 'data/members.json';
const membersContainer = document.querySelector('#members-container');

async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.error('Error fetching or parsing member data:', error);
    }
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('div');
        card.classList.add('member-card');

        let companyName = document.createElement('h2');
        companyName.textContent = member.name;

        let companyAddress = document.createElement('p');
        companyAddress.textContent = `Address: ${member.address}`;

        let companyPhone = document.createElement('p');
        companyPhone.textContent = `Phone: ${member.phone}`;

        let companyWebsite = document.createElement('a');
        companyWebsite.textContent = 'Website';
        companyWebsite.href = member.website;
        companyWebsite.target = '_blank';

        let companyImage = document.createElement('img');
        companyImage.src = member.imageurl;
        companyImage.alt = `Front ${member.name}`;

        let membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

        let otherInfo = document.createElement('p');
        otherInfo.textContent = member.other_information;

        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyWebsite);
        card.appendChild(companyImage);
        card.appendChild(membershipLevel);
        card.appendChild(otherInfo);

        membersContainer.appendChild(card);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// Define a function to toggle between grid and list view
function toggleView(view) {
    membersContainer.classList.toggle("grid", view === "grid");
    membersContainer.classList.toggle("list", view === "list");
}

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

toggleView("grid");