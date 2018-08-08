// @material-ui/icons
import GraphicEq from "@material-ui/icons/GraphicEq";
import Timeline from "@material-ui/icons/Timeline";
// core components/views
// import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import FullGraph from "views/FullGraph/FullGraph.jsx";
import Projects from "views/Projects/Projects.jsx";
import ProjectDetail from "views/ProjectDetail/ProjectDetail.jsx";
import FullGraph from "views/FullGraph/FullGraph.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import Visualize from "views/Visualize.jsx";

const dashboardRoutes = [
  {
    path: "/projects",
    sidebarName: "Projects",
    navbarName: "Projects",
    icon: Timeline,
    component: Projects
  },
  {
    path: "/projectDetail",
    nosidebar: true,
    navbarName: "Project Detail",
    icon: Timeline,
    component: ProjectDetail
  },
  // {
  //   path: "/dashdoard",
  //   sidebarName: "Charts",
  //   navbarName: "Charts",
  //   icon: Timeline,
  //   component: Dashboard
  // },
  // {
  //   path: "/fullGraph",
  //   sidebarName: "Graph",
  //   navbarName: "Full Graph",
  //   icon: Timeline,
  //   component: FullGraph
  // },
  // {
  //   path: "/userProfile",
  //   sidebarName: "User",
  //   navbarName: "User Profile",
  //   icon: Timeline,
  //   component: UserProfile
  // },
  {
    path: "/Visualize",
    sidebarName: "Visualize",
    navbarName: "Micro view of Functions",
    icon: Timeline,
    component: Visualize
  },

  { redirect: true, path: "/", to: "/projects", navbarName: "Redirect" }
];

export default dashboardRoutes;
