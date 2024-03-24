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
    const blogPosts = JSON.parse(storedPostsString);
    blogPosts.forEach(post => {
        const postHTML = document.createElement('div');
        postHTML.classList.add('blog-post');

        const titleHTML = document.createElement('h2');
        titleHTML.textContent = post.title;

        const authorHTML = document.createElement('p');
        authorHTML.textContent = post.username

        const contentHTML = document.createElement('p');
        contentHTML.textContent = post.content;

        postHTML.appendChild(titleHTML);
        postHTML.appendChild(authorHTML);
        postHTML.appendChild(contentHTML);

        blogPostsHTML.appendChild(postHTML);
    });
} else {
    console.log('Please create a blog post')
}