$(function(){

    $("#buttonPost").on("click", function (event){
        event.preventDefault();

        var newburg = {
            name: $("#burger").val().trim(),
        }
        
        $.ajax("/api/burger", {
            type: "POST", 
            data: newburg
        }).then(function(){
             console.log(newburg);
             location.reload();
        });
       

    }); 
    $(".devoure").on("click", function (event){
        event.preventDefault();
        console.log($(this).data("id"))
        var idOfBurg = {
           id: $(this).data("id")
        }
        $.ajax("/api/burger", {
            type: "PUT",
            data: idOfBurg
        }).then(function(){
            location.reload();
        })
    })

})