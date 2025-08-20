import asyncHandle from "../middleware/asyncHandle.js";

//@desc auth user & get token
//Route: Post /api/users/login
//Access: Public
const authUser = asyncHandle(async (req, res) => {
  res.send("auth user");
});
//@desc Register user
//Route: Post /api/users
//Access: Public
const registerUser = asyncHandle(async (req, res) => {
  res.send("register user");
});
//@desc logout user/ clear cookie
//Route: Post /api/users/logout
//Access: Private
const logoutUser = asyncHandle(async (req, res) => {
  res.send("logout user");
});
//@desc get user profile
//Route: GET /api/users/profile
//Access: Private
const getUserProfile = asyncHandle(async (req, res) => {
  res.send("get user profile");
});
//@desc Update user profile
//Route: PUT /api/users/profile
//Access: Private
const updateUserProfile = asyncHandle(async (req, res) => {
  res.send("Update user profile");
});
//@desc get user
//Route: GET /api/users
//Access: Private/Admin
const getUsers = asyncHandle(async (req, res) => {
  res.send("get users");
});
//@desc get user by id
//Route: GET /api/users/:id
//Access: Private/Admin
const getUserById = asyncHandle(async (req, res) => {
  res.send("get user by id");
});

//@desc delete user
//Route: DELETE /api/users/:id
//Access: Private/Admin
const deleteUser = asyncHandle(async (req, res) => {
  res.send("delete user");
});

//@desc update user
//Route: PUT /api/users/:id
//Access: Private/Admin
const updateUser = asyncHandle(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};