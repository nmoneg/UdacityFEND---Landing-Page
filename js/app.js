/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navList = document.querySelector("#navbar__list"),
    sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuild(...secList) {
    for (let section of secList) {
        let listItem = document.createElement("li"),
            listText = section.getAttribute("data-nav");
        listItem.appendChild(listText)
        navList.appendChild(listItem);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navBuild(sections);

// Scroll to section on link click

// Set sections as active

