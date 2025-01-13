const db = require("./db");

 async function getPhoto(){
    const rows = await db.query(`SELECT * FROM photo`)
    return rows?rows:[];
}

async function  getPhotoById(id) {
    const rows = await db.query(`SELECT * FROM photo WHERE id = ?`, [id]);
    return rows?rows[0]:{};
    
}

async function createPhoto(photo) {
    const result = await db.query(`INSERT INTO photo (title, artist, year, type, image_url) VALUES (?, ?, ?, ?, ?)`,
        [photo.title, photo.artist, photo.year, photo.type, photo.image_url]
    );
    let message = 'Photo created successfully';
    if (!result) {
      message = 'Photo creation failed';
    }
    return { message };
}

async function updatePhoto(id, photo) {
    const result = await db.query(`UPDATE photo SET title = ?, artist = ?, year = ?, type = ?, image_url = ? WHERE id = ?`,
        [photo.title, photo.artist, photo.year, photo.type, photo.image_url, id]
    );
    let message = 'Photo updated successfully';
    if (!result) {
      message = 'Photo update failed';
    }
    return { message };
}

async function deletePhoto(id) {
    const result = await db.query(`DELETE FROM photo WHERE id = ?`, [id]

    );
    let message = 'Photo deleted successfully';
    if (!result) {
      message = 'Photo deletion failed';
    }
    return { message };
}


async function patchPhoto(id, photo) {
    let fields = Object.keys(photo).map((k) => `${k} = ?`).join(', ');
    let updateValues = Object.values(photo);

    
}

module.exports = {
    getPhoto,
    getPhotoById,
    createPhoto,
    updatePhoto,
    deletePhoto,
    patchPhoto
}
