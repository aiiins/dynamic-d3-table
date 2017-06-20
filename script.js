const theColumns = [{
    name: "Name",
    cl: "text",
    id: "color-name"
  },
  {
    name: "Length",
    cl: "num",
    id: "color-name-length"
  },
  {
    name: "Preview",
    cl: "img",
    id: "color-preview-img"
  }
]

const theData = [
  {
    "name": "AliceBlue"
  },
  {
    "name": "AntiqueWhite"
  },
  {
    "name": "Aqua"
  },
  {
    "name": "Aquamarine"
  },
  {
    "name": "Azure"
  },
  {
    "name": "Beige"
  },
  {
    "name": "Bisque"
  },
  {
    "name": "Black"
  },
  {
    "name": "BlanchedAlmond"
  },
  {
    "name": "Blue"
  },
  {
    "name": "BlueViolet"
  },
  {
    "name": "Brown"
  },
  {
    "name": "BurlyWood"
  },
  {
    "name": "CadetBlue"
  },
  {
    "name": "Chartreuse"
  },
  {
    "name": "Chocolate"
  },
  {
    "name": "Coral"
  },
  {
    "name": "CornflowerBlue"
  },
  {
    "name": "Cornsilk"
  },
  {
    "name": "Crimson"
  },
  {
    "name": "Cyan"
  },
  {
    "name": "DarkBlue"
  },
  {
    "name": "DarkCyan"
  },
  {
    "name": "DarkGoldenRod"
  },
  {
    "name": "DarkGray"
  },
  {
    "name": "DarkGreen"
  },
  {
    "name": "DarkGrey"
  },
  {
    "name": "DarkKhaki"
  },
  {
    "name": "DarkMagenta"
  },
  {
    "name": "DarkOliveGreen"
  },
  {
    "name": "DarkOrange"
  },
  {
    "name": "DarkOrchid"
  },
  {
    "name": "DarkRed"
  },
  {
    "name": "DarkSalmon"
  },
  {
    "name": "DarkSeaGreen"
  },
  {
    "name": "DarkSlateBlue"
  },
  {
    "name": "DarkSlateGray"
  },
  {
    "name": "DarkSlateGrey"
  },
  {
    "name": "DarkTurquoise"
  },
  {
    "name": "DarkViolet"
  },
  {
    "name": "DeepPink"
  },
  {
    "name": "DeepSkyBlue"
  },
  {
    "name": "DimGray"
  },
  {
    "name": "DimGrey"
  },
  {
    "name": "DodgerBlue"
  },
  {
    "name": "FireBrick"
  },
  {
    "name": "FloralWhite"
  },
  {
    "name": "ForestGreen"
  },
  {
    "name": "Fuchsia"
  },
  {
    "name": "Gainsboro"
  },
  {
    "name": "GhostWhite"
  },
  {
    "name": "Gold"
  },
  {
    "name": "Goldenrod"
  },
  {
    "name": "Gray"
  },
  {
    "name": "Green"
  },
  {
    "name": "GreenYellow"
  },
  {
    "name": "Grey"
  },
  {
    "name": "HoneyDew"
  },
  {
    "name": "HotPink"
  },
  {
    "name": "IndianRed"
  },
  {
    "name": "Indigo"
  },
  {
    "name": "Ivory"
  },
  {
    "name": "Khaki"
  },
  {
    "name": "Lavender"
  },
  {
    "name": "LavenderBlush"
  },
  {
    "name": "LawnGreen"
  },
  {
    "name": "LemonChiffon"
  },
  {
    "name": "LightBlue"
  },
  {
    "name": "LightCoral"
  },
  {
    "name": "LightCyan"
  },
  {
    "name": "LightGoldenRodYellow"
  },
  {
    "name": "LightGray"
  },
  {
    "name": "LightGreen"
  },
  {
    "name": "LightGrey"
  },
  {
    "name": "LightPink"
  },
  {
    "name": "LightSalmon"
  },
  {
    "name": "LightSeaGreen"
  },
  {
    "name": "LightSkyBlue"
  },
  {
    "name": "LightSlateGray"
  },
  {
    "name": "LightSlateGrey"
  },
  {
    "name": "LightSteelBlue"
  },
  {
    "name": "LightYellow"
  },
  {
    "name": "Lime"
  },
  {
    "name": "LimeGreen"
  },
  {
    "name": "Linen"
  },
  {
    "name": "Magenta"
  },
  {
    "name": "Maroon"
  },
  {
    "name": "MediumAquaMarine"
  },
  {
    "name": "MediumBlue"
  },
  {
    "name": "MediumOrchid"
  },
  {
    "name": "MediumPurple"
  },
  {
    "name": "MediumSeaGreen"
  },
  {
    "name": "MediumSlateBlue"
  },
  {
    "name": "MediumSpringGreen"
  },
  {
    "name": "MediumTurquoise"
  },
  {
    "name": "MediumVioletRed"
  },
  {
    "name": "MidnightBlue"
  },
  {
    "name": "MintCream"
  },
  {
    "name": "MistyRose"
  },
  {
    "name": "Moccasin"
  },
  {
    "name": "NavajoWhite"
  },
  {
    "name": "Navy"
  },
  {
    "name": "OldLace"
  },
  {
    "name": "Olive"
  },
  {
    "name": "OliveDrab"
  },
  {
    "name": "Orange"
  },
  {
    "name": "OrangeRed"
  },
  {
    "name": "Orchid"
  },
  {
    "name": "PaleGoldenRod"
  },
  {
    "name": "PaleGreen"
  },
  {
    "name": "PaleTurquoise"
  },
  {
    "name": "PaleVioletRed"
  },
  {
    "name": "PapayaWhip"
  },
  {
    "name": "PeachPuff"
  },
  {
    "name": "Peru"
  },
  {
    "name": "Pink"
  },
  {
    "name": "Plum"
  },
  {
    "name": "PowderBlue"
  },
  {
    "name": "Purple"
  },
  {
    "name": "Red"
  },
  {
    "name": "RosyBrown"
  },
  {
    "name": "RoyalBlue"
  },
  {
    "name": "SaddleBrown"
  },
  {
    "name": "Salmon"
  },
  {
    "name": "SandyBrown"
  },
  {
    "name": "SeaGreen"
  },
  {
    "name": "SeaShell"
  },
  {
    "name": "Sienna"
  },
  {
    "name": "Silver"
  },
  {
    "name": "SkyBlue"
  },
  {
    "name": "SlateBlue"
  },
  {
    "name": "SlateGray"
  },
  {
    "name": "SlateGrey"
  },
  {
    "name": "Snow"
  },
  {
    "name": "SpringGreen"
  },
  {
    "name": "SteelBlue"
  },
  {
    "name": "Tan"
  },
  {
    "name": "Teal"
  },
  {
    "name": "Thistle"
  },
  {
    "name": "Tomato"
  },
  {
    "name": "Turquoise"
  },
  {
    "name": "Violet"
  },
  {
    "name": "Wheat"
  },
  {
    "name": "White"
  },
  {
    "name": "WhiteSmoke"
  },
  {
    "name": "Yellow"
  },
  {
    "name": "YellowGreen"
  }
];

const table = d3.select("#table-container")
  .append("table");

table.append("thead");
table.append("tbody");

const headerRow = table.select("thead") // the destination of the Column data
  .selectAll("th")
  .data(theColumns) // bind the header row data to the `thead` selection
  .enter().append("th")
  .attr("class", d => d.cl)
  .attr("id", d => d.id)
  .text(d => d.name);
