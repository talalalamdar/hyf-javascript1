let favoriteBooks = [
    "the_godfather",
    "the_alchemist",
    "eleven_minutes",
    "gone_with_the_wind",
    "les_miserables",
    "the_shining",
    "a_song_of_ice_and_fire",
    "harry_potter",
    "the_girl_with_the_dragon_tattoo",
    "the_fault_in_our_stars"
];
let header = document.createElement("h1");
document.body.appendChild(header);
header.innerHTML = "My Books List";
header.setAttribute("class", "header");

/* this function was for step 3 i changed it later
function generator() {
    for (let i = 0; i < favoriteBooks.length; i++) {
        let title = favoriteBooks[i];
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.innerHTML = title;
        document.body.appendChild(ul);
    }
}
generator();*/

let menu = {
    the_godfather: {
        Title: "The godfather",
        Language: "English",
        Author: "Mario Puzo"
    },
    the_alchemist: {
        Title: "The alchemist",
        Language: "English",
        Author: "Paulo Coehlo"
    },
    eleven_minutes: {
        Title: "Eleven minutes",
        Language: "English",
        Author: "Paulo Coehlo"
    },
    gone_with_the_wind: {
        Title: "Gone with the wind",
        Language: "English",
        Author: "Margaret Mitchell"
    },
    les_miserables: {
        Title: "Les miserables",
        Language: "English",
        Author: "Victor Hugo"
    },
    the_shining: {
        Title: "The shining",
        Language: "English",
        Author: "Stephen King",
    },
    a_song_of_ice_and_fire: {
        Title: "A song of ice and fire",
        Language: "English",
        Author: "George R.R Martin",
    },
    harry_potter: {
        Title: "Harry Potter",
        Language: "English",
        Author: "J.K Rowling",
    },
    the_girl_with_the_dragon_tattoo: {
        Title: "The girl with the dragon tattoo",
        Language: "English",
        Author: "Stieg Larsson",
    },
    the_fault_in_our_stars: {
        Title: "The fault in our stars",
        Language: "English",
        Author: "John Green ",
    },
};

let container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("class", "container");


// this function creates div, heading, lists items, iamges, links and loops through the object (menu)

function generator2() {
    for (let i = 0; i < favoriteBooks.length; i++) {
        let div = document.createElement("div");
        let heading = document.createElement("h4");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let link = document.createElement("a");
        let id = document.createAttribute("id");
        const key = favoriteBooks[i];
        const bookInfo = menu[key];
        var keys = Object.keys(bookInfo);
        heading.innerHTML = keys[0] + " : " + bookInfo.Title;
        li1.innerHTML = keys[1] + " : " + bookInfo.Language;
        li2.innerHTML = keys[2] + " : " + bookInfo.Author;
        container.appendChild(div);
        div.appendChild(heading);
        div.appendChild(ul)
        ul.appendChild(li1);
        ul.appendChild(li2);
        div.appendChild(link);
        id.value = favoriteBooks[i];
        div.setAttributeNode(id);
        link.innerHTML = "Press me";
    }
}
generator2();


//    creating the images and Adding the sources of the images and giving them alt attributes 

let booksCovers = {
    the_godfather: "http://gdblogs.shu.ac.uk/b1006221/wp-content/uploads/sites/207/2014/01/book2.jpg" ,
    the_alchemist: "https://images.gr-assets.com/books/1466865451l/492286.jpg",
    eleven_minutes: "http://www.santjordi-asociados.com/sites/default/files/Eleven%20minutes.jpg",
    gone_with_the_wind: "https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg",
    les_miserables: "https://i.pinimg.com/736x/da/e8/c7/dae8c79909eb122f15e1a38c60970da8--les-mis%C3%A9rables-victor-hugo.jpg",
    the_shining: "https://images-na.ssl-images-amazon.com/images/I/81ipXKw8rjL.jpg",
    a_song_of_ice_and_fire: "http://achalaupendran.com/wp-content/uploads/2016/06/song-of-ice-and-fire-book-cover.jpg",
    harry_potter: "http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_6.jpg",
    the_girl_with_the_dragon_tattoo: "https://images.gr-assets.com/books/1302128966l/2732977.jpg",
    the_fault_in_our_stars: "https://images.penguinrandomhouse.com/cover/9780142424179"
}
 function addImages() {
    for (let id of Object.keys(booksCovers)) {
        const li = document.getElementById(id);
        if (li !== null) {
            const img = document.createElement('img');
            img.setAttribute('src', booksCovers[id]);
            li.appendChild(img);
        }
    }
 }
addImages();
let images = document.getElementsByTagName("img");
images[0].alt = "the-godfather-cover";
images[1].alt = "the-alchemist-cover";
images[2].alt = "elven-minutes";
images[3].alt = "gone-with-the-wind-cover";
images[4].alt = "les-miserables-cover";
images[5].alt = "the-shining-cover";
images[6].alt = "a-song-of-ice-and-fire-cover";
images[7].alt = "harry-potter-cover";
images[8].alt = "the-girl-with-the-dragon-tattoo-cover";
images[9].alt = "the-fault-in-our-stars-cover";


//   Adding links of sources for more details about the books

let links = document.getElementsByTagName("a");
links[0].setAttribute("href", "https://en.wikipedia.org/wiki/The_Godfather_(novel)");
links[1].setAttribute("href", "https://en.wikipedia.org/wiki/The_Alchemist_(novel)");
links[2].setAttribute("href", "https://en.wikipedia.org/wiki/Eleven_Minutes");
links[3].setAttribute("href", "https://en.wikipedia.org/wiki/Gone_with_the_Wind_(novel)");
links[4].setAttribute("href", "https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables");
links[5].setAttribute("href", "https://en.wikipedia.org/wiki/The_Shining_(novel)");
links[6].setAttribute("href", "https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire");
links[7].setAttribute("href", "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone");
links[8].setAttribute("href", "https://en.wikipedia.org/wiki/The_Girl_with_the_Dragon_Tattoo");
links[9].setAttribute("href", "https://en.wikipedia.org/wiki/The_Fault_in_Our_Stars");




