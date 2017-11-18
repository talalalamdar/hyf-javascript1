
let favoriteBooks = [
    "the-godfather",
    "the-alchemist",
    "eleven-minutes",
    "gone-with-the-wind",
    "les-miserables",
    "the-shining",
    "a-song-of-ice-and-fire",
    "harry-potter",
    "the-girl-with-the-dragon-tattoo",
    "the-fault-in-our-stars"
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

let menu = [
    {
    Title: "The godfather",
    Language: "English",
    Author: "Mario Puzo"
    },       
    {
    Title: "The alchemist",
    Language: "English",
    Author: "Paulo Coehlo"
    },
    {
    Title: "Eleven minutes",
    Language: "English",
    Author: "Paulo Coehlo"
    },
    {
    Title: "Gone with the wind",
    Language: "English",
    Author: "Margaret Mitchell"
    },
    {
    Title: "Les miserables",
    Language: "English",
    Author: "Victor Hugo"
    },
    {
    Title: "The shining",
    Language: "English",
    Author: "Stephen King",
    },
    {
    Title: "A song of ice and fire",
    Language: "English",
    Author:"George R.R Martin",
    },
    {
    Title: "Harry Potter",
    Language: "English",
    Author: "J.K Rowling",
    },
    {
    Title: "The girl with the dragon tattoo",
    Language: "English",
    Author: "Stieg Larsson",
    },
    {
    Title: "The fault in our stars",
    Language: "English",
    Author: "John Green ",
    },
];

let container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("class", "container");


// this function creates div, heading, lists items, iamges, links and loops through the object (menu)

function generator2() {
    for (let i = 0; i < menu.length; i++) {
        let div = document.createElement("div");
        let heading = document.createElement("h4");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let link = document.createElement("a");
        let img = document.createElement("img");
        let id = document.createAttribute("id");
        var keys = Object.keys(menu[i]);
        heading.innerHTML = keys[0] + " : " + menu[i].Title;
        li1.innerHTML = keys[1] + " : " + menu[i].Language;
        li2.innerHTML = keys[2] + " : " + menu[i].Author; 
        container.appendChild(div);
        div.appendChild(heading);
        div.appendChild(ul)
        div.appendChild(li1);
        div.appendChild(li2);
        div.appendChild(link);
        div.appendChild(img);
        id.value = favoriteBooks[i];
        div.setAttributeNode(id);
        link.innerHTML = "press me";      
    }    
}
generator2();


//    creating the images and Adding the sources of the images and giving them alt attributes 


let images = document.getElementsByTagName("img")
images[0].src = "http://gdblogs.shu.ac.uk/b1006221/wp-content/uploads/sites/207/2014/01/book2.jpg";
images[0].alt = "the-godfather-cover";

images[1].src = "https://images.gr-assets.com/books/1466865451l/492286.jpg";
images[1].alt = "the-alchemist-cover";

images[2].src = "http://www.santjordi-asociados.com/sites/default/files/Eleven%20minutes.jpg";
images[2].alt = "elven-minutes";

images[3].src = "https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg";
images[3].alt = "gone-with-the-wind-cover"

images[4].src = "https://i.pinimg.com/736x/da/e8/c7/dae8c79909eb122f15e1a38c60970da8--les-mis%C3%A9rables-victor-hugo.jpg";
images[4].alt = "les-miserables-cover"

images[5].src = "https://images-na.ssl-images-amazon.com/images/I/81ipXKw8rjL.jpg";
images[5].alt = "the-shining-cover"

images[6].src = "http://achalaupendran.com/wp-content/uploads/2016/06/song-of-ice-and-fire-book-cover.jpg";
images[6].alt = "a-song-of-ice-and-fire-cover";

images[7].src = "http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_6.jpg";
images[7].alt = "harry-potter-cover";

images[8].src = "https://images.gr-assets.com/books/1302128966l/2732977.jpg";
images[8].alt = "the-girl-with-the-dragon-tattoo-cover";

images[9].src = "https://images.penguinrandomhouse.com/cover/9780142424179";
images[9].alt = "the-fault-in-our-stars-cover"



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






