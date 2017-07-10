/**
 * - Require datatime variable
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.1.0
 */
var Datatime = new function () {

    /**
     * - Validate datatime
     * @param string value
     * @return bool
     */
    this.validate = function (value) {
        var valid = false;
        var patterns = new Array(
            /^(\d{4})\-(\d{2})\-(\d{2})( |\T)(\d{2})\:(\d{2})\:(\d{2})$/
        );
        for (var i = 0, pattern; (pattern = patterns[i++]);) {
            if ((new RegExp(pattern)).test(value)) {
                valid = true;
                break;
            }
        }
        return valid;
    };

};
module.exports = Datatime;