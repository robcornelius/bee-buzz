import usersController from './controller/usersController';
import authController from './controller/authController';



const routes = (route) => {
	//USERS
	route.route('/users')
		.get(userController.getAll)
		.post(userController.create);
	route.route('/users/:id')
		.get(usersController.getOne)
		.put(usersController.update)
		.delete(usersController.delete)
	/*
	 * TODO get CRUD working first
	route.route('/user/login')
		.post(authController.login);
	route.route('/user/register')
		.post(authController.register);
	*/
}
