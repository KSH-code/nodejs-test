module.exports = function(ii, jj) {
    return {
        repeat: function repeat() {
            for (let i = 0; i < ii; i++) {
                for (let j = 0; jj < jj; j++) {}
            }
        }
    }
}