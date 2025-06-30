
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Mail, BarChart3, RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const SubjectOptimizer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [subjectA, setSubjectA] = useState('');
  const [subjectB, setSubjectB] = useState('');
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!subjectA || !subjectB) {
      toast({
        title: "Missing Subject Lines",
        description: "Please enter both subject lines for comparison.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const analysis = {
        winner: Math.random() > 0.5 ? 'A' : 'B',
        scoreA: Math.floor(Math.random() * 30) + 70,
        scoreB: Math.floor(Math.random() * 30) + 70,
        insights: [
          {
            factor: 'Length Optimization',
            scoreA: Math.floor(Math.random() * 20) + 80,
            scoreB: Math.floor(Math.random() * 20) + 80,
            explanation: 'Optimal subject line length is 6-10 words'
          },
          {
            factor: 'Emotional Impact',
            scoreA: Math.floor(Math.random() * 30) + 60,
            scoreB: Math.floor(Math.random() * 30) + 60,
            explanation: 'Emotional words increase open rates by 15%'
          },
          {
            factor: 'Urgency Factor',
            scoreA: Math.floor(Math.random() * 25) + 65,
            scoreB: Math.floor(Math.random() * 25) + 65,
            explanation: 'Time-sensitive language drives immediate action'
          },
          {
            factor: 'Personalization',
            scoreA: Math.floor(Math.random() * 20) + 70,
            scoreB: Math.floor(Math.random() * 20) + 70,
            explanation: 'Personalized subject lines improve open rates by 26%'
          }
        ]
      };
      
      setResults(analysis);
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete!",
        description: `Subject line ${analysis.winner} is predicted to perform better.`,
      });
    }, 2500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Subject Line Optimizer</h1>
          <p className="text-gray-400">A/B test your email subject lines with AI predictions</p>
        </div>
        <Badge className="bg-orange-500 text-white animate-pulse">
          <BarChart3 className="w-3 h-3 mr-1" />
          Predictive Analysis
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Subject Line Comparison
            </CardTitle>
            <CardDescription className="text-gray-400">
              Enter two subject lines to compare their predicted performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subjectA" className="text-gray-200">Subject Line A</Label>
              <Input
                id="subjectA"
                placeholder="Enter first subject line..."
                value={subjectA}
                onChange={(e) => setSubjectA(e.target.value)}
                className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjectB" className="text-gray-200">Subject Line B</Label>
              <Input
                id="subjectB"
                placeholder="Enter second subject line..."
                value={subjectB}
                onChange={(e) => setSubjectB(e.target.value)}
                className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
              />
            </div>

            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isAnalyzing ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Analyze Subject Lines</span>
                </div>
              )}
            </Button>

            <div className="text-xs text-gray-400 space-y-1">
              <p>📊 Analysis factors:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Length optimization (6-10 words ideal)</li>
                <li>Emotional impact and sentiment</li>
                <li>Urgency and action words</li>
                <li>Personalization elements</li>
                <li>Spam filter compatibility</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="glass-effect border-primary-600/50">
          <CardHeader>
            <CardTitle className="text-white">Analysis Results</CardTitle>
            <CardDescription className="text-gray-400">
              AI-powered performance predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!results ? (
              <div className="flex items-center justify-center h-64 text-gray-400">
                <div className="text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter subject lines and click "Analyze" to see predictions</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Overall Scores */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg border-2 ${results.winner === 'A' ? 'border-green-500 bg-green-500/10' : 'border-gray-500 bg-gray-500/10'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-white">Subject Line A</h3>
                      {results.winner === 'A' && <Badge className="bg-green-500 text-white">Winner</Badge>}
                    </div>
                    <p className="text-sm text-gray-300 mb-3">"{subjectA}"</p>
                    <div className="flex items-center space-x-2">
                      <span className={`text-2xl font-bold ${getScoreColor(results.scoreA)}`}>
                        {results.scoreA}%
                      </span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${results.winner === 'B' ? 'border-green-500 bg-green-500/10' : 'border-gray-500 bg-gray-500/10'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-white">Subject Line B</h3>
                      {results.winner === 'B' && <Badge className="bg-green-500 text-white">Winner</Badge>}
                    </div>
                    <p className="text-sm text-gray-300 mb-3">"{subjectB}"</p>
                    <div className="flex items-center space-x-2">
                      <span className={`text-2xl font-bold ${getScoreColor(results.scoreB)}`}>
                        {results.scoreB}%
                      </span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>

                {/* Detailed Analysis */}
                <div className="space-y-4">
                  <h4 className="font-medium text-white">Detailed Analysis</h4>
                  {results.insights.map((insight: any, index: number) => (
                    <div key={index} className="p-3 bg-primary-800/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-sm font-medium text-white">{insight.factor}</h5>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">{insight.explanation}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-300">A</span>
                            <span className={getScoreColor(insight.scoreA)}>{insight.scoreA}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(insight.scoreA)}`}
                              style={{ width: `${insight.scoreA}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-300">B</span>
                            <span className={getScoreColor(insight.scoreB)}>{insight.scoreB}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(insight.scoreB)}`}
                              style={{ width: `${insight.scoreB}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
