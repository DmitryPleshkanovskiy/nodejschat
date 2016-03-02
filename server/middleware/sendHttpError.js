/**
 * Created by Nick on 02.03.2016.
 */

module.exports = function(req, res, next) {
    res.sendHttpError = function(error) {

        res.status(error.status);
        if(res.req.headers['x-requested-with']=='XMLHttpRequest') {
            res.json(error);
        } else {
            res.json({"message": "error page"});
        }
    };

    next();
};

/*ERROR*/