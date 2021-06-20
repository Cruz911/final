module.exports = (Sequelize,sequelize,Model)=>{

    class ViralLoad extends Model{
    
    }
    
    return ViralLoad.init({
        amount: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.TIME
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        health_worker: {
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
            modelName : "viral_load"
        })
    }