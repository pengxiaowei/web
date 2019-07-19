const express = require('express')
const app = express()

app.set('secret','232r2322r23r2f3')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require("./plugins/db")(app)
require("./routes/admin")(app)
require("./routes/web")(app)


app.listen(3000, () => {
  console.log('http://localhost:3000');
})