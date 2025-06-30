
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Mail, 
  Send, 
  Users, 
  TrendingUp, 
  Eye, 
  MousePointer, 
  Calendar,
  Edit,
  Zap,
  Target,
  BarChart3,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const emailStats = [
  { name: 'Total Subscribers', value: '24.5K', change: '+12.8%', icon: Users, color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
  { name: 'Open Rate', value: '24.3%', change: '+3.2%', icon: Eye, color: 'bg-green-500/20', iconColor: 'text-green-400' },
  { name: 'Click Rate', value: '4.7%', change: '+1.8%', icon: MousePointer, color: 'bg-purple-500/20', iconColor: 'text-purple-400' },
  { name: 'Conversions', value: '892', change: '+18.5%', icon: TrendingUp, color: 'bg-orange-500/20', iconColor: 'text-orange-400' },
];

const recentCampaigns = [
  { name: 'Summer Sale Newsletter', sent: '18.2K', openRate: '28.5%', clickRate: '5.2%', status: 'sent', date: '2024-06-20' },
  { name: 'Product Launch Announcement', sent: '22.1K', openRate: '31.2%', clickRate: '7.8%', status: 'sent', date: '2024-06-18' },
  { name: 'Weekly Digest #24', sent: '0', openRate: '0%', clickRate: '0%', status: 'draft', date: '2024-06-25' },
  { name: 'Customer Success Stories', sent: '15.8K', openRate: '26.7%', clickRate: '4.9%', status: 'sent', date: '2024-06-15' },
];

const performanceData = [
  { week: 'Week 1', opens: 3200, clicks: 456, conversions: 89 },
  { week: 'Week 2', opens: 3580, clicks: 512, conversions: 103 },
  { week: 'Week 3', opens: 3890, clicks: 578, conversions: 127 },
  { week: 'Week 4', opens: 4120, clicks: 634, conversions: 145 },
];

const automationFlows = [
  { name: 'Welcome Series', status: 'active', subscribers: '2.3K', openRate: '45.2%' },
  { name: 'Abandoned Cart', status: 'active', subscribers: '890', openRate: '38.7%' },
  { name: 'Post-Purchase Follow-up', status: 'paused', subscribers: '1.5K', openRate: '41.3%' },
  { name: 'Re-engagement Campaign', status: 'active', subscribers: '567', openRate: '22.8%' },
];

export const EmailCampaigns = () => {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 gradient-text">Email Campaigns</h1>
          <p className="text-gray-300 text-sm md:text-lg">Create, send, and analyze email marketing campaigns</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            <Users className="w-4 h-4 mr-2" />
            Manage Lists
          </Button>
        </div>
      </div>

      {/* Email Performance Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {emailStats.map((stat, index) => (
          <Card key={stat.name} className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 md:p-3 ${stat.color} rounded-lg`}>
                  <stat.icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.iconColor}`} />
                </div>
                <div className="flex items-center text-xs md:text-sm">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
                  <span className="text-green-400 font-medium">{stat.change}</span>
                </div>
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Analytics */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-lg md:text-xl">
            <BarChart3 className="w-5 h-5 mr-2 text-primary" />
            Email Performance Analytics
          </CardTitle>
          <CardDescription className="text-gray-300">Opens, clicks, and conversions over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A0536" />
              <XAxis dataKey="week" stroke="#C084FC" />
              <YAxis stroke="#C084FC" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#030014', 
                  border: '1px solid #C084FC',
                  borderRadius: '12px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="opens" fill="#C084FC" />
              <Bar dataKey="clicks" fill="#9333ea" />
              <Bar dataKey="conversions" fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Campaigns & Automation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              Recent Campaigns
            </CardTitle>
            <CardDescription className="text-gray-300">Your latest email campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign, index) => (
                <div key={index} className="space-y-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium text-sm md:text-base">{campaign.name}</h4>
                    <Badge className={`text-xs ${
                      campaign.status === 'sent' ? 'bg-green-500/20 text-green-400' :
                      campaign.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs md:text-sm">
                    <div>
                      <span className="text-gray-400">Sent:</span>
                      <div className="text-white font-medium">{campaign.sent || 'N/A'}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Open Rate:</span>
                      <div className="text-white font-medium">{campaign.openRate}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Click Rate:</span>
                      <div className="text-white font-medium">{campaign.clickRate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              Automation Flows
            </CardTitle>
            <CardDescription className="text-gray-300">Automated email sequences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {automationFlows.map((flow, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      flow.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                    } animate-pulse`}></div>
                    <div>
                      <div className="text-white font-medium text-sm md:text-base">{flow.name}</div>
                      <div className="text-gray-400 text-xs md:text-sm">{flow.subscribers} subscribers</div>
                    </div>
                  </div>
                  <div className="text-primary font-medium text-xs md:text-sm">{flow.openRate}</div>
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
              <Edit className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Email Builder</h3>
            <p className="text-xs text-gray-400 text-center">Drag & drop editor</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-green-500/30 transition-colors duration-300">
              <Target className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">A/B Testing</h3>
            <p className="text-xs text-gray-400 text-center">Optimize campaigns</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-500/30 transition-colors duration-300">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Schedule Send</h3>
            <p className="text-xs text-gray-400 text-center">Plan your campaigns</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-purple-500/30 transition-colors duration-300">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Segmentation</h3>
            <p className="text-xs text-gray-400 text-center">Target specific groups</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
