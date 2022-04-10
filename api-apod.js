$("#submit").click(function (event) {
    event.preventDefault();
    let ResultadoDate = $("#date").val();
    buscarInfos(ResultadoDate);
});

function buscarInfos(ResultadoDate) {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=tS9F0K3v4W97bNw4yVK2ecVMogviTIwmshqXbaU9&date=${ResultadoDate}`,
        success: function (resposta) {
            if (resposta.media_type == "image") {
                $("#mostra-title").text(resposta.title);
                $("#mostra-foto").attr("src", resposta.url);
            } else {
                $("#mostra-title").text(resposta.title);
                $("#mostra-video").attr("src", resposta.url);
            }
        },
    });
}