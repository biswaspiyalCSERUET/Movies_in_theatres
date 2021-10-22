async function GenerateTable() {

    let response = await fetch('https://imdb-api.com/en/API/InTheaters/k_iu0t8k5i');
    let data = await response.json();
    let movies = data.items;


    let tableData = movies.map(x => {
        return {
            Name: x.title,
            Genre: x.genres
        }
    });

    let col = ["Name", "Genre"];

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < tableData.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = tableData[i][col[j]];
        }
    }

    var dvTable = document.getElementById("movieTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}