import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';
import esMessages from './es.json';
import { process } from '@progress/kendo-data-query';
import { sampleProducts } from './sample-products';
load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
loadMessages(esMessages, 'es-ES');

const initialDataState = {
  skip: 0,
  take: 7
};

const LGlobalization = () => {
  const [dataState, setDataState] = React.useState(initialDataState);
  const [data, setData] = React.useState(process(sampleProducts, initialDataState));

  const dataStateChange = event => {
    setData(process(sampleProducts, event.dataState));
    setDataState(event.dataState);
  };

  return <LocalizationProvider language="es-ES">
        <IntlProvider locale="es">
          <Grid style={{
        height: '420px'
      }} sortable={true} filterable={true} groupable={true} pageable={{
        pageSizes: [5, 7, 10]
      }} data={data} {...dataState} onDataStateChange={dataStateChange}>
            <Column field="ProductID" title="ID" filterable={false} width="70px" />
            <Column field="ProductName" title="Nombre del producto" />
            <Column field="FirstOrderedOn" title="Primero ordenado en" filter="date" format="{0:D}" />
            <Column field="UnitPrice" title="Precio unitario" filter="numeric" format="{0:c}" />
          </Grid>
        </IntlProvider>
      </LocalizationProvider>;
};

export default LGlobalization;