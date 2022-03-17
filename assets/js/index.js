
$(document).ready(function () {
    $("#add_user").submit(function (event) {
        alert("Data Inserted Successfully!");
    });

    $("#update_user").submit(function (event) {
        event.preventDefault();
        var unindexed_Array = $(this).serializeArray();
        var data = {};
        $.map(unindexed_Array, function (n, i) {
            data[n['name']] = n['value']
        });

        var request = {
            "url": `http://localhost:3032/api/users/${data.id}`,
            "method": "PUT",
            "data": data
        }

        $.ajax(request).done(function (response) {
            alert("data updated successfully")
        })
        console.log(data);
    })


    // if (window.location.pathname == "/") {
        $ondelete = $(".table tbody td a.delete");
        $ondelete.click(function() {
            var id = $(this).attr("data-id");

            var request = {
                "url": `http://localhost:3032/api/users/${id}`,
                "method": "DELETE"
            }

            if (confirm("Do you really Want to Delete this Record?")) {
                $.ajax(request).done(function (response) {
                    alert("data deleted successfully");
                    location.reload();
                });
            }
        });
    // }

});