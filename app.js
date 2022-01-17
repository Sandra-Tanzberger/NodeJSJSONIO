
const fs = require("fs")

const path = "./data"
const fileName = ""

const getDirectory = (path) => {
  var files = fs.readdirSync(path)
  files.forEach((file) => {
    writeUpdatedJsonfile(processJsonFile(file))
  })
}

const processJsonFile = (file) => {
  const newobjArray = []
  const bytes = fs.readFileSync(path + "/" + file)
  objArray = JSON.parse(bytes.toString())
  objArray.forEach((obj) => 
  {
    const chars = obj.chars.toString()
    if(chars.substr(0,8) === "INVOICE#")
    { 
      //obj.left+= {unknown pixel size to determine how much to offselt from left}
      //obj.top+= {unknown pixel size to determein how much to offset from top}
      //obj.width/=.5 - reduced by half
      //obj.height/=.5 - reduced by half
      obj.chars = chars.substr(9,4)
    }
    newobjArray.push(obj)
  })
  return newobjArray
}

const writeUpdatedJsonfile = (data) => {
  fs.appendFileSync((path + "_new" + fileName), JSON.stringify(data))
}

getDirectory(path)

