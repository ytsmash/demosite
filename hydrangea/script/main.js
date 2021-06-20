'use strict';

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function (item, index) {
    item.onmouseover = function () {
        document.getElementById('bigimg').src = this.dataset.image;
    }
});