const db = require("./db");

 async function getPhotos(){
    const rows = await db.query(`SELECT * FROM photo`)
    return rows?rows:[];
}

async function  getPhotosById(id) {
    const rows = await db.query(`SELECT * FROM photo WHERE id = ?`, [id]);
    return rows?rows[0]:{};
    
}

async function createPhotos(photo) {
    const result = await db.query(`INSERT INTO photo (title, artist, year, type, image_url) VALUES (?, ?, ?, ?, ?)`,
        [photo.title, photo.artist, photo.year, photo.type, photo.image_url]
    );
    let message = 'Photo created successfully';
    if (!result) {
      message = 'Photo creation failed';
    }
    return { message };
}

async function updatePhotos(id, photo) {
    const result = await db.query(`UPDATE photo SET title = ?, artist = ?, year = ?, type = ?, image_url = ? WHERE id = ?`,
        [photo.title, photo.artist, photo.year, photo.type, photo.image_url, id]
    );
    let message = 'Photo updated successfully';
    if (!result) {
      message = 'Photo update failed';
    }
    return { message };
}

async function deletePhotos(id) {
    const result = await db.query(`DELETE FROM photo WHERE id = ?`, [id]

    );
    let message = 'Photo deleted successfully';
    if (!result) {
      message = 'Photo deletion failed';
    }
    return { message };
}


async function patchPhotos(id, photo) {
    let fields = Object.keys(photo).map((k) => `${k} = ?`).join(', ');
    let updateValues = Object.values(photo);
    updateValues.push(id);
    

    
}

module.exports = {
    getPhotos,
    getPhotosById,
    createPhotos,
    updatePhotos,
    deletePhotos,
    patchPhotos
}
