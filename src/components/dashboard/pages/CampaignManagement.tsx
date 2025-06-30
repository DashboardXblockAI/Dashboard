
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Calendar, DollarSign, Target, TrendingUp, Edit, Eye, Pause, Play } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const mockCampaigns = [
  {
    id: 1,
    title: "Summer Product Launch",
    platform: "Google Ads",
    status: "Active",
    budget: 5000,
    spent: 3200,
    clicks: 2840,
    conversions: 156,
    ctr: 3.2,
    startDate: "2024-06-01",
    endDate: "2024-06-30"
  },
  {
    id: 2,
    title: "Brand Awareness Campaign",
    platform: "Facebook",
    status: "Active",
    budget: 3000,
    spent: 2100,
    clicks: 1920,
    conversions: 89,
    ctr: 4.1,
    startDate: "2024-06-15",
    endDate: "2024-07-15"
  },
  {
    id: 3,
    title: "LinkedIn B2B Outreach",
    platform: "LinkedIn",
    status: "Paused",
    budget: 2500,
    spent: 1800,
    clicks: 890,
    conversions: 67,
    ctr: 2.8,
    startDate: "2024-05-20",
    endDate: "2024-06-20"
  },
  {
    id: 4,
    title: "Email Retargeting Series",
    platform: "Email",
    status: "Completed",
    budget: 1000,
    spent: 950,
    clicks: 1200,
    conversions: 95,
    ctr: 5.2,
    startDate: "2024-05-01",
    endDate: "2024-05-31"
  }
];

export const CampaignManagement = () => {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    platform: '',
    budget: '',
    startDate: '',
    endDate: ''
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-500 text-white">Active</Badge>;
      case 'Paused':
        return <Badge className="bg-yellow-500 text-white">Paused</Badge>;
      case 'Completed':
        return <Badge className="bg-blue-500 text-white">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleCreateCampaign = () => {
    if (!newCampaign.title || !newCampaign.platform || !newCampaign.budget) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const campaign = {
      id: campaigns.length + 1,
      title: newCampaign.title,
      platform: newCampaign.platform,
      status: "Active",
      budget: parseInt(newCampaign.budget),
      spent: 0,
      clicks: 0,
      conversions: 0,
      ctr: 0,
      startDate: newCampaign.startDate,
      endDate: newCampaign.endDate
    };

    setCampaigns([...campaigns, campaign]);
    setNewCampaign({ title: '', platform: '', budget: '', startDate: '', endDate: '' });
    setIsCreateDialogOpen(false);
    
    toast({
      title: "Campaign Created!",
      description: "Your new campaign has been set up successfully.",
    });
  };

  const toggleCampaignStatus = (id: number) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === id 
        ? { ...campaign, status: campaign.status === 'Active' ? 'Paused' : 'Active' }
        : campaign
    ));
    
    toast({
      title: "Status Updated",
      description: "Campaign status has been changed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Campaign Management</h1>
          <p className="text-gray-400">Manage and monitor your marketing campaigns</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-primary-900 border-primary-600">
            <DialogHeader>
              <DialogTitle className="text-white">Create New Campaign</DialogTitle>
              <DialogDescription className="text-gray-400">
                Set up a new marketing campaign with your preferred settings.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-200">Campaign Title</Label>
                <Input
                  id="title"
                  placeholder="Enter campaign title..."
                  value={newCampaign.title}
                  onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
                  className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="platform" className="text-gray-200">Platform</Label>
                <Select value={newCampaign.platform} onValueChange={(value) => setNewCampaign({ ...newCampaign, platform: value })}>
                  <SelectTrigger className="bg-primary-800/50 border-primary-600 text-white">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary-800 border-primary-600">
                    <SelectItem value="Google Ads">Google Ads</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="Email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-gray-200">Budget ($)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Enter budget amount..."
                  value={newCampaign.budget}
                  onChange={(e) => setNewCampaign({ ...newCampaign, budget: e.target.value })}
                  className="bg-primary-800/50 border-primary-600 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-gray-200">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={newCampaign.startDate}
                    onChange={(e) => setNewCampaign({ ...newCampaign, startDate: e.target.value })}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="endDate" className="text-gray-200">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={newCampaign.endDate}
                    onChange={(e) => setNewCampaign({ ...newCampaign, endDate: e.target.value })}
                    className="bg-primary-800/50 border-primary-600 text-white"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleCreateCampaign}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                Create Campaign
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-effect border-primary-600/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Campaigns</CardTitle>
            <Target className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{campaigns.length}</div>
            <p className="text-xs text-blue-400">
              {campaigns.filter(c => c.status === 'Active').length} active
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              ${campaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
            </div>
            <p className="text-xs text-green-400">
              ${campaigns.reduce((sum, c) => sum + c.spent, 0).toLocaleString()} spent
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Clicks</CardTitle>
            <Eye className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {campaigns.reduce((sum, c) => sum + c.clicks, 0).toLocaleString()}
            </div>
            <p className="text-xs text-purple-400">
              Avg CTR: {(campaigns.reduce((sum, c) => sum + c.ctr, 0) / campaigns.length).toFixed(1)}%
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-primary-600/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Conversions</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {campaigns.reduce((sum, c) => sum + c.conversions, 0)}
            </div>
            <p className="text-xs text-orange-400">
              Avg: {(campaigns.reduce((sum, c) => sum + c.conversions, 0) / campaigns.length).toFixed(0)} per campaign
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns Table */}
      <Card className="glass-effect border-primary-600/50">
        <CardHeader>
          <CardTitle className="text-white">Active Campaigns</CardTitle>
          <CardDescription className="text-gray-400">
            Manage and monitor your marketing campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-primary-600/50">
                <TableHead className="text-gray-300">Campaign</TableHead>
                <TableHead className="text-gray-300">Platform</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Budget</TableHead>
                <TableHead className="text-gray-300">Spent</TableHead>
                <TableHead className="text-gray-300">Clicks</TableHead>
                <TableHead className="text-gray-300">CTR</TableHead>
                <TableHead className="text-gray-300">Conversions</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id} className="border-primary-600/30">
                  <TableCell className="text-white font-medium">{campaign.title}</TableCell>
                  <TableCell className="text-gray-300">{campaign.platform}</TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell className="text-gray-300">${campaign.budget.toLocaleString()}</TableCell>
                  <TableCell className="text-gray-300">${campaign.spent.toLocaleString()}</TableCell>
                  <TableCell className="text-gray-300">{campaign.clicks.toLocaleString()}</TableCell>
                  <TableCell className="text-gray-300">{campaign.ctr}%</TableCell>
                  <TableCell className="text-gray-300">{campaign.conversions}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-8 w-8 p-0"
                        onClick={() => toggleCampaignStatus(campaign.id)}
                      >
                        {campaign.status === 'Active' ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
