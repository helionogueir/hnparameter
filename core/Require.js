var use = new Object({
    Bool: require("./type/Bool"),
    String: require("./type/String"),
    Integer: require("./type/Integer"),
    Datetime: require("./type/Datetime")
});

/**
 * - Require variables
 * @author Helio Nogueira <helio.nogueira@kroton.com.br>
 * @version 1.0.0
 */
var Require = new function () {

    /**
     * - Validate variables
     * @param Object keys
     * @param Object data
     * @param Array log
     * @return bool
     */
    this.validate = function (keys, data, log) {
        var valid = true;
        var variable = "None";
        var type = "None";
        for (var namespace in keys) {
            if (valid) {
                variable = namespace;
                type = keys[namespace];
                if ((null === data) || ("" === data) || (undefined === data) || (null === data[namespace]) || ("" === data[namespace]) || (undefined === data[namespace])) {
                    valid = false;
                } else if (((keys[namespace] instanceof Object) || (keys[namespace] instanceof Array))
                    && ((data[namespace] instanceof Object) || (data[namespace] instanceof Array))) {
                    valid = this.validate(keys[namespace], data[namespace], log);
                } else {
                    switch (keys[namespace]) {
                        case "bool":
                            valid = use.Bool.validate(data[namespace]);
                            break;
                        case "string":
                            valid = use.String.validate(data[namespace]);
                            break;
                        case "int":
                            valid = use.Integer.validate(data[namespace]);
                            break;
                        case "datetime":
                            valid = use.Datetime.validate(data[namespace]);
                            break;
                        case "Array":
                            valid = (!(data[namespace] instanceof Array)) ? false : valid;
                            break;
                        case "Object":
                            valid = (!(data[namespace] instanceof Object)) ? false : valid;
                            break;
                        default:
                            valid = false;
                            break;
                    }
                }
            }
        }
        if (!valid) {
            if (log instanceof Array) {
                var message = "Variable \"" + variable + " (" + type + ")\" is invalid";
                if (keys instanceof Object) {
                    message += " (Keys: " + JSON.stringify(keys) + ")";
                }
                log[log.length] = new Error(message);
            }
        }
        return valid;
    };

};
module.exports = Require;