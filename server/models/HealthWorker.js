module.exports = (Sequelize,sequelize,Model)=>{

    class HealthWorker extends Model{
    
    }
    
    return HealthWorker.init({
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        centre_id: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        admin: {
            type: Sequelize.BOOLEAN
        },
        password: {
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
        },{
            sequelize,
            modelName : "health_workers"
        })
    }