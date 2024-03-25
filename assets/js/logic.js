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
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let mode = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        mode = 'dark-mode';
    } 
    localStorage.setItem('mode', mode);
});
//The below creates a variable for our blog posts and retrieves them from our local storage.
const storedPostsString = localStorage.getItem('blogPosts');
//For the below, we link our HMTL to our JS by searching for the 'blog-posts' class located on our
//article element and storing it as a variable so that we can recall in a function below and
//append our blog posts to its HTML.
const blogPostsHTML = document.querySelector('.blog-posts');
//The below function takes the blog posts from our local storage and writes them to our HTML.
//First we say that if there are blog posts in our local storage, we hide the error message that
//appears when we don't have blog posts by giving it an class of 'hidden'. Our CSS takes care of the
//hiding. Next we parse our local storage for our string of blog posts. Then we use an arrow function
//to say that for each post in our string:
// - we create a <div> element in our HTML and set its class to 'blog-post'. Each one will be the
//   parent element of its blog post
// - we create an <h2> element, insert the title value from our parsed string as its text content,
//   and set its ID to 'post-title'
// - we create our first <p> element, insert the username value from our parsed string as its text
//   content, and set its ID to 'post-author'
// - we create our second <p> element, insert the content value from our parsed string as its text
//   content, and set its ID to 'post-content'
//After that, we append each child element to the blog post <div> element and append the blog post
//element to the article element of our HTML.
//However, if we don't find any blog posts stored in our local storage, we search for the ID of
//'error-message' in our HTML and give it the class name of visible, making it visible using CSS.
if (storedPostsString) {
    document.getElementById('error-message').className = 'hidden';

    const blogPosts = JSON.parse(storedPostsString);
    blogPosts.forEach(post => {
        const postHTML = document.createElement('div');
        postHTML.setAttribute('class','blog-post');

        const titleHTML = document.createElement('h2');
        titleHTML.textContent = post.title;
        titleHTML.setAttribute('id','post-title');

        const authorHTML = document.createElement('p');
        authorHTML.textContent = 'Written by: ' + post.username;
        authorHTML.setAttribute('id','post-author');

        const contentHTML = document.createElement('p');
        contentHTML.textContent = post.content;
        contentHTML.setAttribute('id','post-content');

        postHTML.appendChild(titleHTML);
        postHTML.appendChild(authorHTML);
        postHTML.appendChild(contentHTML);

        blogPostsHTML.appendChild(postHTML);
    });
} else {
    document.getElementById('error-message').className = 'visible';
};