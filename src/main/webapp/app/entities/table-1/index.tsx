import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table1 from './table-1';
import Table1Detail from './table-1-detail';
import Table1Update from './table-1-update';
import Table1DeleteDialog from './table-1-delete-dialog';

const Table1Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table1 />} />
    <Route path="new" element={<Table1Update />} />
    <Route path=":id">
      <Route index element={<Table1Detail />} />
      <Route path="edit" element={<Table1Update />} />
      <Route path="delete" element={<Table1DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table1Routes;
