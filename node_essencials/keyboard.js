exports.onReadable = function( callback ) {
    process.stdin.on('readable', function () {
        var chunk = process.stdin.read();
        if (chunk !== null){
            var data = chunk.toString().replace(/\n/,'');
        }
    });
};