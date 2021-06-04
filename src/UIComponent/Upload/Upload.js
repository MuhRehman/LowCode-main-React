import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload } from '@progress/kendo-react-upload';

const LUpload = () => {
  return (
    <Upload
      batch={false}
      multiple={true}
      defaultFiles={[]}
      withCredentials={false}
      saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
      removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
      />
  );
};

export default LUpload;
