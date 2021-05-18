$(document).ready(function(){

    $('#enviarCorreo').click(function(){
        alert('El correo fue enviado exitosamente');
    });

    $('#titulo1').click(function() {
        $('#toggle1').toggle('slow');
      });

    $('#titulo2').click(function() {
        $('#toggle2').toggle('slow');
    });

    $('#titulo3').click(function() {
        $('#toggle3').toggle('slow');
    });

    $('#cambio1').dblclick(function(){
        $(this).css({
        "color": "red",
      });
    });

    $('#cambio2').dblclick(function(){
        $(this).css({
        "color": "red",
      });
    });
        

    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    });

});
