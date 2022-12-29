/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Select all of the anchor elements on the page using the `$` as shorthand
// for the `jQuery` function
$("a");

// The long version of the function
jQuery("a");

// Get all elements that contain a class of `card_image`
$(".card_image");

// Get all elements that contain an ID of `logoNav`
$("#logoNav");

// Get all anchors that are direct children of paragraphs
$("p>a");

// Get all anchor elements that are descendants of paragraphs
$("p a");

// Get all list item elements that are direct children of unordered lists
$("ul>li");

// Get all list item elements that are descendants of unordered lists
$("ul li");

// Get the first anchor element from the DOM
$("a:first");

// Get the last anchor element from the DOM
$("a:last");

// Select all header elements (h1, h2, h3, h4, h5, h6)
$(":header");


/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

 // Get the `background-color` of all paragraphs
 $("p").css("background-color");

 // Get the `font-family` of all paragraphs
 $("p").css("font-family");
 
 // Change the color of the text of all list item elements
 $("li").css("color", "red");
 
 // Underline all h2 elements
 $("h2").css("text-decoration", "underline");
 
 // Add a solid border of 1px and a color of `#ccc` to all unordered lists
 $("ul").css("border", "solid 1px #ccc");
 
 // Get the HTML contained within an element with an ID of `my_footer`
 $("#my_footer").html();
 
 // Get the HTML contained within an element called `body`
 $("body").html();
 
 // Add a h1 to the `body` element
 $("body").html("<h1>This is my fancy new content. Thanks jQuery, you're the best!</h1>");
 
 // Add new text to the footer
 $("#my_footer").text("This is my fancy new text. Thanks again jQuery");
 
 // Append a new element to the end of all of the elements contained in the
 // element that has an ID of `myElement`
 $("#myElement").append("<p>This is a new element</p>");
 
 // Append a span containing the copyright to the footer 
 $("my_footer").append("<span>&copy; 2017.</span>")