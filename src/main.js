import express from 'express';
import GetTrucksRoutes from './trucks/TruckListRoutes';

let app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api', GetTrucksRoutes.bind(GetTrucksRoutes));

app.listen(3000, () => {
    console.log('Truck Care API listening on port 3000');
});
