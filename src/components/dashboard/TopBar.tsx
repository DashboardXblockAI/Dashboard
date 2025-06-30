import { Bell, User, Moon, Sun, Search, Settings, Zap, LogOut, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';
import { useSidebar } from '@/components/ui/sidebar';

interface TopBarProps {
  onLogout?: () => void;
}

export const TopBar = ({ onLogout }: TopBarProps) => {
  const [notifications] = useState(5);
  const { isDarkMode, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    if (onLogout) {
      onLogout();
    }
  };

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 5 new notifications to review.",
    });
  };

  return (
    <header className={`h-20 border-b transition-colors duration-300 ${
      isDarkMode 
        ? 'border-primary/30 bg-gradient-to-r from-primary-950/80 via-primary-900/60 to-secondary/80' 
        : 'border-gray-200 bg-gradient-to-r from-white via-gray-50 to-purple-50'
    } backdrop-blur-xl`}>
      <div className="flex items-center justify-between h-full px-4 sm:px-8">
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className={`transition-colors duration-300 border ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-primary/20 border-primary/20'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 border-gray-200'
            }`}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Marketing AI Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg sm:text-xl font-sora font-bold transition-colors duration-300 ${
                isDarkMode ? 'gradient-text' : 'text-gray-800'
              }`}>
                Marketing AI Pro
              </h1>
              <Badge variant="secondary" className="bg-primary/20 text-primary text-xs mt-1">
                Enterprise Plan
              </Badge>
            </div>
            <div className="sm:hidden">
              <h1 className={`text-lg font-sora font-bold transition-colors duration-300 ${
                isDarkMode ? 'gradient-text' : 'text-gray-800'
              }`}>
                MAI Pro
              </h1>
            </div>
          </div>
           */}
          <div className="relative hidden lg:block">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <Input 
              placeholder="Search campaigns, analytics..." 
              className={`pl-10 w-80 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-primary-900/50 border-primary/30 text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary'
                  : 'bg-white border-gray-200 text-gray-800 placeholder:text-gray-500 focus:border-primary focus:ring-primary'
              }`}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden transition-colors duration-300 border ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-primary/20 border-primary/20'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 border-gray-200'
            }`}
          >
            <Search className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`transition-colors duration-300 border ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-primary/20 border-primary/20'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 border-gray-200'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`hidden sm:block transition-colors duration-300 border ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-primary/20 border-primary/20'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 border-gray-200'
            }`}
          >
            <Settings className="w-4 h-4" />
          </Button>
          
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleNotificationClick}
              className={`transition-colors duration-300 border ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-primary/20 border-primary/20'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 border-gray-200'
              }`}
            >
              <Bell className="w-4 h-4" />
            </Button>
            {notifications > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-primary text-white animate-pulse"
              >
                {notifications}
              </Badge>
            )}
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 sm:space-x-3 pl-2 sm:pl-4 border-l border-primary/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center ring-2 ring-primary/30">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="hidden sm:block text-sm">
                  <div className={`font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Sarah Johnson</div>
                  <div className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Marketing Director</div>
                </div>
                <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className={`w-56 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-primary-950 border-primary/30' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <DropdownMenuItem className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white hover:bg-primary/20' : 'text-gray-700 hover:bg-gray-100'
              }`}>
                <User className="w-4 h-4 mr-2" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white hover:bg-primary/20' : 'text-gray-700 hover:bg-gray-100'
              }`}>
                <Settings className="w-4 h-4 mr-2" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className={isDarkMode ? 'bg-primary/30' : 'bg-gray-200'} />
              <DropdownMenuItem 
                onClick={handleLogout}
                className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-red-400 hover:text-red-300 hover:bg-red-500/20' 
                    : 'text-red-600 hover:text-red-700 hover:bg-red-50'
                }`}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
