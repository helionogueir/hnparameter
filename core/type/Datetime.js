/**
 * - Require datatime variable
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.0.3
 */
var Datatime = new function () {

    /**
     * - Validate datatime
     * @param string value
     * @return bool
     */
    this.validate = function (value) {
        var valid = false;
        var partterns = new Array(
            /^(\d{4})\-(\d{2})\-(\d{2})( |\T)(\d{2})\:(\d{2})\:(\d{2})$/
        );
        for (var i = 0, parttern; (parttern = partterns[i++]);) {
            if ((new RegExp(parttern)).test(value)) {
                valid = true;
                break;
            }
        }
        return valid;
    };

};
module.exports = Datatime;