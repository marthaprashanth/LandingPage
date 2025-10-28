import NotificationBanner from "./NotificationBanner";
import CardsSection from "./CardsSection";
import TemplatesSection from "../../components/dashboard/TemplatesSection";
import QuickSendSection from "./QuickSendSection";
import LatestActions from "./LatestActions";

const DashboardContent = () => {
  return (
    <div className="bg-grey-100 rounded-3xl p-6 flex flex-col gap-6">
      {/* Notification Banner */}
      <NotificationBanner />

      {/* Main Content Grid */}
      <div className="flex flex-col gap-6">
        {/* Left Column */}
        <div className="flex gap-6">
          {/* Cards and Templates */}
          <div className="flex gap-6">
            <CardsSection />
            <TemplatesSection />
          </div>
        </div>

        {/* Quick Send Section */}
        <QuickSendSection />

        {/* Latest Actions */}
        <LatestActions />
      </div>
    </div>
  );
};

export default DashboardContent;
