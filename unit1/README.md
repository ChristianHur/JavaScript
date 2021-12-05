# Unit 1 Lecture - Introduction to JavaScript
In this chapter, you will learn the skills required to create basic JavaScript programs. This chapter starts by providing a short history of the Internet and the World Wide Web, and introducing the basics on how to create web pages with HTML. Next, the chapter introduces formal terminology and concepts of web page authoring. You will learn about web development and the client/server architecture. The chapter discusses JavaScript, client-side scripting, and server-side scripting. You then learn the basic procedures for adding JavaScript to web pages and the rules they must follow when structuring their JavaScript code. You will learn how to write basic JavaScript code, starting with variables. Finally, the chapter presents structured JavaScript coding concepts.

## Objectives
After completing this chapter, the student will be able to:
1. Explain the history of the World Wide Web
2. Describe the differences between client-side and server-side scripting
3. Understand the components of a JavaScript statement
4. Add basic JavaScript code to web pages
5. Structure JavaScript programs

## What is Javascript?

Javascript is a powerful, versatile, specific-purpose, client-side scripting language for developing interactive web applications.  Javascript has evolved throughout the last couple of years to becoming a semi-general-purpose and server-side programming language, especially with the development of Node.js.  Javascript is also one of the main languages used in the Unity 3D game development engine.  The other two languages are C# (C-Sharp) and BOO.

Here’s a brief overview of the history of the Internet and Javascript.

### The Internet and World Wide Web

- The Internet was conceived by J. C. R. Licklider in August 1962 at MIT -  discussing his concept of a “Galactic Network.”
- The physical implementation of ARPANET was created in the 1960s and it was restricted by the U.S. government primarily to academic researchers, scientists, and the military.
- The widespread development of local area networks (LANs) and the personal computer occurred in the 1980s further influenced the expansion of the Internet.
- Tim Berners-Lee in 1990 and 1991 created what would become the World Wide Web (WWW), or the web, at the European Laboratory for Particle Physics (CERN) in Geneva, Switzerland.
- The first website is still running today here:  http://info.cern.ch/

### Web Browsers & JavaScript
= NCSA Mosaic was created in	at the University of Illinois and was the first program to allow users to navigate the web by using a graphical user interface (GUI). 
- Netscape released Navigator in 1994 which soon controlled 75% of the market. 
- In 1995 that JavaScript was conceived at Netscape.  JavaScript was originally called Mocha, then renamed to Livescript, then renamed again to JavaScript (after the popularity of Java).
- Javascript is NOT Java, and vice-versa.
- In 1996, Microsoft entered the market with the release of Internet Explorer (IE), and the so-called browser wars began, in which Microsoft and Netscape fought for control of the browser market.
- Browser war was fought over dynamic HTML (DHTML), which is a combination of various technologies, including HTML and JavaScript, that allows a web page to change after it has been loaded by a browser.

![alt netscape](https://raw.githubusercontent.com/ChristianHur/152-097-JavaScript/master/unit1/images/netscape.png)

### JavaScript Standardization

- JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
- ECMA stands for European Computer Manufacturers Association
- ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

![alt ecmascript editions](https://github.com/ChristianHur/152-097-JavaScript/blob/master/unit1/images/ecmascript.png)

### Latest version:  EMCAScript 7

More detailed information on the history of Javascript can be found here:
https://auth0.com/blog/a-brief-history-of-javascript/

## Understanding Client/Server Architecture
![alt cleint-server architecture](https://github.com/ChristianHur/152-097-JavaScript/blob/master/unit1/images/client_server.png)
- Server in the context of traditional client/server architecture.
- A two-tier system as a system consisting of a client and a server, noting that a server fulfills a request for information by the client by managing the request or serving the requested information to the client.
- Primary roles of the client (or front end) in a two-tier system.
- Primary role of the server (or back end) in a typical client/server system.

## 3 S's
```
  WINDOW
    |
    DOCUMENT
      |
      JavaScript - Interaction - Script
        |
        CSS	- Style - Presentation Layer
	  |
          HTML  - Structure  - Semantic Language
	    |
            Text
```
![alt 3 S's](https://github.com/ChristianHur/152-097-JavaScript/blob/master/unit1/images/3_layers.png)
