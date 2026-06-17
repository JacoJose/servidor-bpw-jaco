import express, { type Request, type Response } from 'express'
import { User } from './models/user'

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'OI!',
    timestamp: new Date(),
    status: 'API funcionando'
  })
});

app.get('/user', (request: Request, response: Response) => {
  const user = new User('Jacó','jaco@gmail.com','123') 
  
  console.log(user.verificarSenha('123'))

  response.json({
    message: 'OI!',
    timestamp: new Date(),
    user: user,
    status: 'API funcionando'
  })
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
