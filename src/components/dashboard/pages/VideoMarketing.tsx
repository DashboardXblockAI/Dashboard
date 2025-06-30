
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Video, 
  Play, 
  Upload, 
  Edit, 
  Eye, 
  Heart, 
  Share2, 
  Clock,
  TrendingUp,
  Camera,
  Film,
  Zap,
  Download,
  Settings,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const videoStats = [
  { name: 'Total Views', value: '2.4M', change: '+18.5%', icon: Eye, color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
  { name: 'Watch Time', value: '48.2K hrs', change: '+24.3%', icon: Clock, color: 'bg-green-500/20', iconColor: 'text-green-400' },
  { name: 'Engagement', value: '8.7%', change: '+12.1%', icon: Heart, color: 'bg-red-500/20', iconColor: 'text-red-400' },
  { name: 'Completion Rate', value: '73%', change: '+5.8%', icon: TrendingUp, color: 'bg-purple-500/20', iconColor: 'text-purple-400' },
];

const recentVideos = [
  { title: 'Product Launch Teaser', duration: '0:45', views: '125K', engagement: '9.2%', status: 'published', thumbnail: '🚀' },
  { title: 'Behind the Scenes', duration: '2:15', views: '89K', engagement: '7.8%', status: 'published', thumbnail: '🎬' },
  { title: 'Customer Testimonials', duration: '1:30', views: '67K', engagement: '11.4%', status: 'published', thumbnail: '⭐' },
  { title: 'Tutorial Series Ep 1', duration: '3:45', views: '156K', engagement: '13.2%', status: 'published', thumbnail: '📚' },
];

const viewsData = [
  { day: 'Mon', views: 45000, watchTime: 3200 },
  { day: 'Tue', views: 52000, watchTime: 3800 },
  { day: 'Wed', views: 48000, watchTime: 3500 },
  { day: 'Thu', views: 61000, watchTime: 4200 },
  { day: 'Fri', views: 58000, watchTime: 4000 },
  { day: 'Sat', views: 73000, watchTime: 5100 },
  { day: 'Sun', views: 67000, watchTime: 4600 },
];

export const VideoMarketing = () => {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 gradient-text">Video Marketing</h1>
          <p className="text-gray-300 text-sm md:text-lg">Create, manage, and analyze your video content performance</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Upload className="w-4 h-4 mr-2" />
            Upload Video
          </Button>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            <Camera className="w-4 h-4 mr-2" />
            Record
          </Button>
        </div>
      </div>

      {/* Video Performance Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {videoStats.map((stat, index) => (
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

      {/* Video Analytics Chart */}
      <Card className="glass-effect border-primary/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center text-lg md:text-xl">
            <BarChart3 className="w-5 h-5 mr-2 text-primary" />
            Video Performance Analytics
          </CardTitle>
          <CardDescription className="text-gray-300">Views and watch time trends this week</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData}>
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
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#C084FC" 
                strokeWidth={3}
                dot={{ fill: '#C084FC' }}
              />
              <Line 
                type="monotone" 
                dataKey="watchTime" 
                stroke="#9333ea" 
                strokeWidth={2}
                dot={{ fill: '#9333ea' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Videos & Video Library */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Film className="w-5 h-5 mr-2 text-primary" />
              Recent Videos
            </CardTitle>
            <CardDescription className="text-gray-300">Your latest video content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl md:text-3xl">{video.thumbnail}</div>
                    <div>
                      <div className="text-white font-medium text-sm md:text-base">{video.title}</div>
                      <div className="text-gray-400 text-xs md:text-sm">{video.duration} • {video.views} views</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge className="bg-green-500/20 text-green-400 text-xs">Published</Badge>
                    <div className="text-primary font-medium text-xs md:text-sm">{video.engagement}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center text-lg md:text-xl">
              <Settings className="w-5 h-5 mr-2 text-primary" />
              Video Tools
            </CardTitle>
            <CardDescription className="text-gray-300">Professional video creation tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <Edit className="w-4 h-4 mr-2 text-primary" />
                  AI Video Editor
                </h4>
                <p className="text-gray-400 text-sm mb-3">Automatically edit and enhance your videos</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white w-full">
                  Launch Editor
                </Button>
              </div>
              
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-primary" />
                  Auto-Generated Captions
                </h4>
                <p className="text-gray-400 text-sm mb-3">Add subtitles automatically with AI</p>
                <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 w-full">
                  Generate Captions
                </Button>
              </div>
              
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <Download className="w-4 h-4 mr-2 text-primary" />
                  Batch Export
                </h4>
                <p className="text-gray-400 text-sm mb-3">Export multiple videos in different formats</p>
                <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 w-full">
                  Start Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-primary/30 transition-colors duration-300">
              <Video className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Create Video</h3>
            <p className="text-xs text-gray-400 text-center">Start new project</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-green-500/30 transition-colors duration-300">
              <Play className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Live Stream</h3>
            <p className="text-xs text-gray-400 text-center">Go live instantly</p>
          </CardContent>
        </Card>
        
        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-500/30 transition-colors duration-300">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Analytics</h3>
            <p className="text-xs text-gray-400 text-center">View detailed metrics</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer group card-hover">
          <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-purple-500/30 transition-colors duration-300">
              <Share2 className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            </div>
            <h3 className="font-medium text-white mb-1 text-sm md:text-base text-center">Share & Distribute</h3>
            <p className="text-xs text-gray-400 text-center">Multi-platform sharing</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
