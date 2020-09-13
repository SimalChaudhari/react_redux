// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import {Dashboard as DashboardPage} from "../containers/Dashboard/Dashboard.js";
import {Login} from "../components/auth/Login";
import {Registration} from "../components/auth/Registration";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
//   {
//     path: "/user",
//     name: "User Profile",
//     rtlName: "ملف تعريفي للمستخدم",
//     icon: Person,
//     component: UserProfile,
//     layout: "/admin"
//   },
  {
    path: "/login",
    name: "Login",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/registration",
    name: "Registration",
    rtlName: "طباعة",
    icon: 'content_paste',
    component: Registration,
    layout: "/admin"
  }
];

export default dashboardRoutes;
