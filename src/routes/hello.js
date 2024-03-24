const router = require('express').Router();

router.route('/').get((req, res) => {  
    msg = `Hello ${req.query.name || 'World'}! From get request`;
    res.json({msg});
});

router.route('/:lang').get((req, res) => {
    switch (req.params.lang) {
        case 'es':
            msg = `Hola Mundo!`;
            break;
        case 'fr':
            msg = `Bonjour le Monde!`;
            break;
        default:
            msg = `Hello World!`;
            break;
    }
    res.json({msg});
});

router.route('/').post((req, res) => {
    const result = req.body.a + req.body.b;
    
    msg = `El resultado de la suma es: ${result}`;
    res.json({msg});
});


module.exports = router;