import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table2 from './table-2';
import Table2Detail from './table-2-detail';
import Table2Update from './table-2-update';
import Table2DeleteDialog from './table-2-delete-dialog';

const Table2Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table2 />} />
    <Route path="new" element={<Table2Update />} />
    <Route path=":id">
      <Route index element={<Table2Detail />} />
      <Route path="edit" element={<Table2Update />} />
      <Route path="delete" element={<Table2DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table2Routes;
