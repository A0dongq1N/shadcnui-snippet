import { useState } from 'react'
import { 
  HomeIcon, 
  SettingsIcon, 
  FolderIcon, 
  CalendarIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  Bolt,
  CalendarDays
} from "lucide-react"
import './App.css'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 导航项配置
const navigationItems = [
  {
    title: "首页",
    icon: HomeIcon,
    url: "#home",
  },
  {
    title: "项目",
    icon: FolderIcon,
    url: "#projects",
  },
  {
    title: "日程",
    icon: CalendarDays,
    url: "#calendar",
  },
  {
    title: "设置",
    icon: Bolt,
    url: "#settings",
  },
]

function App() {
  const [activeItem, setActiveItem] = useState("#home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const renderMainContent = () => {
    switch (activeItem) {
      case "#home":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">欢迎回来！</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">总项目数</CardTitle>
                  <FolderIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 这个月</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">今日任务</CardTitle>
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+4 待完成</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">完成率</CardTitle>
                  <SettingsIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89%</div>
                  <p className="text-xs text-muted-foreground">+5% 比上周</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "#projects":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">我的项目</h1>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>项目 {i}</CardTitle>
                    <CardDescription>项目 {i} 的详细描述</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>这是一个示例项目的内容...</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case "#calendar":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">日程安排</h1>
            <Card>
              <CardHeader>
                <CardTitle>今天的任务</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <span>完成项目报告 (09:00)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span>团队会议 (14:00)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                    <span>代码审查 (16:30)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "#settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">设置</h1>
            <Card>
              <CardHeader>
                <CardTitle>个人偏好</CardTitle>
                <CardDescription>管理你的应用设置</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>深色模式</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleDarkMode}
                  >
                    {isDarkMode ? (
                      <SunIcon className="h-4 w-4" />
                    ) : (
                      <MoonIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>通知</span>
                  <Button variant="outline" size="sm">
                    开启
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      default:
        return <div>页面未找到</div>
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center space-x-2 px-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">我的应用</h2>
                <p className="text-xs text-muted-foreground">v1.0.0</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>菜单栏</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={activeItem === item.url}
                        onClick={() => setActiveItem(item.url)}
                      >
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <UserIcon className="h-4 w-4" />
                  <span>用户名</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger />
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                反馈
              </Button>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {renderMainContent()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default App
