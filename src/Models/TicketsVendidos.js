const {DataTypes}=require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define("TicketsSold",{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
        ticketId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            references: {
              model: "Tickets",
              key: "id",
            },
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: "Users",
              key: "id",
            },
        },
        qrImage:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isUrl: true
          }
        },
        accessType: {
          type: DataTypes.STRING,
          validate: {
            len: [1, 50],
          }
      },
        mail: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { isEmail: true },
        },
        validate:{
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        }
    })
}