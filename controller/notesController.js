const {query} = require("../Database/db.js");

const tambahNote = async(req, res) => {
    const {title, datetime, note} = req.body;

    try {
        await query(`INSERT INTO notes (title, datetime, note) VALUES(?, ?, ?)`, [title, datetime, note]);
        return res.status(200).json({msg: "Penambahan Note Berhasil",
            data: {
                ...req.body,
            },
        });
    } catch (error) {
        console.log("Penambahan Note Gagal", error);
    }
};

const ambilNote =  async(req, res) => {
    try {
        const result = await query(`SELECT * FROM notes`);
        return res.status(200).json({msg: "Berhasil", data: result});
    } catch (error) {
        console.log("Ambil data notes gagal", error);
        return res.status(500).json({ msg: "Gagal Mengambil Data Note", error });
    }
}

const rubahNote = async(req, res) => {
    const {title, datetime, note} = req.body;
    const {id} = req.params;
    try {
        //update data barang
        await query(`UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?`, [title, datetime, note, id]);

        // ambil data setelah di update untuk memastikan perubahan
        const updateNotes = await query(`SELECT * FROM notes WHERE id = ?`, [id]);
        
        return res.status(200).json({
            msg: "Rubah Note Berhasil",
            data: {
                ...req.body,
            },
        });
    } catch (error) {
        console.log("ada yang salah", error);
        
    }
}

const hapusNote = async(req, res) => {
    const {id} = req.params;
    try {
        await query(`DELETE FROM notes WHERE id = ?`, [id]);
        return res.status(200).json({ msg: "Penghapusan Note Berhasil"});
    } catch (error) {
        console.log("Gagal Menghapus", error);
    }
};

const ambilDataId = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await query(`SELECT * FROM notes WHERE id = ?`, [id]);
        return res.status(200).json({ msg: "Berhasil", data: result});
    } catch (error) {
        console.log("Ada Masalah", error);
    }
}

module.exports = {
    tambahNote,
    ambilNote,
    rubahNote,
    hapusNote,
    ambilDataId, 
};