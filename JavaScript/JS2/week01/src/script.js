"use strict";

// 1.1 Declarate an array that contains 10 strings.
let bookTitles = ['oath_and_honor',
    'interesting_facts_for_curious_minds',
    'atomic_habits',
    'woman_in_me',
    'fourth_wing',
    'court_of_thorns_and_roses',
    'lessons_in_chemistry',
    'no_brainer',
    'heaven_earth_grocery_store',
    'harry_potter_and_goblet_of_fire'];

// console.log(bookTitles);

// 1.3 Make a function (or functions)
//  that generate a ul with li elements for each book ID in the array using a for loop.

function showBookIdList (list){
    let bookList = document.querySelector('.book-list');
   
    for (let i = 0; i < list.length; i++){
        const book = document.createElement('li');
        book.textContent = list[i];
        bookList.append(book);

    }
}

// showBookIdList(bookTitles);

// 1.4 Make an object (not an array!) containing information for each book

let booksInfo = {
    oath_and_honor: {
        title: 'Oath and Honor: A Memoir and a Warning',
        language: 'English',
        author: 'Liz Cheney'
    },
    interesting_facts_for_curious_minds: {
        title: 'Interesting Facts For Curious Minds: 1572 Random But Mind-Blowing Facts About History, Science, Pop Culture And Everything In Between',
        language: 'English',
        author: 'Jordan Moore'
    },
    atomic_habits: {
        title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        language: 'English',
        author: 'James Clear'
    },
    woman_in_me: {
        title: 'The Woman in Me',
        language: 'English',
        author: 'Britney Spears'
    },
    fourth_wing: {
        title: 'Fourth Wing',
        language: 'English',
        author: 'Rebecca Yarros'
    },
    court_of_thorns_and_roses: {
        title: 'A Court of Thorns and Roses',
        language: 'English',
        author: 'Sarah J. Maas'
    },
    lessons_in_chemistry: {
        title: 'Lessons in Chemistry',
        language: 'English',
        author: 'Bonnie Garmus'
    },
    no_brainer: {
        title: 'No Brainer. Diary of a Wimpy Kid',
        language: 'English',
        author: 'Jeff Kinney'
    },
    heaven_earth_grocery_store: {
        title: 'The Heaven & Earth Grocery Store',
        language: 'English',
        author: 'James McBride'
    },
    harry_potter_and_goblet_of_fire: {
        title: 'Harry Potter and the Goblet of Fire',
        language: 'English',
        author: 'J.K. Rowling'
    },

 };


//  1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take
// the actual information about the book from the object and display that. 

 function showBooksInfo (books){
     let bookList = document.querySelector('.book-list');
     
     for (let key in books){
                 
        const book = document.createElement('li');
        const container = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const language = document.createElement('p');

        book.id = key;
        title.textContent = books[key]['title'];
        author.textContent = `author: ${books[key]['author']}`;
        language.textContent = `language: ${books[key]['language']}`;

        container.append(title, author, language);
        book.append(container);
        bookList.append(book);

    }
}

showBooksInfo(booksInfo);


// 1.7 Find and download book covers for each book and construct a new object which has as keys the 
// book IDs again, and as value the path to the image source
// (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }).

let bookCovers = {
    oath_and_honor: './img/oath_and_honor.jpg',
    interesting_facts_for_curious_minds: './img/interesting_facts_for_curious_minds.jpg',
    atomic_habits: './img/atomic_habits.jpg',
    woman_in_me: './img/woman_in_me.jpg',
    fourth_wing: './img/fourth_wing.jpg',
    court_of_thorns_and_roses: './img/court_of_thorns_and_roses.jpg',
    lessons_in_chemistry: './img/lessons_in_chemistry.jpg',
    no_brainer: './img/no_brainer.jpg',
    heaven_earth_grocery_store: './img/heaven_earth_grocery_store.jpg',
    harry_potter_and_goblet_of_fire: './img/harry_potter_and_goblet_of_fire.jpg'
};

// 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys).
// Then write a function which places an image at the corresponding li element. Remember that objects
// are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you
// could give each li item an id tag by modifying the function you made before.) 
     
function addImage(imgList) {
    for (let key in imgList) {
        const book = document.querySelector(`#${key}`);
        const bookCover = document.createElement('img');

        bookCover.src = imgList[key];
        bookCover.alt = key;

        book.prepend(bookCover);
    }
}

addImage(bookCovers);