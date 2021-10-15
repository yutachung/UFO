// import the data from data.js
const tableData = data;

//Reference the HTMLtaable using d3
// d3.select will tell JS to look for the <tbody> tags in HTML
var tbody = d3.select("tbody");

// Build a table and pass data in as the argument
// tbody.html("") will clear the table
function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add
        //each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
//Loop through each field in the dataRow argument
// these will become table data and be wrapped in <td> tags when appended



// code for button
// .select("#datetime") will make d3 look for #datetiem id in the
// HTML tags
// chaining .property("value") will look for where the date values
// are stored and also hold the info in the "date" variable
function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date
    if (date) {
        //Apply 'filter' to the table data to only keep the
        // rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    // @Note: If no date was entered, then filteredData will
    // just be the original tableData
    buildTable(filteredData);
}

//Attach an event to listen to for the new form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);

