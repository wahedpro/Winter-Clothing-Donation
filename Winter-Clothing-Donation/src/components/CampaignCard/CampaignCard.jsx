import { NavLink } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
    const {id,image, title, description, division}=campaign;
    return (
        <div className="flex flex-col gap-2 p-3 border">
            <img src={image} alt="" />
            <h1 className="text-xl font-semibold">{title}</h1>
            <p>{description}</p>
            <h3>Division: {division}</h3>
            <NavLink to={`/detailsPage/${id}`}><button className="border border-[#18947d] hover:bg-[#18947d] hover:text-white px-5 py-2 mt-3">Donate Now</button></NavLink>
        </div>
    );
};

export default CampaignCard;
