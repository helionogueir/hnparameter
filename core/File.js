/**
 * - File require variables
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.1.2
 */
var File = new function() {

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
     * @return Object
     */
    this.json = function(filename, encode, keys) {
        var data = new Object();
        try {
            var cfg = null;
            encode = ((undefined !== encode) && ("" !== encode)) ? encode : "utf8";
            if (use.fs.existsSync(filename)) {
                metadata = JSON.parse(use.fs.readFileSync(filename, encode));
                if (use.Require.validate(keys, metadata)) {
                    data = metadata;
                }
            } else {
                throw new Error("File \"" + filename + "\"not exists");
            }
        } catch (err) {
            throw new Error(err.toString());
        }
        return data;
    };

};
module.exports = File;