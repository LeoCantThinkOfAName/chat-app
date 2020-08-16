// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';
import { UserStatus } from '@chat-app/shared';

const status: UserStatus[] = [ 'offline', 'offline', 'afk' ];

export default function(app: Application) {
	const sequelizeClient: Sequelize = app.get('sequelizeClient');
	const users = sequelizeClient.define(
		'users',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
			},
			status: {
				type: DataTypes.ENUM,
				allowNull: false,
				values: status as string[],
				defaultValue: 'online',
			},
			description: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			thumbnail: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			background: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			githubId: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			facebookId: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
		},
		{
			hooks: {
				beforeCount(options: any) {
					options.raw = true;
				},
			},
		}
	);

	// eslint-disable-next-line no-unused-vars
	(users as any).associate = function(models: any) {
		// Define associations here
		// See http://docs.sequelizejs.com/en/latest/docs/associations/
		const { users, users_users } = models;
		this.belongsToMany(users, { through: users_users, as: 'friend', foreignKey: 'friend_id' });
		this.belongsToMany(users, { through: users_users, as: 'user', foreignKey: 'user_id' });
	};

	return users;
}
