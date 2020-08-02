// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function(app: Application) {
	const sequelizeClient: Sequelize = app.get('sequelizeClient');
	const usersUsers = sequelizeClient.define(
		'users_users',
		{
			accepted: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			hidden: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			fav: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{
			hooks: {
				beforeCount(options: any) {
					options.raw = true;
				},
			},
			underscored: false,
		}
	);

	// eslint-disable-next-line no-unused-vars
	(usersUsers as any).associate = function(models: any) {
		// Define associations here
		// See http://docs.sequelizejs.com/en/latest/docs/associations/
		const { users } = models;
		this.belongsTo(users, { foreignKey: 'user_id' });
		this.belongsTo(users, { foreignKey: 'friend_id' });
	};

	return usersUsers;
}
