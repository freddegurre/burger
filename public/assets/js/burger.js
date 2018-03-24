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
        })
       

    })
})