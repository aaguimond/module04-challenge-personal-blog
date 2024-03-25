# Creating a Multi-Page Personal Blog

## Utilizing Local Storage and Javascript to Modify HTML Elements

### Table of Contents

[Project Status](#project-status)

[Screenshots of the completed application](#screenshots-of-completed-site-build)

[Purpose](#purpose)

[Technologies Used](#technologies-used)

[HTML Elements](#html-elements)

[CSS Elements](#css-elements)

[Javascript](#javascript)

[License](#license)

[Acknowledgements](#acknowledgements)

## Project Status

**Complete**

[Git Hub Repository](https://github.com/aaguimond/module04-challenge-personal-blog)

[Live Blog](https://aaguimond.github.io/module04-challenge-personal-blog/)

## Screenshots of Completed Site Build

**Below is are screenshots of the page**

Below are screenshots of the blog's landing page in light mode and in dark mode.

![a screenshot of the landing page in light mode](/assets/screenshots/BlogLandingPageLight.png?raw=true)

![a screenshot of the landing page in dark mode](/assets/screenshots/BlogLandingPageDark.png?raw=true)

Below are screenshots of the blog's content page when no blog posts have been published to the user's local storage.

![a screenshot of the empty content page in light mode](/assets/screenshots/BlogContentPageEmptyLight.png?raw=true)

![a screenshot of the empty content page in dark mode](/assets/screenshots/BlogContentPageEmptyDark.png?raw=true)

Below is a screenshot of the blog's content page when the application finds a blog post in the browser's local storage.

![a screenshot of the content page with a published blog post in light mode](/assets/screenshots/BlogContentPagePublishedLight.png?raw=true)

Below is a screenshot of the blog's content page when the application finds blog posts in the browser's local storage. The browser's local storage is also shown.

![a screenshot of the content page with multiple published blog posts and the browser showing its local storage in dark mode](/assets/screenshots/BlogContentPageMultipleWithLocalStorageDark.png?raw=true)

## Purpose

This project's purpose was to build a functioning blog using HTML, CSS, and Javascript that stores and recalls data from the user's local storage.

## Technologies Used

This project was completed using [Git Bash](https://git-scm.com/about), [Visual Studio Code](https://code.visualstudio.com/) (with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)), [Google Chrome](https://www.google.com/chrome/), and [Git Hub](https://github.com/).

## HTML Elements

### On the blog's landing page, there are a number of static HTML elements:

* A page header containing a title, light/dark mode toggle button, and a button to the content web page containing published blog posts
* Text input boxes for the blog post author's username, title, and blog content
* A submit button
* A sidebar containing a background self portrait drawn by yours truly
* A footer containing a button to my live portfolio page, a tag, and the page copyright

There is also an HTML attribute given to each text input box on the landing page that not only notifies, but requires the user to enter content into each box before they are able to submit the post.

On the blog's published content page, there is the same static header element from the landing page, as well as the following dynamic HTML elements:

* Blog post boxes each separated by a slight margin and a border
* Large titles with underlined text
* Author line in italic text
* A sticky footer bar so a link to my portfolio and page credit are visible wherever the viewport is focused

## CSS Elements

### There is extensive use of custom CSS for my blog pages:

* Light and dark mode color themes that are activated by the mode toggle button in the header
* The mode toggle button itself will show a crescent moon while in light mode and a sun while in dark mode
* When hovered over, each button will change color, have a slight glow, and change the cursor to a finger pointer
* A message on the blog content page that directs the user to the submission/landing page if the application finds no posts in the browser's local storage. This message is hidden when the application finds blog posts in the browser's local storage. Screenshots of the message can be found [in the screenshots section above](#screenshots-of-completed-site-build)

Each CSS file contains extensive comments detailing what each line of code accomplishes.

## Javascript

Both the landing/submission page and the published content page have light/dark mode toggles. The toggles are controlled by using a button in each page's header. When clicked, the application stores the user's preferred mode in their browser's local storage, allowing the user's preferred mode to persist even after leaving and returning to the page.

The submit button on the landing/submission page collects the input data from the username, author, and content boxes when it's clicked. This data is stored as a string within the user's local storage, the user is redirected to the blog content page, and the blog data in the user's local storage is recalled and published as HTML elements. If no blog data is found in the user's local storage, a message redirecting the user to the landing/submission page is displayed on the blog content page.

Extensive and detailed comments are present in each Javascript file for further clarification

## License

[MIT](https://opensource.org/license/mit)

## Acknowledgements

Thank you to my teachers and my classmates for guiding me on my educational journey.