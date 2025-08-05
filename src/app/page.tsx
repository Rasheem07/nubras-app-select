"use client";
import React, { useState } from 'react';
import {
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  FileText,
  BarChart3,
  Calendar,
  Settings,
  Building2,
  Truck,
  UserCheck,
  CreditCard,
  Factory,
  Headphones,
  MessageSquare,
  Globe,
  Mail,
  Clock,
  Database,
  Target,
  Bell,
  Heart,
} from 'lucide-react';

const ERPAppsPage = () => {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const apps = [
    { id: 1, name: 'Sales', icon: ShoppingCart, description: 'Manage sales pipeline and opportunities', color: 'from-emerald-400 to-emerald-600' },
    {id: 32, name: "Point of Sales", icon: ShoppingCart, description: 'Point of Sale system for retail', color: 'from-rose-400 to-rose-600' },
    { id: 2, name: 'CRM', icon: Building2, description: 'Customer relationship management', color: 'from-blue-400 to-blue-600' },
    { id: 3, name: 'Inventory', icon: Package, description: 'Stock and warehouse management', color: 'from-orange-400 to-orange-600' },
    { id: 21, name: "Procurement", icon: Truck, description: 'Supplier and purchase order management', color: 'from-teal-400 to-teal-600' },
    { id: 4, name: 'Accounting', icon: DollarSign, description: 'Financial management and reporting', color: 'from-green-400 to-green-600' },
    { id: 5, name: 'Invoicing', icon: FileText, description: 'Billing and invoice management', color: 'from-purple-400 to-purple-600' },
    { id: 6, name: 'HR', icon: Users, description: 'Human resources management', color: 'from-pink-400 to-pink-600' },
    { id: 22, name: "Attendence", icon: Clock, description: 'Employee attendance and time off', color: 'from-yellow-400 to-yellow-600' },
    { id: 7, name: 'Manufacturing', icon: Factory, description: 'Production and manufacturing', color: 'from-indigo-400 to-indigo-600' },
    { id: 8, name: 'Analytics', icon: BarChart3, description: 'Business intelligence and KPIs', color: 'from-cyan-400 to-cyan-600' },
    { id: 9, name: 'Calendar', icon: Calendar, description: 'Schedule and event management', color: 'from-red-400 to-red-600' },
    { id: 10, name: 'Email', icon: Mail, description: 'Email marketing and campaigns', color: 'from-yellow-400 to-yellow-600' },
    { id: 11, name: 'Employees', icon: UserCheck, description: 'Employee directory and profiles', color: 'from-teal-400 to-teal-600' },
    { id: 12, name: 'Expenses', icon: CreditCard, description: 'Expense tracking and approval', color: 'from-rose-400 to-rose-600' },
    { id: 13, name: 'Support', icon: Headphones, description: 'Helpdesk and customer support', color: 'from-amber-400 to-amber-600' },
    { id: 14, name: 'Discuss', icon: MessageSquare, description: 'Team communication and chat', color: 'from-lime-400 to-lime-600' },
    { id: 15, name: 'Website', icon: Globe, description: 'Website builder and eCommerce', color: 'from-sky-400 to-sky-600' },
    { id: 16, name: 'Timesheets', icon: Clock, description: 'Time tracking and project hours', color: 'from-violet-400 to-violet-600' },
    { id: 17, name: 'Database', icon: Database, description: 'Data management and backup', color: 'from-gray-400 to-gray-600' },
    { id: 18, name: 'Marketing', icon: Target, description: 'Marketing automation and campaigns', color: 'from-fuchsia-400 to-fuchsia-600' },
    { id: 19, name: 'Shipping', icon: Truck, description: 'Logistics and delivery management', color: 'from-emerald-400 to-emerald-600' },
    { id: 20, name: 'Settings', icon: Settings, description: 'System configuration', color: 'from-slate-400 to-slate-600' },
    { id: 23, name: 'Reports', icon: BarChart3, description: 'Generate and view reports', color: 'from-blue-400 to-blue-600' },
    { id: 24, name: 'Notifications', icon: Bell, description: 'Manage system notifications', color: 'from-purple-400 to-purple-600' },
    { id: 25, name: 'Feedback', icon: MessageSquare, description: 'Collect user feedback and suggestions', color: 'from-pink-400 to-pink-600' },
    { id: 26, name: 'Knowledge Base', icon: FileText, description: 'Access documentation and guides', color: 'from-orange-400 to-orange-600' },
    { id: 27, name: "Documents", icon: FileText, description: 'Manage company documents and files', color: 'from-teal-400 to-teal-600' },
    { id: 28, name: "System Logs", icon: Database, description: 'View system logs and activity', color: 'from-gray-400 to-gray-600' },
    { id: 29, name: "User Management", icon: Users, description: 'Manage user accounts and permissions', color: 'from-indigo-400 to-indigo-600' },
    { id: 30, name: "API Access", icon: Globe, description: 'Manage API keys and access', color: 'from-cyan-400 to-cyan-600' },
    { id: 31, name: "Backup", icon: Database, description: 'Create and manage system backups', color: 'from-red-400 to-red-600' },
    { id: 33, name: "System Health", icon: Heart, description: 'Monitor system health and performance', color: 'from-red-400 to-red-600' },
  ];

  // Filter apps based on search term
  const filteredApps = searchTerm.trim() === '' 
    ? apps 
    : apps.filter(app => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className='flex flex-col items-center md:items-start'> 
              <h1 className="text-3xl font-light text-gray-900 tracking-tight">Apps</h1>
              <p className="text-sm text-gray-500 mt-1 font-medium">Choose an application to continue</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-72 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 outline-none text-sm transition-all duration-200 placeholder-gray-400"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 text-lg font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <div className="max-w-6xl mx-auto px-8 pt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {filteredApps.length === 0 
                ? `No applications found for "${searchTerm}"`
                : `${filteredApps.length} application${filteredApps.length !== 1 ? 's' : ''} found`
              }
            </p>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Clear search
              </button>
            )}
          </div>
        </div>
      )}

      {/* Apps Grid */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-500 text-center max-w-md">
              Try adjusting your search terms or browse all available applications.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-8">
            {filteredApps.map((app) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={app.id}
                  className="relative group flex flex-col items-center"
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  {/* Tooltip */}
                  {hoveredApp === app.id && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-full z-20">
                      <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl border border-gray-700/50">
                        {app.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                          <div className="border-4 border-transparent border-t-gray-900/90"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* App Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} shadow-lg flex items-center justify-center cursor-pointer transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-xl group-active:scale-95`}>
                      <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm"></div>
                      <IconComponent className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  </div>

                  {/* App Name */}
                  <div className="mt-3 text-center">
                    <span className="text-xs font-medium text-gray-700 leading-tight block max-w-16 group-hover:text-gray-900 transition-colors duration-200">
                      {app.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="mt-20 border-t border-gray-200/50 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center text-xs text-gray-400 space-y-3 sm:space-y-0 sm:space-x-8">
        <span>© 2024 Enterprise Resource Planning</span>
        <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
        <a href="#" className="hover:text-gray-600 transition-colors duration-200">Help Center</a>
        <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
        <a href="#" className="hover:text-gray-600 transition-colors duration-200">Documentation</a>
        <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
        <a href="#" className="hover:text-gray-600 transition-colors duration-200">Community</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPAppsPage;