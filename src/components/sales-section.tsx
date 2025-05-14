
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

const salesPoints = [
  { text: "Use limited-time offers or exclusive deals to prompt immediate action." },
  { text: "Ensure emails are mobile-friendly to reach customers on-the-go." },
  { text: "Continuously test different strategies and analyze results to refine your approach." },
];

const pieChartData = [
  { name: 'Furniture', value: 55235, displayValue: '$55,235' },
  { name: 'Tech', value: 15235, displayValue: '$15,235' },
  { name: 'Gaming', value: 5235, displayValue: '$5,235' },
];

const COLORS = [
  'hsl(var(--chart-3))', // Blue for Furniture
  'hsl(var(--chart-2))', // Green for Tech
  'hsl(var(--chart-1))', // Orange-Red for Gaming
];

const CustomPieLabel = ({ viewBox, labelText }: { viewBox?: { cx: number, cy: number }, labelText: string }) => {
  if (!viewBox) return null;
  const { cx, cy } = viewBox;
  return (
    <text x={cx} y={cy} fill="hsl(var(--foreground))" textAnchor="middle" dominantBaseline="central" className="text-xs sm:text-sm font-medium text-muted-foreground">
      {labelText.split(' ').map((word, index, arr) => (
        <tspan key={index} x={cx} dy={index === 0 && arr.length > 1 ? '-0.3em' : (arr.length > 1 ? '1.1em' : '0em')}>{word}</tspan>
      ))}
    </text>
  );
};

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center">
          <span
            style={{ backgroundColor: entry.color }}
            className="h-2.5 w-2.5 rounded-sm mr-2 flex-shrink-0"
          ></span>
          <span className="text-muted-foreground">{entry.payload.name}:</span>
          <span className="ml-1.5 font-semibold text-foreground">{entry.payload.displayValue}</span>
        </div>
      ))}
    </div>
  );
};

interface SalesSectionProps {
  animate?: boolean;
}

export default function SalesSection({ animate = false }: SalesSectionProps) {
  return (
    <section 
      id="sales-data" 
      className={cn(
        "py-16 md:py-24 bg-card",
        "opacity-0",
        animate && "animate-fade-in-gentle"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Streamline the process of tracking and managing expenses by implementing robust automation features.
            </p>
            <ul className="space-y-6">
              {salesPoints.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 bg-primary rounded-full mr-4 mt-1"></span>
                  <p className="text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Sales Data Card */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <Card className="shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">Sales Data</CardTitle>
                <Button variant="outline" size="sm" className="h-8 text-xs px-2 sm:px-3">
                  <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                  January 2023
                </Button>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-baseline mb-6">
                  <p className="text-3xl sm:text-4xl font-bold text-foreground">$80,300</p>
                  <Badge variant="outline" className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 border-green-200 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700/50">
                    <TrendingUp className="mr-1 h-3.5 w-3.5" />
                    +4%
                  </Badge>
                </div>
                
                <div style={{ width: '100%', height: 230 }}> {/* Fixed height container for chart */}
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        innerRadius="65%"
                        outerRadius="100%"
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                        ))}
                         <CustomPieLabel labelText="Select by category" />
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
                      <Legend content={<CustomLegend />} payload={
                        pieChartData.map((item, index) => ({
                          value: item.name,
                          type: 'square',
                          id: `id-${index}`,
                          color: COLORS[index % COLORS.length],
                          payload: item, // Pass the whole item for legend
                        }))
                      }/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
