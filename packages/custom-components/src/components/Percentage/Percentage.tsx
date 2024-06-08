import * as React from 'react';
import './Percentage.css';
import Bar from '../../Bar/Bar.tsx';

type Sign = '+' | '-';

interface PercentageProps { 
  sign: Sign;
  percent: number;
}

const Percentage: React.FC<PercentageProps> = ({ sign, percent }) => { 
  const p: string = `${sign}${percent.toFixed(1)}%`;
  return ( 
    <div>
      <div>
        <p className="percentage">{p}</p>
      </div>
      <div>
        <Bar percent={percent} scaleX={1.6} />
      </div>
    </div>
  );
}

export default Percentage;