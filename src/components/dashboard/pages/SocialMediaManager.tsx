
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Calendar,
  Clock,
  BarChart3,
  Eye,
  ThumbsUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Play,
  Camera,
  Send,
  Plus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const socialData = [
  { platform: 'Instagram', posts: 45, likes: 12500, comments: 890, shares: 245, growth: 15.2 },
  { platform: 'Facebook', posts: 38, likes: 8900, comments: 567, shares: 189, growth: 8.7 },
  { platform: 'Twitter', posts: 62, likes: 6700, comments: 234, shares: 567, growth: 22.1 },
  { platform: 'LinkedIn', posts: 28, likes: 4500, comments: 123, shares: 89, growth: 18.9 },
];

const engagementData = [
  { day: 'Mon', likes: 1200, comments: 89, shares: 45 },
  { day: 'Tue', likes: 1450, comments: 95, shares: 52 },
  { day: 'Wed', likes: 1380, comments: 87, shares: 48 },
  { day: 'Thu', likes: 1650, comments: 112, shares: 63 },
  { day: 'Fri', likes: 1890, comments: 134, shares: 78 },
  { day: 'Sat', likes: 2100, comments: 156, shares: 89 },
  { day: 'Sun', likes: 1750, comments: 128, shares: 71 },
];

const scheduledPosts = [
  { time: '09:00 AM', platform: 'Instagram', content: 'Morning motivation quote', status: 'scheduled' },
  { time: '12:00 PM', platform: 'Facebook', content: 'Product showcase video', status: 'scheduled' },
  { time: '03:00 PM', platform: 'Twitter', content: 'Industry news update', status: 'scheduled' },
  { time: '06:00 PM', platform: 'LinkedIn', content: 'Professional insights article', status: 'scheduled' },
];

export const SocialMediaManager = () => {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 gradient-text">Social Media Manager</h1>
          <p className="text-gray-300 text-sm md:text-lg">Manage all your social media accounts from one dashboard</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
          <Badge className="bg-green-500 text-white animate-pulse px-3 py-1">
            <Calendar className="w-3 h-3 mr-1" />
            4 Scheduled
          </Badge>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {socialData.map((platform, index) => (
          <Card key={platform.platform} className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-200">{platform.platform}</CardTitle>
                <div className="p-2 bg-primary/20 rounded-lg">
                  {platform.platform === 'Instagram' && <Instagram className="h-4 w-4 text-primary" />}
                  {platform.platform === 'Facebook' && <Facebook className="h-4 w-4 text-primary" />}
                  {platform.platform === 'Twitter' && <Twitter className="h-4 w-4 text-primary" />}
                  {platform.platform === 'LinkedIn' && <Linkedin className="h-4 w-4 text-primary" />}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xl md:text-2xl font-bold text-white">{platform.posts} Posts</div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Likes:</span>
                  <span className="text-white">{platform.likes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Comments:</span>
                  <span className="text-white">{platform.comments}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Growth:</span>
                  <div className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
                    <span className="text-green-400 font-medium">+{platform.growth}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Engagement Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Weekly Engagement
            </CardTitle>
            <CardDescription className="text-gray-300">Likes, comments, and shares this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A0536" />
                <XAxis dataKey="day" stroke="#C084FC" />
                <YAxis stroke="#C084FC" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#030014', 
                    border: '1px solid #C084FC',
                    borderRadius: '12px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="likes" fill="#C084FC" />
                <Bar dataKey="comments" fill="#9333ea" />
                <Bar dataKey="shares" fill="#7c3aed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              Scheduled Posts
            </CardTitle>
            <CardDescription className="text-gray-300">Today's posting schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary font-bold text-sm">{post.time}</div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="text-white text-sm font-medium">{post.platform}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-xs hidden md:inline">{post.content}</span>
                    <Badge className="bg-primary/20 text-primary text-xs">Scheduled</Badge>
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
              <Camera className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Create Story</h3>
            <p className="text-xs text-gray-400 text-center">Quick story creator</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-green-500/30 transition-colors duration-300">
              <Send className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Bulk Scheduler</h3>
            <p className="text-xs text-gray-400 text-center">Schedule multiple posts</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-500/30 transition-colors duration-300">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Analytics Report</h3>
            <p className="text-xs text-gray-400 text-center">Generate insights</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-purple-500/30 transition-colors duration-300">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Audience Insights</h3>
            <p className="text-xs text-gray-400 text-center">Know your followers</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
