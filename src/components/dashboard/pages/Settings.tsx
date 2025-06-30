
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Key, 
  Mail, 
  Smartphone,
  Globe,
  Save,
  RefreshCw
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Tech Solutions Inc.',
    role: 'Marketing Manager',
    phone: '+1 (555) 123-4567',
    timezone: 'America/New_York'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: true,
    weeklyReports: true,
    campaignUpdates: true,
    securityAlerts: true
  });

  const [aiPreferences, setAiPreferences] = useState({
    contentTone: 'professional',
    industry: 'technology',
    autoGenerate: true,
    smartSuggestions: true
  });

  const handleSaveProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been saved successfully.",
      });
    }, 1000);
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification Preferences Updated",
      description: "Your notification settings have been saved.",
    });
  };

  const handleSaveAIPreferences = () => {
    toast({
      title: "AI Preferences Updated",
      description: "Your AI content preferences have been updated.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
          <p className="text-gray-400">Manage your account preferences and settings</p>
        </div>
        <Badge className="bg-green-500 text-white">
          <Shield className="w-3 h-3 mr-1" />
          Secure Account
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-effect border-primary-600/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </CardTitle>
              <CardDescription className="text-gray-400">
                Update your personal and company information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-200">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-200">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="bg-primary-800/50 border-primary-600 text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-200">Company</Label>
                  <Input
                    id="company"
                    value={profile.company}
                    onChange={(e) => setProfile({...profile, company: e.target.value})}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-200">Role</Label>
                  <Input
                    id="role"
                    value={profile.role}
                    onChange={(e) => setProfile({...profile, role: e.target.value})}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-200">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-gray-200">Timezone</Label>
                  <Select value={profile.timezone} onValueChange={(value) => setProfile({...profile, timezone: value})}>
                    <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-800 border-primary-600">
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleSaveProfile}
                disabled={isLoading}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save Profile</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* AI Preferences */}
          <Card className="glass-effect border-primary-600/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                AI Content Preferences
              </CardTitle>
              <CardDescription className="text-gray-400">
                Customize AI-generated content to match your brand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contentTone" className="text-gray-200">Default Content Tone</Label>
                  <Select value={aiPreferences.contentTone} onValueChange={(value) => setAiPreferences({...aiPreferences, contentTone: value})}>
                    <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-800 border-primary-600">
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="engaging">Engaging</SelectItem>
                      <SelectItem value="persuasive">Persuasive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-gray-200">Industry Focus</Label>
                  <Select value={aiPreferences.industry} onValueChange={(value) => setAiPreferences({...aiPreferences, industry: value})}>
                    <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-primary-800 border-primary-600">
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-200">Auto-generate Content</Label>
                    <p className="text-sm text-gray-400">Automatically generate content suggestions</p>
                  </div>
                  <Switch
                    checked={aiPreferences.autoGenerate}
                    onCheckedChange={(checked) => setAiPreferences({...aiPreferences, autoGenerate: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-200">Smart Suggestions</Label>
                    <p className="text-sm text-gray-400">Receive AI-powered optimization tips</p>
                  </div>
                  <Switch
                    checked={aiPreferences.smartSuggestions}
                    onCheckedChange={(checked) => setAiPreferences({...aiPreferences, smartSuggestions: checked})}
                  />
                </div>
              </div>

              <Button 
                onClick={handleSaveAIPreferences}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save AI Preferences
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card className="glass-effect border-primary-600/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-200">Email Alerts</Label>
                    <p className="text-xs text-gray-400">Campaign performance updates</p>
                  </div>
                  <Switch
                    checked={notifications.emailAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailAlerts: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-200">Push Notifications</Label>
                    <p className="text-xs text-gray-400">Real-time alerts</p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-200">Weekly Reports</Label>
                    <p className="text-xs text-gray-400">Performance summaries</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => setNotifications({...notifications, weeklyReports: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-gray-200">Security Alerts</Label>
                    <p className="text-xs text-gray-400">Account security notifications</p>
                  </div>
                  <Switch
                    checked={notifications.securityAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, securityAlerts: checked})}
                  />
                </div>
              </div>

              <Button 
                onClick={handleSaveNotifications}
                size="sm"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                Save Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-effect border-primary-600/50">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-gray-300 hover:text-white">
                <Key className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start text-gray-300 hover:text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Billing Settings
              </Button>
              <Button variant="outline" className="w-full justify-start text-gray-300 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start text-gray-300 hover:text-white">
                <Smartphone className="w-4 h-4 mr-2" />
                Two-Factor Auth
              </Button>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card className="glass-effect border-primary-600/50">
            <CardHeader>
              <CardTitle className="text-white">Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Plan</span>
                <Badge className="bg-purple-500 text-white">Professional</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Status</span>
                <Badge className="bg-green-500 text-white">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Next Billing</span>
                <span className="text-gray-300 text-sm">Dec 25, 2024</span>
              </div>
              <Separator className="bg-primary-600" />
              <Button size="sm" className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
