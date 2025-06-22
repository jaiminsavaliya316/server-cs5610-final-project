// import Database from "../Database/index.js";
import model from "./model.js";
import interactionsModel from "./InteractionsModel.js";
import followersModel from "./followersModel.js";
import { v4 as uuidv4 } from "uuid";

export function updateUser(userId, userUpdates) {
  const res = model.updateOne({ _id: userId }, { $set: userUpdates });
  return res;
}

export function findUserById(userId) {
  const res = model.findOne({ _id: userId });
  return res;
}

export function findFavsOfUser(userId) {
  const res = interactionsModel.find({ user_id: userId, type: "favorite" });
  return res;
}

export function findRevsOfUser(userId) {
  const res = interactionsModel.find({ user_id: userId, type: "comment" });
  return res;
}

export async function findFollows(userId) {
  const followers = await followersModel.find({ following_id: userId }).populate("follower_id").lean();
  const following = await followersModel.find({ follower_id: userId }).populate("following_id").lean();
  const followersData = followers.map(f => f.follower_id);
  const followingData = following.map(f => f.following_id);
  const merged = { followersData, followingData };
  return merged;
}

export function addFollowToDb(follow){
  const newFollow = {...follow, _id: uuidv4()};
  return followersModel.create(newFollow)
}

export function removeFollowFromDb(follower_id, following_id) {
  return followersModel.deleteOne({ 
    follower_id: follower_id, 
    following_id: following_id 
  });
}

export async function findIfFollows(follower_id, following_id) {
  console.log("Checking if user follows another user:", follower_id, following_id);
  const status = await followersModel.findOne({ 
    follower_id: follower_id, 
    following_id: following_id 
  });
  if (status) {
    return true;
  } else {
    return false;
  }
}

export async function findUserByUNameUEmail(username, email) {
  const user = await model.findOne({username: username, email: email}).lean();
  return user;
}