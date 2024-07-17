// utils/cars.repository.js
pool = require("./db.js");
// JS include  = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {

    async getAllChoices(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM choice";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            console.log("CARS FETCHED: "+rows.length);
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async delOneChoice(Choice_Id){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM choice WHERE Choice_id = ?";
            const [okPacket, fields] = await conn.execute(sql, [ Choice_Id ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneChoice(Excursion_id){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO choice (Excursion_id) VALUES (?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [Excursion_id]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    getBlankChoice(){ // defines the entity model
        return {
            "Choice_id": 0,
            "Excursion_id": 0,
            "userId": 0
        };
    }
};
