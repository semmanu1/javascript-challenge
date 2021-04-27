// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function populate() {
    tableData.map(data => {
        var new_row = tbody.append("tr");
        new_row.append('td').text(data.datetime);
        new_row.append('td').text(data.city);
        new_row.append('td').text(data.state);
        new_row.append('td').text(data.country);
        new_row.append('td').text(data.shape);
        new_row.append('td').text(data.durationMinutes);
        new_row.append('td').text(data.comments);
    })
};

populate();

var filterButton = d3.select('#filter-btn');
filterButton.on('click', function() {
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime").property("value");
    var filtered = tableData.filter(data => data.datetime == dateInput);
    tbody.html("");
    filtered.forEach(i => {
        var new_row = tbody.append("tr");

        new_row.append("td").text(i.datetime);
        new_row.append("td").text(i.city);
        new_row.append("td").text(i.state);
        new_row.append("td").text(i.country);
        new_row.append("td").text(i.shape);
        new_row.append("td").text(i.durationMinutes);
        new_row.append("td").text(i.comments);
    });
});

