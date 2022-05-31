// Menu responsive 

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// current date with format: Wednesday, 24 July 2020.

const date = new Date();
const currentTime = document.getElementById('currentTime')

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);

currentTime.innerHTML = fulldate;


// Banner join us for the chamber meet and greet Wednesday at 7:00 p.m


if (date.getDate() == 1  || date.getDate() == 2) { 

	document.getElementById("datefield").innerHTML +=
	`<p>
	🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m
	</p>`;  }



	 