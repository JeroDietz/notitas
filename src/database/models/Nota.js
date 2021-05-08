module.exports = function(sequelize, DataTypes){
    let alias = 'Nota';
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        titulo : {
            type: DataTypes.STRING(100),
            NotNull: true
        },

        texto : {
            type: DataTypes.STRING(1000),
            NotNull: true 
        }
    }

    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    const Nota = sequelize.define(alias, cols, config);
    return Nota;
    
}