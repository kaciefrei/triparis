// utils/cars.repository.js
pool = require("./db.js");
// JS include = relative to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {

    getBlankPlace(){ // defines the entity model
        return {
            "Place_id": 0,
            "Name_place": "XXXX",
            "Address": "XXXX",
            "City": "XXXX",
            "Transport": 0,
            "Outside": 0,
            "Image": "XXXX"
        };
    },

    async getAllNamePlace(){ // TODO? move to name.repository.js
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT Name_place FROM place";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            return rows;
        }
        catch (err) {
            // TODO: log/send error ... 
            console.log(err);
            throw err; // return false ???
        }
    },

    async getAllPlaces(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM place";
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

    async getOnePlace(Place_id){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM place WHERE Place_id = ?";
            const [rows, fields] = await conn.execute(sql, [ Place_id ]);
            conn.release();
            console.log("CARS FETCHED: "+rows.length);
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async delOnePlace(Place_Id){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM place WHERE Place_id = ?";
            const [okPacket, fields] = await conn.execute(sql, [ Place_Id ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOnePlace(Name_place, Address, City, Transport, Outside, Image){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO place (Name_place, Address, City, Transport, Outside, Image) VALUES (?, ?, ?, ?, ?, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [ Name_place, Address, City, Transport, Outside, Image ]); // affectedRows, insertId
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            //return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async editOnePlace(Place_id, Name_place, Address, City, Transport, Outside, Image){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE place SET Name_place=?, Address=?, City=?, Transport=?, Outside=?, Image=? WHERE Place_id=? "; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [Name_place, Address, City, Transport, Outside, Image, Place_id]);
            conn.release();
            console.log("UPDATE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    }

};
