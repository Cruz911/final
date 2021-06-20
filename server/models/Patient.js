const db = require('../config/database')

module.exports = (DataTypes) => {
    const Patient = db.define('Patient', {
            first_name: {
                type: DataTypes.STRING
            },
            last_name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            sex: {
                type: DataTypes.STRING
            },
            contact_email: {
                type: DataTypes.STRING
            },
            phone_number: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.STRING
            },
            district: {
                type: DataTypes.STRING
            },
            created_at : {
                type : DataTypes.DATE,
                allowNull : false
            },
            updated_at : {
                type : DataTypes.DATE
            },
            deleted_at : {
                type : DataTypes.DATE
            }
            
        }, {});
        Patient.associate = function (models) {
          // associations can be defined here
        //   Patient.hasMany(models.Project, {
        //     foreignKey: 'patient'
        //   })
        };
        return Patient;
      };
