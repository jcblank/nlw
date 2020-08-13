const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) =>  {

    proffyValue = {
        name: "João Carlos", 
        avatar: "https://avatars0.githubusercontent.com/u/31256868?s=400&u=0e646356c7ff79142e5a27b8f55db927ad9d1925&v=4", 
        whatsapp: "8999958", 
        bio: "Entusiasta das melhores tecnologias de química avançada.  <br><br>Apaixonado por explodir coisas em laboratório e por mudar a   vida das pessoas através de experiências. Mais de 200.000 pessoas já  passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 1, 
        cost: "20", 
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220 
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220 
        }
    ]

//  await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys);

    const selectClassesProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesProffys);

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    console.log(selectClassesSchedules)
})