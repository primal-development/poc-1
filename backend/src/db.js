import mariadb from 'mariadb';

export function connect() {
    const pool = mariadb.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'mypass',
        connectionLimit: 5,
    });

    pool.getConnection()
        .then((conn) => {
            conn.query('SELECT * FROM mysql.user')
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log('Error connecting');
            console.log(err);
        });
}