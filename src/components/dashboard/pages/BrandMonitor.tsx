
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  MessageCircle, 
  Eye,
  Star,
  Globe,
  Clock,
  Users,
  Heart,
  Share2,
  Bell,
  CheckCircle,
  XCircle,
  Search
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const sentimentData = [
  { date: 'Mon', positive: 78, negative: 12, neutral: 10 },
  { date: 'Tue', positive: 82, negative: 8, neutral: 10 },
  { date: 'Wed', positive: 75, negative: 15, neutral: 10 },
  { date: 'Thu', positive: 88, negative: 7, neutral: 5 },
  { date: 'Fri', positive: 91, negative: 5, neutral: 4 },
  { date: 'Sat', positive: 85, negative: 9, neutral: 6 },
  { date: 'Sun', positive: 79, negative: 11, neutral: 10 },
];

const mentions = [
  {
    platform: 'Twitter',
    mentions: 1250,
    sentiment: 'positive',
    engagement: 4.8,
    reach: 45000,
    growth: 12.5
  },
  {
    platform: 'Instagram',
    mentions: 890,
    sentiment: 'positive',
    engagement: 6.2,
    reach: 32000,
    growth: 18.3
  },
  {
    platform: 'Facebook',
    mentions: 650,
    sentiment: 'neutral',
    engagement: 3.4,
    reach: 28000,
    growth: 8.7
  },
  {
    platform: 'LinkedIn',
    mentions: 420,
    sentiment: 'positive',
    engagement: 7.1,
    reach: 15000,
    growth: 22.1
  }
];

const alerts = [
  { type: 'critical', message: 'Negative review spike detected on Google Reviews', time: '2 hours ago', resolved: false },
  { type: 'warning', message: 'Brand mention without tag on Instagram', time: '4 hours ago', resolved: false },
  { type: 'info', message: 'Positive sentiment increase on Twitter', time: '6 hours ago', resolved: true },
  { type: 'critical', message: 'Competitor campaign targeting your keywords', time: '1 day ago', resolved: false },
];

const competitors = [
  { name: 'Competitor A', mentions: 2100, sentiment: 72, shareOfVoice: 28 },
  { name: 'Competitor B', mentions: 1850, sentiment: 68, shareOfVoice: 24 },
  { name: 'Your Brand', mentions: 3210, sentiment: 84, shareOfVoice: 35 },
  { name: 'Competitor C', mentions: 980, sentiment: 65, shareOfVoice: 13 },
];

export const BrandMonitor = () => {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 gradient-text">Brand Monitor</h1>
          <p className="text-gray-300 text-sm md:text-lg">Track your brand reputation across all channels</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Search className="w-4 h-4 mr-2" />
            Add Keywords
          </Button>
          <Badge className="bg-green-500 text-white animate-pulse px-3 py-1">
            <Shield className="w-3 h-3 mr-1" />
            84% Positive
          </Badge>
        </div>
      </div>

      {/* Brand Health Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Brand Sentiment</CardTitle>
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Heart className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">84%</div>
            <Progress value={84} className="h-2 mb-2" />
            <div className="flex items-center text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+6% this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Total Mentions</CardTitle>
              <div className="p-2 bg-primary/20 rounded-lg">
                <MessageCircle className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">3,210</div>
            <div className="text-xs md:text-sm text-gray-400 mb-2">This month</div>
            <div className="flex items-center text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+15.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Share of Voice</CardTitle>
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Globe className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">35%</div>
            <div className="text-xs md:text-sm text-gray-400 mb-2">Market share</div>
            <div className="flex items-center text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+3% vs competitors</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Active Alerts</CardTitle>
              <div className="p-2 bg-red-500/20 rounded-lg">
                <Bell className="h-4 w-4 text-red-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs md:text-sm text-gray-400 mb-2">Needs attention</div>
            <div className="flex items-center text-xs md:text-sm">
              <AlertTriangle className="w-3 h-3 mr-1 text-red-400" />
              <span className="text-red-400 font-medium">2 critical</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Analysis Chart */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-lg md:text-xl">
            <TrendingUp className="w-5 h-5 mr-2 text-primary" />
            Sentiment Analysis
          </CardTitle>
          <CardDescription className="text-gray-300">Track brand sentiment over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A0536" />
              <XAxis dataKey="date" stroke="#C084FC" />
              <YAxis stroke="#C084FC" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#030014', 
                  border: '1px solid #C084FC',
                  borderRadius: '12px',
                  color: '#fff'
                }} 
              />
              <Area type="monotone" dataKey="positive" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
              <Area type="monotone" dataKey="neutral" stackId="1" stroke="#6b7280" fill="#6b7280" fillOpacity={0.6} />
              <Area type="monotone" dataKey="negative" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Platform Mentions & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Share2 className="w-5 h-5 mr-2 text-primary" />
              Platform Mentions
            </CardTitle>
            <CardDescription className="text-gray-300">Brand mentions across social platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentions.map((platform, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      platform.sentiment === 'positive' ? 'bg-green-400' : 
                      platform.sentiment === 'negative' ? 'bg-red-400' : 'bg-gray-400'
                    }`}></div>
                    <div>
                      <div className="font-medium text-white">{platform.platform}</div>
                      <div className="text-xs text-gray-400">{platform.mentions} mentions</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white">{platform.engagement}% engagement</div>
                    <div className="text-xs text-gray-400">{platform.reach.toLocaleString()} reach</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Bell className="w-5 h-5 mr-2 text-primary" />
              Recent Alerts
            </CardTitle>
            <CardDescription className="text-gray-300">Monitor brand reputation issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex-shrink-0 mt-0.5">
                    {alert.resolved ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <div className={`w-4 h-4 ${
                        alert.type === 'critical' ? 'text-red-400' : 
                        alert.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                      }`}>
                        {alert.type === 'critical' && <XCircle className="w-4 h-4" />}
                        {alert.type === 'warning' && <AlertTriangle className="w-4 h-4" />}
                        {alert.type === 'info' && <CheckCircle className="w-4 h-4" />}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white mb-1">{alert.message}</div>
                    <div className="text-xs text-gray-400">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Analysis */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-lg md:text-xl">
            <Users className="w-5 h-5 mr-2 text-primary" />
            Competitive Landscape
          </CardTitle>
          <CardDescription className="text-gray-300">Compare your brand performance with competitors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <div key={index} className={`p-4 rounded-lg border transition-all duration-300 ${
                competitor.name === 'Your Brand' 
                  ? 'bg-primary/10 border-primary/50' 
                  : 'bg-primary/5 border-primary/20'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-white">{competitor.name}</h4>
                      {competitor.name === 'Your Brand' && (
                        <Badge className="bg-primary text-white text-xs">You</Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Mentions</div>
                        <div className="text-white font-medium">{competitor.mentions.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Sentiment</div>
                        <div className="text-white font-medium">{competitor.sentiment}%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Share of Voice</div>
                        <div className="text-white font-medium">{competitor.shareOfVoice}%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20">
                      <Progress value={competitor.shareOfVoice} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
