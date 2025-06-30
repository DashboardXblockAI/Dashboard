
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Copy, RefreshCw, Sparkles, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const demoContent = [
  {
    title: "The Future of Digital Marketing",
    content: "Digital marketing is evolving at an unprecedented pace, driven by artificial intelligence and machine learning technologies. Brands that embrace these innovations are seeing remarkable improvements in customer engagement and ROI. The key to success lies in understanding your audience's needs and delivering personalized experiences at scale...",
    tone: "Professional",
    wordCount: 500
  },
  {
    title: "5 Social Media Trends to Watch",
    content: "Social media platforms are constantly evolving, and staying ahead of the curve is crucial for marketing success. From short-form video content to AI-powered chatbots, these trends are reshaping how brands connect with their audiences. Let's explore the most impactful trends that will define social media marketing in the coming year...",
    tone: "Engaging",
    wordCount: 350
  }
];

export const ContentGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [showDemo, setShowDemo] = useState(true);

  const handleGenerate = async () => {
    if (!topic || !tone || !wordCount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate content.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setShowDemo(false);

    // Simulate AI content generation
    setTimeout(() => {
      const simulatedContent = `# ${topic}\n\nThis is AI-generated content about ${topic} written in a ${tone.toLowerCase()} tone. The content has been optimized for ${wordCount} words and includes key marketing insights, actionable strategies, and engaging storytelling elements.\n\n## Key Points:\n\n- Strategic approach to ${topic}\n- Data-driven insights and analytics\n- Actionable recommendations for implementation\n- Best practices from industry leaders\n\nThis content is designed to engage your target audience while delivering valuable information that drives conversions and builds brand authority in your industry.`;
      
      setGeneratedContent(simulatedContent);
      setIsGenerating(false);
      toast({
        title: "Content Generated!",
        description: "Your AI-powered content is ready to use.",
      });
    }, 2000);
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Content Generator</h1>
          <p className="text-gray-400">Create compelling content with the power of AI</p>
        </div>
        <Badge className="bg-purple-500 text-white animate-pulse">
          <Sparkles className="w-3 h-3 mr-1" />
          AI Powered
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Content Settings
            </CardTitle>
            <CardDescription className="text-gray-400">
              Configure your content generation parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-gray-200">Topic</Label>
              <Input
                id="topic"
                placeholder="Enter your content topic..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone" className="text-gray-200">Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent className="bg-primary-800 border-primary-600">
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="engaging">Engaging</SelectItem>
                  <SelectItem value="persuasive">Persuasive</SelectItem>
                  <SelectItem value="informative">Informative</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wordCount" className="text-gray-200">Word Count</Label>
              <Select value={wordCount} onValueChange={setWordCount}>
                <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                  <SelectValue placeholder="Select word count" />
                </SelectTrigger>
                <SelectContent className="bg-primary-800 border-primary-600">
                  <SelectItem value="250">250 words</SelectItem>
                  <SelectItem value="500">500 words</SelectItem>
                  <SelectItem value="750">750 words</SelectItem>
                  <SelectItem value="1000">1000 words</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Content</span>
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
            <CardDescription className="text-gray-400">
              Your AI-generated content will appear here
            </CardDescription>
          </CardHeader>
          <CardContent>
            {showDemo && !generatedContent ? (
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">Demo content examples:</p>
                {demoContent.map((demo, index) => (
                  <div key={index} className="p-4 bg-primary-800/30 rounded-lg border border-primary-600/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{demo.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">{demo.tone}</Badge>
                        <Badge variant="outline" className="text-xs">{demo.wordCount} words</Badge>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{demo.content}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(demo.content)}
                      className="text-xs"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                ))}
              </div>
            ) : generatedContent ? (
              <div className="space-y-4">
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generatedContent)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleGenerate}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
                <Textarea
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                  className="min-h-[400px] bg-primary-800/50 border-primary-600 text-white resize-none"
                  placeholder="Generated content will appear here..."
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Fill in the form and click "Generate Content" to get started</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
