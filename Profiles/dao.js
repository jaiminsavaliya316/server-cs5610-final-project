// import Database from "../Database/index.js";
import model from "./model.js";
import interactionsModel from "./InteractionsModel.js";
import followersModel from "./followersModel.js";
// import { v4 as uuidv4 } from "uuid";

export function updateUser(userId, userUpdates) {
  const res = model.updateOne({ _id: userId }, { $set: userUpdates });
  return res;
}

export function findUserById(userId) {
  const res = model.findOne({ _id: userId }).lean();
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






// export function findAllCourses() {
//   // return Database.courses;
//  return model.find();
// }

// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
//   return enrolledCourses;
// }

// export function createCourse(course) {
//   const newCourse = { ...course, _id: uuidv4() };
//   return model.create(newCourse);
// }

// export function deleteCourse(courseId) {
//   return model.deleteOne({ _id: courseId });
// }

// export function updateCourse(courseId, courseUpdates) {
//   return model.updateOne({ _id: courseId }, { $set: courseUpdates });
// }
