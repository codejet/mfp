import { mount } from 'dashboard/DashboardApp';
import React, { useEffect, useRef } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
