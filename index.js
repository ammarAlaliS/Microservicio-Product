function obtenerDatos() {
    fetch('127.0.0.1:3000/api/v1/clients/list')
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (respuesta) {
        var productList = document.getElementById('productList');

        if (respuesta.hasOwnProperty('body') && Array.isArray(respuesta.body.value)) {
            respuesta.body.value.forEach(function (producto) {
                var listItem = document.createElement('li');
                listItem.textContent = JSON.stringify(producto);
                productList.appendChild(listItem);
            });
        } else {
            console.log('La respuesta no tiene un arreglo de productos válido:', respuesta);
        }
    }).catch(function (error) {
        console.log('Error al obtener los productos:', error);
    });
}
