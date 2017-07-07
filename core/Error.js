/**
 * - Error resources
 * @author Helio Nogueira <helio.nogueir@gmail.com>
 * @version 0.0.3
 */
var Error = new function () {

    var use = new Object({
        Require: require("./Require")
    });

    /**
     * - Get only messages in list errors
     * @param list<Error> list
     * @return String
     */
    this.message = function (list, showStack) {
        var messages = Array();
        if (list instanceof Array) {
            showStack = (undefined !== showStack) ? showStack : false;
            for (var i = 0, error; (error = list[i++]);) {
                var message = "";
                if (use.Require.validate({ message: "string" }, error)) {
                    message += error.message;
                }
                if (showStack && use.Require.validate({ stack: "string" }, error)) {
                    message += error.stack;
                }
                messages[messages.length] = message;
            }
        }
        return messages;
    };

};
module.exports = Error;