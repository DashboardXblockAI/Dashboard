import {
  BarChart3,
  Bot,
  BrainCircuit,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Settings,
  Target,
  TrendingUp,
  Users,
  LogOut,
  CreditCard,
  Mail,
  Share2,
  Globe,
  Video,
  Camera,
  Megaphone,
  Search,
  Award,
  Zap,
  Heart,
  ShoppingCart
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  {
    title: 'Dashboard Overview',
    url: 'dashboard',
    icon: Home,
  },
  {
    title: 'Content Generator',
    url: 'content-generator',
    icon: FileText,
  },
  {
    title: 'Ad Copy AI',
    url: 'ad-copy',
    icon: MessageSquare,
  },
  {
    title: 'Subject Line Optimizer',
    url: 'subject-optimizer',
    icon: TrendingUp,
  },
  {
    title: 'Audience Targeting AI',
    url: 'audience-targeting',
    icon: Target,
  },
  {
    title: 'Campaign Management',
    url: 'campaigns',
    icon: Calendar,
  },
  {
    title: 'Analytics',
    url: 'analytics',
    icon: BarChart3,
  },
  {
    title: 'AI Insights',
    url: 'ai-insights',
    icon: BrainCircuit,
  },
];

const socialTools = [
  {
    title: 'Social Media Manager',
    url: 'social-media',
    icon: Share2,
  },
  {
    title: 'Influencer Hub',
    url: 'influencer',
    icon: Users,
  },
  {
    title: 'Video Marketing',
    url: 'video-marketing',
    icon: Video,
  },
  {
    title: 'Email Campaigns',
    url: 'email-campaigns',
    icon: Mail,
  },
];

const advancedTools = [
  {
    title: 'SEO Optimizer',
    url: 'seo',
    icon: Search,
  },
  {
    title: 'Brand Monitor',
    url: 'brand-monitor',
    icon: Award,
  },
  {
    title: 'E-commerce Analytics',
    url: 'ecommerce',
    icon: ShoppingCart,
  },
  {
    title: 'Pricing Plans',
    url: 'pricing',
    icon: CreditCard,
  },
];

interface AppSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function AppSidebar({ currentPage, onPageChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-primary/30 bg-gradient-to-b from-primary-950 to-secondary">
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary/30">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center overflow-hidden">
            <img 
              src="/siteicon.svg" 
              alt="Marketing AI Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            {/* <span className="font-sora font-bold text-base sm:text-lg gradient-text">MarketingAI</span> */}
            {/* <Badge className="bg-primary/20 text-primary text-xs ml-1 sm:ml-2">Pro</Badge> */}
          </div>
        </div>
      </div>
      
      <SidebarContent className="px-2 sm:px-4 py-4 sm:py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Core Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 sm:space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => onPageChange(item.url)}
                    className={`w-full justify-start text-left transition-all duration-300 rounded-lg p-2 sm:p-3 ${
                      currentPage === item.url
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 border border-primary/50'
                        : 'text-gray-300 hover:text-white hover:bg-primary/20 border border-transparent hover:border-primary/30'
                    }`}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="ml-2 sm:ml-3 font-medium text-sm sm:text-base">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6 sm:mt-8">
          <SidebarGroupLabel className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Social & Content
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 sm:space-y-2">
              {socialTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => onPageChange(item.url)}
                    className={`w-full justify-start text-left transition-all duration-300 rounded-lg p-2 sm:p-3 ${
                      currentPage === item.url
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 border border-primary/50'
                        : 'text-gray-300 hover:text-white hover:bg-primary/20 border border-transparent hover:border-primary/30'
                    }`}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="ml-2 sm:ml-3 font-medium text-sm sm:text-base">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6 sm:mt-8">
          <SidebarGroupLabel className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Advanced Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 sm:space-y-2">
              {advancedTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => onPageChange(item.url)}
                    className={`w-full justify-start text-left transition-all duration-300 rounded-lg p-2 sm:p-3 ${
                      currentPage === item.url
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 border border-primary/50'
                        : 'text-gray-300 hover:text-white hover:bg-primary/20 border border-transparent hover:border-primary/30'
                    }`}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="ml-2 sm:ml-3 font-medium text-sm sm:text-base">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 sm:p-6 border-t border-primary/30">
        <div className="space-y-2 sm:space-y-3">
          <Button
            variant="ghost"
            onClick={() => onPageChange('settings')}
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-primary/20 border border-primary/20 rounded-lg p-2 sm:p-3"
          >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            <span className="text-sm sm:text-base">Settings</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => window.location.reload()}
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 border border-transparent rounded-lg p-2 sm:p-3"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            <span className="text-sm sm:text-base">Logout</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
