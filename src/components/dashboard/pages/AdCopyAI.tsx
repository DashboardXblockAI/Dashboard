
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Copy, RefreshCw, Sparkles, MessageSquare, Target } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const demoAds = [
  {
    product: "AI Marketing Tool",
    audience: "Digital Marketers",
    headline: "Transform Your Marketing with AI",
    description: "Boost ROI by 300% with our AI-powered marketing automation platform. Get started free today!",
    cta: "Start Free Trial",
    platform: "Google Ads"
  },
  {
    product: "E-commerce Platform",
    audience: "Small Business Owners",
    headline: "Sell Online in Minutes",
    description: "Launch your online store without coding. 14-day free trial, no setup fees, unlimited products.",
    cta: "Create Store Now",
    platform: "Facebook Ads"
  }
];

export const AdCopyAI = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [productName, setProductName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [generatedAds, setGeneratedAds] = useState<any[]>([]);
  const [showDemo, setShowDemo] = useState(true);

  const handleGenerate = async () => {
    if (!productName || !targetAudience) {
      toast({
        title: "Missing Information",
        description: "Please fill in both product name and target audience.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setShowDemo(false);

    // Simulate AI ad generation
    setTimeout(() => {
      const generatedContent = [
        {
          headline: `${productName} - Perfect for ${targetAudience}`,
          description: `Discover why thousands of ${targetAudience.toLowerCase()} choose ${productName}. Get results in just 30 days with our proven system.`,
          cta: "Get Started Today",
          platform: "Google Ads",
          performance: "High"
        },
        {
          headline: `${targetAudience}, Meet Your New Secret Weapon`,
          description: `${productName} delivers exactly what ${targetAudience.toLowerCase()} need. Join 10,000+ satisfied customers and see the difference.`,
          cta: "Try It Free",
          platform: "Facebook Ads",
          performance: "Medium"
        },
        {
          headline: `Why ${targetAudience} Love ${productName}`,
          description: `Rated #1 by professionals. Transform your workflow with ${productName} - the tool that gets results.`,
          cta: "Learn More",
          platform: "LinkedIn Ads",
          performance: "High"
        }
      ];
      
      setGeneratedAds(generatedContent);
      setIsGenerating(false);
      toast({
        title: "Ad Copy Generated!",
        description: "Your AI-powered ad variations are ready to use.",
      });
    }, 2000);
  };

  const copyToClipboard = (ad: any) => {
    const adText = `Headline: ${ad.headline}\nDescription: ${ad.description}\nCTA: ${ad.cta}\nPlatform: ${ad.platform}`;
    navigator.clipboard.writeText(adText);
    toast({
      title: "Copied!",
      description: "Ad copy copied to clipboard.",
    });
  };

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'High':
        return <Badge className="bg-green-500 text-white">High Performance</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-500 text-white">Medium Performance</Badge>;
      default:
        return <Badge className="bg-gray-500 text-white">Standard</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Ad Copy AI</h1>
          <p className="text-gray-400">Generate high-converting ad copy with AI</p>
        </div>
        <Badge className="bg-blue-500 text-white animate-pulse">
          <Target className="w-3 h-3 mr-1" />
          Conversion Optimized
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Ad Parameters
            </CardTitle>
            <CardDescription className="text-gray-400">
              Tell us about your product and audience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product" className="text-gray-200">Product Name</Label>
              <Input
                id="product"
                placeholder="Enter product name..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience" className="text-gray-200">Target Audience</Label>
              <Input
                id="audience"
                placeholder="e.g., Small business owners, Marketers..."
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
              />
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Ad Copy</span>
                </div>
              )}
            </Button>

            <div className="text-xs text-gray-400 space-y-1">
              <p>💡 Tips for better results:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Be specific about your product</li>
                <li>Define your audience clearly</li>
                <li>Include key benefits or features</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        <div className="lg:col-span-2 space-y-4">
          {showDemo && generatedAds.length === 0 ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Demo Ad Examples</h3>
              {demoAds.map((ad, index) => (
                <Card key={index} className="glass-effect border-primary-600/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{ad.headline}</CardTitle>
                      <Badge variant="outline" className="text-xs">{ad.platform}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">{ad.description}</p>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                        {ad.cta}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(ad)}
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </Button>
                    </div>
                    <div className="text-xs text-gray-400">
                      <p>Product: {ad.product} | Audience: {ad.audience}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : generatedAds.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Generated Ad Variations</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleGenerate}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Generate More
                </Button>
              </div>
              {generatedAds.map((ad, index) => (
                <Card key={index} className="glass-effect border-primary-600/50 hover:border-primary-500/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">{ad.headline}</CardTitle>
                      <div className="flex items-center space-x-2">
                        {getPerformanceBadge(ad.performance)}
                        <Badge variant="outline" className="text-xs">{ad.platform}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">{ad.description}</p>
                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                        {ad.cta}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(ad)}
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="glass-effect border-primary-600/50">
              <CardContent className="flex items-center justify-center h-64 text-gray-400">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your product details to generate ad copy</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
