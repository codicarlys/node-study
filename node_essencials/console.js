var konsole = {
    log: function (msg) {
        process.stdout.write(msg + '\n');
    },
    error: function (msg) {
        process.stder.write(msg + '\n');
    }
};

konsole.log('A');