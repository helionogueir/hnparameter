/**
 * - Require boolean variable
 * @author Helio Nogueira <helio.nogueira@kroton.com.br>
 * @version 1.0.0
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