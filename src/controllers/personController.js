
exports.get = (req, res, next) => {
    res.status(200).send({
        'idTroll': 1231,
        'name': 'Mayke'
    });
};


exports.getById = (req, res, next) => {
    res.status(200).json({
        'name': 'NomeTroll'
    });
};



exports.post = (req, res, next) => {
    res.status(201).send({
        'idTroll': 1,
        'name': req.body.name
    });
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({
        'idTroll': id,
        'name': req.body.name
    });
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({
        'idTroll': id
    });
};