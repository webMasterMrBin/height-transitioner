## js implement folding and fading animation effects of DOM elements with dynamic height

# WHY
[https://css-tricks.com/using-css-transitions-auto-dimensions/](https://css-tricks.com/using-css-transitions-auto-dimensions/)

# EXAMPLE
```html
  <html>
    <style>
      #target {
        overflow: hidden;
        /* animate css support */
        transition: all linear .2s;
      }
    </style>
    <body>
      <div id="target">
        <!-- dynamic count element in this -->
      </div>
    </body>
  </html>
```
```javascript
  import { getCollapseAndExpandContainerFn } from 'height-transitioner';
  const { collapseContainer, expandContainer } = getCollapseAndExpandContainerFn(document.getElementById('target))

  // now call collapse or expand funciton based on your needs
```