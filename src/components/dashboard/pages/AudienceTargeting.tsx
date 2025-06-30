
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Clock, MapPin, TrendingUp, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const AudienceTargeting = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [industry, setIndustry] = useState('');
  const [productType, setProductType] = useState('');
  const [goal, setGoal] = useState('');
  const [targetingData, setTargetingData] = useState<any>(null);

  const handleGenerate = async () => {
    if (!industry || !productType || !goal) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate targeting recommendations.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI targeting analysis
    setTimeout(() => {
      const data = {
        segments: [
          {
            name: "Primary Segment",
            description: `Tech-savvy ${industry.toLowerCase()} professionals aged 25-45`,
            size: "2.3M users",
            engagement: "High",
            demographics: {
              age: "25-45",
              gender: "Mixed (55% Male, 45% Female)",
              income: "$50K - $150K",
              education: "College+"
            },
            interests: [
              "Technology",
              "Business Innovation",
              "Industry Trends",
              "Professional Development"
            ],
            channels: ["LinkedIn", "Google Ads", "Email Marketing"],
            bestTimes: ["Tuesday-Thursday 9AM-11AM", "Wednesday 2PM-4PM"]
          },
          {
            name: "Secondary Segment",
            description: `Decision makers in ${industry.toLowerCase()} companies`,
            size: "1.8M users",
            engagement: "Medium-High",
            demographics: {
              age: "35-55",
              gender: "Mixed (60% Male, 40% Female)",
              income: "$75K - $200K+",
              education: "MBA/Advanced"
            },
            interests: [
              "Leadership",
              "Strategic Planning",
              "ROI Optimization",
              "Team Management"
            ],
            channels: ["LinkedIn", "Industry Publications", "Webinars"],
            bestTimes: ["Monday-Wednesday 8AM-10AM", "Thursday 3PM-5PM"]
          }
        ],
        recommendations: [
          {
            type: "Platform Strategy",
            title: "Multi-Channel Approach",
            description: "Focus 60% budget on LinkedIn for B2B reach, 30% on Google Ads for intent-based targeting, 10% on retargeting"
          },
          {
            type: "Content Strategy",
            title: "Educational Content",
            description: "Create how-to guides, industry reports, and case studies to attract your target segments"
          },
          {
            type: "Timing Optimization",
            title: "Peak Engagement Windows",
            description: "Schedule campaigns for Tuesday-Thursday mornings when your audience is most active"
          }
        ]
      };
      
      setTargetingData(data);
      setIsGenerating(false);
      toast({
        title: "Targeting Analysis Complete!",
        description: "Your AI-powered audience recommendations are ready.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Audience Targeting AI</h1>
          <p className="text-gray-400">Discover your ideal audience segments with AI-powered insights</p>
        </div>
        <Badge className="bg-cyan-500 text-white animate-pulse">
          <Target className="w-3 h-3 mr-1" />
          Smart Targeting
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Campaign Details
            </CardTitle>
            <CardDescription className="text-gray-400">
              Tell us about your business and goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-gray-200">Industry</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-primary-800 border-primary-600">
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="product" className="text-gray-200">Product Type</Label>
              <Select value={productType} onValueChange={setProductType}>
                <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent className="bg-primary-800 border-primary-600">
                  <SelectItem value="saas">SaaS Platform</SelectItem>
                  <SelectItem value="service">Professional Service</SelectItem>
                  <SelectItem value="product">Physical Product</SelectItem>
                  <SelectItem value="course">Online Course</SelectItem>
                  <SelectItem value="app">Mobile App</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal" className="text-gray-200">Campaign Goal</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                  <SelectValue placeholder="Select goal" />
                </SelectTrigger>
                <SelectContent className="bg-primary-800 border-primary-600">
                  <SelectItem value="awareness">Brand Awareness</SelectItem>
                  <SelectItem value="leads">Lead Generation</SelectItem>
                  <SelectItem value="sales">Direct Sales</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="retention">Customer Retention</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Generate Targeting</span>
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-6">
          {!targetingData ? (
            <Card className="glass-effect border-primary-600/50">
              <CardContent className="flex items-center justify-center h-64 text-gray-400">
                <div className="text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Configure your campaign details to get AI-powered targeting recommendations</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Audience Segments */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Target Audience Segments</h3>
                {targetingData.segments.map((segment: any, index: number) => (
                  <Card key={index} className="glass-effect border-primary-600/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{segment.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-blue-500 text-white">{segment.size}</Badge>
                          <Badge 
                            className={`${
                              segment.engagement === 'High' ? 'bg-green-500' : 'bg-yellow-500'
                            } text-white`}
                          >
                            {segment.engagement} Engagement
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-gray-300">
                        {segment.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-white mb-2">Demographics</h5>
                            <div className="space-y-1 text-sm text-gray-300">
                              <p>Age: {segment.demographics.age}</p>
                              <p>Gender: {segment.demographics.gender}</p>
                              <p>Income: {segment.demographics.income}</p>
                              <p>Education: {segment.demographics.education}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-white mb-2">Interests</h5>
                            <div className="flex flex-wrap gap-1">
                              {segment.interests.map((interest: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-white mb-2 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              Best Channels
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {segment.channels.map((channel: string, i: number) => (
                                <Badge key={i} className="bg-purple-500 text-white text-xs">
                                  {channel}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-white mb-2 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              Optimal Times
                            </h5>
                            <div className="space-y-1 text-sm text-gray-300">
                              {segment.bestTimes.map((time: string, i: number) => (
                                <p key={i}>{time}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recommendations */}
              <Card className="glass-effect border-primary-600/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Strategic insights to maximize your campaign performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {targetingData.recommendations.map((rec: any, index: number) => (
                    <div key={index} className="p-4 bg-primary-800/30 rounded-lg border border-primary-600/30">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-white mb-1">{rec.title}</h4>
                          <Badge variant="outline" className="text-xs mb-2">{rec.type}</Badge>
                          <p className="text-sm text-gray-300">{rec.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
