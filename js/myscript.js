/**
BONUS 2:
Organizzare i singoli membri in card/schede
 *
 */

const teamMembers = [

   {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      imageSrc: 'wayne-barnett-founder-ceo.jpg'
   },

   {
      name: 'Angela Caroll ',
      role: 'Chief Editor',
      imageSrc: 'angela-caroll-chief-editor.jpg'
   },
   {
      name: 'Walter Gordon',
      role: 'Office Manager',
      imageSrc: 'walter-gordon-office-manager.jpg'
   },
   {
      name: 'Angela Lopez',
      role: 'Social Media',
      imageSrc: 'angela-lopez-social-media-manager.jpg'
   },
   {
      name: 'Scott Estrada',
      role: 'Graphic Designer',
      imageSrc: 'scott-estrada-developer.jpg'
   },

   {
      name: 'Barbara Ramos',
      role: 'Developer',
      imageSrc: 'barbara-ramos-graphic-designer.jpg'
   },
];

const teamWrapper = document.querySelector('div.team-wrapper');


for (let index = 0; index < teamMembers.length; index++) {
   const teamMember = teamMembers[index];

   addTeamMemberToContainer(teamMember.name, teamMember.role, teamMember.imageSrc, teamWrapper);
}


function addTeamMemberToContainer(name, role, imageSrc, container){

   if (!imageSrc.startsWith('http')){
      imageSrc = './img/'+ imageSrc;
   }

   container.innerHTML +=`
   <div class="card-member">
      <div class="image-wrapper">
         <img src="${imageSrc}" alt="${name}'s picture">
      </div>
      <div class="card-description">
         <h4 class="member-name">
            ${name}
         </h4>
         <p class="member-role">
            ${role}
         </p>
      </div>
   </div>` ;
}

document.getElementById('button-team-adder').addEventListener('click', function(){

   const name = document.getElementById('new-member-name').value;
   const role = document.getElementById('new-member-role').value;
   const image = document.getElementById('new-member-image').value;

   addTeamMemberToContainer(name, role, image, teamWrapper);

});