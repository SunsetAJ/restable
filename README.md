# Restable
### Note: this plugin is still under development.
jQuery plugin to make tables responsive. **JQUERY IS REQUIRED**

<h3>Details</h3>
This is a simple plugin to make `<table>` elements responsive.
It works by reconstructing the markup to use list items instead. with a little bit of CSS magic your tables will now be responsive.

<h3>Version 0.1</h3>
The plugin is still very much under development, it does not support all forms of table layouts, only the basic form:
```html
<table>
  <caption>Table Caption</caption>
  <thead>
    <tr>
      <td>Table heading</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Content</td>
    </tr>
  </tbody>
</table>
```
Currently the plugin can only handle this style of structure.

<h3>HOW TO USE</h3>
Once the plugin has been downloaded (js & css), and linked in your web project.
Simply use the code below to use the function
```JavaScript
 $('table').restable();
```
There is also some settings that can be added
```JavaScript
 $('table').restable({
  caption : true //Default is false
  caption_text : 'New Caption' //Default is null
 });
```
- **caption** : This will look for the `<caption>` element and display text at the top of the page.
- **caption_text** : This will override the `<caption>` element.
