const fs = require('fs')
const xml = require('xml2json')

const saveFiles = "/Users/akira/AppData/Roaming/StardewValley/Saves/guinhoshuto_200719511/SaveGameInfo"

const save = JSON.parse(xml.toJson(fs.readFileSync(saveFiles, 'utf8')))

// const save = saveInfo()

// nome
const name = save.Farmer.name
// actual objective
const objective = save.Farmer.questLog.Quest._currentObjective
// console.log(objective)
const casado = save.Farmer.spouse
const money = save.Farmer.money

// createdAt
// lastPlayed
// tabela de usuários

console.log(name, objective, casado, money)