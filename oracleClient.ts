import oracledb from "oracledb";

export async function getOracleConnection() {
    try {

        oracledb.initOracleClient({ libDir: "C:\\oracle\\instantclient-basic-windows.x64-23.9.0.25.07\\instantclient_23_9" });

        const connection = await oracledb.getConnection({
            user: "CLIENTES",
            password: "hipcl089al",
            connectString: "10.101.0.3:1521/wint"
        });

        console.log("Conectado ao Oracle com sucesso!");
        return connection;

    } catch (err) {
        console.error("Erro ao conectar ao Oracle:", err);
        throw err;
    }
}