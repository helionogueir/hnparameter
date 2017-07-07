/**
 * - File require variables
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.0.3
 */
var File = new function () {

    var use = new Object({
        fs: require("fs"),
        Require: require("./Require")
    });

    /**
     * - Validate variables
     * @param string filename
     * @param string encode
     * @param Object keys
     * @param Object data
     * @param Array log
     * @return Object
     */
    this.json = function (filename, encode, keys, log) {
        var data = new Object();
        try {
            var cfg = null;
            encode = ((undefined !== encode) && ("" !== encode)) ? encode : "utf8";
            if (use.fs.existsSync(filename)) {
                metadata = JSON.parse(use.fs.readFileSync(filename, encode));
                if (use.Require.validate(keys, metadata, log)) {
                    data = metadata;
                }
            } else {
                if (log instanceof Array) {
                    log[log.length] = new Error("File not exists.");
                }
            }
        } catch (err) {
            if (log instanceof Array) {
                log[log.length] = err;
            }
        }
        return data;
    };

};
module.exports = File;