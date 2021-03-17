const { CRUD } = require('./helpers')
const db = require('./models')

//Obtengo los argumentos
const params = process.argv

//Existen dos por defecto, por lo que si solo hay dos, no se envió nada
if (params.length <= 2) {
    process.exit(0)
}

//Obtengo a partir del segundo parámetro
//Parseo algo del tipo "--create:Contact --firstname=matias"
const args = params.slice(2)
const command = args[0].split(":")[0].substring(2)
const entity = args[0].split(":")[1]


switch (command) {
    case CRUD.CREATE:
        const data = {}
        args.slice(1).map((arg) => {
            const tmp = arg.split("=")
            data[tmp[0].substring(2)] = tmp[1]
        })
        console.log(db)
        process.exit()
        db[entity].create(data)
            .then(() => {console.log("created")})
            .catch(console.log("error"))

        console.log(data)
        break;
    case CRUD.READ:
        db[entity].findAll().then(console.log).catch(console.log)
        break;

    case CRUD.UPDATE:
        //ToDO
        break;

    case CRUD.READ:
        //TODO
        break;
    default:
        break;
}