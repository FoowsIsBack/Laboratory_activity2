function maincontent(page){
    let contentDiv = document.getElementById("content");


    if (page == "home") {
        contentDiv.innerHTML = "<h2>Welcome to my Mainpage!</h2>";
    } else if (page == "about") {
        contentDiv.innerHTML = "<h1>About</h1><h2>This site is all about Programming Language that i want to learn!</h2>";
    } else if (page == 'c_lang') {
        contentDiv.innerHTML = "<h1>C Language</h1><h2>C is a powerful and fast programming language created by Dennis Ritchie in 1972. It is widely used for building operating systems, software, and embedded systems.</h2>";
    } else if (page == 'python') {
        contentDiv.innerHTML = "<h1>Python</h1><h2>Python is a simple, powerful, and beginner-friendly programming language created by Guido van Rossum in 1991. It is widely used in web development, data science, automation, AI, and more.</h2>";
    } else if (page == 'html') {
        contentDiv.innerHTML = "<h1>HTML</h1><h2>HTML (HyperText Markup Language) is the standard language used to create web pages. It provides the basic structure of a website using elements like headings, paragraphs, images, and links.</h2>";
    } else if (page == 'js') {
        contentDiv.innerHTML = "<h1>JavaScript</h1><h2>JavaScript (JS) is a powerful programming language used to make websites interactive. It runs in the browser and is essential for modern web development.</h2>";
    } else if (page == 'php') {
        contentDiv.innerHTML = "<h1>Php</h1><h2>PHP (Hypertext Preprocessor) is a server-side scripting language used to build dynamic websites and web applications. It runs on a web server and is mainly used for handling forms, managing databases, and creating user authentication systems.</h2>";
    }

}
