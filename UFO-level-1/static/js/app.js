// from data.js
var tableData = data;
console.log(tableData);
// Reference to the table body
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr"); 
    // Object.entries to console.log used for each UFO sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
      });
    });

