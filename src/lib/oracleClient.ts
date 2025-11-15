import oracledb from "oracledb";

export async function getOracleConnection() {
    try {

        if (process.env.ORACLE_CLIENT_DIR) {
            oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_DIR });
        }

        const connection = await oracledb.getConnection({
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            connectString: process.env.CONNECTION_STRING,
        });     

        return connection;

    } catch (err) {
        console.error("Erro ao conectar ao Oracle:", err);
        throw err;
    }
}