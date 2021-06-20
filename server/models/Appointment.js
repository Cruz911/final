module.exports = (Sequelize,sequelize,Model)=>{

    class Appointment extends Model{
    
    }
    
    return Appointment.init({
        title: {
            type: Sequelize.STRING
        },
        date:{
            type: Sequelize.DATEONLY
        },
        time: {
            type: Sequelize.TIME
        },
        description: {
            type: Sequelize.STRING
        },
        status: {
            type : Sequelize.ENUM,
            values : ["approved","rejected","in review"]
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
            modelName : "appointments"
        })
    }