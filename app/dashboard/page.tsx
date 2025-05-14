"use client"

import { useState, useEffect } from "react"
import {
  AlertCircle,
  BarChart3,
  Bell,
  CreditCard,
  Package,
  Search,
  ShoppingCart,
  Users,
  Home,
  Settings,
  ChevronRight,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart as RechartPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// Define brand colors
const COLORS = {
  primary: "#021DA5",
  secondary: ["#11E3AB", "#49B8BF", "#134F88"],
  tertiary: ["#12FFC0", "#002AFF", "#0980A8"],
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Animation effect when component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Left Navigation */}
      <div
        className={`border-r ${sidebarOpen ? "w-64" : "w-20"} transition-all duration-300 flex flex-col`}
        style={{ backgroundColor: "#f8f9fa", borderColor: "#e9ecef" }}
      >
        <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: "#e9ecef" }}>
          <div className="flex items-center">
            <div
              className="h-8 w-8 rounded-md flex items-center justify-center mr-2"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span className="text-white font-bold">SS</span>
            </div>
            <h1
              className={`font-bold text-xl transition-opacity duration-300 ${!sidebarOpen ? "opacity-0 w-0" : "opacity-100"}`}
              style={{ color: COLORS.primary }}
            >
              Silky Systems
            </h1>
          </div>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-opacity-10 transition-all duration-200"
                style={{
                  color: COLORS.primary,
                  backgroundColor: sidebarOpen ? "transparent" : "rgba(2, 29, 165, 0.1)",
                }}
              >
                <Home className="mr-2 h-5 w-5" />
                {sidebarOpen && <span>Dashboard</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-opacity-10 transition-all duration-200"
                style={{ color: COLORS.secondary[2] }}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {sidebarOpen && <span>POS</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-opacity-10 transition-all duration-200"
                style={{ color: COLORS.secondary[1] }}
              >
                <Users className="mr-2 h-5 w-5" />
                {sidebarOpen && <span>CRM</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-opacity-10 transition-all duration-200"
                style={{ color: COLORS.secondary[0] }}
              >
                <Package className="mr-2 h-5 w-5" />
                {sidebarOpen && <span>Inventory</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-opacity-10 transition-all duration-200"
                style={{ color: COLORS.tertiary[1] }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {sidebarOpen && <span>Calendar</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-opacity-10 transition-all duration-200"
                style={{ color: COLORS.tertiary[2] }}
              >
                <Settings className="mr-2 h-5 w-5" />
                {sidebarOpen && <span>Settings</span>}
              </Button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t" style={{ borderColor: "#e9ecef" }}>
          <Button
            variant="outline"
            size="sm"
            className="w-full transition-all duration-200 hover:bg-opacity-10"
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "← Collapse" : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 border-slate-200 focus-visible:ring-1 focus-visible:ring-offset-0"
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 transition-colors duration-200">
              <Bell className="h-5 w-5" style={{ color: COLORS.primary }} />
              <Badge
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
                style={{ backgroundColor: COLORS.secondary[0], color: "white" }}
              >
                3
              </Badge>
            </Button>
            <div className="flex items-center gap-3 border-l pl-4" style={{ borderColor: "#e9ecef" }}>
              <Avatar
                className="border-2 transition-transform hover:scale-105 cursor-pointer"
                style={{ borderColor: COLORS.secondary[0] }}
              >
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback style={{ backgroundColor: COLORS.primary, color: "white" }}>SS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-sm">Ahmed Al-Saud</span>
                <span className="text-xs text-muted-foreground">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className={`flex-1 overflow-auto p-6 bg-slate-50 ${mounted ? "animate-fadeIn" : "opacity-0"}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              Dashboard Overview
            </h2>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs">
                Today
              </Button>
              <Button size="sm" variant="outline" className="text-xs bg-white">
                This Week
              </Button>
              <Button size="sm" style={{ backgroundColor: COLORS.primary }} className="text-xs">
                This Month
              </Button>
            </div>
          </div>

          {/* Sales Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: COLORS.secondary[0] }}></div>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.secondary[0]}20` }}
                >
                  <TrendingUp className="h-4 w-4" style={{ color: COLORS.secondary[0] }} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>
                  <span className="text-lg mr-1">SAR</span>4,289.70
                </div>
                <div className="flex items-center mt-1">
                  <Badge
                    className="text-xs"
                    style={{ backgroundColor: `${COLORS.secondary[0]}20`, color: COLORS.secondary[0] }}
                  >
                    +12%
                  </Badge>
                  <p className="text-xs text-muted-foreground ml-2">from yesterday</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: COLORS.tertiary[1] }}></div>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales vs Target</CardTitle>
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.tertiary[1]}20` }}
                >
                  <BarChart3 className="h-4 w-4" style={{ color: COLORS.tertiary[1] }} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>
                  78%
                </div>
                <Progress value={78} className="h-2 mt-2" style={{ backgroundColor: "#e9ecef" }}>
                  <div
                    className="h-full transition-all duration-500 ease-in-out"
                    style={{ width: "78%", backgroundColor: COLORS.tertiary[1] }}
                  ></div>
                </Progress>
                <p className="text-xs text-muted-foreground mt-1">
                  Target: <span className="font-medium">SAR 5,500</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: COLORS.secondary[1] }}></div>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Transaction</CardTitle>
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.secondary[1]}20` }}
                >
                  <CreditCard className="h-4 w-4" style={{ color: COLORS.secondary[1] }} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>
                  <span className="text-lg mr-1">SAR</span>42.50
                </div>
                <div className="flex items-center mt-1">
                  <Badge
                    className="text-xs"
                    style={{ backgroundColor: `${COLORS.secondary[1]}20`, color: COLORS.secondary[1] }}
                  >
                    +5%
                  </Badge>
                  <p className="text-xs text-muted-foreground ml-2">from last week</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Sales Trend Chart */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Sales Trend</CardTitle>
                <CardDescription>Daily sales performance for the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesTrendData}>
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8} />
                          <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                      <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                      <YAxis tickFormatter={(value) => `SAR ${value}`} tick={{ fontSize: 12 }} />
                      <Tooltip
                        formatter={(value) => [`SAR ${value}`, "Sales"]}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="sales"
                        stroke={COLORS.primary}
                        fillOpacity={1}
                        fill="url(#colorSales)"
                        strokeWidth={2}
                        activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Sales Distribution Pie Chart */}
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-base">Sales Distribution</CardTitle>
                <CardDescription>By product category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartPieChart>
                      <Pie
                        data={salesDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {salesDistributionData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              index === 0 ? COLORS.primary : COLORS.secondary[index - 1] || COLORS.tertiary[index - 4]
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`SAR ${value}`, "Sales"]}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                    </RechartPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inventory and Performance Tabs */}
          <Tabs defaultValue="inventory" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="inventory" style={{ color: COLORS.primary }}>
                Inventory Status
              </TabsTrigger>
              <TabsTrigger value="performance" style={{ color: COLORS.primary }}>
                Performance Metrics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inventory">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Low Stock Items</CardTitle>
                    <Badge style={{ backgroundColor: COLORS.secondary[0] }}>4 Items</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lowStockItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 border rounded-md bg-white hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="h-8 w-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: item.quantity <= 5 ? "#FEE2E2" : "#FEF3C7" }}
                          >
                            <AlertCircle
                              className={`h-4 w-4 ${item.quantity <= 5 ? "text-red-500" : "text-amber-500"}`}
                            />
                          </div>
                          <div>
                            <span className="font-medium">{item.name}</span>
                            <p className="text-xs text-muted-foreground">SKU: {item.sku}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant={item.quantity <= 5 ? "destructive" : "outline"}
                            className="transition-all duration-200 hover:scale-105"
                          >
                            {item.quantity} left
                          </Badge>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyRevenueData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                          <XAxis dataKey="month" />
                          <YAxis tickFormatter={(value) => `SAR ${value / 1000}k`} />
                          <Tooltip
                            formatter={(value) => [`SAR ${value.toLocaleString()}`, "Revenue"]}
                            contentStyle={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            }}
                          />
                          <Bar dataKey="revenue" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Customer Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={customerGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "8px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="customers"
                            stroke={COLORS.secondary[1]}
                            strokeWidth={2}
                            dot={{ stroke: COLORS.secondary[1], strokeWidth: 2, r: 4, fill: "white" }}
                            activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

// Sample data
const lowStockItems = [
  { id: 1, name: "Silk Scarf - Blue", sku: "SS-001", quantity: 3 },
  { id: 2, name: "Silk Pillowcase - Queen", sku: "SP-002", quantity: 8 },
  { id: 3, name: "Silk Blouse - Medium", sku: "SB-003", quantity: 5 },
  { id: 4, name: "Silk Tie - Red", sku: "ST-004", quantity: 2 },
]

const salesTrendData = [
  { day: "Sun", sales: 2100 },
  { day: "Mon", sales: 3200 },
  { day: "Tue", sales: 4500 },
  { day: "Wed", sales: 4100 },
  { day: "Thu", sales: 3800 },
  { day: "Fri", sales: 5200 },
  { day: "Sat", sales: 4300 },
]

const salesDistributionData = [
  { name: "Scarves", value: 12500 },
  { name: "Pillowcases", value: 9800 },
  { name: "Blouses", value: 15200 },
  { name: "Ties", value: 8300 },
  { name: "Accessories", value: 6100 },
]

const monthlyRevenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 38000 },
  { month: "Mar", revenue: 45000 },
  { month: "Apr", revenue: 52000 },
  { month: "May", revenue: 48000 },
  { month: "Jun", revenue: 62000 },
]

const customerGrowthData = [
  { month: "Jan", customers: 120 },
  { month: "Feb", customers: 145 },
  { month: "Mar", customers: 162 },
  { month: "Apr", customers: 190 },
  { month: "May", customers: 210 },
  { month: "Jun", customers: 252 },
]
