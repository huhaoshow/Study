const kits = new Object;
// 最小值
kits.min = function () {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (min > arguments[i]) min = arguments[i];
    }
    return min;
}

//最大值
kits.max = function () {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (max < arguments[i]) max = arguments[i];
    }
    return max;
}

// 一组数的求和
kits.add = function () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// 生成n~m随机数
kits.randomInt = function (min = 3, max = 6) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 生成rgb随机颜色
kits.randomRGBColor = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// 生成16进制随机颜色
kits.randomHexColor = function () {
    let HexNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E'];
    let Hex = '#';
    for (let i = 1; i <= 6; i++) {
        Hex += HexNum[Math.floor(Math.random() * HexNum.length)];
    }
    return Hex;
}

// 日期格式化
kits.formatDate = function () {
    let now = new Date();
    let yyyy = now.getFullYear();
    let mm = now.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let dd = now.getDate();
    if (dd < 10) dd = '0' + dd;
    return yyyy + '-' + mm + '-' + dd;
}

// 时间格式化
kits.formatTime = function () {
    let now = new Date;
    let HH = now.getHours();
    if (HH < 10) HH = "0" + HH;
    let MM = now.getMinutes();
    if (MM < 10) MM = "0" + MM;
    let SS = now.getSeconds();
    if (SS < 10) SS = "0" + SS;
    return HH + '-' + MM + '-' + SS;
}

//小于10补0
kits.zero = function (num = 0) {
    if (num < 10) {
        return '0' + num;
    }
    else {
        return num;
    }
}

// 冒泡排序
kits.arraySort = function () {
    let t;
    for (let i = 0; i < arguments.length; i++) {
        for (let j = i; j < arguments.length; j++) {
            if (+arguments[i] > +arguments[j + 1]) {
                t = arguments[i];
                arguments[i] = arguments[j + 1];
                arguments[j + 1] = t;
            }
        }
    }
    return arguments;
}