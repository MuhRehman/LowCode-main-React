import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RangeSlider, SliderLabel } from '@progress/kendo-react-inputs';
export const LRangeSlider=(props)=>
{
    return (
        <RangeSlider
          defaultValue={{ start: 30, end: 70 }}
          step={1}
          min={0}
          max={100}
          >
          {[0, 25, 50, 75, 100].map((perc, i) => (
            <SliderLabel
              key={i}
              position={perc}
                  >
              {perc.toString()}
            </SliderLabel>
              ))}
        </RangeSlider>
      );

}