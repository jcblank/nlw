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
    "Química"
]

// Variável para os dias da semana 
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Chamar as páginas para renderização

function getSubject(subjectNumber) {
    const position = + subjectNumber - 1
    return subject[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number(hour * 60) + minutes
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}