const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

const todaysdate = new Date();
const lastyear = document.querySelector('#lastyear');
lastyear.innerHTML = `&copy ${todaysdate.getFullYear()} | Melanie Cristeche | Buenos Aires`;



