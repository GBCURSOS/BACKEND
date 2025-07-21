import express from 'express';
import cors from 'cors';
import personaRuta from './routes/personaRuta.js';


const app = express();
const PORT = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/prueba', (req, res) => {
  res.json({ message: 'API está funcionando' });
});

app.use('/api/personas', personaRuta);

app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto ${PORT}`);
});

// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg

