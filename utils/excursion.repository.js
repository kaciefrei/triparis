// utils/cars.repository.js
pool = require("./db.js");
// JS include = relative  to CONTROLLERS 
// VIEW include = relative to VIEWS
module.exports = {
    getBlankExcursion(){ // defines the entity model
        return {
            "Excursion_id": 0,
            "Name": "XXXX",
            "Type": "XXXX",
            "Duaration_time": 0,
            "Place": 0,
            "Image": "XXXX"
        };
    },

    async getAllName(){ // TODO? move to name.repository.js
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT Name FROM excursion";
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

    async getAllExcursions(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM excursion INNER JOIN place ON Place=Place_id";
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

    async getAllVisits(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM excursion WHERE Type IN ('Visit') ORDER BY Excursion_id DESC";
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

    async getAllWalks(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM excursion WHERE Type IN ('Walk') ORDER BY Excursion_id DESC";
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

    async getAllActivities(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM excursion WHERE Type IN ('Activity') ORDER BY Excursion_id DESC";
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

    async getOneExcursion(Excursion_Id){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM excursion INNER JOIN place ON Place=Place_id WHERE Excursion_id = ?";
            const [rows, fields] = await conn.execute(sql, [ Excursion_Id ]);
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

    async delOneExcursion(Excursion_Id){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM excursion WHERE Excursion_id = ?";
            const [okPacket, fields] = await conn.execute(sql, [ Excursion_Id ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
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

    async addOneExcursion(Place_Id){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO excursion (Excursion_id, Place) VALUES (NULL, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [ Place_Id ]); // affectedRows, insertId
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async editOneExcursion(Excursion_Id, Name, Type, Duration_time, Place, Image){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE excursion SET Name=?, Type=?, Duration_time=?, Place=?, Image=? WHERE Excursion_Id=? "; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [Name, Type, Duration_time, Place, Image, Excursion_Id]);
            conn.release();
            console.log("UPDATE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },


    getBlankUser(){ // defines the entity model
        return {
            "user_id": 0,
            "user_creatime": "20000101",
            "user_name": "XXXX",
            "user_email": 0,
            "user_role": "ADMIN",
            "user_pass": "XXXX"
        };
    },
    
      async getAllUser(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM users";
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
    
      async addOneUser(user_name, user_email, user_role, user_pass){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO users (user_name, user_email, user_role, user_pass) VALUES (?, ?, ?, ?) "; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [user_name, user_email, user_role, user_pass]);
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
    }

};
