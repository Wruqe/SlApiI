// Create a router for user arrangement
const router = express.Router();

router.get('/', (req, res) => res.send('User routes'));
router.get('/:id' , (req, res) => res.send('User ID'));

// Mount the User router on the '/users' path
app.use('/user', router);

// Access user routes: https://localhost:3000/users

// Parse JSON data : BUILT-INS
app.use(express.json());


app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.status) {
    res.status(err.status). send('Internal Server Error');
  }
});
