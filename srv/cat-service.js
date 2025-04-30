module.exports = srv => {

    console.log(`Service name: ${srv.name} is served as ${srv.path}`);

    srv.after('READ', 'Books', xs => {
       
        console.log(xs);


        const newBooks = []
        xs.forEach(x => {
            if(x.stock > 500) {
                x.title = '(20%off!) '  + x.title
            }
            newBooks.push(x);
        })
        console.log(newBooks);
        return newBooks;
        
        
    })
    
}