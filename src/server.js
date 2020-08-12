// Servidor express
const express = require('express')
const server = express()

// Configuração nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

// Dados
// Variável para o loop do subject
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Química",
]

// Variável para os dias da semana 
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// dados dos professores cadastrados
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;    u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "8999958", 
        bio: "Entusiasta das melhores tecnologias de química avançada.  <br><br>Apaixonado por explodir coisas em laboratório e por mudar a   vida das pessoas através de experiências. Mais de 200.000 pessoas já  passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
    {
        name: "João Carlos", 
        avatar: "https://avatars0.githubusercontent.com/u/31256868?s=400&u=0e646356c7ff79142e5a27b8f55db927ad9d1925&v=4", 
        whatsapp: "8999958", 
        bio: "Entusiasta das melhores tecnologias de química avançada.  <br><br>Apaixonado por explodir coisas em laboratório e por mudar a   vida das pessoas através de experiências. Mais de 200.000 pessoas já  passaram por uma das minhas explosões.", 
        subject: "Física", 
        cost: "20", 
        weekday: [2], 
        time_from: [720], 
        time_to: [1220] 
    }
]


// Chamar as páginas para renderização

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subject[position]
}


function pageLanding(req,res) {
    return res.render("index.html")
}

function pageStudy(req,res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req,res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length != 0
    // incluir dados na array
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", { subjects, weekdays })
}

// Início da configuração do servidor
server
//Configuração de arquivos estáticos (css/scripts/imgagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5000)

