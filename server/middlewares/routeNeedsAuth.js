module.exports = function(req, res, next){
    console.log('route needs auth executed');
    req.needsAuth = req.originalUrl.indexOf('/auth') === -1;
    console.log(req.needsAuth);
    next();
}