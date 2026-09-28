var CACHE_VERSION = '?v40';

function actualizarImagenes() {
    var imagenes = document.querySelectorAll('img');
    imagenes.forEach(function (img) {
        var srcOriginal = img.getAttribute('src');
        if (srcOriginal && srcOriginal.indexOf('cdn.jsdelivr.net') === -1 && srcOriginal.indexOf('cdnjs.cloudflare.com') === -1 && srcOriginal.indexOf('unpkg.com') === -1 && srcOriginal.indexOf('jquery.com') === -1) {
            var srcLimpio = srcOriginal.split('?')[0];
            img.setAttribute('src', srcLimpio + '?v=' + new Date().getTime());
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    actualizarImagenes();
});
