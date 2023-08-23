const express    =  require('express');
const mongoose   =  require('mongoose');
const morgan     =  require('morgan');
const bodyParser =  require('body-parser');
const router     =  require('./routes/index');


//connecion a base de datos
//el usuario nos creamos en mongo
const user = 'userforshoping';
const password = '65DD1R913zTMa63M';
const DB_Name = 'shoping'
const uri  =  `mongodb+srv://${user}:${password}@cluster0.offjxfc.mongodb.net/${DB_Name}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser : true , useUnifiedTopology : true} 
    )

    .then( () => console.log('connected @'))
    .catch(e => console.log(e));


const servidor =  express();
servidor.use(morgan('dev'));
servidor.use(bodyParser.urlencoded({extended:true}));
servidor.use(bodyParser.json());
servidor.use(router)
const PORT = process.env.PORT || 3003;


servidor.listen(PORT, () => {
    console.log( `servidor corriendo en el puerto ${PORT}`)
})