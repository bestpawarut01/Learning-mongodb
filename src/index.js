const express = require("express");

require("./database/mongoose");

const UserRouter = require("./routers/users");
const PetRouter = require("./routers/pets");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(UserRouter);
app.use(PetRouter);
// Add user to Collection
// app.post("/User-Collection", (req, res) => {
// 	const user = new UserColl(req.body);

// 	user.save()
// 		.then(() => {
// 			res.send(user);
// 		})
// 		.catch((e) => {
// 			res.status(400).send(e);
// 		});
// });

// // delete user from Collection
// app.delete("/Del-user/:UserName", (req, res) => {
// 	const _userName = req.params.UserName;

// 	UserColl.deleteOne({ UserName: _userName })
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((e) => {
// 			res.status(500).send();
// 		});
// });

// // find user from collection & show only selected
// app.get("/findUser/:UserName", (req, res) => {
// 	const findUserName = req.params.UserName;

// 	UserColl.find(
// 		{ UserName: findUserName },
// 		{
// 			_id: 0,
// 			firstName: 1,
// 			lastName: 1,
// 			age: 1,
// 			petName: 1,
// 		}
// 	)
// 		.select("name -_id")
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((e) => {
// 			res.status(500).send();
// 		});
// });

// //----------------------------------------------------------------

// // Add pet to Collection
// app.post("/Pet-Collection", (req, res) => {
// 	const pet = new PetColl(req.body);
// 	pet.save()
// 		.then(() => {
// 			res.send(pet);
// 		})
// 		.catch((e) => {
// 			res.status(400).send(e);
// 		});
// });

// // Delete pet from Collection
// app.delete("/Del-pet/:petName", (req, res) => {
// 	const _userPet = req.params.petName;

// 	PetColl.deleteOne({ petName: _userPet })
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((e) => {
// 			res.status(500).send();
// 		});
// });

// // Find pet from Collection & select fields
// app.get("/findPet/:userPet", (req, res) => {
// 	const userPet = req.params.userPet;

// 	PetColl.find({ petName: userPet }, { _id: 0, petName: 1, petType: 1 })
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((e) => {
// 			res.status(500).send();
// 		});
// });

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
