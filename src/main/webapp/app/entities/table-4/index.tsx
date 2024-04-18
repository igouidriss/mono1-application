import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table4 from './table-4';
import Table4Detail from './table-4-detail';
import Table4Update from './table-4-update';
import Table4DeleteDialog from './table-4-delete-dialog';

const Table4Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table4 />} />
    <Route path="new" element={<Table4Update />} />
    <Route path=":id">
      <Route index element={<Table4Detail />} />
      <Route path="edit" element={<Table4Update />} />
      <Route path="delete" element={<Table4DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table4Routes;
