let perPage = 5;
    let page = req.params.page || 1;

    Topic
    //traer todos 
    .find({})
    //saltar pagina 
    .skip((perPage * page)- perPage)
    .limit(perPage)
    //para ejecutar
    .exec((err, topics) => {
        //cuantos temas hay en total 
        Topic.count((err,count) => {
        if(err) return next(err);
        res.render('/api/v1',{
            topics, 
            //en que numero de pagina
            current:page, 
            //total de paginas
            pages: Math.ceil(count / perPage)
        })
    })
    })