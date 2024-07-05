import express, { Request, Response } from 'express';
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());

app.listen(port, () => {
  console.log("backend works, port: ", port);
});

// data
type DataTypes = {
  id: number,
  name:string,
  description:string,
  img:string,
  price:number
};

let data:DataTypes[] =[
  {
    id:1,
    name:'Товар1',
    description:'Описание',
    img:'url',
    price:300,
  },
  {
    id:2,
    name:'Товар1',
    description:'Описание',
    img:'url',
    price:300,
  },
  {
    id:3,
    name:'Товар1',
    description:'Описание',
    img:'url',
    price:300,
  },
];


// requests
app.get('/products', (req: Request, res:Response) =>{
  res.json(data)
} )

app.post('/products/create', (req: Request, res:Response) =>{
  const newItem: DataTypes = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
} )

app.put('/products/edit/', (req: Request, res: Response) => {
  const { id } = req.params;
  data = data.filter(item => item.id !== parseInt(id));
  res.json();
});

