
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    popular: false,
    features: [
      'Up to 5 campaigns',
      'Basic AI content generation',
      'Email support',
      '1,000 AI-generated words/month',
      'Basic analytics',
      '5 A/B tests per month',
      'Standard templates'
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing marketing teams',
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: <Star className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    popular: true,
    features: [
      'Up to 25 campaigns',
      'Advanced AI content generation',
      'Priority email & chat support',
      '10,000 AI-generated words/month',
      'Advanced analytics & insights',
      'Unlimited A/B tests',
      'Custom templates',
      'Audience targeting AI',
      'Performance predictions'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: <Crown className="w-6 h-6" />,
    color: 'from-gold-500 to-gold-600',
    popular: false,
    features: [
      'Unlimited campaigns',
      'Enterprise AI suite',
      'Dedicated account manager',
      'Unlimited AI-generated content',
      'Real-time analytics',
      'Advanced automation',
      'White-label options',
      'API access',
      'Custom integrations',
      'Priority support (24/7)',
      'Team collaboration tools'
    ]
  }
];

const addOns = [
  {
    name: 'AI Writing Assistant Pro',
    price: 19,
    description: 'Advanced AI writing with industry-specific templates'
  },
  {
    name: 'Advanced Analytics',
    price: 39,
    description: 'Deep insights, custom reports, and predictive analytics'
  },
  {
    name: 'Multi-Platform Integration',
    price: 29,
    description: 'Connect with 50+ marketing platforms and tools'
  }
];

export const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-white mb-2">Choose Your Plan</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Unlock the full potential of AI-powered marketing with plans designed for every business size
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-purple-600"
          />
          <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>
            Yearly
            <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
          </span>
        </div>
      </div>

      {/* Main Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`glass-effect border-primary-600/50 relative overflow-hidden transition-all duration-300 hover:scale-105 ${
              plan.popular ? 'border-purple-500/70 shadow-lg shadow-purple-500/20' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                Most Popular
              </div>
            )}
            
            <CardHeader className="text-center space-y-4">
              <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white`}>
                {plan.icon}
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {plan.description}
                </CardDescription>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">
                  ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  <span className="text-lg font-normal text-gray-400">/month</span>
                </div>
                {isYearly && (
                  <div className="text-sm text-green-400">
                    Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
              
              <p className="text-xs text-gray-400 text-center">
                {plan.name === 'Enterprise' ? 'Custom pricing available' : '14-day free trial • No credit card required'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add-ons Section */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            Power-ups & Add-ons
          </CardTitle>
          <CardDescription className="text-gray-400">
            Enhance your plan with additional features and capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="p-4 bg-primary-800/30 rounded-lg border border-primary-600/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{addon.name}</h4>
                  <Badge className="bg-yellow-500 text-white">+${addon.price}/mo</Badge>
                </div>
                <p className="text-sm text-gray-300 mb-3">{addon.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  Add to Plan
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Can I change plans anytime?</h4>
                <p className="text-sm text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Is there a free trial?</h4>
                <p className="text-sm text-gray-300">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-gray-300">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Do you offer refunds?</h4>
                <p className="text-sm text-gray-300">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Can I cancel anytime?</h4>
                <p className="text-sm text-gray-300">Absolutely. You can cancel your subscription at any time with no cancellation fees.</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Is my data secure?</h4>
                <p className="text-sm text-gray-300">Yes, we use enterprise-grade security with SOC 2 compliance and end-to-end encryption.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
