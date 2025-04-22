# scroll-drag
This tiny library aims to allow mobile scrolling (click to drag) on desktop devices for controls that are scrollable.

## Installation (npm)
```
npm install '@chrisjwarnes/scroll-drag'
```
## Basic usage

```javascript
import { setupScrolling } from '@chrisjwarnes/scroll-drag'

setupScrolling()

// its also possible to setup on particular parts of the page.

// this will initialise any elements with the data-scroll elements that are children of the 'elem' node.
const elem = document.querySelector('#my-elem')
setupScrolling(elem)
```

by default this looks for all elements with an attribute of `data-scroll`. the default query selector can be modified if this affects other behaviors in your own code.

for example to target all elements with an attribute of `data-chris-scroll`

```javascript
import { setupScrolling } from '@chrisjwarnes/scroll-drag'

setupScrolling(document, '[data-chris-scroll]')
```

Typical html might look something like this.

```html
<div class="scroll" data-scroll>
  <div class="scroll__item">...</div>
  <div class="scroll__item">...</div>
  <div class="scroll__item">...</div>
  <div class="scroll__item">...</div>
  <div class="scroll__item">...</div>
  <div class="scroll__item">...</div>
  <div class="scroll__item">...</div>
<div>

<!-- Please don't add styles like this, this is just to get an idea of how to make this work with styling. -->
<style>
  .scroll {
    display: grid;
    gap: 4px;
    grid-auto-columns: 125px;
    grid-auto-flow: column;
    overflow-x: auto;

    // Why not have a nicely styled scrollbar while we are at it?
    scrollbar-color: #3c6a73 #fff;
    scrollbar-width: thin;
}
</style>
```
