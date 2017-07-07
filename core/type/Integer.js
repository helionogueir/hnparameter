/**
 * - Require integer variable
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.0.3
 */
var Integer = new function () {

    /**
     * - Validate integer
     * @param int value
     * @return bool
     */
    this.validate = function (value) {
        var valid = true;
        var parseValue = parseInt(value);
        if (parseValue !== value) {
            valid = false;
        }
        return valid;
    };

};
module.exports = Integer;