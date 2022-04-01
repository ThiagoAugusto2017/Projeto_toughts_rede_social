const express = require('express'); // invocamos o express
const exphbs = require('express-handlebars'); // handlesbars
const session = require('express-session'); // uma pasta dinamica
const FileStore = require('session-file-store')(session); // este modulo salva dentro da pasta session
const flash = require('express-flash'); // ele controla msg

const app = express(); // iniciamos o express

const conn = require('./db/conn') // puxamos os dados da configuração do banco de dados

//* models - config
const Tought = require('./models/tought')
const User = require('./models/user')


//* templete engine
app.engine('handlesbars', exphbs.engine())
app.set('view engine', 'handlebars')


//*receber resposta do body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


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


//*conexao com a localhost
conn.sync().then(() => { // aqui estamos fazendo a ligação do express com o localhost
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });