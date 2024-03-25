//Declaring the mode toggle button and linking it to the HTML
const toggleBtn = document.getElementById('mode-toggle');
//This is a function using a ternary operator '?', or basically a functional phrase
//that has three parts to it. It reads as [condition] ? [if true] : [if false].
//It's first checking if the light/dark mode is stored in local storage. If it is,
//then we grab the value from storage. If it's not, then it returns a falsy value of 'empty' essentially
const currentMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;
//Below is an if statement stating that if we found a value for our light/dark mode
//in local storage, then we add it as a class to our HTML body element
if (currentMode) {
    document.body.classList.add(currentMode);
}
//The below listens to whether our user clicks on our mode toggle button. If they do,
//then our script will look at our body element to determine if it is in dark mode.
//If it is, then it removes the dark mode class, changing it to light mode.
//If it's not, then it adds the dark mode class, changing it to dark mode.
//At the end of the fuction, we save our mode setting to local storage.
toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    let mode = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        mode = 'dark-mode';
    } 
    localStorage.setItem('mode', mode);
});
//The below takes the blog post strings from our local storage and adds them to a variable 'blogPosts' that
//we'll use more later. If our blogPosts variable is truthy, or contains information, then we parse the strings
//back into objects. If our blogPosts variable is falsy, or doesn't contain information, then we create an empty array
const storedPostsString = localStorage.getItem('blogPosts');
let blogPosts = storedPostsString
if (storedPostsString) { 
    blogPosts = JSON.parse(storedPostsString);
 } else {
    blogPosts = [];
 }
//The below takes our submission form entries and adds them as a variable
const submissionForm = document.getElementById('submission-form')
//When we click the submit button, we prevent the page from reloading, store the inputs to their
//respective variables, store the variables in an object, push the object to our 'blogPosts' variable,
//JSON stringifies the 'blogPosts' variable, and adds it to our local storage as a string.
//Following that, once our inputs are clear, our application changes from the submission page to the
//completed posts page.
submissionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;

    const newPost = {
        username: username,
        title: title,
        content: content
    };

    blogPosts.push(newPost)
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    if (document.getElementById('username').value !== null &&
        document.getElementById('blog-title').value !== null &&
        document.getElementById('blog-content').value !== null) {
            window.location.href = "index.html"
    }
});
