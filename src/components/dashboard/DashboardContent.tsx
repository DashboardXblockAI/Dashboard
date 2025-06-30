import { DashboardOverview } from './pages/DashboardOverview';
import { ContentGenerator } from './pages/ContentGenerator';
import { AdCopyAI } from './pages/AdCopyAI';
import { SubjectOptimizer } from './pages/SubjectOptimizer';
import { AudienceTargeting } from './pages/AudienceTargeting';
import { CampaignManagement } from './pages/CampaignManagement';
import { Analytics } from './pages/Analytics';
import { AIInsights } from './pages/AIInsights';
import { PricingPlans } from './pages/PricingPlans';
import { Settings } from './pages/Settings';
import { SocialMediaManager } from './pages/SocialMediaManager';
import { InfluencerHub } from './pages/InfluencerHub';
import { VideoMarketing } from './pages/VideoMarketing';
import { EmailCampaigns } from './pages/EmailCampaigns';
import { SEOOptimizer } from './pages/SEOOptimizer';
import { BrandMonitor } from './pages/BrandMonitor';
import { EcommerceAnalysis } from './pages/EcommerceAnalysis';

interface DashboardContentProps {
  currentPage: string;
}

export const DashboardContent = ({ currentPage }: DashboardContentProps) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'content-generator':
        return <ContentGenerator />;
      case 'ad-copy':
        return <AdCopyAI />;
      case 'subject-optimizer':
        return <SubjectOptimizer />;
      case 'audience-targeting':
        return <AudienceTargeting />;
      case 'campaigns':
        return <CampaignManagement />;
      case 'analytics':
        return <Analytics />;
      case 'ai-insights':
        return <AIInsights />;
      case 'social-media':
        return <SocialMediaManager />;
      case 'influencer':
        return <InfluencerHub />;
      case 'video-marketing':
        return <VideoMarketing />;
      case 'email-campaigns':
        return <EmailCampaigns />;
      case 'seo-optimizer':
        return <SEOOptimizer />;
      case 'brand-monitor':
        return <BrandMonitor />;
      case 'ecommerce-analysis':
        return <EcommerceAnalysis />;
      case 'pricing':
        return <PricingPlans />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="animate-fade-in">
      {renderPage()}
    </div>
  );
};
