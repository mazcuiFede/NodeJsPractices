//const Emitter = require('./emitter')
const { EventEmitter } = require("events")
const { SAVE } = require("./event-names")
//const emitter = new Emitter()
const emitter = new EventEmitter()


emitter.on(SAVE, () => {
    console.log("On save activated")
})
emitter.on(SAVE, () => {
    console.log("On save activated 2")
})

emitter.emit("save")