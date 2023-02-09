const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router');
const { default: mongoose } = require('mongoose');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongooseUrl = "mongodb+srv://deepak98:deepaklumia@book.4bu11tl.mongodb.net/Inventory"

mongoose.connect(mongooseUrl, { useNewUrlParser: true })
      .then(() => { console.log("mongodb is  connected"); })
      .catch((err) => { console.log(err); });

app.use('/', router);
app.listen(process.env.PORT || 5000, () => {
      console.log("Express server listening on port " + (process.env.PORT || 5000));
});
