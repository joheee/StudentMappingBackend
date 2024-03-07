import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { MahasiswaRoute } from './routes/MahasiswaRoute';
import { KeahlianRoute } from './routes/KeahlianRoute';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

app.use('/mahasiswa', MahasiswaRoute)
app.use('/keahlian', KeahlianRoute)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});