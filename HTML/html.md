HTML Interview Questions with Answers


1. What is HTML, and what does it stand for?
Answer: HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. HTML defines the structure of a webpage using elements and tags, which are rendered by browsers to display text, images, links, and other content.

2. What is the difference between HTML and HTML5?
Answer: HTML is the general term for the markup language, while HTML5 is the latest version (released in 2014). HTML5 introduces new features like:

Semantic elements (<header>, <footer>, <article>, <section>).
Multimedia tags (<audio>, <video>, <canvas>).
APIs for geolocation, local storage, and drag-and-drop.
Improved form inputs (<input type="email">, <input type="date">).
Better support for mobile and responsive design.

3. What are the main components of an HTML document structure?
Answer: An HTML document has:

<!DOCTYPE html>: Declares the document type as HTML5.
<html>: Root element, contains all other elements.
<head>: Contains metadata, title, and links to external resources (e.g., CSS, JavaScript).
<body>: Contains visible content like text, images, and forms.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>

4. Explain the purpose of the DOCTYPE declaration.
Answer: The <!DOCTYPE html> declaration at the start of an HTML file tells browsers the document is HTML5. It ensures consistent rendering across browsers by triggering "standards mode" (as opposed to "quirks mode" for older HTML). It must be the first line of the document.

5. What is the difference between an element and a tag in HTML?
Answer: A tag is the markup used to define an element (e.g., <p>, </p>). An element is the complete structure, including the opening tag, content, and closing tag (e.g., <p>This is a paragraph</p>). Tags are the building blocks, while elements are the rendered components.

6. What are semantic HTML elements, and why are they important?
Answer: Semantic elements clearly describe their meaning to both browsers and developers (e.g., <header>, <footer>, <article>, <nav>). They improve:

Accessibility: Screen readers understand the content better.
SEO: Search engines index content more effectively.
Code Readability: Developers can understand the structure easily.Example: Use <nav> for navigation instead of a generic <div>.

7. Name five semantic HTML5 elements and their use cases.
Answer:

<header>: For introductory content or navigation (e.g., site logo and menu).
<footer>: For footer content like contact info or copyright.
<article>: For self-contained content like blog posts.
<section>: For thematic grouping of content (e.g., a chapter or tabbed content).
<nav>: For navigation links (e.g., menu bar).

<header>
  <h1>My Website</h1>
  <nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

8. What is the difference between <div> and <section> elements?
Answer: <div> is a non-semantic, generic container used for styling or grouping without specific meaning. <section> is a semantic element that represents a thematic group of content, often with a heading. Use <section> for meaningful content blocks and <div> for layout purposes.
<section>
  <h2>About Us</h2>
  <p>Our story...</p>
</section>
<div class="container">
  <p>Styled content...</p>
</div>

9. What is the purpose of the <head> tag in HTML?
Answer: The <head> tag contains metadata about the document, such as:

<title>: Sets the page title displayed in the browser tab.
<meta>: Defines charset, viewport, or SEO data.
<link>: Connects external resources like CSS.
<script>: Links or embeds JavaScript.It does not display content on the page but affects how the page is rendered or indexed.

10. What are meta tags, and why are they used?
Answer: Meta tags provide metadata about the HTML document, placed in the <head>. They help with:

Charset: <meta charset="UTF-8"> for character encoding.
Viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0"> for responsive design.
SEO: <meta name="description" content="Site description"> for search engines.
Social Media: Open Graph tags for link previews.

<meta name="description" content="A blog about MERN stack">

11. Explain the difference between block-level and inline elements.
Answer: 

Block-level: Takes full width, starts on a new line (e.g., <div>, <p>, <h1>).
Inline: Takes only the width of its content, stays on the same line (e.g., <span>, <a>, <img>).

<div>Block element</div>
<span>Inline element</span>

12. What is the purpose of the alt attribute in the <img> tag?
Answer: The alt attribute provides alternative text for an image if it fails to load or for screen readers. It improves accessibility and SEO by describing the image’s content or purpose.
<img src="logo.png" alt="Company logo">

13. How do you create a hyperlink in HTML?
Answer: Use the <a> tag with the href attribute to specify the destination URL.
<a href="https://example.com">Visit Example</a>

14. What is the difference between absolute and relative URLs?
Answer:

Absolute URL: Full path including protocol and domain (e.g., https://example.com/page.html).
Relative URL: Path relative to the current page (e.g., /page.html or ../images/photo.jpg).Absolute URLs are used for external links; relative URLs are for internal links.

15. What is the role of the title attribute in HTML elements?
Answer: The title attribute provides additional information about an element, displayed as a tooltip on hover. It enhances user experience and accessibility.
<a href="home.html" title="Go to homepage">Home</a>

16. How do you create a form in HTML?
Answer: Use the <form> tag with input elements like <input>, <textarea>, or <select>. Specify action (where data is sent) and method (e.g., GET or POST).
<form action="/submit" method="POST">
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>

17. What are the different input types in HTML forms?
Answer: Common <input> types include:

text: Single-line text input.
password: Masked text for passwords.
email: Validates email format.
number: Numeric input.
checkbox: Multiple selections.
radio: Single selection from options.
file: File upload.
date: Date picker.

<input type="email" name="email">

18. Explain the action and method attributes in a <form> tag.
Answer:

action: Specifies the URL where form data is sent (e.g., /submit).
method: Defines the HTTP method (GET for retrieving data, POST for sending data securely).

<form action="/submit" method="POST">

19. What is the placeholder attribute in HTML input elements?
Answer: The placeholder attribute provides hint text in an input field that disappears when the user types. It guides users on expected input.
<input type="text" placeholder="Enter your name">

20. What is the difference between <input type="submit"> and <input type="button">?
Answer:

<input type="submit">: Submits form data to the server (triggers action).
<input type="button">: A clickable button with no default action, often used with JavaScript.

<input type="submit" value="Submit Form">
<input type="button" value="Click Me" onclick="myFunction()">

21. How do you create a dropdown menu in HTML?
Answer: Use the <select> tag with <option> tags for choices.
<select name="city">
  <option value="nyc">New York</option>
  <option value="london">London</option>
</select>

22. What is the purpose of the <label> tag in forms?
Answer: The <label> tag associates a description with a form input, improving accessibility and usability. It links to an input via the for attribute matching the input’s id.
<label for="username">Username:</label>
<input type="text" id="username" name="username">

23. What is HTML accessibility, and why is it important?
Answer: Accessibility (a11y) ensures web content is usable by people with disabilities (e.g., via screen readers). It’s important for inclusivity, legal compliance, and SEO. Use semantic elements, alt text, ARIA roles, and keyboard-friendly navigation.
24. What are ARIA roles, and when should you use them?
Answer: ARIA (Accessible Rich Internet Applications) roles enhance accessibility by adding semantic meaning to elements (e.g., role="button"). Use them when HTML lacks sufficient semantics, like for custom widgets or dynamic content.
<div role="alert">Error: Invalid input</div>

25. How do you make an HTML page responsive?
Answer: Use:

<meta name="viewport" content="width=device-width, initial-scale=1.0"> for scaling.
CSS media queries for adaptive layouts.
Relative units (%, vw, rem, em) for sizing.
Semantic HTML for better rendering.

<meta name="viewport" content="width=device-width, initial-scale=1.0">

26. What is the difference between <b> and <strong> tags?
Answer:

<b>: Applies bold styling without semantic meaning.
<strong>: Indicates strong importance, typically bold, with semantic value for accessibility and SEO.Use <strong> for meaningful emphasis.

<strong>Important text</strong>
<b>Bold text</b>

27. What is the difference between <i> and <em> tags?
Answer:

<i>: Applies italic styling without semantic meaning.
<em>: Indicates emphasized text, typically italic, with semantic value.Use <em> for meaningful emphasis.

<em>Emphasized text</em>
<i>Italic text</i>

28. How do you embed a video in HTML?
Answer: Use the <video> tag with src for the video file. Add controls for playback options.
<video src="movie.mp4" controls>
  Your browser does not support the video tag.
</video>

29. What is the purpose of the <figure> and <figcaption> elements?
Answer: <figure> groups self-contained content (e.g., images, diagrams), and <figcaption> provides its caption. They improve semantics and accessibility.
<figure>
  <img src="photo.jpg" alt="Landscape">
  <figcaption>A scenic view</figcaption>
</figure>

30. What are data attributes in HTML, and how are they used?
Answer: Data attributes (data-*) store custom data on elements, accessible via JavaScript or CSS. They’re useful for dynamic interactions.
<div data-id="123" data-type="user">Content</div>
<script>
  const div = document.querySelector('div');
  console.log(div.dataset.id); // "123"
</script>

31. What is the difference between <script> and <link> tags?
Answer:

<script>: Embeds or links JavaScript (e.g., <script src="app.js"></script>).
<link>: Links external resources like CSS (e.g., <link rel="stylesheet" href="style.css">).Both are typically placed in <head>.

32. How do you add comments in HTML?
Answer: Use <!-- --> to enclose comments, which are not displayed in the browser.
<!-- This is a comment -->

33. What is the purpose of the <meta charset="UTF-8"> tag?
Answer: It specifies the character encoding (UTF-8) for the document, ensuring proper rendering of text characters across languages.
34. What are void elements in HTML? Give examples.
Answer: Void elements are self-closing and cannot contain content (e.g., <img>, <br>, <hr>, <meta>, <input>). They don’t need a closing tag.
<img src="image.jpg" alt="Image">
<br>

35. What is the difference between <article> and <section> tags?
Answer:

<article>: For standalone content that can be independently distributed (e.g., a blog post).
<section>: For grouping related content within a larger context (e.g., a chapter).Use <article> for self-contained units, <section> for thematic groups.

36. How do you create a table in HTML?
Answer: Use <table>, <tr> for rows, <th> for headers, and <td> for data cells.
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>

37. What is the purpose of the colspan and rowspan attributes in tables?
Answer:

colspan: Merges cells horizontally across columns.
rowspan: Merges cells vertically across rows.

<td colspan="2">Spans two columns</td>
<td rowspan="2">Spans two rows</td>

38. What is the role of the <base> tag in HTML?
Answer: The <base> tag specifies a default URL or target for all relative URLs in the document. It’s placed in <head>.
<base href="https://example.com/">

39. How do you include external JavaScript or CSS in an HTML file?
Answer:

JavaScript: Use <script src="file.js"></script>.
CSS: Use <link rel="stylesheet" href="style.css">.

<head>
  <link rel="stylesheet" href="style.css">
  <script src="app.js"></script>
</head>

40. What is the difference between id and class attributes?
Answer:

id: Unique identifier for a single element (e.g., #header).
class: Non-unique identifier for multiple elements (e.g., .button).

<div id="header">Unique</div>
<div class="box">Reusable</div>

41. How do you create a nested list in HTML?
Answer: Place a <ul> or <ol> inside a <li> of another list.
<ul>
  <li>Item 1
    <ul>
      <li>Subitem 1.1</li>
    </ul>
  </li>
  <li>Item 2</li>
</ul>

42. What is the purpose of the <br> tag, and when should it be used?
Answer: The <br> tag inserts a line break. Use it sparingly for content like addresses or poems, not for layout (use CSS instead).
<p>Line one<br>Line two</p>

43. What is the difference between <input type="text"> and <textarea>?
Answer:

<input type="text">: Single-line text input.
<textarea>: Multi-line text input.

<input type="text" name="title">
<textarea name="description"></textarea>

44. How do you create an ordered list versus an unordered list?
Answer:

Ordered: <ol> with numbered <li> items.
Unordered: <ul> with bulleted <li> items.

<ol>
  <li>First</li>
</ol>
<ul>
  <li>Item</li>
</ul>

45. What is the role of the lang attribute in the <html> tag?
Answer: The lang attribute specifies the document’s language (e.g., en for English), aiding accessibility and search engines.
<html lang="en">

46. What are HTML entities, and why are they used?
Answer: HTML entities are codes for special characters (e.g., &lt; for <, &amp; for &). They’re used to display reserved characters or symbols safely.
<p>5 &lt; 10</p>

47. How do you embed audio in HTML?
Answer: Use the <audio> tag with src and controls for playback.
<audio src="song.mp3" controls>
  Your browser does not support audio.
</audio>

48. What is the purpose of the <canvas> element in HTML5?
Answer: The <canvas> element provides a drawing surface for dynamic graphics using JavaScript (e.g., for games or charts).
<canvas id="myCanvas" width="200" height="100"></canvas>

49. What is the difference between local storage and session storage in HTML5?
Answer:

Local Storage: Persists data until explicitly cleared, shared across sessions.
Session Storage: Stores data for one session, cleared when the tab closes.

<script>
  localStorage.setItem('key', 'value');
  sessionStorage.setItem('key', 'value');
</script>

50. How do you ensure cross-browser compatibility in HTML?
Answer: 

Use <!DOCTYPE html> and standard HTML5 elements.
Include <meta charset="UTF-8"> and viewport meta tag.
Test on multiple browsers (Chrome, Firefox, Safari, Edge).
Use vendor prefixes for CSS or polyfills for JavaScript when needed.
Validate HTML using W3C Validator.
