
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  TrendingUp, 
  Star, 
  DollarSign, 
  MessageCircle, 
  Heart,
  Eye,
  UserPlus,
  Search,
  Filter,
  Send,
  Calendar,
  Award,
  Target,
  Zap
} from 'lucide-react';

const influencers = [
  { name: 'Sarah Johnson', category: 'Lifestyle', followers: '250K', engagement: 8.5, rate: '$2,500', status: 'active', avatar: '🌟' },
  { name: 'Mike Chen', category: 'Tech', followers: '180K', engagement: 12.3, rate: '$1,800', status: 'pending', avatar: '🚀' },
  { name: 'Emma Davis', category: 'Fashion', followers: '320K', engagement: 6.7, rate: '$3,200', status: 'active', avatar: '💎' },
  { name: 'Alex Rodriguez', category: 'Fitness', followers: '145K', engagement: 9.8, rate: '$1,450', status: 'completed', avatar: '💪' },
];

const campaignStats = [
  { name: 'Active Campaigns', value: 12, icon: Target, color: 'bg-primary/20', iconColor: 'text-primary' },
  { name: 'Total Reach', value: '2.4M', icon: Eye, color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
  { name: 'Engagement Rate', value: '9.2%', icon: Heart, color: 'bg-red-500/20', iconColor: 'text-red-400' },
  { name: 'ROI', value: '324%', icon: TrendingUp, color: 'bg-green-500/20', iconColor: 'text-green-400' },
];

const recentCampaigns = [
  { name: 'Summer Collection Launch', influencer: 'Emma Davis', status: 'Live', reach: '85K', engagement: '7.2%' },
  { name: 'Tech Product Review', influencer: 'Mike Chen', status: 'Pending', reach: '0', engagement: '0%' },
  { name: 'Fitness Challenge', influencer: 'Alex Rodriguez', status: 'Completed', reach: '62K', engagement: '12.1%' },
  { name: 'Lifestyle Brand Partnership', influencer: 'Sarah Johnson', status: 'Live', reach: '127K', engagement: '8.9%' },
];

export const InfluencerHub = () => {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 gradient-text">Influencer Hub</h1>
          <p className="text-gray-300 text-sm md:text-lg">Manage influencer partnerships and collaborations</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Influencer
          </Button>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            <Search className="w-4 h-4 mr-2" />
            Discover
          </Button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {campaignStats.map((stat, index) => (
          <Card key={stat.name} className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.name}</div>
                </div>
                <div className={`p-2 md:p-3 ${stat.color} rounded-lg`}>
                  <stat.icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Influencer Directory & Recent Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center text-lg md:text-xl">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Influencer Directory
              </CardTitle>
              <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
            <CardDescription className="text-gray-300">Your influencer network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {influencers.map((influencer, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{influencer.avatar}</div>
                    <div>
                      <div className="text-white font-medium text-sm md:text-base">{influencer.name}</div>
                      <div className="text-gray-400 text-xs md:text-sm">{influencer.category} • {influencer.followers}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge className={`text-xs ${
                      influencer.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      influencer.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {influencer.status}
                    </Badge>
                    <div className="text-primary font-medium text-xs md:text-sm">{influencer.rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Recent Campaigns
            </CardTitle>
            <CardDescription className="text-gray-300">Latest influencer collaborations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign, index) => (
                <div key={index} className="space-y-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium text-sm md:text-base">{campaign.name}</h4>
                    <Badge className={`text-xs ${
                      campaign.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      campaign.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-400">by {campaign.influencer}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-gray-400" />
                        <span className="text-white">{campaign.reach}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3 text-gray-400" />
                        <span className="text-white">{campaign.engagement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-primary/30 transition-colors duration-300">
              <Send className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Send Proposal</h3>
            <p className="text-xs text-gray-400 text-center">Create collaboration proposal</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-green-500/30 transition-colors duration-300">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Schedule Meeting</h3>
            <p className="text-xs text-gray-400 text-center">Book strategy session</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-500/30 transition-colors duration-300">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Performance Review</h3>
            <p className="text-xs text-gray-400 text-center">Analyze campaign results</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-purple-500/30 transition-colors duration-300">
              <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Budget Tracker</h3>
            <p className="text-xs text-gray-400 text-center">Monitor spending</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
