
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  Target, 
  Eye,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Zap,
  Link,
  FileText,
  Clock,
  Users,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const seoMetrics = [
  { keyword: 'digital marketing', position: 3, volume: 12000, difficulty: 68, trend: 'up' },
  { keyword: 'social media strategy', position: 7, volume: 8500, difficulty: 45, trend: 'up' },
  { keyword: 'content marketing', position: 12, volume: 15000, difficulty: 72, trend: 'down' },
  { keyword: 'email campaigns', position: 5, volume: 6800, difficulty: 38, trend: 'up' },
  { keyword: 'brand awareness', position: 18, volume: 9200, difficulty: 55, trend: 'same' },
];

const technicalSeo = [
  { metric: 'Page Speed', score: 92, status: 'good' },
  { metric: 'Mobile Friendly', score: 88, status: 'good' },
  { metric: 'Core Web Vitals', score: 76, status: 'warning' },
  { metric: 'SSL Certificate', score: 100, status: 'good' },
  { metric: 'Meta Tags', score: 65, status: 'warning' },
  { metric: 'Schema Markup', score: 45, status: 'error' },
];

const competitorData = [
  { name: 'Jan', ourSite: 65, competitor1: 72, competitor2: 58 },
  { name: 'Feb', ourSite: 68, competitor1: 74, competitor2: 61 },
  { name: 'Mar', ourSite: 71, competitor1: 76, competitor2: 63 },
  { name: 'Apr', ourSite: 75, competitor1: 78, competitor2: 65 },
  { name: 'May', ourSite: 78, competitor1: 80, competitor2: 67 },
  { name: 'Jun', ourSite: 82, competitor1: 79, competitor2: 69 },
];

export const SEOOptimizer = () => {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 gradient-text">SEO Optimizer</h1>
          <p className="text-gray-300 text-sm md:text-lg">Boost your search rankings with AI-powered SEO insights</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Search className="w-4 h-4 mr-2" />
            Analyze Website
          </Button>
          <Badge className="bg-blue-500 text-white animate-pulse px-3 py-1">
            <Eye className="w-3 h-3 mr-1" />
            Monitoring 45 Keywords
          </Badge>
        </div>
      </div>

      {/* SEO Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Domain Authority</CardTitle>
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">72</div>
            <Progress value={72} className="h-2 mb-2" />
            <div className="flex items-center text-xs md:text-sm">
              <ArrowUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+5 points</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Organic Traffic</CardTitle>
              <div className="p-2 bg-primary/20 rounded-lg">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">25.8K</div>
            <div className="text-xs md:text-sm text-gray-400 mb-2">Monthly visitors</div>
            <div className="flex items-center text-xs md:text-sm">
              <ArrowUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+18.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Avg Position</CardTitle>
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Target className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">8.4</div>
            <div className="text-xs md:text-sm text-gray-400 mb-2">Search ranking</div>
            <div className="flex items-center text-xs md:text-sm">
              <ArrowUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+2.1 positions</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-200">Backlinks</CardTitle>
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Link className="h-4 w-4 text-purple-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">1,247</div>
            <div className="text-xs md:text-sm text-gray-400 mb-2">Total links</div>
            <div className="flex items-center text-xs md:text-sm">
              <ArrowUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="text-green-400 font-medium">+23 this week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Keyword Rankings */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-lg md:text-xl">
            <Search className="w-5 h-5 mr-2 text-primary" />
            Keyword Rankings
          </CardTitle>
          <CardDescription className="text-gray-300">Track your most important keywords</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seoMetrics.map((keyword, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex-1 mb-2 md:mb-0">
                  <div className="font-medium text-white mb-1">{keyword.keyword}</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-400">
                    <span>Volume: {keyword.volume.toLocaleString()}</span>
                    <span>•</span>
                    <span>Difficulty: {keyword.difficulty}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold text-white">#{keyword.position}</div>
                    <div className="text-xs text-gray-400">Position</div>
                  </div>
                  <div className="flex items-center">
                    {keyword.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-400" />}
                    {keyword.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-400" />}
                    {keyword.trend === 'same' && <Minus className="w-4 h-4 text-gray-400" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical SEO & Competitor Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              Technical SEO Health
            </CardTitle>
            <CardDescription className="text-gray-300">Website optimization status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {technicalSeo.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.status === 'good' && <CheckCircle className="w-4 h-4 text-green-400" />}
                    {item.status === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-400" />}
                    {item.status === 'error' && <AlertCircle className="w-4 h-4 text-red-400" />}
                    <span className="text-white text-sm md:text-base">{item.metric}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <div className="text-white font-bold">{item.score}</div>
                    </div>
                    <div className="w-16">
                      <Progress 
                        value={item.score} 
                        className={`h-2 ${
                          item.status === 'good' ? 'text-green-400' : 
                          item.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                        }`} 
                      />
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
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Competitor Analysis
            </CardTitle>
            <CardDescription className="text-gray-300">Compare your SEO performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A0536" />
                <XAxis dataKey="name" stroke="#C084FC" />
                <YAxis stroke="#C084FC" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#030014', 
                    border: '1px solid #C084FC',
                    borderRadius: '12px',
                    color: '#fff'
                  }} 
                />
                <Line type="monotone" dataKey="ourSite" stroke="#C084FC" strokeWidth={3} name="Our Site" />
                <Line type="monotone" dataKey="competitor1" stroke="#9333ea" strokeWidth={2} name="Competitor 1" />
                <Line type="monotone" dataKey="competitor2" stroke="#7c3aed" strokeWidth={2} name="Competitor 2" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
