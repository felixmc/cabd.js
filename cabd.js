function cabd(source) {
    var result = [],
        offset = source.length % 2 === 0 ? 2 : 1;
    for (var i = 0; i < source.length; i++) {
        result[i] = source[i < source.length / 2 ? source.length - 2 * i - offset : 2 * i + (offset - 1) - source.length];
    }
    return result.join('');
}

function uncabd(source) {
    var result = [],
        offset = source.length % 2 === 0 ? 1 : 0;
    for (var i = 0; i < source.length; i++) {
        result[i] = source[i % 2 === 0 ? (source.length - offset - 1 - i) / 2 : (source.length - offset + i * 1) / 2];
    }
    return result.join('');
}
