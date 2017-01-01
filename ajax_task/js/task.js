var path = 'https://jsonplaceholder.typicode.com/users'

$(document).ready(function() {
    var users = "<ul>";
    $.ajax({
            url: path,
            type: 'GET',
            // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
            // data: { param1: 'value1' },
            // method: 'GET',
            cache:true,
        })
        .done(function(msg) {
            // var msg = $.parseJSON(msg);
            console.log(msg)
            for (var i = 0; i < msg.length; i++) {
                users += "<li id='" + msg[i].id + "'>" + msg[i].name + "</li>"
            }
            users += "</ul>"
            $('#result').html(users)
        })

    // $(document).on('click', 'li', function(event) {
    //  console.log($(this))
    //   alert("hi " + $(this).text())
    //   /* Act on the event */
    // });

    $(document).on('click', 'li', function(event) {
        /* Act on the event */
        $(this).css("color","brown")
        var num = parseInt($(this).attr('id')) - 1;
        var disp = "<table><tr>"
        cache:true,
        $.ajax({
                url: path,
                type: 'GET',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                // data: {param1: 'value1'},
            })
            .done(function(msg) {
                console.log(msg[num])
                disp += "<tr><th>Name</th><th>UserName</th><th>Email</th></tr><tr>"
                disp+= "<td>"+msg[num].name+"</td><td>"+msg[num].username+"</td><td>"+msg[num].email+"</td>";
                disp += "</tr></table>"
                $('#detail').html(disp);
                // $('#result').append(disp)
            })

    });
});
