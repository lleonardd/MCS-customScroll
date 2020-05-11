# Microscripts ChustomScroll-Framework
**Version 5.5**

The `MCS-customScroll` Framework is a simple and efficiant way to change the scrollbehaviour of your HTML page.


Its easy to use. It just requires you to add the direction describing CSS classes on your HTML tags inside the `mcs-customScroll` container.

### Checkout the [Demo](https://micro-scripts.github.io/MCS-customScroll/) 

----------

## How to use:

1. Here is a simple examle to bether understand how to structure your HTML in order for it to work:
```
    <body>
        <div id="mcs-customScroll">
            <div class="down">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat.</p>
            </div>
            <div class="right">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat.</p>
            </div>
            <div class="up">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat.</p>
            </div>
            <div class="left">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat.</p>
            </div>
        </div>
        <script src="MCS-customScroll5.5.js"></script>
    </body>
```
2. Thats half of it done. Now we just need to structure the layout in a grid format using CSS.
```css
#mcs-customScroll{
    overflow: hidden;
    position: fixed;
    top: 0px;
    left: 0px;

    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 100vh 100vh;
    grid-template-columns: 100vw 100vw;
    grid-template-areas:'a d'
                        'b c';
}
#mcs-customScroll div:nth-child(1){grid-area: a;}
#mcs-customScroll div:nth-child(2){grid-area: b;}
#mcs-customScroll div:nth-child(3){grid-area: c;}
#mcs-customScroll div:nth-child(4){grid-area: d;}
```


## The Result:

With this done we basicaly finished the custom scroll.
The scroll direction now looks like this:

Down ⬇ | Left ⬅
--- | ---
Right ➡ | Up ⬆

With this technique you are able to simply and quickly create complex custom scrolling pages.

----------

## Contributors
- Leonard Schedel 

----------
## License & copyright

© Leonard Schedel, Fullstack Webdeveloper

Licensed under the [Apache License 2.0](LICENSE)
