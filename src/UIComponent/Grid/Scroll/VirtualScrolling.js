import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const createRandomData = count => {
  const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
        lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
        cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
        titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer', 'Software Developer'];
  return Array(count).fill({}).map((_, idx) => ({
    id: idx + 1,
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    title: titles[Math.floor(Math.random() * titles.length)]
  }));
};

const LVirtualScrolling = () => {
  const [data] = React.useState(createRandomData(50000));
  const [skip, setSkip] = React.useState(0);

  const pageChange = event => {
    setSkip(event.page.skip);
  };

  return <Grid style={{
    height: '440px'
  }} rowHeight={40} data={data.slice(skip, skip + 20)} pageSize={20} total={data.length} skip={skip} scrollable={'virtual'} onPageChange={pageChange}>
        <Column field="id" title="ID" width="150px" />
        <Column field="firstName" title="First Name" />
        <Column field="lastName" title="Last Name" />
        <Column field="city" title="City" width="120px" />
        <Column field="title" title="Title" width="200px" />
      </Grid>;
};

export default LVirtualScrolling;