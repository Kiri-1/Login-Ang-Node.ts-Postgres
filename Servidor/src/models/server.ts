import express, { Application } from 'express';
import routesProduct from '../routes/product.routes';
import routesUser from '../routes/user.routes';
import { Product } from "./product";
import { User } from "./user";

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('La aplicacion esta funcionando en el puerto: ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    midlewares() {
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            await Product.sync();
            await User.sync();
            console.log("Conneccion a la base de datos con exito");
        } catch (error) {
            console.error("Error en la coneccion de la base de datos: ", error);
        }
    }

}

export default Server;