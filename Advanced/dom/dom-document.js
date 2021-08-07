/*

DOM - DOCUMENT OBJECT MODEL

w3c standard:

html dom
xml dom
core dom -> any type of document

using it, js can chnage & access all the elements of html elements

when web page is loaded, browser create a dom of the page (as tree of objects)
                            WINDOW
                            DOCUMENT

                            HTML(ROOT) 
                HEAD                        BODY
                TITLE                    DIV                <a>
                TEXT                P         H1     HREF(ATTRIBUTE)   TEXT
                                TEXT        TEXT


js can create dynamic html using dom:
change html element 
        html attributes
        css 
    add new html element 
    react to html event 
    add new html event 


html dom methods are 'actions' we can perform on html elements

html dom props are 'value' of html element that we set or get.

in DOM HTML element are defined as objects

document.getElementById('para').innerHTML = "value" (set a value)

clg(document.getElementById('para').innerHTML) => (get value of html element)


DOM Document:

document object is the owner of all other object.

document objectct represent web page.


// finding  html element:-

1- by id :

if element is found, method will return element as an object, else null.

2- by className:

if elements is found, method will return all founded elements in an HTML COLLECTION ARRAY (as an object)

3- by tagName:

if elements is found, method will return all founded elements in an HTML COLLECTION ARRAY (as an object)

4- by name(dom node)

5- by css selectors

6- by html object collection


2- Changing html content:

    1- innerHTML
    2- innerTEXT

    3- attribute

*/