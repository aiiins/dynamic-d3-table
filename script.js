const table = d3.select("#table-container") // the destination of the table
  .append("table"); // add an empty table to the document

table.append("thead"); // add the header container to the table
table.append("tbody");

d3.select('body').append('h1').text("hello, semantic colors table")
