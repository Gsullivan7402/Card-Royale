const Profile = require('./models/user');

const app = express();

app.post('/create-profile', async (req, res) => {
    const profile = await Profile({
        username: '',
        password: '1234'
    });
    await Profile.save()
})