import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/HomePage";
import DonationCampaignsPage from "../pages/DonationCampaignsPage";
import DetailsPage from "../pages/DetailsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PrivateRoute from "./privateRoute";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import HowToHelp from "../pages/HowToHelp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "donationCampaignsPage",
                element: <DonationCampaignsPage></DonationCampaignsPage>,
                loader:()=> fetch("/donationCampaignData.json")
            },
            {
                path: "detailsPage/:id",
                element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader:async ({params})=>{
                    const res = await fetch("/donationCampaignData.json");
                    const data = await res.json();
                    const singleData= data.find(d=>d.id == params.id);
                    return singleData;
                }
            },
            {
                path: "dashboard",
                element: <PrivateRoute><DashboardPage></DashboardPage></PrivateRoute>
            },
            {
                path: "login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "registration",
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: "howToHelp",
                element: <HowToHelp></HowToHelp>
            },
            {
                path: "ForgotPasswordPage",
                element: <ForgotPasswordPage></ForgotPasswordPage>
            },
            {
                path: "updateProfilePage",
                element: <UpdateProfilePage></UpdateProfilePage>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);

export default router;