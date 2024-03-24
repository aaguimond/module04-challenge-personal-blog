const toggleBtn = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

if (currentMode) {
    document.body.classList.add(currentMode);
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let mode = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        mode = 'dark-mode';
    } 
    localStorage.setItem('mode', mode);
});

const storedPostsString = localStorage.getItem('blogPosts');
const blogPostsHTML = document.querySelector('.blog-posts');

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
}