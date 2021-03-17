const mongoose = require("mongoose")
const axios = require("axios").default
const cheerio = require("cheerio")
const cron = require("node-cron");
const { BreakingNew } = require('./models')
const { MONGO_URI } = require('./config')
mongoose.connect(MONGO_URI, {useNewUrlParser:true})

cron.schedule("* */4 * * * *", async () => {
    console.log("ejecutando...")
    const html = await axios.get("https://www.infobae.com/")
    const $ = cheerio.load(html.data)
    const titles = $(".headline-title a")
    breakingNews = []
    titles.each((index, element) => {

        const breakingNew = {
            title: $(element).text(),
            link: $(element).attr("href")
        }
        
        breakingNews.push(breakingNew)
        
    })
    BreakingNew.insertMany(breakingNews)

})
    


// html.then(data => {
//     console.log(data)
// })

// 

// const Cat = mongoose.model("Cat", { name: String })

// const kitty = new Cat({name:"Galfield"})
// kitty.save().then(() => console.log("Cat has been saved"))

// Cat.find().then(console.log)