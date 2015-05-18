
        function init() {
            LoadTable(document.getElementById("horrorButton"),horrorData.horror);
        }

        function LoadTable(that, path) {
            //change the color of the selected button
            that.setAttribute("class", "selected");

            // change the other Button to not selected
            if (path==romanData.roman){
                var elem = document.getElementById("romanButton");
                elem.setAttribute("class", "buttons");
            }else {
                var elem = document.getElementById("horrorButton");
                elem.setAttribute("class", "buttons");
            }

            // remove existing childs under the input element
            var horrorInsert = document.getElementById("insert");

            while (horrorInsert.hasChildNodes()) {
                horrorInsert.removeChild(horrorInsert.lastChild);
            }

            //insert horror-favorits-properties
            var tr = document.createElement('tr');
            for(propert in path[0]){

                var td = tr.appendChild(document.createElement('td'));
                td.innerHTML = propert;
            }
            tr.setAttribute("class", "tableHeadder");
            insert.appendChild(tr);

            // insert horror-favorits
            for (index in path) {
                var tr = document.createElement('tr');
                for(property in path[index])
                {

                    var td = tr.appendChild(document.createElement('td'));
                    td.innerHTML = path[index][property];
                    insert.appendChild(tr);
                }
                tr.setAttribute("class", "tableBody");
            }
        }

