module.exports = (Sequelize,sequelize,Model)=>{

    class HealthCentre extends Model{
    
    }
    
    return HealthCentre.init({
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        workers: {
            type: Sequelize.STRING
        },
        district: {
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
            modelName : "health_centres"
        })
    }