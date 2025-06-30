
import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { DashboardContent } from './DashboardContent';
import { TopBar } from './TopBar';
import { useTheme } from '@/contexts/ThemeContext';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { isDarkMode } = useTheme();

  return (
    <SidebarProvider>
      <div className={`min-h-screen flex w-full transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-[#030014]' 
          : 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
      }`}>
        <AppSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="flex-1 flex flex-col">
          <TopBar onLogout={onLogout} />
          <main className={`flex-1 overflow-auto transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-[#030014] via-primary-950/50 to-[#030014]'
              : 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
          }`}>
            <DashboardContent currentPage={currentPage} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
