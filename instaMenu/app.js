const menu = [
  {
    id: 1,
    title: "Country 'burbs",
    category: "America",
    img: "./images/usa(1).jpg",
    desc: ``,
  },
  {
    id: 2,
    title: "Leon, Mexico",
    category: "Mexico",
    img: "./images/mexico1.jpg",
    desc: `On a walk in Leon, GTO, la Virgencita prohibe que se tire basura`,
  },
  {
    id: 3,
    title: "Tirana",
    category: "Albania",
   
    img: "./images/alb(175).jpg",
    desc: `A random shop wall off Muslim Shuri street, Tirana`,
  },
  {
    id: 4,
    title: "Bar Nights",
    category: "America",
    img: "./images/usa(4).jpg",
    desc: `Daniel, the faithful bartender, working at Callaghans, Mobile, AL, USA`,
  },
  {
    id: 5,
    title: "Panorama",
    category: "Mexico",
    img: "./images/mex(5).jpg",
    desc: `View of Leon, GTO, from the window of a dermatologist's waiting room`,
  },
  {
    id: 6,
    title: "Zoo Ali Dems",
    category: "Albania",
    img: "./images/alb(6).jpg",
    desc: `Beni Alidems led me one day to his friend's courtyard `,
  },
  {
    id: 7,
    title: "Climb",
    category: "America",
    img: "./images/usa(7).jpg",
    desc: `Patty and I stayed in the Nola CBD one night, and a ladder hung lonely on a wall`,
  },
  {
    id: 8,
    title: "Descent",
    category: "Mexico",
    img: "./images/mexico(5).jpg",
    desc: `Mexico city metro, stairway to hell`,
  },
  {
    id: 9,
    title: "River",
    category: "Albania",
    img: "./images/alb(9).jpg",
    desc: `Pic of Lana river, known so as a joke, really being an open sewer canal, that runs through central Tirana, Albania`,
  },
  {
    id: 10,
    title: "Devil",
    category: "America",
    img: "./images/usa(10).jpg",
    desc: `A common enough theme seen on many billboards throughout the rural south`,
  },
  {
    id: 11,
    title: "Gym",
    category: "America",
    img: "./images/usa(3).jpg",
    desc: `The now closed Dauphin Island gym `,
  },
  {
    id: 12,
    title: "mexico",
    category: "Mexico",
    img: "./images/mexico(2).jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 13,
    title: "Albania",
    category: "Albania",
   
    img: "./images/alb(17).jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 14,
    title: "America",
    category: "America",
    img: "./images/usa(5).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 15,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(10).jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 16,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(9).jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 17,
    title: "America",
    category: "America",
    img: "./images/usa(6).jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 18,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(13).jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 19,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(20).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "America",
    category: "America",
    img: "./images/usa(12).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: "america",
    category: "America",
    img: "./images/usa(14).jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 22,
    title: "mexico",
    category: "Mexico",
    img: "./images/mexico(4).jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 23,
    title: "Albania",
    category: "Albania",
   
    img: "./images/alb(19).jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 24,
    title: "America",
    category: "America",
    img: "./images/usa(15).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 25,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mex(6).jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 26,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(16).jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 27,
    title: "America",
    category: "America",
    img: "./images/usa(18).jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 28,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(11).jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 29,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(21).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 30,
    title: "America",
    category: "America",
    img: "./images/usa(22).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 31,
    title: "america",
    category: "America",
    img: "./images/usa(23).jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 32,
    title: "mexico",
    category: "Mexico",
    img: "./images/mexico(13).jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 33,
    title: "Albania",
    category: "Albania",
   
    img: "./images/alb(24).jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 34,
    title: "America",
    category: "America",
    img: "./images/usa(24).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 35,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(4).jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 36,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(26).jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 37,
    title: "America",
    category: "America",
    img: "./images/usa(27).jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 38,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(12).jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 39,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(29).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 40,
    title: "America",
    category: "America",
    img: "./images/usa(26).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 41,
    title: "america",
    category: "America",
    img: "./images/usa(31).jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 42,
    title: "mexico",
    category: "Mexico",
    img: "./images/mexico(9).jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 43,
    title: "Albania",
    category: "Albania",
   
    img: "./images/alb(3).jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 44,
    title: "America",
    category: "America",
    img: "./images/usa(34).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 45,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mex(5).jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 46,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(36).jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 47,
    title: "America",
    category: "America",
    img: "./images/usa(15).jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 48,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(11).jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 49,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(49).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 50,
    title: "America",
    category: "America",
    img: "./images/usa(1).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 51,
    title: "america",
    category: "America",
    img: "./images/usa(18).jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "mexico",
    category: "Mexico",
    img: "./images/mexico(7).jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 53,
    title: "Albania",
    category: "Albania",
   
    img: "./images/alb(43).jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 54,
    title: "America",
    category: "America",
    img: "./images/usa(12).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 55,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mex(6).jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 56,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(46).jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 57,
    title: "America",
    category: "America",
    img: "./images/usa(11).jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 58,
    title: "Mexico",
    category: "Mexico",
    img: "./images/mexico(8).jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 59,
    title: "Albania",
    category: "Albania",
    img: "./images/alb(19).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 60,
    title: "America",
    category: "America",
    img: "./images/usa(2).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
