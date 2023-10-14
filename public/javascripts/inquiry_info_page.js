$(document).ready(function () {
    console.log("ready!");
    $("#searchInput").on('input', function () {
        var contents = this.value;
        var data = {
            contents: contents
        }
        $.ajax({ // ajax call starts
            type: "POST", // POST method
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            url: "/inquiry/online/searchContents",
            success: function (response) {
                const searchResults = document.getElementById('searchResults');
                const searchResultsBody = document.getElementById('searchResultsBody');
                searchResultsBody.innerHTML = '';
                if (response['status'] === 'success') {

                    for (let i = 0; i < response['data'].length; i++) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                <td>${response['data'][i]['contents']}</td>
                <td>${response['data'][i]['type']}</td>
            `;
                        searchResultsBody.appendChild(row);
                        searchResults.style.display = 'block';
                        searchResults.classList.add('show');


                    }

                } else {
                    searchResults.style.display = 'none';
                    searchResults.classList.remove('show');

                }
            },
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target !== searchInput && event.target !== searchResults) {
            searchResults.classList.remove('show');
        }
    });

    searchResults.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});