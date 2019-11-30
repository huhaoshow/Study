window.onload = function () {
    const main = document.querySelector('.main');
    const small = document.querySelector('.small');
    const mask = document.querySelector('.mask');
    const bigImg = document.querySelector('.bigImg');
    const big = document.querySelector('.big');
    // 鼠标移入
    main.onmouseenter = function (e) {
        mask.style.display = 'block';
        big.style.display = 'block';
    }
    // 鼠标移出
    main.onmouseleave = function (e) {
        mask.style.display = 'none';
        big.style.display = 'none';
    }
    // 鼠标在main里面移动
    main.onmousemove = function (e) {
        const x = e.pageX - 10 - 80 / 2;
        const y = e.pageY - 10 - 80 / 2;
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > (500 - 80)) x = (500 - 80);
        if (y > (281 - 80)) y = (281 - 80);
        mask.style.left = x + 'px';
        mask.style.top = y + 'px';
        bigImg.style.top = -y * 1406.25 / 281.25 + 'px';
        bigImg.style.left = -x * 2500 / 500 + 'px';
        /*
        注意：  遮罩盒子宽/大图盒子宽 === mask.style.left/-bigImg.style.left === smallImg.width/bigImg.width 
                遮罩盒子高/大图盒子高 === mask.style.top/-bigImg.style.top === smallImg.height/bigImg.height
         原图宽高比为1920/1080 === 1.77777;
         设小图的宽为500,高为281.25;
        大图盒子宽为400，高为400
         要使图片放大5倍
         则
         大图宽为2500，高为1406.25
         遮罩盒子宽为80，高为80
         */

    }
}