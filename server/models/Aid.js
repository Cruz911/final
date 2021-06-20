module.exports = (Sequelize,sequelize,Model)=>{

    class Aid extends Model{
    
    }
    
    return Aid.init({
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        created_at : {
            type : Sequelize.DATE,
            allowNull : false
        },
        updated_at : {
            type : Sequelize.DATE
        },
        deleted_at : {
            type : Sequelize.DATE
        }
        },
        {
            sequelize,
            modelName : "aid"
        })
    }