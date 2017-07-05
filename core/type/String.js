/**
 * - Require string variable
 * @author Helio Nogueira <helio.nogueira@kroton.com.br>
 * @version 1.0.0
 */
var String = new function () {

    /**
     * - Validate string
     * @param string value
     * @return bool
     */
    this.validate = function (value) {
        var valid = true;
        if ((null === value) || ("" === value)) {
            valid = false;
        }
        return valid;
    };

};
module.exports = String;