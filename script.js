/* ==========================================
   ADAM LIBRARY - JAVASCRIPT
========================================== */


/* ==========================================
   BOOK CONTENT
========================================== */

const books = {

  html: `
    <article class="book-content">

      <h2>📖 HTML Complete Guide</h2>

      <p>
        HTML stands for HyperText Markup Language.
        It is the standard language used to structure
        content on websites.
      </p>

      <h3>Chapter 1: Introduction to HTML</h3>

      <p>
        HTML provides the structure of a webpage.
        It tells the browser what each piece of content means.
      </p>

      <pre><code>&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;Welcome to my website.&lt;/p&gt;</code></pre>


      <h3>Chapter 2: HTML Document Structure</h3>

      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;h1&gt;My Website&lt;/h1&gt;

&lt;/body&gt;

&lt;/html&gt;</code></pre>


      <h3>Chapter 3: Headings</h3>

      <p>
        HTML provides six heading levels from h1 to h6.
      </p>

      <pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Second Heading&lt;/h2&gt;
&lt;h3&gt;Third Heading&lt;/h3&gt;</code></pre>


      <h3>Chapter 4: Paragraphs</h3>

      <pre><code>&lt;p&gt;
    This is a paragraph.
&lt;/p&gt;</code></pre>


      <h3>Chapter 5: Links</h3>

      <pre><code>&lt;a href="https://google.com"&gt;
    Visit Google
&lt;/a&gt;</code></pre>


      <h3>Chapter 6: Images</h3>

      <pre><code>&lt;img
    src="image.jpg"
    alt="A beautiful image"
&gt;</code></pre>


      <h3>Chapter 7: Lists</h3>

      <pre><code>&lt;ul&gt;

    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
    &lt;li&gt;JavaScript&lt;/li&gt;

&lt;/ul&gt;</code></pre>


      <h3>Chapter 8: Forms</h3>

      <pre><code>&lt;form&gt;

    &lt;input
        type="text"
        placeholder="Your name"
    &gt;

    &lt;button&gt;
        Submit
    &lt;/button&gt;

&lt;/form&gt;</code></pre>


      <h3>Chapter 9: Semantic HTML</h3>

      <p>
        Semantic HTML elements describe the meaning
        of the content they contain.
      </p>

      <pre><code>&lt;header&gt;&lt;/header&gt;
&lt;nav&gt;&lt;/nav&gt;
&lt;main&gt;&lt;/main&gt;
&lt;section&gt;&lt;/section&gt;
&lt;article&gt;&lt;/article&gt;
&lt;footer&gt;&lt;/footer&gt;</code></pre>


      <h3>Chapter 10: HTML Best Practices</h3>

      <ul>
        <li>Use semantic HTML.</li>
        <li>Use meaningful headings.</li>
        <li>Always add alt text to images.</li>
        <li>Keep your code properly indented.</li>
        <li>Use descriptive class names.</li>
      </ul>

    </article>
  `,


  css: `
    <article class="book-content">

      <h2>🎨 CSS Complete Guide</h2>

      <p>
        CSS stands for Cascading Style Sheets.
        It is used to style and design webpages.
      </p>


      <h3>Chapter 1: Introduction to CSS</h3>

      <p>
        CSS controls colors, spacing, fonts,
        layouts, animations and responsive designs.
      </p>

      <pre><code>body {
    background: black;
    color: white;
}</code></pre>


      <h3>Chapter 2: Selectors</h3>

      <pre><code>p {
    color: blue;
}

.title {
    font-size: 30px;
}

#header {
    background: black;
}</code></pre>


      <h3>Chapter 3: Colors</h3>

      <pre><code>color: red;

color: #ff0000;

color: rgb(255, 0, 0);</code></pre>


      <h3>Chapter 4: Box Model</h3>

      <p>
        The CSS box model consists of:
      </p>

      <ul>
        <li>Content</li>
        <li>Padding</li>
        <li>Border</li>
        <li>Margin</li>
      </ul>

      <pre><code>.card {
    padding: 20px;
    border: 1px solid white;
    margin: 20px;
}</code></pre>


      <h3>Chapter 5: Flexbox</h3>

      <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
}</code></pre>


      <h3>Chapter 6: CSS Grid</h3>

      <pre><code>.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}</code></pre>


      <h3>Chapter 7: Position</h3>

      <pre><code>position: relative;

position: absolute;

position: fixed;

position: sticky;</code></pre>


      <h3>Chapter 8: Animations</h3>

      <pre><code>@keyframes move {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }

}

.box {
    animation: move 2s infinite;
}</code></pre>


      <h3>Chapter 9: Responsive Design</h3>

      <pre><code>@media (max-width: 768px) {

    .container {
        flex-direction: column;
    }

}</code></pre>


      <h3>Chapter 10: Modern CSS</h3>

      <p>
        Modern CSS allows developers to build
        responsive and beautiful layouts using
        Flexbox, Grid, animations and CSS variables.
      </p>

    </article>
  `,


  js: `
    <article class="book-content">

      <h2>⚡ JavaScript Complete Guide</h2>

      <p>
        JavaScript is a programming language used
        to make websites interactive and dynamic.
      </p>


      <h3>Chapter 1: Introduction</h3>

      <p>
        JavaScript can respond to user actions,
        change HTML, modify CSS and communicate
        with APIs.
      </p>

      <pre><code>console.log("Hello World");</code></pre>


      <h3>Chapter 2: Variables</h3>

      <pre><code>let name = "Adam";

const age = 20;

let country = "Nigeria";</code></pre>


      <h3>Chapter 3: Data Types</h3>

      <pre><code>String
Number
Boolean
Array
Object
Null
Undefined</code></pre>


      <h3>Chapter 4: Functions</h3>

      <pre><code>function greet() {

    console.log("Hello!");

}

greet();</code></pre>


      <h3>Chapter 5: Conditions</h3>

      <pre><code>const age = 20;

if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}</code></pre>


      <h3>Chapter 6: Loops</h3>

      <pre><code>for (
    let i = 0;
    i < 5;
    i++
) {

    console.log(i);

}</code></pre>


      <h3>Chapter 7: Arrays</h3>

      <pre><code>const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(languages[0]);</code></pre>


      <h3>Chapter 8: Objects</h3>

      <pre><code>const user = {

    name: "Adam",

    age: 20,

    country: "Nigeria"

};</code></pre>


      <h3>Chapter 9: DOM Manipulation</h3>

      <pre><code>const title =
    document.querySelector("h1");

title.textContent =
    "Welcome to ADAM Library";</code></pre>


      <h3>Chapter 10: Events</h3>

      <pre><code>const button =
    document.querySelector("button");

button.addEventListener(
    "click",
    function () {

        alert("Button clicked!");

    }
);</code></pre>

    </article>
  `,


  tailwind: `
    <article class="book-content">

      <h2>🚀 Tailwind CSS Complete Guide</h2>

      <p>
        Tailwind CSS is a utility-first CSS framework
        for quickly building modern user interfaces.
      </p>


      <h3>Chapter 1: Introduction</h3>

      <p>
        Tailwind provides utility classes that can
        be combined directly in HTML.
      </p>

      <pre><code>&lt;div class="bg-blue-500 text-white p-4"&gt;

    Hello Tailwind

&lt;/div&gt;</code></pre>


      <h3>Chapter 2: Colors</h3>

      <pre><code>bg-blue-500
bg-red-500
bg-green-500

text-white
text-black
text-blue-500</code></pre>


      <h3>Chapter 3: Padding and Margin</h3>

      <pre><code>p-4
p-6
p-8

m-4
mt-4
mb-4
mx-auto</code></pre>


      <h3>Chapter 4: Flexbox</h3>

      <pre><code>flex
items-center
justify-center
justify-between
gap-4</code></pre>


      <h3>Chapter 5: Grid</h3>

      <pre><code>grid
grid-cols-2
grid-cols-3
gap-6</code></pre>


      <h3>Chapter 6: Width and Height</h3>

      <pre><code>w-full
w-1/2
max-w-xl

h-screen
h-full</code></pre>


      <h3>Chapter 7: Responsive Design</h3>

      <pre><code>md:flex

lg:grid

sm:text-xl

xl:p-10</code></pre>


      <h3>Chapter 8: Hover Effects</h3>

      <pre><code>hover:bg-blue-700

hover:scale-105

hover:text-white</code></pre>


      <h3>Chapter 9: Cards</h3>

      <pre><code>&lt;div
    class="rounded-xl
           bg-white
           p-6
           shadow-lg"
&gt;

    Card Content

&lt;/div&gt;</code></pre>


      <h3>Chapter 10: Projects</h3>

      <p>
        Tailwind CSS can be used to build dashboards,
        landing pages, portfolios, authentication pages
        and many other modern interfaces.
      </p>

    </article>
  `

};



/* ==========================================
   SHOW PAGE
========================================== */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");

  const library =
    document.getElementById("librarySection");


  /*
    Hide every normal page
  */

  pages.forEach(function (page) {

    page.style.display = "none";

  });


  /*
    Hide library
  */

  library.style.display = "none";


  /*
    Find requested page
  */

  const selectedPage =
    document.getElementById(pageId);


  if (selectedPage) {

    selectedPage.style.display = "block";

  }


  /*
    Update active navigation link
  */

  const navLinks =
    document.querySelectorAll("[data-page]");


  navLinks.forEach(function (link) {

    link.classList.remove("active");

  });


  const activeLink =
    document.querySelector(
      `[data-page="${pageId}"]`
    );


  if (activeLink) {

    activeLink.classList.add("active");

  }


  /*
    Scroll to top
  */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  /*
    Close mobile menu
  */

  closeMobileMenu();

}



/* ==========================================
   SIGN UP
========================================== */

function signupUser(event) {

  event.preventDefault();


  const name =
    document
      .getElementById("signupName")
      .value
      .trim();


  const email =
    document
      .getElementById("signupEmail")
      .value
      .trim()
      .toLowerCase();


  const password =
    document
      .getElementById("signupPassword")
      .value;


  const message =
    document.getElementById("signupMsg");


  /*
    Clear previous message
  */

  message.textContent = "";


  /*
    Validate fields
  */

  if (!name || !email || !password) {

    message.textContent =
      "Please fill in all fields.";

    message.className =
      "message error-message";

    return;

  }


  /*
    Validate password
  */

  if (password.length < 6) {

    message.textContent =
      "Password must be at least 6 characters.";

    message.className =
      "message error-message";

    return;

  }


  /*
    Check if another account already exists
  */

  const existingEmail =
    localStorage.getItem("email");


  if (existingEmail === email) {

    message.textContent =
      "An account with this email already exists.";

    message.className =
      "message error-message";

    return;

  }


  /*
    Save account
  */

  localStorage.setItem(
    "name",
    name
  );


  localStorage.setItem(
    "email",
    email
  );


  localStorage.setItem(
    "password",
    password
  );


  /*
    Success message
  */

  message.textContent =
    "Account created successfully!";

  message.className =
    "message success-message";


  /*
    Clear form
  */

  document
    .getElementById("signupForm")
    .reset();


  /*
    Send user to login
  */

  setTimeout(function () {

    showPage("Login");


    document
      .getElementById("loginEmail")
      .value = email;


    const loginMessage =
      document.getElementById("loginMsg");


    loginMessage.textContent =
      "Account created. Please login.";

    loginMessage.className =
      "message success-message";


  }, 1000);

}



/* ==========================================
   LOGIN
========================================== */

function loginUser(event) {

  event.preventDefault();


  const email =
    document
      .getElementById("loginEmail")
      .value
      .trim()
      .toLowerCase();


  const password =
    document
      .getElementById("loginPassword")
      .value;


  const savedEmail =
    localStorage.getItem("email");


  const savedPassword =
    localStorage.getItem("password");


  const savedName =
    localStorage.getItem("name");


  const message =
    document.getElementById("loginMsg");


  /*
    Clear previous message
  */

  message.textContent = "";


  /*
    Check account
  */

  if (
    !savedEmail ||
    !savedPassword
  ) {

    message.textContent =
      "No account found. Please sign up first.";

    message.className =
      "message error-message";

    return;

  }


  /*
    Check login details
  */

  if (
    email === savedEmail &&
    password === savedPassword
  ) {


    /*
      Save login status
    */

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );


    /*
      Update welcome message
    */

    const welcome =
      document.getElementById("welcomeUser");


    if (welcome) {

      welcome.textContent =
        savedName || "Developer";

    }


    /*
      Hide normal pages
    */

    document
      .querySelectorAll(".page")
      .forEach(function (page) {

        page.style.display = "none";

      });


    /*
      Show library
    */

    document
      .getElementById("librarySection")
      .style.display = "block";


    /*
      Reset form
    */

    document
      .getElementById("loginForm")
      .reset();


    /*
      Clear message
    */

    message.textContent = "";


    /*
      Update navigation
    */

    updateNavigation();


    /*
      Scroll to top
    */

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    /*
      Close mobile menu
    */

    closeMobileMenu();


  } else {


    /*
      Incorrect login
    */

    message.textContent =
      "Invalid email or password.";

    message.className =
      "message error-message";

  }

}



/* ==========================================
   LOGOUT
========================================== */

function logoutUser() {

  /*
    Remove login state
  */

  localStorage.removeItem(
    "isLoggedIn"
  );


  /*
    Hide library
  */

  document
    .getElementById("librarySection")
    .style.display = "none";


  /*
    Show login page
  */

  showPage("Login");


  /*
    Show logout message
  */

  const message =
    document.getElementById("loginMsg");


  message.textContent =
    "You have been logged out successfully.";

  message.className =
    "message success-message";


  /*
    Update navigation
  */

  updateNavigation();


  /*
    Scroll to top
  */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* ==========================================
   SHOW LIBRARY
========================================== */

function showLibrary() {

  const loggedIn =
    localStorage.getItem("isLoggedIn");


  /*
    User is not logged in
  */

  if (loggedIn !== "true") {

    showPage("Login");

    return;

  }


  /*
    Hide normal pages
  */

  document
    .querySelectorAll(".page")
    .forEach(function (page) {

      page.style.display = "none";

    });


  /*
    Show library
  */

  document
    .getElementById("librarySection")
    .style.display = "block";


  /*
    Get user name
  */

  const name =
    localStorage.getItem("name");


  document
    .getElementById("welcomeUser")
    .textContent =
    name || "Developer";


  /*
    Update navigation
  */

  updateNavigation();


  /*
    Scroll top
  */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* ==========================================
   SHOW BOOK
========================================== */

function showBook(book) {

  const content =
    document.getElementById("content");


  /*
    Check whether book exists
  */

  if (!books[book]) {

    content.innerHTML = `
      <div class="empty-reader">

        <div class="empty-icon">
          ⚠️
        </div>

        <h3>
          Course not found
        </h3>

        <p>
          Sorry, this course could not be found.
        </p>

      </div>
    `;

    return;

  }


  /*
    Insert book content
  */

  content.innerHTML =
    books[book];


  /*
    Find reader
  */

  const reader =
    document.getElementById("reader");


  /*
    Scroll to reader
  */

  reader.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}



/* ==========================================
   CLOSE BOOK
========================================== */

function closeBook() {

  const content =
    document.getElementById("content");


  content.innerHTML = `

    <div class="empty-reader">

      <div class="empty-icon">
        📖
      </div>

      <h3>
        Choose a course to begin
      </h3>

      <p>
        Select one of the courses above
        and start learning.
      </p>

    </div>

  `;

}



/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
  document.getElementById("menuBtn");


const menu =
  document.getElementById("menu");


if (menuBtn) {

  menuBtn.addEventListener(
    "click",
    function () {

      menu.classList.toggle("active");


      const isOpen =
        menu.classList.contains("active");


      menuBtn.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );

}



/* ==========================================
   CLOSE MOBILE MENU
========================================== */

function closeMobileMenu() {

  if (menu) {

    menu.classList.remove("active");

  }


  if (menuBtn) {

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

  }

}



/* ==========================================
   UPDATE NAVIGATION
========================================== */

function updateNavigation() {

  const loggedIn =
    localStorage.getItem("isLoggedIn") === "true";


  const logoutButton =
    document.getElementById("logoutBtn");


  const signupButton =
    document.querySelector(
      ".nav-signup"
    );


  const loginLinks =
    document.querySelectorAll(
      '[data-page="Login"]'
    );


  /*
    Logout
  */

  if (logoutButton) {

    logoutButton.style.display =
      loggedIn ? "block" : "none";

  }


  /*
    Signup
  */

  if (signupButton) {

    signupButton.style.display =
      loggedIn ? "none" : "block";

  }


  /*
    Login links
  */

  loginLinks.forEach(function (link) {

    link.style.display =
      loggedIn ? "none" : "block";

  });

}



/* ==========================================
   CHECK LOGIN ON PAGE LOAD
========================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const loggedIn =
      localStorage.getItem("isLoggedIn");


    /*
      Update navigation
    */

    updateNavigation();


    /*
      If user is already logged in,
      prepare library
    */

    if (loggedIn === "true") {

      const name =
        localStorage.getItem("name");


      const welcome =
        document.getElementById(
          "welcomeUser"
        );


      if (welcome) {

        welcome.textContent =
          name || "Developer";

      }

    }

  }
);



/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener(
  "click",
  function (event) {

    if (
      menu &&
      menuBtn &&
      !menu.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {

      closeMobileMenu();

    }

  }
);



/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeMobileMenu();

    }

  }
);