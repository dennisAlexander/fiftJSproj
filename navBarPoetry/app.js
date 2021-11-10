// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const members = [
  {
    id: 1,
    name: "Poetry Quotes",
    job: "About",
    img:
      "./images/logo.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    
  },
  {
    id: 2,
    link: "https://www.poetryfoundation.org/poets/emily-dickinson",
    name: "Emily Dickinson",
    job: "the hermit",
    img: 
      "./images/emily.jpg",
    text:
      "Forever is composed of nows",
  },
  {
    id: 3,
    name: "John Keats",
    link:"https://www.poetryfoundation.org/poets/john-keats",
    job: "Junkets",
    img:
      "./images/keats.jpg",
    text:
      "Nothing ever becomes real till it is experienced.",
  },
  {id: 4,
    name: "Shakespeare",
    job: "the bard",
    link: "https://www.poetryfoundation.org/poets/william-shakespeare",
    img:
      "./images/shakespeare.jpg",
    text:
      "Be not afraid of greatness",
  },
  {
    id: 5,
    name: "Rimbaud",
    job: "sale petit Cagot",
    link: "https://www.poetryfoundation.org/poets/arthur-rimbaud",
    img:
      "./images/rimbaud.jpg",
    text:
      "Life is the farce which everyone has to perform.",
  },
  {
    id: 6,
    name: "Baudelaire",
    link: "https://www.poetryfoundation.org/poets/charles-baudelaire",
    job: "my little melancholy monkey",
    img:
      "./images/baudelaire.jpg",
    text:
      "Inspiration comes of working every day.",
  },
  {
    id: 7,
    name: "Service",
    job: "Cowboy",
    link: "https://www.poetryfoundation.org/poets/robert-w-service",
    img:
      "./images/service.jpg",
    text:
      "No man can be a failure if he thinks he's a success; If he thinks he is a winner, then he is.",
  },
];

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));

    links.classList.toggle("show-links");
    //alternative ^ to
    // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
})

const img = document.getElementById("person-img");
const link = document.getElementById("person-link");  // targeting href in progress *solved used href on link in show person function
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector(".next-btn");

const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = members[person];
  img.src = item.img;
  link.href = item.link;   // blanks out image *solved
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > members.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = members.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * members.length);
  showPerson(currentItem);
});
