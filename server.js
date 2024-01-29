const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

//socketio
const {createServer} = require('node:http');
const {fileURLToPath} = require('node:url');
const {dirname, join } = require('node:path');
const {Server} = require('socket.io')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const server = createServer(app);
const io = new Server(server);
// const projectDirectory = dirname(fileURLToPath(require(meta.url)));
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create({helpers});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutes in milliseconds
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

app.use(routes);

// Serve static files from the 'public' folder (Heinz Add-on)
app.use('/images', express.static(join(__dirname, 'public/images')));

//sends message to everyone including sender
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  
});


sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
    });
  // app.listen(PORT, () => console.log('http://localhost:3001'));
});
