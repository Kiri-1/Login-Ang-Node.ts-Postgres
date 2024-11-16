import { Sequelize } from "sequelize";

const sequelize = new Sequelize('rrhh', 'root', 'password', {
    host:"localhost",
    port: 5432, // Cambia si no es el predeterminado
    dialect: "postgres"
});

export default sequelize;