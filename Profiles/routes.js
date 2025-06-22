import * as dao from "./dao.js";

export default function ProfilesRoutes(app) {


  const fetchFavorites = async (req, res) => {
    const { userId } = req.params;
    const favorites = await dao.findFavsOfUser(userId);
    res.send(favorites);
  };

  const fetchReviews = async (req, res) => {
    const { userId } = req.params;
    const reviews = await dao.findRevsOfUser(userId);
    res.send(reviews);
  };

  const updateUserInDb = async (req, res) => {
    const { userId } = req.params;
    const userUpdates = req.body;
    const status = await dao.updateUser(userId, userUpdates);
    res.send(status);
  }

  const fetchFollows = async (req, res) => {
    const { userId } = req.params;
    const reviews = await dao.findFollows(userId);
    res.send(reviews);
  };

  const findUserByIdFunc = async (req, res) => {
    const { userId } = req.params;
    const user = await dao.findUserById(userId);
    res.send(user);
  };
  app.put("/api/users/:userId", updateUserInDb);
  app.get("/api/interactions/:userId/favorites", fetchFavorites);
  app.get("/api/interactions/:userId/reviews", fetchReviews);
  app.get("/api/follows/:userId", fetchFollows);
  app.get("/api/users/:userId", findUserByIdFunc);

  // other user's profile
  app.get("/api/interactions/:userId/othersfavorites", fetchFavorites);


  

  


  // app.get("/", async (req, res) => {
  //   const courses = await dao.findAllCourses();
  //   res.send(courses);
  // });

  // app.get("/api/courses", async (req, res) => {
  //   const courses = await dao.findAllCourses();
  //   res.send(courses);
  // });

  // app.delete("/api/courses/:courseId", async (req, res) => {
  //   const { courseId } = req.params;
  //   const status = await dao.deleteCourse(courseId);
  //   res.send(status);
  // });
  // app.put("/api/courses/:courseId", async (req, res) => {
  //   const { courseId } = req.params;
  //   const courseUpdates = req.body;
  //   const course = await dao.updateCourse(courseId, courseUpdates);
  //   res.send(course);
  // });

  // app.get("/api/courses/:courseId/modules", async (req, res) => {
  //   const { courseId } = req.params;
  //   const modules = await modulesDao.findModulesForCourse(courseId);
  //   res.json(modules);
  // });

  // app.post("/api/courses/:courseId/modules", async (req, res) => {
  //   const { courseId } = req.params;
  //   const module = {
  //     ...req.body,
  //     course: courseId,
  //   };
  //   const newModule = await modulesDao.createModule(module);
  //   res.send(newModule);
  // });

  // app.get("/api/courses/:courseId/assignments", async (req, res) => {
  //   const { courseId } = req.params;
  //   const assignments = await assignmentDao.findAssignmentsForCourse(courseId);
  //   res.json(assignments);
  // });
  // app.post("/api/courses", async (req, res) => {
  //   const course = await dao.createCourse(req.body);
  //   const currentUser = req.session["currentUser"];
  //   if (currentUser) {
  //     await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
  //   }
  //   res.json(course);
  // });
  
  // const findUsersForCourse = async (req, res) => {
  //   const { cid } = req.params;
  //   const users = await enrollmentsDao.findUsersForCourse(cid);
  //   res.json(users);
  // };
  // app.get("/api/courses/:cid/users", findUsersForCourse);
}
