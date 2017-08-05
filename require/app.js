module.exports = function(i, j) {
    return {
        repeat: function repeat() {
            for (i = 0; i < j; i++) {
                for (i = 0; i < j; i++) {}
            }
        }
    }
}