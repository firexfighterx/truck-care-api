import express from 'express';
import bodyParser from 'body-parser';
import GetTrucksRoutes from './routes/trucks/TruckListRoutes';
import GroupRoutes from './routes/groups/GroupRoutes';
import CategoryDetailRoutes from './routes/categorydetails/CategoryDetailRoutes';
import PerformTruckCareRoutes from './routes/perform-truck-care/PerformTruckCareRoutes';

let app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api', GetTrucksRoutes.bind(GetTrucksRoutes));
app.use('/api', GroupRoutes.bind(GroupRoutes));
app.use('/api', CategoryDetailRoutes.bind(CategoryDetailRoutes));
app.use('/api', PerformTruckCareRoutes.bind(PerformTruckCareRoutes));

app.listen(3000, () => {
    console.log('Truck Care API listening on port 3000');
});
