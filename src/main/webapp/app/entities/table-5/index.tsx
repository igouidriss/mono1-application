import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table5 from './table-5';
import Table5Detail from './table-5-detail';
import Table5Update from './table-5-update';
import Table5DeleteDialog from './table-5-delete-dialog';

const Table5Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table5 />} />
    <Route path="new" element={<Table5Update />} />
    <Route path=":id">
      <Route index element={<Table5Detail />} />
      <Route path="edit" element={<Table5Update />} />
      <Route path="delete" element={<Table5DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table5Routes;
