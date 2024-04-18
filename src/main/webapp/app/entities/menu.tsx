import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/table-5">
        <Translate contentKey="global.menu.entities.table5" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/table-4">
        <Translate contentKey="global.menu.entities.table4" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/table-3">
        <Translate contentKey="global.menu.entities.table3" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/table-2">
        <Translate contentKey="global.menu.entities.table2" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/table-1">
        <Translate contentKey="global.menu.entities.table1" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
