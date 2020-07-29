const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('* 5/ * 12 * * 3', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) //5 em 5 minutos 


setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfweek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30
const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando tarefa2', new Date().getSeconds)
})