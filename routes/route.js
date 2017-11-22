module.exports = function (app) {
    app.get('/products', function (req, res, next) {
        res.status(200).json({"products": 
            [
                {
                    "ID":"1", 
                    "Nombre":"Lucas", 
                    "Apellido":"Gaitan",
                    "DNI":"38762511"
                },
                {
                    "ID":"1", 
                    "Nombre":"Pepe", 
                    "Apellido":"Gomez",
                    "DNI":"213214124"
                },
                {
                    "ID":"1", 
                    "Nombre":"Guille", 
                    "Apellido":"Grillo",
                    "DNI":"42141251"
                }
            ]    
        });
    });

    app.get('*', function(req, res, next) {
        res.render('../web/index.html');
    });
};