// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function(app: Application) {
	const sequelizeClient: Sequelize = app.get('sequelizeClient');
	const messages = sequelizeClient.define(
		'messages',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			message: {
				type: DataTypes.TEXT,
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
	(messages as any).associate = function(models: any) {
		// Define associations here
		// See http://docs.sequelizejs.com/en/latest/docs/associations/
	};

	return messages;
}
