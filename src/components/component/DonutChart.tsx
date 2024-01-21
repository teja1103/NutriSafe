// components/component/DonutChart.tsx

import { useState } from 'react';
import { Card, DonutChart, Title } from '@tremor/react';

interface DonutChartProps {
  data: { name: string; calories: number }[]; // Change 'sales' to 'calories'
}

const valueFormatter = (number: number): string => `$ ${new Intl.NumberFormat('us').format(number).toString()}`;

const DonutChartU: React.FC<DonutChartProps> = ({ data }) => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <Card className="mx-auto max-w-xs">
        <Title>Sales</Title>
        <DonutChart
          className="mt-6"
          data={data}
          category="calories" // Change 'sales' to 'calories'
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue-900', 'blue-800', 'blue-700', 'blue-600', 'blue-500', 'blue-400']}
        />
      </Card>
    </>
  );
};

export default DonutChartU;
