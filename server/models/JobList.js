module.exports = (Sequelize,sequelize,Model)=>{

    class JobList extends Model{
    
    }
    
    return JobList.init({
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
            modelName : "joblist"
        })
    }