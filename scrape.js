// written to work in the console using
// the bookmarklet utility described here
// https://medialab.github.io/artoo/

var colors = artoo.scrape('ul#portfolio > li > a', {
  name: 'text'
//  hex: function () { return $(this).parent.style.background; }
});

artoo.savePrettyJson(colors);
