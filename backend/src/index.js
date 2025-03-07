import 'dotenv/config';
import { db } from './models';
import { restRouter } from './api';
import config from './config';
import appManager from './app';
// import kue from './kue';
import './errors';
import scheduler from './scheduler';
import path from 'path';
import cors from 'cors';
import checkExpiredVouchers from './cronjob';
import { Sequelize } from 'sequelize';
global.appRoot = path.resolve(__dirname);

const PORT = config.app.port;
const app = appManager.setup(config);

/*cors handling*/
app.use(cors({
	origin:true,
    credentials:true
}));
app.options('*', cors());

/* Route handling */
app.use('/api', restRouter);
// app.use('/', webRouter);

app.use((error, req, res, next) => {
	if (!(error instanceof RequestError)) {
		error = new RequestError('Some Error Occurred', 500, error.message);
    }
		error.status = error.status || 500;
	res.status(error.status);
	let contype = req.headers['content-type'];
	var json = !(!contype || contype.indexOf('application/json') !== 0);
	if (json) {
		return res.json({ errors: error.errorList });
	} else {
		res.render(error.status.toString(), {layout: null})
	}
});

// kue.init();
/* Database Connection */
// await Sequelize..sync({ force: true });
db.sequelize.authenticate().then(function () {
	console.log('Nice! Database looks fine');
	scheduler.init();
}).catch(function (err) {
	console.log(err, "Something went wrong with the Database Update!")
});

checkExpiredVouchers.start()

/* Start Listening service */
app.listen(process.env.APP_PORT, () => {
	console.log(`Server is running at PORT http://localhost:${process.env.APP_PORT}`);
});