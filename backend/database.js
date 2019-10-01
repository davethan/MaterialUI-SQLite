var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE cardData (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            imageName TEXT,
            title TEXT,
            description TEXT,
            more TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating the "cardData" rows.
                var insert = 'INSERT INTO cardData (imageName, title, description, more) VALUES (?,?,?,?)'
                db.run(insert, ["img1.jpg","My new bike","I recently bought a new bike. It was the best idea ever!","Since then, I never go on foot. It is red and yellow and I can carry all stuff with it. I love it!"]);
                db.run(insert, ["img2.jpg","The pool of the hotel","The quiest place on earth!","We swam and we swam for ages, with no-one around distracting us. Best day ever!"]);
                db.run(insert, ["img3.jpg","Island of deers","In fact, there are no deers on that island. It is just its name!","The fact that it is called elaphonisi has moved my imagination. Perfect little island. Hope I will come again soon!"]);
                db.run(insert, ["img4.jpg","Breakfast","My daily breakfast included eggs, bacon, beans, marmelade, etc... :)","The breakfast of the Gods!"]);
            }
        });
    }
});


module.exports = db
