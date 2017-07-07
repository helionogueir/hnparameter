/**
 * - Require boolean variable
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.0.3
 */
var Bool = new function () {

    /**
     * - Validate boolean
     * @param bool value
     * @return bool
     */
    this.validate = function (value) {
        var valid = true;
        if ((true !== value) && (false !== value)) {
            valid = false;
        }
        return valid;
    };

};
module.exports = Bool;