
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BrainCircuit, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Lightbulb, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const mockInsights = [
  {
    type: 'opportunity',
    title: 'Optimize Mobile Ad Spend',
    description: 'Mobile traffic has increased 45% but conversion rate is 2.3% lower than desktop. Consider mobile-specific landing pages.',
    impact: 'High',
    confidence: 92,
    action: 'Create mobile-optimized landing pages',
    estimatedGain: '+$3,200 monthly revenue'
  },
  {
    type: 'warning',
    title: 'Declining Email Open Rates',
    description: 'Email open rates have dropped 18% over the past month. Subject line optimization needed.',
    impact: 'Medium',
    confidence: 87,
    action: 'A/B test new subject line strategies',
    estimatedGain: '+12% open rate improvement'
  },
  {
    type: 'success',
    title: 'LinkedIn Campaign Outperforming',
    description: 'B2B LinkedIn campaigns show 340% higher conversion rates than industry average.',
    impact: 'High',
    confidence: 95,
    action: 'Increase LinkedIn ad budget by 40%',
    estimatedGain: '+$5,800 monthly revenue'
  },
  {
    type: 'insight',
    title: 'Peak Engagement Window Discovery',
    description: 'Data shows 67% higher engagement rates on Tuesday-Thursday between 2-4 PM EST.',
    impact: 'Medium',
    confidence: 89,
    action: 'Reschedule campaigns to optimal times',
    estimatedGain: '+23% engagement increase'
  }
];

const performanceMetrics = [
  { metric: 'Campaign ROI', current: 340, target: 400, trend: 'up' },
  { metric: 'Conversion Rate', current: 4.8, target: 6.0, trend: 'up' },
  { metric: 'Cost Per Lead', current: 45, target: 35, trend: 'down' },
  { metric: 'Email Open Rate', current: 18.5, target: 25.0, trend: 'down' },
];

export const AIInsights = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [insights, setInsights] = useState(mockInsights);

  const handleGenerateInsights = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "AI Analysis Complete!",
        description: "Fresh insights have been generated based on your latest data.",
      });
    }, 2000);
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity':
        return <Target className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-blue-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-purple-400" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'opportunity':
        return 'border-green-500/50 bg-green-500/10';
      case 'warning':
        return 'border-yellow-500/50 bg-yellow-500/10';
      case 'success':
        return 'border-blue-500/50 bg-blue-500/10';
      default:
        return 'border-purple-500/50 bg-purple-500/10';
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'High':
        return <Badge className="bg-red-500 text-white">High Impact</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-500 text-white">Medium Impact</Badge>;
      default:
        return <Badge className="bg-green-500 text-white">Low Impact</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Insights</h1>
          <p className="text-gray-400">AI-powered recommendations to optimize your marketing performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            onClick={handleGenerateInsights}
            disabled={isGenerating}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Analyzing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Generate Insights</span>
              </div>
            )}
          </Button>
          <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white animate-pulse">
            <BrainCircuit className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </div>

      {/* Performance Overview */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white">Performance Overview</CardTitle>
          <CardDescription className="text-gray-400">
            Current metrics vs targets with AI-powered trend analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-white">{metric.metric}</h4>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Current</span>
                    <span className="text-white font-medium">
                      {metric.metric.includes('Cost') ? '$' : ''}{metric.current}{metric.metric.includes('Rate') ? '%' : metric.metric.includes('ROI') ? '%' : ''}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Target</span>
                    <span className="text-gray-400">
                      {metric.metric.includes('Cost') ? '$' : ''}{metric.target}{metric.metric.includes('Rate') ? '%' : metric.metric.includes('ROI') ? '%' : ''}
                    </span>
                  </div>
                  <Progress 
                    value={metric.metric.includes('Cost') ? 
                      (metric.target / metric.current) * 100 : 
                      (metric.current / metric.target) * 100
                    } 
                    className="h-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <Card key={index} className={`glass-effect border-primary-600/50 ${getInsightColor(insight.type)} hover:border-opacity-70 transition-all duration-300`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getInsightIcon(insight.type)}
                  <CardTitle className="text-white text-lg">{insight.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  {getImpactBadge(insight.impact)}
                  <Badge variant="outline" className="text-xs">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">{insight.description}</p>
              
              <div className="p-3 bg-primary-800/30 rounded-lg">
                <h5 className="text-sm font-medium text-white mb-1">Recommended Action</h5>
                <p className="text-sm text-gray-300">{insight.action}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400">Estimated Impact</span>
                  <p className="text-sm font-medium text-green-400">{insight.estimatedGain}</p>
                </div>
                <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                  Apply Recommendation
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Summary */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BrainCircuit className="w-5 h-5 mr-2 text-purple-400" />
            AI Performance Summary
          </CardTitle>
          <CardDescription className="text-gray-400">
            Comprehensive analysis of your marketing performance with actionable insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <h4 className="font-medium text-white">What's Working</h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• LinkedIn B2B campaigns performing 340% above average</li>
                <li>• Video content engagement up 65%</li>
                <li>• Email automation series converting at 8.3%</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <h4 className="font-medium text-white">Needs Attention</h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Mobile conversion rate 2.3% below desktop</li>
                <li>• Email open rates declining 18% this month</li>
                <li>• Cost per lead increasing in Google Ads</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-4 h-4 text-blue-400" />
                <h4 className="font-medium text-white">Opportunities</h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Scale LinkedIn campaigns for +$5,800 revenue</li>
                <li>• Optimize mobile experience for +$3,200</li>
                <li>• Leverage peak engagement times for +23% CTR</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-800/30 rounded-lg border border-primary-600/30">
            <h4 className="font-medium text-white mb-2">💡 AI Recommendation Priority</h4>
            <p className="text-sm text-gray-300 mb-3">
              Based on your current performance data, focusing on mobile optimization and LinkedIn scaling 
              could potentially increase your monthly revenue by <span className="text-green-400 font-medium">$9,000+</span> 
              within the next 60 days.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
              Get Detailed Action Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
