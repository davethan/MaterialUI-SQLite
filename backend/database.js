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

        db.run(`CREATE TABLE tileImages(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          imageName TEXT,
          title TEXT,
          cols INTEGER
        )`,
      (err)=>{
        if (err) {
          //table already created
        }else{
          //The data are not being inserted by this order, so the id becomes useless... FIX IT!!!
          var insert = 'INSERT INTO tileImages(imageName, title, cols) VALUES (?,?,?)'
          db.run(insert,["img1.jpg","Image1","1"]);
          db.run(insert,["img2.jpg","Image2","2"]);
          db.run(insert,["img3.jpg","Image3","3"]);
          db.run(insert,["img4.jpg","Image4","1"]);
          db.run(insert,["img5.jpg","Image5","2"]);
          db.run(insert,["img6.jpg","Image6","2"]);
          db.run(insert,["img7.jpg","Image7","1"]);
          db.run(insert,["img8.jpg","Image8","3"]);
        }
      });

      db.run(`CREATE TABLE MusicPosts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        artist TEXT,
        imageName TEXT
      )`,
    (err)=>{
      if (err) {
        //table already created
      }else{
        //The data are not being inserted by this order, so the id becomes useless... FIX IT!!!
        var insert = 'INSERT INTO MusicPosts(title, artist, imageName) VALUES (?,?,?)'
        db.run(insert,["Take five","Dave Brubeck","daveBrubeck.jpg"]);
        db.run(insert,["A night without stars","Cayetano","caye.jpg"]);
        db.run(insert,["Car wash","Christian McBride trio","christian.jpg"]);
        db.run(insert,["Postcards from italy","Beirut","beirut.jpg"]);
      }
    });
    }
});


module.exports = db
