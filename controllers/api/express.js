// Create a router for user arrangement
const router = express.Router();

router.get('/', (req, res) => res.send('User routes'));
router.get('/:id' , (req, res) => res.send('User ID'));

// Mount the User router on the '/users' path
app.use('/user', router);

// Access user routes: https://localhost:3000/users

// Parse JSOn data : BUILT-INS
app.use(express.json());

// Authentication middleware (basic example): CUSTOM
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401) .send(' Unauthorized') ;
  }
  // vaildate authorization token and call next() if vaild next();
});
