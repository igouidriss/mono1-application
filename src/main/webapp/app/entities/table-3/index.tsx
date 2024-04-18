import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table3 from './table-3';
import Table3Detail from './table-3-detail';
import Table3Update from './table-3-update';
import Table3DeleteDialog from './table-3-delete-dialog';

const Table3Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table3 />} />
    <Route path="new" element={<Table3Update />} />
    <Route path=":id">
      <Route index element={<Table3Detail />} />
      <Route path="edit" element={<Table3Update />} />
      <Route path="delete" element={<Table3DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table3Routes;
