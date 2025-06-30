import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MousePointer, 
  Eye, 
  DollarSign,
  Target,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

const performanceData = [
  { month: 'Jan', clicks: 1200, conversions: 89, revenue: 4800, impressions: 45000 },
  { month: 'Feb', clicks: 1800, conversions: 134, revenue: 7200, impressions: 52000 },
  { month: 'Mar', clicks: 1500, conversions: 112, revenue: 6100, impressions: 48000 },
  { month: 'Apr', clicks: 2400, conversions: 198, revenue: 9500, impressions: 67000 },
  { month: 'May', clicks: 2200, conversions: 176, revenue: 8800, impressions: 61000 },
  { month: 'Jun', clicks: 3000, conversions: 245, revenue: 12000, impressions: 78000 },
];

const channelData = [
  { name: 'Google Ads', value: 35, color: '#4285f4', revenue: 18500 },
  { name: 'Facebook', value: 28, color: '#1877f2', revenue: 14200 },
  { name: 'LinkedIn', value: 18, color: '#0077b5', revenue: 9800 },
  { name: 'Email', value: 12, color: '#ea4335', revenue: 6100 },
  { name: 'Organic', value: 7, color: '#34a853', revenue: 3400 },
];

const deviceData = [
  { device: 'Desktop', sessions: 45, conversions: 12.5, revenue: 28000 },
  { device: 'Mobile', sessions: 38, conversions: 8.3, revenue: 16500 },
  { device: 'Tablet', sessions: 17, conversions: 6.1, revenue: 8500 },
];

const topPerformers = [
  { campaign: 'Summer Sale 2024', platform: 'Google Ads', clicks: 5420, conversions: 289, ctr: 4.2, revenue: 15600 },
  { campaign: 'Brand Awareness', platform: 'Facebook', clicks: 3890, conversions: 178, ctr: 3.8, revenue: 9800 },
  { campaign: 'B2B Outreach', platform: 'LinkedIn', clicks: 2340, conversions: 145, ctr: 6.2, revenue: 12300 },
  { campaign: 'Retargeting Campaign', platform: 'Google Ads', clicks: 1890, conversions: 134, ctr: 7.1, revenue: 8900 },
];

export const Analytics = () => {
  const [timeRange, setTimeRange] = useState('6m');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">Comprehensive insights into your marketing performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-primary-800/50 border-primary-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-primary-800 border-primary-600">
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Badge className="bg-green-500 text-white animate-pulse">
            <TrendingUp className="w-3 h-3 mr-1" />
            Live Data
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-effect border-primary-600/50 hover:border-primary-500/70 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$48,400</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400">+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50 hover:border-primary-500/70 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Clicks</CardTitle>
            <MousePointer className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,100</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="w-3 h-3 mr-1 text-blue-400" />
              <span className="text-blue-400">+8.2% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50 hover:border-primary-500/70 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4.8%</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="w-3 h-3 mr-1 text-purple-400" />
              <span className="text-purple-400">+0.5% improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50 hover:border-primary-500/70 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Impressions</CardTitle>
            <Eye className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">351K</div>
            <div className="flex items-center text-xs">
              <TrendingDown className="w-3 h-3 mr-1 text-red-400" />
              <span className="text-red-400">-2.1% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white">Revenue & Conversions Trend</CardTitle>
            <CardDescription className="text-gray-400">Monthly performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f0f23', 
                    border: '1px solid #6666ff',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#6666ff" 
                  fill="#6666ff"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="#00ff88" 
                  fill="#00ff88"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white">Channel Performance</CardTitle>
            <CardDescription className="text-gray-400">Revenue distribution by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f0f23', 
                    border: '1px solid #6666ff',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Device Performance */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white">Device Performance</CardTitle>
          <CardDescription className="text-gray-400">Sessions and conversions by device type</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deviceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" />
              <XAxis dataKey="device" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f0f23', 
                  border: '1px solid #6666ff',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="sessions" fill="#6666ff" radius={[4, 4, 0, 0]} />
              <Bar dataKey="conversions" fill="#00ff88" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Performing Campaigns */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white">Top Performing Campaigns</CardTitle>
          <CardDescription className="text-gray-400">Your best campaigns ranked by performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-primary-800/30 rounded-lg border border-primary-600/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{campaign.campaign}</h4>
                    <p className="text-sm text-gray-400">{campaign.platform}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-white font-medium">{campaign.clicks.toLocaleString()}</div>
                    <div className="text-gray-400">Clicks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-medium">{campaign.conversions}</div>
                    <div className="text-gray-400">Conversions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-medium">{campaign.ctr}%</div>
                    <div className="text-gray-400">CTR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-medium">${campaign.revenue.toLocaleString()}</div>
                    <div className="text-gray-400">Revenue</div>
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
