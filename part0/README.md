# Part 0

Learning Objective: The lesson covers some basic fundamentals to Web development.

- Exercises 0.1 - 0.3 was selective reading going over basics of HTML, CSS, and forms.
- Exercises 0.4 - 0.6 explores how pages communicate between the browser and server.

## Exercise 0.4: New Note

This diagram covers traditional web applications where the logic originates 
from the server and the browser renders the HTML. 

What happens when a note is submitted at [Example App](https://studies.cs.helsinki.fi/exampleapp/notes)?

![Diagram of adding a new note](assets/04-NewNote.png)

<details>
    <summary>Diagram Code</summary>
<p> 
    title 0.4 New Note
    
    note over browser:
    User input submitted via form, 
    includes data sent via POST body
    end note
    
    browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    
    note over server:
    Server creates new note object 
    and pushes body data (content & date) 
    to notes array
    end note
    
    server-->browser: URL redirect (status 302) to address in header location: /notes
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    server->browser: notes.html
    
    note over browser:
    Browser reloads /notes, 
    triggers additional HTTP requests
    end note
    
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: main.css
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->browser: main.js
    
    note over browser:
    Browser begins to execute 
    main.js which requests data.json
    end note
    
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: data.json: [{ content: "boop", date: "2022-05-27T02:45:49.060Z" }, ...]
    
    note over browser:
    Event handler renders notes
    end note  
</p>
</details>

## Exercise 0.5: Single Page App

![Diagram of adding a new note](assets/05-SPA.png)

<details>
    <summary>Diagram Code</summary>
<p> 
    title 0.5 Single Page App

    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->browser: spa.html
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: main.css
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->browser: spa.js
    note over browser:
    JS runs and requests notes.json
    end note
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: data.json [ { content: "is", date: "2022-05-27T16:02:32.632Z" }, ...]
    note over browser:
    Notes list rendered
    end note
</p>
</details>


## Exercise 0.6: New Note - SPA

![Diagram of adding a new note](assets/06-SPAnote.png)

<details>
    <summary>Diagram Code</summary>
<p> 
    title 0.6 Single Page App: New Note

    note over browser:
    Event handler is added when form is submitted
    a) JS prevents default redirect POST 
    b) Sends note to server as JSON-string
    end note

    browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->browser: 201 (no redirect)

    note over browser:
    Notes page is re-rendered with new note
    end note
</p>
</details>