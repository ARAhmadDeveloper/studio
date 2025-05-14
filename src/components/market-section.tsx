
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, TrendingUp, Tag, Mail, ClipboardList } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const monthlyRevenueData = [
  { month: 'Sep', revenue: 110, target: 100 },
  { month: 'Oct', revenue: 75, target: 70 },
  { month: 'Nov', revenue: 150, target: 140 },
  { month: 'Dec', revenue: 125, target: 115 },
  { month: 'Jan', revenue: 90, target: 85 },
];

const topPerformanceData = [
  { name: 'Furniture', value: 55235, displayValue: '$55,235' },
  { name: 'Technology', value: 15235, displayValue: '$15,235' },
  { name: 'Gaming', value: 5235, displayValue: '$5,235' },
];

const PERFORMANCE_COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-4))'];

const marketPoints = [
  { text: "Use limited-time offers or exclusive deals to prompt immediate action.", Icon: Tag },
  { text: "Ensure emails are mobile-friendly to reach customers on-the-go.", Icon: Mail },
  { text: "Continuously test different strategies and analyze results to refine your approach.", Icon: ClipboardList },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background shadow-lg rounded-md border border-border">
        <p className="label text-sm font-semibold">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-xs">
            {`${entry.name}: ${entry.value}k`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceCustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:justify-center gap-x-4 gap-y-1 text-xs">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center">
          <span
            style={{ backgroundColor: entry.color }}
            className="h-2.5 w-2.5 rounded-sm mr-1.5 flex-shrink-0"
          ></span>
          <span className="text-muted-foreground">{entry.payload.name}:</span>
          <span className="ml-1 font-semibold text-foreground">{entry.payload.displayValue}</span>
        </div>
      ))}
    </div>
  );
};


export default function MarketSection() {
  return (
    <section id="market-analysis" className="py-16 md:py-24 bg-card"> {/* Changed to bg-card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left Column: Charts */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div>
                  <CardDescription className="text-xs">This month revenue</CardDescription>
                  <CardTitle className="text-2xl sm:text-3xl font-bold flex items-baseline">
                    $152,568.00
                    <Badge variant="outline" className="ml-2 px-1.5 py-0.5 text-xs bg-green-100 text-green-700 border-green-200 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700/50">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      12%
                    </Badge>
                  </CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-2">
                <div style={{ width: '100%', height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyRevenueData} margin={{ top: 5, right: 0, left: -25, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} dy={5} />
                      <YAxis tickLine={false} axisLine={false} fontSize={12} unit="k" />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--accent) / 0.2)' }} />
                      <Legend verticalAlign="top" align="right" height={30} iconSize={8} wrapperStyle={{fontSize: '12px'}} formatter={(value, entry) => {
                        const displayVal = value === 'revenue' ? '154.5k' : '144.5k';
                        return <span className="text-muted-foreground capitalize">{value} <span className="text-foreground font-medium">{displayVal}</span></span>
                      }}/>
                      <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={12} />
                      <Bar dataKey="target" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} barSize={12} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">Top Performance</CardTitle>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2">This week</Button>
              </CardHeader>
              <CardContent className="pt-4">
                 <div style={{ width: '100%', height: 200 }} className="relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={topPerformanceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        innerRadius="60%"
                        outerRadius="85%"
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {topPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={PERFORMANCE_COLORS[index % PERFORMANCE_COLORS.length]} stroke="hsl(var(--card))" strokeWidth={2}/>
                        ))}
                        <Label value="$24k" position="center" fill="hsl(var(--foreground))" className="text-2xl font-bold" />
                      </Pie>
                       <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--popover))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                          color: 'hsl(var(--popover-foreground))'
                        }}
                        formatter={(value: number, name: string, props: any) => {
                          return [props.payload.displayValue, name];
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <PerformanceCustomLegend payload={
                    topPerformanceData.map((item, index) => ({
                        value: item.name,
                        type: 'square',
                        id: `id-${index}`,
                        color: PERFORMANCE_COLORS[index % PERFORMANCE_COLORS.length],
                        payload: item, 
                    }))
                }/>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-8 lg:pt-8">
            <p className="text-lg text-muted-foreground">
              Easily benchmark against local companies and create packages based on market data.
            </p>
            <ul className="space-y-6">
              {marketPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5">
                    <item.Icon className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

    