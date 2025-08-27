CSS Interview Questions with Answers


1. What is CSS, and what does it stand for?
Answer: CSS stands for Cascading Style Sheets. It is a stylesheet language used to style and format the appearance of HTML elements on a webpage, controlling aspects like layout, colors, fonts, and responsiveness.

2. What is the difference between CSS and CSS3?
Answer: CSS refers to the overall language, while CSS3 is the latest version. CSS3 introduces advanced features like:

Flexbox and Grid for layouts.
Animations and transitions.
Media queries for responsive design.
New selectors (e.g., :nth-child) and pseudo-elements (e.g., ::before).
Rounded corners (border-radius), shadows (box-shadow), and gradients.

3. How do you include CSS in an HTML file?
Answer: CSS can be included in three ways:

Inline CSS: Using the style attribute in HTML elements.
Internal CSS: Using a <style> tag in the <head> section.
External CSS: Linking a .css file with the <link> tag.

<!-- Inline -->
<div style="color: blue;">Text</div>
<!-- Internal -->
<head>
  <style>
    div { color: blue; }
  </style>
</head>
<!-- External -->
<link rel="stylesheet" href="styles.css">

4. What is the CSS box model?
Answer: The box model represents the structure of an HTML element, consisting of:

Content: The inner content (text, images).
Padding: Space between content and border.
Border: Surrounds padding.
Margin: Space outside the border.The total width/height includes content + padding + border.

div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
  /* Total width = 200 + 10 + 10 + 5 + 5 = 230px */
}

5. What is the difference between box-sizing: content-box and box-sizing: border-box?
Answer:

content-box: Width/height applies only to content; padding and border add to the total size.
border-box: Width/height includes content, padding, and border.

div {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  /* Total width = 200px (includes padding and border) */
}

6. What are CSS selectors, and what are the main types?
Answer: Selectors target HTML elements to apply styles. Main types:

Element: Targets tags (e.g., p).
Class: Targets .class-name.
ID: Targets #id-name.
Attribute: Targets [type="text"].
Pseudo-class: Targets states (e.g., :hover, :first-child).
Pseudo-element: Targets parts (e.g., ::before, ::after).

p { color: blue; }
.class-name { font-size: 16px; }
#id-name { background: yellow; }

7. What is the difference between class and ID selectors?
Answer:

Class: Reusable, can be applied to multiple elements (.class-name).
ID: Unique, applies to one element (#id-name).

.class-name { color: red; }
#unique-id { color: blue; }

8. What is CSS specificity, and how is it calculated?
Answer: Specificity determines which CSS rule applies when multiple rules target the same element. It’s calculated as:

Inline styles: 1000.
IDs: 100.
Classes, attributes, pseudo-classes: 10.
Elements, pseudo-elements: 1.Example: #id .class p (100 + 10 + 1 = 111) overrides .class p (10 + 1 = 11).

9. What is the CSS cascade?
Answer: The cascade determines which styles are applied based on:

Specificity: Higher specificity wins.
Source Order: Later rules override earlier ones with equal specificity.
Importance: !important overrides other rules.

p { color: blue; }
p { color: red; } /* Red wins due to source order */

10. What is the difference between relative, absolute, and fixed positioning?
Answer:

Relative: Positioned relative to its normal position (position: relative).
Absolute: Positioned relative to the nearest positioned ancestor (position: absolute).
Fixed: Positioned relative to the viewport, stays in place on scroll (position: fixed).

.relative { position: relative; top: 10px; }
.absolute { position: absolute; top: 20px; }
.fixed { position: fixed; top: 0; }

11. What is the z-index property in CSS?
Answer: z-index controls the stacking order of positioned elements. Higher values appear in front. It only works with position: relative, absolute, or fixed.
div { position: absolute; z-index: 10; } /* Appears above z-index: 5 */

12. What is the difference between display: none and visibility: hidden?
Answer:

display: none: Removes the element from the layout (no space reserved).
visibility: hidden: Hides the element but reserves its space.

.hidden { display: none; } /* No space */
.invisible { visibility: hidden; } /* Space reserved */

13. What is Flexbox, and how does it work?
Answer: Flexbox is a layout model for arranging items in a container along a single axis (row or column). Key properties:

display: flex: Enables Flexbox.
flex-direction: Sets axis (row, column).
justify-content: Aligns items along the main axis (center, space-between).
align-items: Aligns items along the cross axis (center, stretch).

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

14. What is CSS Grid, and how does it differ from Flexbox?
Answer: CSS Grid is a two-dimensional layout system for rows and columns. Flexbox is one-dimensional (row or column). Grid is better for complex layouts, while Flexbox suits simpler, linear arrangements.
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

15. How do you center a div horizontally and vertically?
Answer: Common methods:

Flexbox:

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


Grid:

.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}


Absolute Positioning:

.div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

16. What are CSS media queries, and how are they used?
Answer: Media queries apply styles based on conditions like screen size, making sites responsive.
@media (max-width: 600px) {
  body { background: blue; }
}

17. What are pseudo-classes and pseudo-elements?
Answer:

Pseudo-classes: Style elements based on state (e.g., :hover, :first-child).
Pseudo-elements: Style specific parts of an element (e.g., ::before, ::after).

a:hover { color: red; }
p::before { content: "★"; }

18. What is the difference between :hover and :active pseudo-classes?
Answer:

:hover: Applies when the mouse hovers over an element.
:active: Applies when an element is clicked (active state).

button:hover { background: blue; }
button:active { background: red; }

19. What are CSS transitions, and how do they work?
Answer: Transitions animate property changes over time. Specify the property, duration, and timing function.
div {
  width: 100px;
  transition: width 2s ease;
}
div:hover { width: 200px; }

20. What are CSS animations, and how do they differ from transitions?
Answer: Animations use @keyframes to define multiple style changes, offering more control than transitions, which only animate between two states.
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
div {
  animation: slide 2s infinite;
}

21. What is the float property, and when is it used?
Answer: float moves an element to the left or right, allowing content to wrap around it. It’s used for layouts like images with text wrapping but is largely replaced by Flexbox/Grid.
img { float: left; margin-right: 10px; }

22. How do you clear a float?
Answer: Use the clear property or a clearfix hack to prevent elements from being affected by floats.
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

23. What is the difference between margin and padding?
Answer:

Margin: Space outside an element’s border.
Padding: Space between an element’s content and border.

div {
  margin: 20px; /* Outside space */
  padding: 10px; /* Inside space */
}

24. What are relative units in CSS, and why are they used?
Answer: Relative units (%, vw, vh, rem, em) scale based on other values (e.g., parent size, root font size). They’re used for responsive design.
div { width: 50%; font-size: 2rem; }

25. What is the rem unit, and how does it differ from em?
Answer:

rem: Relative to the root (<html>) font size.
em: Relative to the parent element’s font size.

html { font-size: 16px; }
div { font-size: 2rem; } /* 32px */
.child { font-size: 2em; } /* Relative to parent */

26. What is the purpose of the !important rule?
Answer: !important increases a rule’s priority, overriding other styles. Use sparingly to avoid specificity issues.
p { color: blue !important; }

27. How do you style the first child of an element?
Answer: Use the :first-child pseudo-class.
li:first-child { color: red; }

28. What is the overflow property in CSS?
Answer: overflow controls content that exceeds an element’s bounds:

visible: Content spills out.
hidden: Clips content.
scroll: Adds scrollbars.
auto: Scrollbars only when needed.

div { overflow: auto; height: 100px; }

29. How do you create a responsive image?
Answer: Use max-width: 100% and height: auto to ensure images scale within their container.
img {
  max-width: 100%;
  height: auto;
}

30. What is the position: sticky property?
Answer: position: sticky keeps an element in place until it reaches a specified offset, then it acts like fixed.
header {
  position: sticky;
  top: 0;
}

31. How do you create a CSS triangle?
Answer: Use borders with zero width and height.
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}

32. What is the calc() function in CSS?
Answer: calc() performs calculations for CSS property values.
div { width: calc(100% - 20px); }

33. What are CSS variables, and how are they used?
Answer: CSS custom properties (variables) store reusable values, defined with -- and accessed with var().
:root {
  --primary-color: blue;
}
div {
  color: var(--primary-color);
}

34. How do you style a hover effect on a button?
Answer: Use the :hover pseudo-class.
button:hover {
  background: darkblue;
  color: white;
}

35. What is the difference between inline, inline-block, and block display?
Answer:

inline: Elements stay on the same line, no width/height.
inline-block: Stays on the same line but allows width/height.
block: Takes full width, starts on a new line.

span { display: inline-block; width: 100px; }

36. How do you vertically align text in CSS?
Answer: Use line-height, Flexbox, or vertical-align (for inline elements).
.div {
  display: flex;
  align-items: center;
  height: 100px;
}

37. What is the background shorthand property?
Answer: Combines background-color, background-image, background-position, etc.
div {
  background: blue url('image.jpg') no-repeat center;
}

38. How do you create a gradient background?
Answer: Use linear-gradient or radial-gradient.
div {
  background: linear-gradient(to right, blue, red);
}

39. What is the opacity property?
Answer: opacity sets the transparency of an element (0 to 1).
div { opacity: 0.5; } /* 50% transparent */

40. How do you style a responsive navbar?
Answer: Use Flexbox or Grid with media queries.
.nav {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 600px) {
  .nav { flex-direction: column; }
}

41. What is the clip-path property?
Answer: clip-path clips an element to a specific shape (e.g., circle, polygon).
div {
  clip-path: circle(50% at center);
}

42. How do you reset default browser styles?
Answer: Use a CSS reset like:
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

43. What is the transform property?
Answer: transform applies 2D/3D transformations (e.g., rotate, scale, translate).
div {
  transform: rotate(45deg);
}

44. What is the difference between relative and absolute units?
Answer:

Relative: Scales with context (e.g., %, vw, rem).
Absolute: Fixed values (e.g., px, cm, in).Relative units are preferred for responsiveness.

45. How do you create a shadow effect in CSS?
Answer: Use box-shadow for elements or text-shadow for text.
div { box-shadow: 2px 2px 5px rgba(0,0,0,0.3); }
p { text-shadow: 1px 1px 2px gray; }

46. What is the display: grid gap property?
Answer: gap (or row-gap, column-gap) sets spacing between grid cells.
.grid {
  display: grid;
  gap: 10px;
}

47. How do you style a list to remove default bullets?
Answer: Use list-style: none.
ul { list-style: none; }

48. What is the font shorthand property?
Answer: Combines font-style, font-weight, font-size, line-height, and font-family.
p { font: italic bold 16px/1.5 Arial; }

49. How do you ensure cross-browser compatibility in CSS?
Answer:

Use vendor prefixes (e.g., -webkit-, -moz-) for experimental features.
Test on multiple browsers (Chrome, Firefox, Safari, Edge).
Use tools like Autoprefixer or normalize.css.
Validate CSS with W3C Validator.

50. What are CSS vendor prefixes, and why are they used?
Answer: Vendor prefixes (e.g., -webkit-, -moz-) ensure compatibility for browser-specific features. They’re used for experimental or non-standard properties.
div {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
