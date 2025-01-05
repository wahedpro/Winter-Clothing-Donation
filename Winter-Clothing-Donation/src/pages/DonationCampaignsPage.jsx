import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../components/CampaignCard/CampaignCard';

const DonationCampaignsPage = () => {
    const campaigns = useLoaderData();

    return (
        <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
            {campaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>
            ))}
        </div>
    );
};

export default DonationCampaignsPage;
