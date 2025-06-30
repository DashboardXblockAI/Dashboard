import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  Eye,
  MousePointer,
  Mail,
  Share2,
  Globe,
  Zap,
  Award,
  Clock,
  ArrowUpRight,
  Heart,
  Video,
  Camera,
  Megaphone,
  Activity,
  Star,
  ShoppingCart,
  Search,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const statsData = [
  { name: 'Jan', campaigns: 12, revenue: 4800, clicks: 1200, impressions: 45000, conversions: 89 },
  { name: 'Feb', campaigns: 19, revenue: 7200, clicks: 1800, impressions: 52000, conversions: 134 },
  { name: 'Mar', campaigns: 15, revenue: 6100, clicks: 1500, impressions: 48000, conversions: 112 },
  { name: 'Apr', campaigns: 25, revenue: 9500, clicks: 2400, impressions: 67000, conversions: 198 },
  { name: 'May', campaigns: 22, revenue: 8800, clicks: 2200, impressions: 61000, conversions: 176 },
  { name: 'Jun', campaigns: 30, revenue: 12000, clicks: 3000, impressions: 78000, conversions: 245 },
];

const channelData = [
  { name: 'Social Media', value: 35, color: '#C084FC', revenue: 18500 },
  { name: 'Google Ads', value: 28, color: '#9333ea', revenue: 14200 },
  { name: 'Email Marketing', value: 18, color: '#7c3aed', revenue: 9800 },
  { name: 'Content Marketing', value: 12, color: '#a855f7', revenue: 6100 },
  { name: 'Influencer', value: 7, color: '#d8b4fe', revenue: 3400 },
];

const deviceBreakdown = [
  { device: 'Mobile', percentage: 65, users: 12580, color: '#C084FC' },
  { device: 'Desktop', percentage: 28, users: 5430, color: '#9333ea' },
  { device: 'Tablet', percentage: 7, users: 1360, color: '#7c3aed' },
];

const socialMetrics = [
  { platform: 'Instagram', followers: 45200, engagement: 4.8, growth: 12.5, color: '#C084FC' },
  { platform: 'Facebook', followers: 32800, engagement: 3.2, growth: 8.3, color: '#9333ea' },
  { platform: 'Twitter', followers: 28900, engagement: 5.1, growth: 15.2, color: '#7c3aed' },
  { platform: 'LinkedIn', followers: 18500, engagement: 6.4, growth: 22.1, color: '#a855f7' },
];

const topContent = [
  { title: 'Summer Product Launch Video', type: 'Video', views: 125000, engagement: 8.4, platform: 'Instagram' },
  { title: 'Brand Story Campaign', type: 'Carousel', views: 89000, engagement: 6.7, platform: 'Facebook' },
  { title: 'Customer Success Stories', type: 'Blog Post', views: 67000, engagement: 9.2, platform: 'LinkedIn' },
  { title: 'Behind the Scenes', type: 'Story', views: 45000, engagement: 12.1, platform: 'Instagram' },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-3 gradient-text">Marketing Command Center</h1>
          <p className="text-gray-300 text-lg">AI-powered insights for your digital marketing success</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge className="bg-primary text-white animate-neon-pulse px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            AI Analytics Active
          </Badge>
          <Badge className="bg-green-500 text-white animate-pulse px-4 py-2">
            <Activity className="w-4 h-4 mr-2" />
            Live Data
          </Badge>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-200">Total Revenue</CardTitle>
            <div className="p-2 bg-green-500/20 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">$48,400</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+12.5%</span>
              <span className="text-gray-400 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-200">Active Campaigns</CardTitle>
            <div className="p-2 bg-primary/20 rounded-lg">
              <Target className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">23</div>
            <div className="flex items-center text-sm">
              <ArrowUpRight className="w-4 h-4 mr-1 text-primary" />
              <span className="text-primary font-medium">+3 new</span>
              <span className="text-gray-400 ml-1">this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-200">Total Clicks</CardTitle>
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <MousePointer className="h-5 w-5 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">12.1K</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1 text-blue-400" />
              <span className="text-blue-400 font-medium">+8.2%</span>
              <span className="text-gray-400 ml-1">CTR improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-200">Social Followers</CardTitle>
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Users className="h-5 w-5 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">125.9K</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1 text-purple-400" />
              <span className="text-purple-400 font-medium">+15.3%</span>
              <span className="text-gray-400 ml-1">growth rate</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="glass-effect border-primary/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Eye className="h-4 w-4 text-orange-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">351K</div>
              <div className="text-xs text-gray-400">Impressions</div>
            </div>
          </div>
        </Card>

        <Card className="glass-effect border-primary/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Mail className="h-4 w-4 text-green-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">23.4%</div>
              <div className="text-xs text-gray-400">Email Open Rate</div>
            </div>
          </div>
        </Card>

        <Card className="glass-effect border-primary/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Share2 className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">1.8K</div>
              <div className="text-xs text-gray-400">Social Shares</div>
            </div>
          </div>
        </Card>

        <Card className="glass-effect border-primary/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Video className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">89.2%</div>
              <div className="text-xs text-gray-400">Video Completion</div>
            </div>
          </div>
        </Card>

        <Card className="glass-effect border-primary/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Heart className="h-4 w-4 text-red-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">4.8</div>
              <div className="text-xs text-gray-400">Avg Engagement</div>
            </div>
          </div>
        </Card>

        <Card className="glass-effect border-primary/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Star className="h-4 w-4 text-yellow-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">4.9</div>
              <div className="text-xs text-gray-400">Brand Rating</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Campaign Performance Analytics
            </CardTitle>
            <CardDescription className="text-gray-300">Revenue, clicks, and conversion trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A0536" />
                <XAxis dataKey="name" stroke="#C084FC" />
                <YAxis stroke="#C084FC" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#050117', 
                    border: '1px solid #C084FC',
                    borderRadius: '12px',
                    color: '#fff',
                    boxShadow: '0 8px 32px rgba(192, 132, 252, 0.3)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#C084FC" 
                  fill="#C084FC"
                  fillOpacity={0.3}
                  strokeWidth={3}
                />
                <Area 
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#9333ea" 
                  fill="#9333ea"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-primary" />
              Marketing Channel Distribution
            </CardTitle>
            <CardDescription className="text-gray-300">Revenue by marketing channel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#050117', 
                    border: '1px solid #C084FC',
                    borderRadius: '12px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Device Analytics */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Monitor className="w-5 h-5 mr-2 text-primary" />
            Device Analytics
          </CardTitle>
          <CardDescription className="text-gray-300">User engagement across different devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deviceBreakdown.map((device, index) => (
              <div key={device.device} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {device.device === 'Mobile' && <Smartphone className="w-5 h-5 text-primary" />}
                    {device.device === 'Desktop' && <Monitor className="w-5 h-5 text-primary" />}
                    {device.device === 'Tablet' && <Tablet className="w-5 h-5 text-primary" />}
                    <span className="text-white font-medium">{device.device}</span>
                  </div>
                  <span className="text-primary font-bold">{device.percentage}%</span>
                </div>
                <Progress 
                  value={device.percentage} 
                  className="h-3 bg-primary-900/50"
                />
                <div className="text-sm text-gray-400">
                  {device.users.toLocaleString()} users
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media Performance */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Share2 className="w-5 h-5 mr-2 text-primary" />
            Social Media Performance
          </CardTitle>
          <CardDescription className="text-gray-300">Follower growth and engagement across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMetrics.map((platform, index) => (
              <div key={platform.platform} className="space-y-4 p-4 rounded-lg border border-primary/20 bg-primary/5">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white">{platform.platform}</h4>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-2xl font-bold text-white">{platform.followers.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Followers</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Engagement:</span>
                    <span className="text-primary font-medium">{platform.engagement}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Growth:</span>
                    <span className="text-green-400 font-medium">+{platform.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Content */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Award className="w-5 h-5 mr-2 text-primary" />
            Top Performing Content
          </CardTitle>
          <CardDescription className="text-gray-300">Your best content pieces this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topContent.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{content.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{content.type}</span>
                      <span>•</span>
                      <span>{content.platform}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-white font-medium">{content.views.toLocaleString()}</div>
                    <div className="text-gray-400">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary font-medium">{content.engagement}%</div>
                    <div className="text-gray-400">Engagement</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations - Enhanced */}
      <Card className="glass-effect border-primary/50 neon-glow">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="w-5 h-5 mr-2 text-primary animate-pulse" />
            AI-Powered Marketing Insights
          </CardTitle>
          <CardDescription className="text-gray-300">
            Personalized recommendations to maximize your marketing ROI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">Optimize Ad Targeting</h4>
                  <p className="text-sm text-gray-300">Your 25-34 age group shows 35% higher engagement. Consider increasing budget allocation by 20%.</p>
                  <div className="mt-2">
                    <Badge className="bg-primary/20 text-primary text-xs">High Impact</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">Content Strategy Update</h4>
                  <p className="text-sm text-gray-300">Video content performs 40% better than static images. Increase video production for Q4 campaigns.</p>
                  <div className="mt-2">
                    <Badge className="bg-green-500/20 text-green-400 text-xs">Action Required</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">Peak Engagement Times</h4>
                  <p className="text-sm text-gray-300">Your audience is most active between 2-4 PM EST and 7-9 PM EST. Schedule key posts accordingly.</p>
                  <div className="mt-2">
                    <Badge className="bg-blue-500/20 text-blue-400 text-xs">Timing Optimization</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">Cross-Platform Opportunity</h4>
                  <p className="text-sm text-gray-300">LinkedIn shows untapped potential for B2B content. Consider expanding your professional content strategy.</p>
                  <div className="mt-2">
                    <Badge className="bg-purple-500/20 text-purple-400 text-xs">Growth Opportunity</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors duration-300">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-white mb-1">AI Content Generator</h3>
              <p className="text-sm text-gray-400">Create engaging posts instantly</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/30 transition-colors duration-300">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-medium text-white mb-1">Launch Campaign</h3>
              <p className="text-sm text-gray-400">Start new targeted campaigns</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-medium text-white mb-1">Deep Analytics</h3>
              <p className="text-sm text-gray-400">Explore detailed metrics</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/30 transition-colors duration-300">
                <Megaphone className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-medium text-white mb-1">Influencer Hub</h3>
              <p className="text-sm text-gray-400">Manage collaborations</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
