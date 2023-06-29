const db = require('../config/Database')
const {Sequelize} = require('sequelize')

const {DataTypes} = require('sequelize')

const Religion = db.define('religion',{
    nama: {
        type: DataTypes.STRING
    },
}, {freezeTableName: true})

module.exports = Religion;

(async () => {
    await db.sync();
  
    try {
      const agamaIslam = await Religion.findOrCreate({ where: { nama: 'Islam' } });
      const agamaKatolik = await Religion.findOrCreate({ where: { nama: 'Katolik' } });
      const agamaProtestan = await Religion.findOrCreate({ where: { nama: 'Protestan' } });
      const agamaHindu = await Religion.findOrCreate({ where: { nama: 'Hindu' } });
      const agamaBuddha = await Religion.findOrCreate({ where: { nama: 'Buddha' } });
      const agamaKonghucu = await Religion.findOrCreate({ where: { nama: 'Konghucu' } });
  
      console.log('Entri agama berhasil dibuat.');
    } catch (error) {
      console.error('Gagal membuat entri agama:', error);
    }
  })();
  