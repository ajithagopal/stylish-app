import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Ban from "../Ban/Ban";
import CoursesLists from "../CoursesLists/CoursesLists";

import courseBan from "../../images/banner/course-ban.jpg";

const Courses = () => {
  return (
    <>
      <Navbar />
      <Ban img={courseBan} text={"Courses"} />
      <CoursesLists />
      <Footer />
    </>
  );
};

export default Courses;
