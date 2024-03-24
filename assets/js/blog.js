const toggleBtn = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

if (currentMode) {
    document.body.classList.add(currentMode);
}

toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    let mode = 'light-mode';
    if (document.body.classList.contains('dark-mode')) {
        mode = 'dark-mode';
    } 
    localStorage.setItem('mode', mode);
});

const storedPostsString = localStorage.getItem('blogPosts');
let blogPosts = storedPostsString
if (storedPostsString) { 
    blogPosts = JSON.parse(storedPostsString);
 } else {
    blogPosts = [];
 }

const submissionForm = document.getElementById('submission-form')

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
