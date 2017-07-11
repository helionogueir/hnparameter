/**
 * - File require variables
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.1.1
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
     * @param Function callback
     * @return Object
     */
    this.json = function (filename, encode, keys, callback) {
        var data = new Object();
        try {
            var cfg = null;
            encode = ((undefined !== encode) && ("" !== encode)) ? encode : "utf8";
            if (use.fs.existsSync(filename)) {
                metadata = JSON.parse(use.fs.readFileSync(filename, encode));
                if (use.Require.validate(keys, metadata, callback)) {
                    data = metadata;
                }
            } else {
                if (callback instanceof Function) {
                    callback(new Error("File \"" + filename + "\"not exists"));
                }
            }
        } catch (err) {
            if (callback instanceof Array) {
                callback(err);
            }
        }
        return data;
    };

};
module.exports = File;