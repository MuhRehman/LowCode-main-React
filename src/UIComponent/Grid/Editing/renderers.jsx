import * as React from 'react';
export const CellRender = props => {
  const dataItem = props.originalProps.dataItem;
  const cellField = props.originalProps.field;
  const inEditField = dataItem[props.editField];
  const additionalProps = cellField && cellField === inEditField ? {
    ref: td => {
      const input = td && td.querySelector('input');
      const activeElement = document.activeElement;

      if (!input || !activeElement || input === activeElement || !activeElement.contains(input)) {
        return;
      }

      if (input.type === 'checkbox') {
        input.focus();
      } else {
        input.select();
      }
    }
  } : {
    onClick: () => {
      props.enterEdit(dataItem, cellField);
    }
  };
  return React.cloneElement(props.td, { ...props.originalProps,
    ...additionalProps
  }, props.td.props.children);
};
export const RowRender = props => {
  const trProps = { ...props.tr.props,
    onBlur: () => {
      props.exitEdit();
    }
  };
  return React.cloneElement(props.tr, { ...trProps
  }, props.tr.props.children);
};