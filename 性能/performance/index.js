
// const start_time = performance.now()

// for (let i = 0; i < 100000; i++) {
//     console.log(i)    
// }

// const end_time = performance.now()

// console.log(`runJs time: ${end_time - start_time} ms`)

// mark 写法
performance.mark('start_task')
for (let i = 0; i < 100000; i++) {
    console.log(i)    
}
performance.mark('end_task')
performance.measure('task_time', 'start_task', 'end_task')
const measures = performance.getEntriesByName('task_time')
measures.forEach(measure => {
    console.log(`time: ${measure.duration} ms`)
})