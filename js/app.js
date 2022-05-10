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
    sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Convert the node list 'sections' to an array:
// let sectArray = Array.from(sections);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// For each section, create a link in the navbar with the text from the 'data-nav' attribute
function navBuild(secList) {
    secList.forEach(function(section) {
        let listItem = document.createElement("li"),
            itemAnchor = document.createElement("a"),
            itemID = section.id;
            listText = document.querySelector(`#${itemID}`).dataset.nav;
        itemAnchor.appendChild(document.createTextNode(listText));
        itemAnchor.setAttribute("href", `#${itemID}`);
        listItem.appendChild(itemAnchor);
        navList.appendChild(listItem);
    });
    
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

