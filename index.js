const express = require('express'); // invocamos o express
const exphbs = require('express-handlebars'); // handlesbars
const session = require('express-session'); // uma pasta dinamica
const FileStore = require('session-file-store')(session); // este modulo salva dentro da pasta session
const flash = require('express-flash'); // ele controla msg

const app = express(); // iniciamos o express

const conn = require('./db/conn') // puxamos os dados da configuração do banco de dados

//* models - config
const Tought = require('./models/tought')
const User = require('./models/User')


//*receber resposta do body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


//* templete engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')




//*sesion middleware
app.use(session({ // onde o express vai salva session, para deixar o usuario logado
    name: 'session',
    secret: 'nosso_secret', // segredo de criptografia
    resave: false, // caso a coneçao caia ele tera que logar novamente
    saveUninitialized: false, //
    store: new FileStore({ //esta FileStore me permite grava arquivos da session
        logFn: function () {},
        path: require('path').join(require('os').tmpdir(), //caminho para chegar na pasta ssesion
            'sessions'),
    }),
    cookie: { // vamos salvar tempo para conexao
        secure: false, //
        maxAge: 360000, // tempo de session
        expires: new Date(Date.now() + 360000), // aqui descrimina o tempo
        httpOnly: true // como estamos em localhost fica em http
    }
}))

//* flash messages
app.use(flash()) // msg do status de alteração de banco de dados

//* public path
app.use(express.static('public')) //chamada para o css e stylus

//* set session to res
app.use((req, res, next) => { // criamos a session
    if (req.session.userid) {
        res.locals.session = req.session
    }
    next()
})
//* Import Controllers
const ToughtController = require('./controller/ToughtController')

//* Import Routes
//aqui importamos todos os dados da pagina
const tougthsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

//*Routes
app.use('/tougths', tougthsRoutes) // rotas e
app.use('/', authRoutes) // rotas e
app.get('/', ToughtController.showtoughts) // puxamos tudo que esta na controller


// //*conexao com a localhost
conn.sync().then(() => { // aqui estamos fazendo a ligação do express com o localhost
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

// //reset das tabelas no banco de dados
// conn
//     .sync({
//         force: true
//     })
//     .then(() => {
//         app.listen(3000);
//     })
//     .catch((err) => console.log(err));