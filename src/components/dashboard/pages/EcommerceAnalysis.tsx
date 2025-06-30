
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Package,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Star,
  RefreshCw,
  Calendar,
  Filter,
  Download,
  Bot,
  Zap,
  Target,
  Brain,
  BarChart3,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const salesData = [
  { month: 'Jan', revenue: 45000, orders: 320, visitors: 12000, conversion: 2.67, aiRecommendations: 15 },
  { month: 'Feb', revenue: 52000, orders: 380, visitors: 14500, conversion: 2.62, aiRecommendations: 18 },
  { month: 'Mar', revenue: 48000, orders: 340, visitors: 13200, conversion: 2.58, aiRecommendations: 22 },
  { month: 'Apr', revenue: 61000, orders: 450, visitors: 16800, conversion: 2.68, aiRecommendations: 28 },
  { month: 'May', revenue: 58000, orders: 420, visitors: 15600, conversion: 2.69, aiRecommendations: 31 },
  { month: 'Jun', revenue: 67000, orders: 490, visitors: 18200, conversion: 2.69, aiRecommendations: 35 },
];

const topProducts = [
  { name: 'Premium Wireless Headphones', sales: 1240, revenue: 186000, growth: 18.5, category: 'Electronics', aiScore: 95 },
  { name: 'Smart Fitness Tracker', sales: 980, revenue: 147000, growth: 22.3, category: 'Health', aiScore: 88 },
  { name: 'Eco-Friendly Water Bottle', sales: 1560, revenue: 93600, growth: 12.8, category: 'Lifestyle', aiScore: 82 },
  { name: 'Professional Camera Lens', sales: 450, revenue: 135000, growth: -5.2, category: 'Photography', aiScore: 76 },
  { name: 'Gaming Mechanical Keyboard', sales: 780, revenue: 117000, growth: 28.7, category: 'Gaming', aiScore: 92 },
];

const aiInsights = [
  { type: 'recommendation', title: 'Inventory Optimization', description: 'AI suggests increasing stock for Gaming Keyboards by 40%', priority: 'high', impact: '+$15K revenue' },
  { type: 'warning', title: 'Conversion Rate Drop', description: 'Photography category showing declining interest', priority: 'medium', impact: '-2.3% conversion' },
  { type: 'opportunity', title: 'Cross-sell Potential', description: 'Customers buying headphones likely to purchase phone cases', priority: 'high', impact: '+$8K revenue' },
  { type: 'insight', title: 'Seasonal Trend', description: 'Fitness products show 35% increase in Q2', priority: 'low', impact: 'Plan inventory' },
];

const customerSegments = [
  { segment: 'Premium Buyers', value: 28, revenue: 234500, orders: 680, color: '#C084FC', avgOrder: 345 },
  { segment: 'Regular Customers', value: 45, revenue: 187600, orders: 1344, color: '#9333ea', avgOrder: 140 },
  { segment: 'Bargain Hunters', value: 18, revenue: 89400, orders: 864, color: '#7c3aed', avgOrder: 103 },
  { segment: 'New Customers', value: 9, revenue: 45200, orders: 412, color: '#a855f7', avgOrder: 110 },
];

const predictiveMetrics = [
  { metric: 'Revenue Forecast (30d)', current: '$67K', predicted: '$74K', confidence: 89, trend: 'up' },
  { metric: 'Inventory Needs', current: '1,247', predicted: '1,450', confidence: 92, trend: 'up' },
  { metric: 'Customer Churn Risk', current: '8.2%', predicted: '6.8%', confidence: 76, trend: 'down' },
  { metric: 'Conversion Rate', current: '2.69%', predicted: '2.85%', confidence: 84, trend: 'up' },
];

export const EcommerceAnalysis = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`space-y-6 p-4 md:p-6 transition-colors duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`text-2xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${
            isDarkMode ? 'gradient-text' : 'text-gray-800'
          }`}>AI-Powered E-commerce Analytics</h1>
          <p className={`text-sm md:text-lg transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Advanced insights with machine learning predictions</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Badge className="bg-green-500 text-white animate-pulse px-3 py-1">
            <Bot className="w-3 h-3 mr-1" />
            AI Active
          </Badge>
          <Badge className="bg-blue-500 text-white px-3 py-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +15.3% Revenue
          </Badge>
        </div>
      </div>

      {/* AI-Powered Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card className={`transition-all duration-300 card-hover ${
          isDarkMode 
            ? 'glass-effect border-primary/50 hover:border-primary' 
            : 'bg-white border-gray-200 hover:border-primary shadow-lg'
        }`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>AI Revenue Prediction</CardTitle>
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Brain className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>$74K</div>
            <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Next 30 days (89% confidence)</div>
            <div className="flex items-center text-xs md:text-sm">
              <ArrowUpRight className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+10.4%</span>
            </div>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-300 card-hover ${
          isDarkMode 
            ? 'glass-effect border-primary/50 hover:border-primary' 
            : 'bg-white border-gray-200 hover:border-primary shadow-lg'
        }`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Smart Inventory Alerts</CardTitle>
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Package className="h-4 w-4 text-orange-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>12</div>
            <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Products need restocking</div>
            <div className="flex items-center text-xs md:text-sm">
              <AlertTriangle className="w-3 h-3 mr-1 text-orange-400" />
              <span className="text-orange-400 font-medium">Action needed</span>
            </div>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-300 card-hover ${
          isDarkMode 
            ? 'glass-effect border-primary/50 hover:border-primary' 
            : 'bg-white border-gray-200 hover:border-primary shadow-lg'
        }`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Conversion Optimization</CardTitle>
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Target className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>2.85%</div>
            <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>AI predicted rate</div>
            <div className="flex items-center text-xs md:text-sm">
              <ArrowUpRight className="w-3 h-3 mr-1 text-blue-400" />
              <span className="text-blue-400 font-medium">+0.16%</span>
            </div>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-300 card-hover ${
          isDarkMode 
            ? 'glass-effect border-primary/50 hover:border-primary' 
            : 'bg-white border-gray-200 hover:border-primary shadow-lg'
        }`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>AI Recommendations</CardTitle>
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Zap className="h-4 w-4 text-purple-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>35</div>
            <div className={`text-xs md:text-sm mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>Active suggestions</div>
            <div className="flex items-center text-xs md:text-sm">
              <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">12 implemented</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Dashboard */}
      <Card className={`transition-all duration-300 ${
        isDarkMode 
          ? 'glass-effect border-primary/50' 
          : 'bg-white border-gray-200 shadow-lg'
      }`}>
        <CardHeader>
          <CardTitle className={`flex items-center text-lg md:text-xl transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            <Brain className="w-5 h-5 mr-2 text-primary" />
            AI Business Insights
          </CardTitle>
          <CardDescription className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Machine learning powered recommendations and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border transition-all duration-300 ${
                isDarkMode ? 'border-primary/20 bg-primary/5' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {insight.type === 'recommendation' && <CheckCircle className="w-4 h-4 text-green-400" />}
                    {insight.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-400" />}
                    {insight.type === 'opportunity' && <TrendingUp className="w-4 h-4 text-blue-400" />}
                    {insight.type === 'insight' && <Eye className="w-4 h-4 text-purple-400" />}
                    <span className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{insight.title}</span>
                  </div>
                  <Badge variant={insight.priority === 'high' ? 'destructive' : insight.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                    {insight.priority}
                  </Badge>
                </div>
                <p className={`text-sm mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{insight.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-primary font-medium">{insight.impact}</span>
                  <Button size="sm" variant="outline" className="text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className={`transition-all duration-300 ${
          isDarkMode 
            ? 'glass-effect border-primary/50' 
            : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center text-lg md:text-xl transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Revenue & AI Predictions
            </CardTitle>
            <CardDescription className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Historical data with AI forecasting</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#1A0536" : "#e5e7eb"} />
                <XAxis dataKey="month" stroke={isDarkMode ? "#C084FC" : "#6b7280"} />
                <YAxis stroke={isDarkMode ? "#C084FC" : "#6b7280"} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#030014' : '#ffffff', 
                    border: `1px solid ${isDarkMode ? '#C084FC' : '#e5e7eb'}`,
                    borderRadius: '12px',
                    color: isDarkMode ? '#fff' : '#000'
                  }} 
                />
                <Line type="monotone" dataKey="revenue" stroke="#C084FC" strokeWidth={3} name="Revenue ($)" />
                <Line type="monotone" dataKey="aiRecommendations" stroke="#9333ea" strokeWidth={2} name="AI Recommendations" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className={`transition-all duration-300 ${
          isDarkMode 
            ? 'glass-effect border-primary/50' 
            : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <CardHeader>
            <CardTitle className={`flex items-center text-lg md:text-xl transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <PieChart className="w-5 h-5 mr-2 text-primary" />
              Customer Segments
            </CardTitle>
            <CardDescription className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>AI-powered customer segmentation</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#030014' : '#ffffff', 
                    border: `1px solid ${isDarkMode ? '#C084FC' : '#e5e7eb'}`,
                    borderRadius: '12px',
                    color: isDarkMode ? '#fff' : '#000'
                  }} 
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Predictive Analytics */}
      <Card className={`transition-all duration-300 ${
        isDarkMode 
          ? 'glass-effect border-primary/50' 
          : 'bg-white border-gray-200 shadow-lg'
      }`}>
        <CardHeader>
          <CardTitle className={`flex items-center text-lg md:text-xl transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            <Activity className="w-5 h-5 mr-2 text-primary" />
            Predictive Analytics Dashboard
          </CardTitle>
          <CardDescription className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>AI-powered forecasts and predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {predictiveMetrics.map((metric, index) => (
              <div key={index} className={`space-y-3 p-4 rounded-lg border transition-all duration-300 ${
                isDarkMode ? 'border-primary/20 bg-primary/5' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{metric.metric}</div>
                <div className="flex items-center justify-between">
                  <div className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{metric.current}</div>
                  <div className="text-right">
                    <div className="text-primary font-bold">{metric.predicted}</div>
                    <div className="text-xs text-gray-400">predicted</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 mr-1 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1 text-green-400" />
                    )}
                    <span className="text-green-400 font-medium">Improving</span>
                  </div>
                  <span className="text-gray-400">{metric.confidence}% confidence</span>
                </div>
                <Progress value={metric.confidence} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
