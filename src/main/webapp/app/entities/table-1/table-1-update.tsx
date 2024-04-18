import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITable1 } from 'app/shared/model/table-1.model';
import { getEntity, updateEntity, createEntity, reset } from './table-1.reducer';

export const Table1Update = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const table1Entity = useAppSelector(state => state.table1.entity);
  const loading = useAppSelector(state => state.table1.loading);
  const updating = useAppSelector(state => state.table1.updating);
  const updateSuccess = useAppSelector(state => state.table1.updateSuccess);

  const handleClose = () => {
    navigate('/table-1');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    if (values.numLigne1 !== undefined && typeof values.numLigne1 !== 'number') {
      values.numLigne1 = Number(values.numLigne1);
    }
    if (values.resvNameId3 !== undefined && typeof values.resvNameId3 !== 'number') {
      values.resvNameId3 = Number(values.resvNameId3);
    }
    if (values.nameId8 !== undefined && typeof values.nameId8 !== 'number') {
      values.nameId8 = Number(values.nameId8);
    }
    if (values.parentResvNameId9 !== undefined && typeof values.parentResvNameId9 !== 'number') {
      values.parentResvNameId9 = Number(values.parentResvNameId9);
    }
    if (values.contactId10 !== undefined && typeof values.contactId10 !== 'number') {
      values.contactId10 = Number(values.contactId10);
    }
    if (values.agenceId11 !== undefined && typeof values.agenceId11 !== 'number') {
      values.agenceId11 = Number(values.agenceId11);
    }
    if (values.societeId13 !== undefined && typeof values.societeId13 !== 'number') {
      values.societeId13 = Number(values.societeId13);
    }
    if (values.groupeId14 !== undefined && typeof values.groupeId14 !== 'number') {
      values.groupeId14 = Number(values.groupeId14);
    }
    if (values.numBloc15 !== undefined && typeof values.numBloc15 !== 'number') {
      values.numBloc15 = Number(values.numBloc15);
    }
    if (values.createurResv24 !== undefined && typeof values.createurResv24 !== 'number') {
      values.createurResv24 = Number(values.createurResv24);
    }
    if (values.diffDtCreaAnn65 !== undefined && typeof values.diffDtCreaAnn65 !== 'number') {
      values.diffDtCreaAnn65 = Number(values.diffDtCreaAnn65);
    }
    if (values.diffDtArrAnn66 !== undefined && typeof values.diffDtArrAnn66 !== 'number') {
      values.diffDtArrAnn66 = Number(values.diffDtArrAnn66);
    }
    if (values.leadtime67 !== undefined && typeof values.leadtime67 !== 'number') {
      values.leadtime67 = Number(values.leadtime67);
    }
    if (values.los68 !== undefined && typeof values.los68 !== 'number') {
      values.los68 = Number(values.los68);
    }
    if (values.nbNuitee70 !== undefined && typeof values.nbNuitee70 !== 'number') {
      values.nbNuitee70 = Number(values.nbNuitee70);
    }
    if (values.nbNuiteeNnDed71 !== undefined && typeof values.nbNuiteeNnDed71 !== 'number') {
      values.nbNuiteeNnDed71 = Number(values.nbNuiteeNnDed71);
    }
    if (values.nbResvAnn72 !== undefined && typeof values.nbResvAnn72 !== 'number') {
      values.nbResvAnn72 = Number(values.nbResvAnn72);
    }
    if (values.nbAdu73 !== undefined && typeof values.nbAdu73 !== 'number') {
      values.nbAdu73 = Number(values.nbAdu73);
    }
    if (values.nbEnf74 !== undefined && typeof values.nbEnf74 !== 'number') {
      values.nbEnf74 = Number(values.nbEnf74);
    }
    if (values.nbPersDayU75 !== undefined && typeof values.nbPersDayU75 !== 'number') {
      values.nbPersDayU75 = Number(values.nbPersDayU75);
    }
    if (values.nbPersArr76 !== undefined && typeof values.nbPersArr76 !== 'number') {
      values.nbPersArr76 = Number(values.nbPersArr76);
    }
    if (values.nbPersDep77 !== undefined && typeof values.nbPersDep77 !== 'number') {
      values.nbPersDep77 = Number(values.nbPersDep77);
    }
    if (values.nbPersAnn78 !== undefined && typeof values.nbPersAnn78 !== 'number') {
      values.nbPersAnn78 = Number(values.nbPersAnn78);
    }
    if (values.nbPersNoshow79 !== undefined && typeof values.nbPersNoshow79 !== 'number') {
      values.nbPersNoshow79 = Number(values.nbPersNoshow79);
    }
    if (values.nbChbDayU80 !== undefined && typeof values.nbChbDayU80 !== 'number') {
      values.nbChbDayU80 = Number(values.nbChbDayU80);
    }
    if (values.nbChbArr81 !== undefined && typeof values.nbChbArr81 !== 'number') {
      values.nbChbArr81 = Number(values.nbChbArr81);
    }
    if (values.nbChbDep82 !== undefined && typeof values.nbChbDep82 !== 'number') {
      values.nbChbDep82 = Number(values.nbChbDep82);
    }
    if (values.nbChbAnn83 !== undefined && typeof values.nbChbAnn83 !== 'number') {
      values.nbChbAnn83 = Number(values.nbChbAnn83);
    }
    if (values.nbChbNoshow84 !== undefined && typeof values.nbChbNoshow84 !== 'number') {
      values.nbChbNoshow84 = Number(values.nbChbNoshow84);
    }
    if (values.revenuNetChambre85 !== undefined && typeof values.revenuNetChambre85 !== 'number') {
      values.revenuNetChambre85 = Number(values.revenuNetChambre85);
    }
    if (values.revenuTaxeChambre86 !== undefined && typeof values.revenuTaxeChambre86 !== 'number') {
      values.revenuTaxeChambre86 = Number(values.revenuTaxeChambre86);
    }
    if (values.revenuNetChambreGlobal87 !== undefined && typeof values.revenuNetChambreGlobal87 !== 'number') {
      values.revenuNetChambreGlobal87 = Number(values.revenuNetChambreGlobal87);
    }
    if (values.revenuTaxeChambreGlobal88 !== undefined && typeof values.revenuTaxeChambreGlobal88 !== 'number') {
      values.revenuTaxeChambreGlobal88 = Number(values.revenuTaxeChambreGlobal88);
    }
    if (values.revenuNetBq89 !== undefined && typeof values.revenuNetBq89 !== 'number') {
      values.revenuNetBq89 = Number(values.revenuNetBq89);
    }
    if (values.revenuTaxeBq90 !== undefined && typeof values.revenuTaxeBq90 !== 'number') {
      values.revenuTaxeBq90 = Number(values.revenuTaxeBq90);
    }
    if (values.revenuNetBqGlobal91 !== undefined && typeof values.revenuNetBqGlobal91 !== 'number') {
      values.revenuNetBqGlobal91 = Number(values.revenuNetBqGlobal91);
    }
    if (values.revenuTaxeBqGlobal92 !== undefined && typeof values.revenuTaxeBqGlobal92 !== 'number') {
      values.revenuTaxeBqGlobal92 = Number(values.revenuTaxeBqGlobal92);
    }
    if (values.revenuNetExtra93 !== undefined && typeof values.revenuNetExtra93 !== 'number') {
      values.revenuNetExtra93 = Number(values.revenuNetExtra93);
    }
    if (values.revenuTaxeExtra94 !== undefined && typeof values.revenuTaxeExtra94 !== 'number') {
      values.revenuTaxeExtra94 = Number(values.revenuTaxeExtra94);
    }
    if (values.revenuNetExtraGlobal95 !== undefined && typeof values.revenuNetExtraGlobal95 !== 'number') {
      values.revenuNetExtraGlobal95 = Number(values.revenuNetExtraGlobal95);
    }
    if (values.revenuTaxeExtraGlobal96 !== undefined && typeof values.revenuTaxeExtraGlobal96 !== 'number') {
      values.revenuTaxeExtraGlobal96 = Number(values.revenuTaxeExtraGlobal96);
    }
    if (values.revenuNetTotal97 !== undefined && typeof values.revenuNetTotal97 !== 'number') {
      values.revenuNetTotal97 = Number(values.revenuNetTotal97);
    }
    if (values.revenuTaxeTotal98 !== undefined && typeof values.revenuTaxeTotal98 !== 'number') {
      values.revenuTaxeTotal98 = Number(values.revenuTaxeTotal98);
    }
    if (values.revenuNetTotalGlobal99 !== undefined && typeof values.revenuNetTotalGlobal99 !== 'number') {
      values.revenuNetTotalGlobal99 = Number(values.revenuNetTotalGlobal99);
    }
    if (values.revenuTaxeTotalGlobal100 !== undefined && typeof values.revenuTaxeTotalGlobal100 !== 'number') {
      values.revenuTaxeTotalGlobal100 = Number(values.revenuTaxeTotalGlobal100);
    }
    if (values.prodRevenuChambre101 !== undefined && typeof values.prodRevenuChambre101 !== 'number') {
      values.prodRevenuChambre101 = Number(values.prodRevenuChambre101);
    }
    if (values.prodRevenuBq102 !== undefined && typeof values.prodRevenuBq102 !== 'number') {
      values.prodRevenuBq102 = Number(values.prodRevenuBq102);
    }
    if (values.prodRevenuExtra103 !== undefined && typeof values.prodRevenuExtra103 !== 'number') {
      values.prodRevenuExtra103 = Number(values.prodRevenuExtra103);
    }
    if (values.prodRevenuTotal104 !== undefined && typeof values.prodRevenuTotal104 !== 'number') {
      values.prodRevenuTotal104 = Number(values.prodRevenuTotal104);
    }
    if (values.prodChambreNbNuitees105 !== undefined && typeof values.prodChambreNbNuitees105 !== 'number') {
      values.prodChambreNbNuitees105 = Number(values.prodChambreNbNuitees105);
    }
    if (values.numLigne108 !== undefined && typeof values.numLigne108 !== 'number') {
      values.numLigne108 = Number(values.numLigne108);
    }
    if (values.resvNameId110 !== undefined && typeof values.resvNameId110 !== 'number') {
      values.resvNameId110 = Number(values.resvNameId110);
    }
    if (values.nameId115 !== undefined && typeof values.nameId115 !== 'number') {
      values.nameId115 = Number(values.nameId115);
    }
    if (values.parentResvNameId116 !== undefined && typeof values.parentResvNameId116 !== 'number') {
      values.parentResvNameId116 = Number(values.parentResvNameId116);
    }
    if (values.contactId117 !== undefined && typeof values.contactId117 !== 'number') {
      values.contactId117 = Number(values.contactId117);
    }
    if (values.agenceId118 !== undefined && typeof values.agenceId118 !== 'number') {
      values.agenceId118 = Number(values.agenceId118);
    }
    if (values.societeId120 !== undefined && typeof values.societeId120 !== 'number') {
      values.societeId120 = Number(values.societeId120);
    }
    if (values.groupeId121 !== undefined && typeof values.groupeId121 !== 'number') {
      values.groupeId121 = Number(values.groupeId121);
    }
    if (values.numBloc122 !== undefined && typeof values.numBloc122 !== 'number') {
      values.numBloc122 = Number(values.numBloc122);
    }
    if (values.createurResv131 !== undefined && typeof values.createurResv131 !== 'number') {
      values.createurResv131 = Number(values.createurResv131);
    }
    if (values.diffDtCreaAnn172 !== undefined && typeof values.diffDtCreaAnn172 !== 'number') {
      values.diffDtCreaAnn172 = Number(values.diffDtCreaAnn172);
    }
    if (values.diffDtArrAnn173 !== undefined && typeof values.diffDtArrAnn173 !== 'number') {
      values.diffDtArrAnn173 = Number(values.diffDtArrAnn173);
    }
    if (values.leadtime174 !== undefined && typeof values.leadtime174 !== 'number') {
      values.leadtime174 = Number(values.leadtime174);
    }
    if (values.los175 !== undefined && typeof values.los175 !== 'number') {
      values.los175 = Number(values.los175);
    }
    if (values.nbNuitee177 !== undefined && typeof values.nbNuitee177 !== 'number') {
      values.nbNuitee177 = Number(values.nbNuitee177);
    }
    if (values.nbNuiteeNnDed178 !== undefined && typeof values.nbNuiteeNnDed178 !== 'number') {
      values.nbNuiteeNnDed178 = Number(values.nbNuiteeNnDed178);
    }
    if (values.nbResvAnn179 !== undefined && typeof values.nbResvAnn179 !== 'number') {
      values.nbResvAnn179 = Number(values.nbResvAnn179);
    }
    if (values.nbAdu180 !== undefined && typeof values.nbAdu180 !== 'number') {
      values.nbAdu180 = Number(values.nbAdu180);
    }
    if (values.nbEnf181 !== undefined && typeof values.nbEnf181 !== 'number') {
      values.nbEnf181 = Number(values.nbEnf181);
    }
    if (values.nbPersDayU182 !== undefined && typeof values.nbPersDayU182 !== 'number') {
      values.nbPersDayU182 = Number(values.nbPersDayU182);
    }
    if (values.nbPersArr183 !== undefined && typeof values.nbPersArr183 !== 'number') {
      values.nbPersArr183 = Number(values.nbPersArr183);
    }
    if (values.nbPersDep184 !== undefined && typeof values.nbPersDep184 !== 'number') {
      values.nbPersDep184 = Number(values.nbPersDep184);
    }
    if (values.nbPersAnn185 !== undefined && typeof values.nbPersAnn185 !== 'number') {
      values.nbPersAnn185 = Number(values.nbPersAnn185);
    }
    if (values.nbPersNoshow186 !== undefined && typeof values.nbPersNoshow186 !== 'number') {
      values.nbPersNoshow186 = Number(values.nbPersNoshow186);
    }
    if (values.nbChbDayU187 !== undefined && typeof values.nbChbDayU187 !== 'number') {
      values.nbChbDayU187 = Number(values.nbChbDayU187);
    }
    if (values.nbChbArr188 !== undefined && typeof values.nbChbArr188 !== 'number') {
      values.nbChbArr188 = Number(values.nbChbArr188);
    }
    if (values.nbChbDep189 !== undefined && typeof values.nbChbDep189 !== 'number') {
      values.nbChbDep189 = Number(values.nbChbDep189);
    }
    if (values.nbChbAnn190 !== undefined && typeof values.nbChbAnn190 !== 'number') {
      values.nbChbAnn190 = Number(values.nbChbAnn190);
    }
    if (values.nbChbNoshow191 !== undefined && typeof values.nbChbNoshow191 !== 'number') {
      values.nbChbNoshow191 = Number(values.nbChbNoshow191);
    }
    if (values.revenuNetChambre192 !== undefined && typeof values.revenuNetChambre192 !== 'number') {
      values.revenuNetChambre192 = Number(values.revenuNetChambre192);
    }
    if (values.revenuTaxeChambre193 !== undefined && typeof values.revenuTaxeChambre193 !== 'number') {
      values.revenuTaxeChambre193 = Number(values.revenuTaxeChambre193);
    }
    if (values.revenuNetChambreGlobal194 !== undefined && typeof values.revenuNetChambreGlobal194 !== 'number') {
      values.revenuNetChambreGlobal194 = Number(values.revenuNetChambreGlobal194);
    }
    if (values.revenuTaxeChambreGlobal195 !== undefined && typeof values.revenuTaxeChambreGlobal195 !== 'number') {
      values.revenuTaxeChambreGlobal195 = Number(values.revenuTaxeChambreGlobal195);
    }
    if (values.revenuNetBq196 !== undefined && typeof values.revenuNetBq196 !== 'number') {
      values.revenuNetBq196 = Number(values.revenuNetBq196);
    }
    if (values.revenuTaxeBq197 !== undefined && typeof values.revenuTaxeBq197 !== 'number') {
      values.revenuTaxeBq197 = Number(values.revenuTaxeBq197);
    }
    if (values.revenuNetBqGlobal198 !== undefined && typeof values.revenuNetBqGlobal198 !== 'number') {
      values.revenuNetBqGlobal198 = Number(values.revenuNetBqGlobal198);
    }
    if (values.revenuTaxeBqGlobal199 !== undefined && typeof values.revenuTaxeBqGlobal199 !== 'number') {
      values.revenuTaxeBqGlobal199 = Number(values.revenuTaxeBqGlobal199);
    }
    if (values.revenuNetExtra200 !== undefined && typeof values.revenuNetExtra200 !== 'number') {
      values.revenuNetExtra200 = Number(values.revenuNetExtra200);
    }
    if (values.revenuTaxeExtra201 !== undefined && typeof values.revenuTaxeExtra201 !== 'number') {
      values.revenuTaxeExtra201 = Number(values.revenuTaxeExtra201);
    }
    if (values.revenuNetExtraGlobal202 !== undefined && typeof values.revenuNetExtraGlobal202 !== 'number') {
      values.revenuNetExtraGlobal202 = Number(values.revenuNetExtraGlobal202);
    }
    if (values.revenuTaxeExtraGlobal203 !== undefined && typeof values.revenuTaxeExtraGlobal203 !== 'number') {
      values.revenuTaxeExtraGlobal203 = Number(values.revenuTaxeExtraGlobal203);
    }
    if (values.revenuNetTotal204 !== undefined && typeof values.revenuNetTotal204 !== 'number') {
      values.revenuNetTotal204 = Number(values.revenuNetTotal204);
    }
    if (values.revenuTaxeTotal205 !== undefined && typeof values.revenuTaxeTotal205 !== 'number') {
      values.revenuTaxeTotal205 = Number(values.revenuTaxeTotal205);
    }
    if (values.revenuNetTotalGlobal206 !== undefined && typeof values.revenuNetTotalGlobal206 !== 'number') {
      values.revenuNetTotalGlobal206 = Number(values.revenuNetTotalGlobal206);
    }
    if (values.revenuTaxeTotalGlobal207 !== undefined && typeof values.revenuTaxeTotalGlobal207 !== 'number') {
      values.revenuTaxeTotalGlobal207 = Number(values.revenuTaxeTotalGlobal207);
    }
    if (values.prodRevenuChambre208 !== undefined && typeof values.prodRevenuChambre208 !== 'number') {
      values.prodRevenuChambre208 = Number(values.prodRevenuChambre208);
    }
    if (values.prodRevenuBq209 !== undefined && typeof values.prodRevenuBq209 !== 'number') {
      values.prodRevenuBq209 = Number(values.prodRevenuBq209);
    }
    if (values.prodRevenuExtra210 !== undefined && typeof values.prodRevenuExtra210 !== 'number') {
      values.prodRevenuExtra210 = Number(values.prodRevenuExtra210);
    }
    if (values.prodRevenuTotal211 !== undefined && typeof values.prodRevenuTotal211 !== 'number') {
      values.prodRevenuTotal211 = Number(values.prodRevenuTotal211);
    }
    if (values.prodChambreNbNuitees212 !== undefined && typeof values.prodChambreNbNuitees212 !== 'number') {
      values.prodChambreNbNuitees212 = Number(values.prodChambreNbNuitees212);
    }
    if (values.numLigne215 !== undefined && typeof values.numLigne215 !== 'number') {
      values.numLigne215 = Number(values.numLigne215);
    }
    if (values.resvNameId217 !== undefined && typeof values.resvNameId217 !== 'number') {
      values.resvNameId217 = Number(values.resvNameId217);
    }
    if (values.nameId222 !== undefined && typeof values.nameId222 !== 'number') {
      values.nameId222 = Number(values.nameId222);
    }
    if (values.parentResvNameId223 !== undefined && typeof values.parentResvNameId223 !== 'number') {
      values.parentResvNameId223 = Number(values.parentResvNameId223);
    }
    if (values.contactId224 !== undefined && typeof values.contactId224 !== 'number') {
      values.contactId224 = Number(values.contactId224);
    }
    if (values.agenceId225 !== undefined && typeof values.agenceId225 !== 'number') {
      values.agenceId225 = Number(values.agenceId225);
    }
    if (values.societeId227 !== undefined && typeof values.societeId227 !== 'number') {
      values.societeId227 = Number(values.societeId227);
    }
    if (values.groupeId228 !== undefined && typeof values.groupeId228 !== 'number') {
      values.groupeId228 = Number(values.groupeId228);
    }
    if (values.numBloc229 !== undefined && typeof values.numBloc229 !== 'number') {
      values.numBloc229 = Number(values.numBloc229);
    }
    if (values.createurResv238 !== undefined && typeof values.createurResv238 !== 'number') {
      values.createurResv238 = Number(values.createurResv238);
    }
    if (values.diffDtCreaAnn279 !== undefined && typeof values.diffDtCreaAnn279 !== 'number') {
      values.diffDtCreaAnn279 = Number(values.diffDtCreaAnn279);
    }
    if (values.diffDtArrAnn280 !== undefined && typeof values.diffDtArrAnn280 !== 'number') {
      values.diffDtArrAnn280 = Number(values.diffDtArrAnn280);
    }
    if (values.leadtime281 !== undefined && typeof values.leadtime281 !== 'number') {
      values.leadtime281 = Number(values.leadtime281);
    }
    if (values.los282 !== undefined && typeof values.los282 !== 'number') {
      values.los282 = Number(values.los282);
    }
    if (values.nbNuitee284 !== undefined && typeof values.nbNuitee284 !== 'number') {
      values.nbNuitee284 = Number(values.nbNuitee284);
    }
    if (values.nbNuiteeNnDed285 !== undefined && typeof values.nbNuiteeNnDed285 !== 'number') {
      values.nbNuiteeNnDed285 = Number(values.nbNuiteeNnDed285);
    }
    if (values.nbResvAnn286 !== undefined && typeof values.nbResvAnn286 !== 'number') {
      values.nbResvAnn286 = Number(values.nbResvAnn286);
    }
    if (values.nbAdu287 !== undefined && typeof values.nbAdu287 !== 'number') {
      values.nbAdu287 = Number(values.nbAdu287);
    }
    if (values.nbEnf288 !== undefined && typeof values.nbEnf288 !== 'number') {
      values.nbEnf288 = Number(values.nbEnf288);
    }
    if (values.nbPersDayU289 !== undefined && typeof values.nbPersDayU289 !== 'number') {
      values.nbPersDayU289 = Number(values.nbPersDayU289);
    }
    if (values.nbPersArr290 !== undefined && typeof values.nbPersArr290 !== 'number') {
      values.nbPersArr290 = Number(values.nbPersArr290);
    }
    if (values.nbPersDep291 !== undefined && typeof values.nbPersDep291 !== 'number') {
      values.nbPersDep291 = Number(values.nbPersDep291);
    }
    if (values.nbPersAnn292 !== undefined && typeof values.nbPersAnn292 !== 'number') {
      values.nbPersAnn292 = Number(values.nbPersAnn292);
    }
    if (values.nbPersNoshow293 !== undefined && typeof values.nbPersNoshow293 !== 'number') {
      values.nbPersNoshow293 = Number(values.nbPersNoshow293);
    }
    if (values.nbChbDayU294 !== undefined && typeof values.nbChbDayU294 !== 'number') {
      values.nbChbDayU294 = Number(values.nbChbDayU294);
    }
    if (values.nbChbArr295 !== undefined && typeof values.nbChbArr295 !== 'number') {
      values.nbChbArr295 = Number(values.nbChbArr295);
    }
    if (values.nbChbDep296 !== undefined && typeof values.nbChbDep296 !== 'number') {
      values.nbChbDep296 = Number(values.nbChbDep296);
    }
    if (values.nbChbAnn297 !== undefined && typeof values.nbChbAnn297 !== 'number') {
      values.nbChbAnn297 = Number(values.nbChbAnn297);
    }
    if (values.nbChbNoshow298 !== undefined && typeof values.nbChbNoshow298 !== 'number') {
      values.nbChbNoshow298 = Number(values.nbChbNoshow298);
    }
    if (values.revenuNetChambre299 !== undefined && typeof values.revenuNetChambre299 !== 'number') {
      values.revenuNetChambre299 = Number(values.revenuNetChambre299);
    }
    if (values.revenuTaxeChambre300 !== undefined && typeof values.revenuTaxeChambre300 !== 'number') {
      values.revenuTaxeChambre300 = Number(values.revenuTaxeChambre300);
    }
    if (values.revenuNetChambreGlobal301 !== undefined && typeof values.revenuNetChambreGlobal301 !== 'number') {
      values.revenuNetChambreGlobal301 = Number(values.revenuNetChambreGlobal301);
    }
    if (values.revenuTaxeChambreGlobal302 !== undefined && typeof values.revenuTaxeChambreGlobal302 !== 'number') {
      values.revenuTaxeChambreGlobal302 = Number(values.revenuTaxeChambreGlobal302);
    }
    if (values.revenuNetBq303 !== undefined && typeof values.revenuNetBq303 !== 'number') {
      values.revenuNetBq303 = Number(values.revenuNetBq303);
    }
    if (values.revenuTaxeBq304 !== undefined && typeof values.revenuTaxeBq304 !== 'number') {
      values.revenuTaxeBq304 = Number(values.revenuTaxeBq304);
    }
    if (values.revenuNetBqGlobal305 !== undefined && typeof values.revenuNetBqGlobal305 !== 'number') {
      values.revenuNetBqGlobal305 = Number(values.revenuNetBqGlobal305);
    }
    if (values.revenuTaxeBqGlobal306 !== undefined && typeof values.revenuTaxeBqGlobal306 !== 'number') {
      values.revenuTaxeBqGlobal306 = Number(values.revenuTaxeBqGlobal306);
    }
    if (values.revenuNetExtra307 !== undefined && typeof values.revenuNetExtra307 !== 'number') {
      values.revenuNetExtra307 = Number(values.revenuNetExtra307);
    }
    if (values.revenuTaxeExtra308 !== undefined && typeof values.revenuTaxeExtra308 !== 'number') {
      values.revenuTaxeExtra308 = Number(values.revenuTaxeExtra308);
    }
    if (values.revenuNetExtraGlobal309 !== undefined && typeof values.revenuNetExtraGlobal309 !== 'number') {
      values.revenuNetExtraGlobal309 = Number(values.revenuNetExtraGlobal309);
    }
    if (values.revenuTaxeExtraGlobal310 !== undefined && typeof values.revenuTaxeExtraGlobal310 !== 'number') {
      values.revenuTaxeExtraGlobal310 = Number(values.revenuTaxeExtraGlobal310);
    }

    const entity = {
      ...table1Entity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...table1Entity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="mono1ApplicationApp.table1.home.createOrEditLabel" data-cy="Table1CreateUpdateHeading">
            <Translate contentKey="mono1ApplicationApp.table1.home.createOrEditLabel">Create or edit a Table1</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="table-1-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numLigne1')}
                id="table-1-numLigne1"
                name="numLigne1"
                data-cy="numLigne1"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.resort2')}
                id="table-1-resort2"
                name="resort2"
                data-cy="resort2"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.resvNameId3')}
                id="table-1-resvNameId3"
                name="resvNameId3"
                data-cy="resvNameId3"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.clientOId4')}
                id="table-1-clientOId4"
                name="clientOId4"
                data-cy="clientOId4"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeChb5')}
                id="table-1-typeChb5"
                name="typeChb5"
                data-cy="typeChb5"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.confirmationNo6')}
                id="table-1-confirmationNo6"
                name="confirmationNo6"
                data-cy="confirmationNo6"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.clientMdmId7')}
                id="table-1-clientMdmId7"
                name="clientMdmId7"
                data-cy="clientMdmId7"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nameId8')}
                id="table-1-nameId8"
                name="nameId8"
                data-cy="nameId8"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.parentResvNameId9')}
                id="table-1-parentResvNameId9"
                name="parentResvNameId9"
                data-cy="parentResvNameId9"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.contactId10')}
                id="table-1-contactId10"
                name="contactId10"
                data-cy="contactId10"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.agenceId11')}
                id="table-1-agenceId11"
                name="agenceId11"
                data-cy="agenceId11"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.agenceNom12')}
                id="table-1-agenceNom12"
                name="agenceNom12"
                data-cy="agenceNom12"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.societeId13')}
                id="table-1-societeId13"
                name="societeId13"
                data-cy="societeId13"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.groupeId14')}
                id="table-1-groupeId14"
                name="groupeId14"
                data-cy="groupeId14"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numBloc15')}
                id="table-1-numBloc15"
                name="numBloc15"
                data-cy="numBloc15"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeResv16')}
                id="table-1-typeResv16"
                name="typeResv16"
                data-cy="typeResv16"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutResv17')}
                id="table-1-statutResv17"
                name="statutResv17"
                data-cy="statutResv17"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDebutResv18')}
                id="table-1-dateDebutResv18"
                name="dateDebutResv18"
                data-cy="dateDebutResv18"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateFinResv19')}
                id="table-1-dateFinResv19"
                name="dateFinResv19"
                data-cy="dateFinResv19"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.truncDateDebutResv20')}
                id="table-1-truncDateDebutResv20"
                name="truncDateDebutResv20"
                data-cy="truncDateDebutResv20"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.truncDateFinResv21')}
                id="table-1-truncDateFinResv21"
                name="truncDateFinResv21"
                data-cy="truncDateFinResv21"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateAnnResv22')}
                id="table-1-dateAnnResv22"
                name="dateAnnResv22"
                data-cy="dateAnnResv22"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.pseudoRoomYn23')}
                id="table-1-pseudoRoomYn23"
                name="pseudoRoomYn23"
                data-cy="pseudoRoomYn23"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.createurResv24')}
                id="table-1-createurResv24"
                name="createurResv24"
                data-cy="createurResv24"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nomCreateurResv25')}
                id="table-1-nomCreateurResv25"
                name="nomCreateurResv25"
                data-cy="nomCreateurResv25"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGarantie26')}
                id="table-1-codeGarantie26"
                name="codeGarantie26"
                data-cy="codeGarantie26"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.flgDed27')}
                id="table-1-flgDed27"
                name="flgDed27"
                data-cy="flgDed27"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codePays28')}
                id="table-1-codePays28"
                name="codePays28"
                data-cy="codePays28"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libPays29')}
                id="table-1-libPays29"
                name="libPays29"
                data-cy="libPays29"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeNationalite30')}
                id="table-1-codeNationalite30"
                name="codeNationalite30"
                data-cy="codeNationalite30"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libNationalite31')}
                id="table-1-libNationalite31"
                name="libNationalite31"
                data-cy="libNationalite31"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeSource32')}
                id="table-1-codeSource32"
                name="codeSource32"
                data-cy="codeSource32"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libSource33')}
                id="table-1-libSource33"
                name="libSource33"
                data-cy="libSource33"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGrandSource34')}
                id="table-1-codeGrandSource34"
                name="codeGrandSource34"
                data-cy="codeGrandSource34"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeOrigine35')}
                id="table-1-codeOrigine35"
                name="codeOrigine35"
                data-cy="codeOrigine35"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libOrigine36')}
                id="table-1-libOrigine36"
                name="libOrigine36"
                data-cy="libOrigine36"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeMarche37')}
                id="table-1-codeMarche37"
                name="codeMarche37"
                data-cy="codeMarche37"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libMarche38')}
                id="table-1-libMarche38"
                name="libMarche38"
                data-cy="libMarche38"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGrandMarche39')}
                id="table-1-codeGrandMarche39"
                name="codeGrandMarche39"
                data-cy="codeGrandMarche39"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libGrandMarche40')}
                id="table-1-libGrandMarche40"
                name="libGrandMarche40"
                data-cy="libGrandMarche40"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codePrix41')}
                id="table-1-codePrix41"
                name="codePrix41"
                data-cy="codePrix41"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.categPrix42')}
                id="table-1-categPrix42"
                name="categPrix42"
                data-cy="categPrix42"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libPrix43')}
                id="table-1-libPrix43"
                name="libPrix43"
                data-cy="libPrix43"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numChb44')}
                id="table-1-numChb44"
                name="numChb44"
                data-cy="numChb44"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.descriptionTypeChb45')}
                id="table-1-descriptionTypeChb45"
                name="descriptionTypeChb45"
                data-cy="descriptionTypeChb45"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeTypeChb46')}
                id="table-1-codeTypeChb46"
                name="codeTypeChb46"
                data-cy="codeTypeChb46"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.classChb47')}
                id="table-1-classChb47"
                name="classChb47"
                data-cy="classChb47"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.caractChb48')}
                id="table-1-caractChb48"
                name="caractChb48"
                data-cy="caractChb48"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeChbDeReservation49')}
                id="table-1-typeChbDeReservation49"
                name="typeChbDeReservation49"
                data-cy="typeChbDeReservation49"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.descriptionTypeChbDeResv50')}
                id="table-1-descriptionTypeChbDeResv50"
                name="descriptionTypeChbDeResv50"
                data-cy="descriptionTypeChbDeResv50"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeTypeChbDeResv51')}
                id="table-1-codeTypeChbDeResv51"
                name="codeTypeChbDeResv51"
                data-cy="codeTypeChbDeResv51"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDeReservation52')}
                id="table-1-statutDeReservation52"
                name="statutDeReservation52"
                data-cy="statutDeReservation52"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.circuitDistribution53')}
                id="table-1-circuitDistribution53"
                name="circuitDistribution53"
                data-cy="circuitDistribution53"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.circuitDistribUserRegroup54')}
                id="table-1-circuitDistribUserRegroup54"
                name="circuitDistribUserRegroup54"
                data-cy="circuitDistribUserRegroup54"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numCrs55')}
                id="table-1-numCrs55"
                name="numCrs55"
                data-cy="numCrs55"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeRefCrs56')}
                id="table-1-typeRefCrs56"
                name="typeRefCrs56"
                data-cy="typeRefCrs56"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.crsInsertDate57')}
                id="table-1-crsInsertDate57"
                name="crsInsertDate57"
                data-cy="crsInsertDate57"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateCreaResv58')}
                id="table-1-dateCreaResv58"
                name="dateCreaResv58"
                data-cy="dateCreaResv58"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.datePremier59')}
                id="table-1-datePremier59"
                name="datePremier59"
                data-cy="datePremier59"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutPremier60')}
                id="table-1-statutPremier60"
                name="statutPremier60"
                data-cy="statutPremier60"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDernier61')}
                id="table-1-dateDernier61"
                name="dateDernier61"
                data-cy="dateDernier61"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDernier62')}
                id="table-1-statutDernier62"
                name="statutDernier62"
                data-cy="statutDernier62"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDernierPseudo63')}
                id="table-1-dateDernierPseudo63"
                name="dateDernierPseudo63"
                data-cy="dateDernierPseudo63"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDernierPseudo64')}
                id="table-1-statutDernierPseudo64"
                name="statutDernierPseudo64"
                data-cy="statutDernierPseudo64"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.diffDtCreaAnn65')}
                id="table-1-diffDtCreaAnn65"
                name="diffDtCreaAnn65"
                data-cy="diffDtCreaAnn65"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.diffDtArrAnn66')}
                id="table-1-diffDtArrAnn66"
                name="diffDtArrAnn66"
                data-cy="diffDtArrAnn66"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.leadtime67')}
                id="table-1-leadtime67"
                name="leadtime67"
                data-cy="leadtime67"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.los68')}
                id="table-1-los68"
                name="los68"
                data-cy="los68"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.occupantsGroupe69')}
                id="table-1-occupantsGroupe69"
                name="occupantsGroupe69"
                data-cy="occupantsGroupe69"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbNuitee70')}
                id="table-1-nbNuitee70"
                name="nbNuitee70"
                data-cy="nbNuitee70"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbNuiteeNnDed71')}
                id="table-1-nbNuiteeNnDed71"
                name="nbNuiteeNnDed71"
                data-cy="nbNuiteeNnDed71"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbResvAnn72')}
                id="table-1-nbResvAnn72"
                name="nbResvAnn72"
                data-cy="nbResvAnn72"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbAdu73')}
                id="table-1-nbAdu73"
                name="nbAdu73"
                data-cy="nbAdu73"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbEnf74')}
                id="table-1-nbEnf74"
                name="nbEnf74"
                data-cy="nbEnf74"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersDayU75')}
                id="table-1-nbPersDayU75"
                name="nbPersDayU75"
                data-cy="nbPersDayU75"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersArr76')}
                id="table-1-nbPersArr76"
                name="nbPersArr76"
                data-cy="nbPersArr76"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersDep77')}
                id="table-1-nbPersDep77"
                name="nbPersDep77"
                data-cy="nbPersDep77"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersAnn78')}
                id="table-1-nbPersAnn78"
                name="nbPersAnn78"
                data-cy="nbPersAnn78"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersNoshow79')}
                id="table-1-nbPersNoshow79"
                name="nbPersNoshow79"
                data-cy="nbPersNoshow79"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbDayU80')}
                id="table-1-nbChbDayU80"
                name="nbChbDayU80"
                data-cy="nbChbDayU80"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbArr81')}
                id="table-1-nbChbArr81"
                name="nbChbArr81"
                data-cy="nbChbArr81"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbDep82')}
                id="table-1-nbChbDep82"
                name="nbChbDep82"
                data-cy="nbChbDep82"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbAnn83')}
                id="table-1-nbChbAnn83"
                name="nbChbAnn83"
                data-cy="nbChbAnn83"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbNoshow84')}
                id="table-1-nbChbNoshow84"
                name="nbChbNoshow84"
                data-cy="nbChbNoshow84"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetChambre85')}
                id="table-1-revenuNetChambre85"
                name="revenuNetChambre85"
                data-cy="revenuNetChambre85"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeChambre86')}
                id="table-1-revenuTaxeChambre86"
                name="revenuTaxeChambre86"
                data-cy="revenuTaxeChambre86"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetChambreGlobal87')}
                id="table-1-revenuNetChambreGlobal87"
                name="revenuNetChambreGlobal87"
                data-cy="revenuNetChambreGlobal87"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeChambreGlobal88')}
                id="table-1-revenuTaxeChambreGlobal88"
                name="revenuTaxeChambreGlobal88"
                data-cy="revenuTaxeChambreGlobal88"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetBq89')}
                id="table-1-revenuNetBq89"
                name="revenuNetBq89"
                data-cy="revenuNetBq89"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeBq90')}
                id="table-1-revenuTaxeBq90"
                name="revenuTaxeBq90"
                data-cy="revenuTaxeBq90"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetBqGlobal91')}
                id="table-1-revenuNetBqGlobal91"
                name="revenuNetBqGlobal91"
                data-cy="revenuNetBqGlobal91"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeBqGlobal92')}
                id="table-1-revenuTaxeBqGlobal92"
                name="revenuTaxeBqGlobal92"
                data-cy="revenuTaxeBqGlobal92"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetExtra93')}
                id="table-1-revenuNetExtra93"
                name="revenuNetExtra93"
                data-cy="revenuNetExtra93"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeExtra94')}
                id="table-1-revenuTaxeExtra94"
                name="revenuTaxeExtra94"
                data-cy="revenuTaxeExtra94"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetExtraGlobal95')}
                id="table-1-revenuNetExtraGlobal95"
                name="revenuNetExtraGlobal95"
                data-cy="revenuNetExtraGlobal95"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeExtraGlobal96')}
                id="table-1-revenuTaxeExtraGlobal96"
                name="revenuTaxeExtraGlobal96"
                data-cy="revenuTaxeExtraGlobal96"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetTotal97')}
                id="table-1-revenuNetTotal97"
                name="revenuNetTotal97"
                data-cy="revenuNetTotal97"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeTotal98')}
                id="table-1-revenuTaxeTotal98"
                name="revenuTaxeTotal98"
                data-cy="revenuTaxeTotal98"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetTotalGlobal99')}
                id="table-1-revenuNetTotalGlobal99"
                name="revenuNetTotalGlobal99"
                data-cy="revenuNetTotalGlobal99"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeTotalGlobal100')}
                id="table-1-revenuTaxeTotalGlobal100"
                name="revenuTaxeTotalGlobal100"
                data-cy="revenuTaxeTotalGlobal100"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuChambre101')}
                id="table-1-prodRevenuChambre101"
                name="prodRevenuChambre101"
                data-cy="prodRevenuChambre101"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuBq102')}
                id="table-1-prodRevenuBq102"
                name="prodRevenuBq102"
                data-cy="prodRevenuBq102"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuExtra103')}
                id="table-1-prodRevenuExtra103"
                name="prodRevenuExtra103"
                data-cy="prodRevenuExtra103"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuTotal104')}
                id="table-1-prodRevenuTotal104"
                name="prodRevenuTotal104"
                data-cy="prodRevenuTotal104"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodChambreNbNuitees105')}
                id="table-1-prodChambreNbNuitees105"
                name="prodChambreNbNuitees105"
                data-cy="prodChambreNbNuitees105"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.techCreateDate106')}
                id="table-1-techCreateDate106"
                name="techCreateDate106"
                data-cy="techCreateDate106"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.techUpdateDate107')}
                id="table-1-techUpdateDate107"
                name="techUpdateDate107"
                data-cy="techUpdateDate107"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numLigne108')}
                id="table-1-numLigne108"
                name="numLigne108"
                data-cy="numLigne108"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.resort109')}
                id="table-1-resort109"
                name="resort109"
                data-cy="resort109"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.resvNameId110')}
                id="table-1-resvNameId110"
                name="resvNameId110"
                data-cy="resvNameId110"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.clientOId111')}
                id="table-1-clientOId111"
                name="clientOId111"
                data-cy="clientOId111"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeChb112')}
                id="table-1-typeChb112"
                name="typeChb112"
                data-cy="typeChb112"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.confirmationNo113')}
                id="table-1-confirmationNo113"
                name="confirmationNo113"
                data-cy="confirmationNo113"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.clientMdmId114')}
                id="table-1-clientMdmId114"
                name="clientMdmId114"
                data-cy="clientMdmId114"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nameId115')}
                id="table-1-nameId115"
                name="nameId115"
                data-cy="nameId115"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.parentResvNameId116')}
                id="table-1-parentResvNameId116"
                name="parentResvNameId116"
                data-cy="parentResvNameId116"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.contactId117')}
                id="table-1-contactId117"
                name="contactId117"
                data-cy="contactId117"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.agenceId118')}
                id="table-1-agenceId118"
                name="agenceId118"
                data-cy="agenceId118"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.agenceNom119')}
                id="table-1-agenceNom119"
                name="agenceNom119"
                data-cy="agenceNom119"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.societeId120')}
                id="table-1-societeId120"
                name="societeId120"
                data-cy="societeId120"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.groupeId121')}
                id="table-1-groupeId121"
                name="groupeId121"
                data-cy="groupeId121"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numBloc122')}
                id="table-1-numBloc122"
                name="numBloc122"
                data-cy="numBloc122"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeResv123')}
                id="table-1-typeResv123"
                name="typeResv123"
                data-cy="typeResv123"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutResv124')}
                id="table-1-statutResv124"
                name="statutResv124"
                data-cy="statutResv124"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDebutResv125')}
                id="table-1-dateDebutResv125"
                name="dateDebutResv125"
                data-cy="dateDebutResv125"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateFinResv126')}
                id="table-1-dateFinResv126"
                name="dateFinResv126"
                data-cy="dateFinResv126"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.truncDateDebutResv127')}
                id="table-1-truncDateDebutResv127"
                name="truncDateDebutResv127"
                data-cy="truncDateDebutResv127"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.truncDateFinResv128')}
                id="table-1-truncDateFinResv128"
                name="truncDateFinResv128"
                data-cy="truncDateFinResv128"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateAnnResv129')}
                id="table-1-dateAnnResv129"
                name="dateAnnResv129"
                data-cy="dateAnnResv129"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.pseudoRoomYn130')}
                id="table-1-pseudoRoomYn130"
                name="pseudoRoomYn130"
                data-cy="pseudoRoomYn130"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.createurResv131')}
                id="table-1-createurResv131"
                name="createurResv131"
                data-cy="createurResv131"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nomCreateurResv132')}
                id="table-1-nomCreateurResv132"
                name="nomCreateurResv132"
                data-cy="nomCreateurResv132"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGarantie133')}
                id="table-1-codeGarantie133"
                name="codeGarantie133"
                data-cy="codeGarantie133"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.flgDed134')}
                id="table-1-flgDed134"
                name="flgDed134"
                data-cy="flgDed134"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codePays135')}
                id="table-1-codePays135"
                name="codePays135"
                data-cy="codePays135"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libPays136')}
                id="table-1-libPays136"
                name="libPays136"
                data-cy="libPays136"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeNationalite137')}
                id="table-1-codeNationalite137"
                name="codeNationalite137"
                data-cy="codeNationalite137"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libNationalite138')}
                id="table-1-libNationalite138"
                name="libNationalite138"
                data-cy="libNationalite138"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeSource139')}
                id="table-1-codeSource139"
                name="codeSource139"
                data-cy="codeSource139"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libSource140')}
                id="table-1-libSource140"
                name="libSource140"
                data-cy="libSource140"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGrandSource141')}
                id="table-1-codeGrandSource141"
                name="codeGrandSource141"
                data-cy="codeGrandSource141"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeOrigine142')}
                id="table-1-codeOrigine142"
                name="codeOrigine142"
                data-cy="codeOrigine142"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libOrigine143')}
                id="table-1-libOrigine143"
                name="libOrigine143"
                data-cy="libOrigine143"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeMarche144')}
                id="table-1-codeMarche144"
                name="codeMarche144"
                data-cy="codeMarche144"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libMarche145')}
                id="table-1-libMarche145"
                name="libMarche145"
                data-cy="libMarche145"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGrandMarche146')}
                id="table-1-codeGrandMarche146"
                name="codeGrandMarche146"
                data-cy="codeGrandMarche146"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libGrandMarche147')}
                id="table-1-libGrandMarche147"
                name="libGrandMarche147"
                data-cy="libGrandMarche147"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codePrix148')}
                id="table-1-codePrix148"
                name="codePrix148"
                data-cy="codePrix148"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.categPrix149')}
                id="table-1-categPrix149"
                name="categPrix149"
                data-cy="categPrix149"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libPrix150')}
                id="table-1-libPrix150"
                name="libPrix150"
                data-cy="libPrix150"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numChb151')}
                id="table-1-numChb151"
                name="numChb151"
                data-cy="numChb151"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.descriptionTypeChb152')}
                id="table-1-descriptionTypeChb152"
                name="descriptionTypeChb152"
                data-cy="descriptionTypeChb152"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeTypeChb153')}
                id="table-1-codeTypeChb153"
                name="codeTypeChb153"
                data-cy="codeTypeChb153"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.classChb154')}
                id="table-1-classChb154"
                name="classChb154"
                data-cy="classChb154"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.caractChb155')}
                id="table-1-caractChb155"
                name="caractChb155"
                data-cy="caractChb155"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeChbDeReservation156')}
                id="table-1-typeChbDeReservation156"
                name="typeChbDeReservation156"
                data-cy="typeChbDeReservation156"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.descriptionTypeChbDeResv157')}
                id="table-1-descriptionTypeChbDeResv157"
                name="descriptionTypeChbDeResv157"
                data-cy="descriptionTypeChbDeResv157"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeTypeChbDeResv158')}
                id="table-1-codeTypeChbDeResv158"
                name="codeTypeChbDeResv158"
                data-cy="codeTypeChbDeResv158"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDeReservation159')}
                id="table-1-statutDeReservation159"
                name="statutDeReservation159"
                data-cy="statutDeReservation159"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.circuitDistribution160')}
                id="table-1-circuitDistribution160"
                name="circuitDistribution160"
                data-cy="circuitDistribution160"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.circuitDistribUserRegroup161')}
                id="table-1-circuitDistribUserRegroup161"
                name="circuitDistribUserRegroup161"
                data-cy="circuitDistribUserRegroup161"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numCrs162')}
                id="table-1-numCrs162"
                name="numCrs162"
                data-cy="numCrs162"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeRefCrs163')}
                id="table-1-typeRefCrs163"
                name="typeRefCrs163"
                data-cy="typeRefCrs163"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.crsInsertDate164')}
                id="table-1-crsInsertDate164"
                name="crsInsertDate164"
                data-cy="crsInsertDate164"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateCreaResv165')}
                id="table-1-dateCreaResv165"
                name="dateCreaResv165"
                data-cy="dateCreaResv165"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.datePremier166')}
                id="table-1-datePremier166"
                name="datePremier166"
                data-cy="datePremier166"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutPremier167')}
                id="table-1-statutPremier167"
                name="statutPremier167"
                data-cy="statutPremier167"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDernier168')}
                id="table-1-dateDernier168"
                name="dateDernier168"
                data-cy="dateDernier168"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDernier169')}
                id="table-1-statutDernier169"
                name="statutDernier169"
                data-cy="statutDernier169"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDernierPseudo170')}
                id="table-1-dateDernierPseudo170"
                name="dateDernierPseudo170"
                data-cy="dateDernierPseudo170"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDernierPseudo171')}
                id="table-1-statutDernierPseudo171"
                name="statutDernierPseudo171"
                data-cy="statutDernierPseudo171"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.diffDtCreaAnn172')}
                id="table-1-diffDtCreaAnn172"
                name="diffDtCreaAnn172"
                data-cy="diffDtCreaAnn172"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.diffDtArrAnn173')}
                id="table-1-diffDtArrAnn173"
                name="diffDtArrAnn173"
                data-cy="diffDtArrAnn173"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.leadtime174')}
                id="table-1-leadtime174"
                name="leadtime174"
                data-cy="leadtime174"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.los175')}
                id="table-1-los175"
                name="los175"
                data-cy="los175"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.occupantsGroupe176')}
                id="table-1-occupantsGroupe176"
                name="occupantsGroupe176"
                data-cy="occupantsGroupe176"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbNuitee177')}
                id="table-1-nbNuitee177"
                name="nbNuitee177"
                data-cy="nbNuitee177"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbNuiteeNnDed178')}
                id="table-1-nbNuiteeNnDed178"
                name="nbNuiteeNnDed178"
                data-cy="nbNuiteeNnDed178"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbResvAnn179')}
                id="table-1-nbResvAnn179"
                name="nbResvAnn179"
                data-cy="nbResvAnn179"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbAdu180')}
                id="table-1-nbAdu180"
                name="nbAdu180"
                data-cy="nbAdu180"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbEnf181')}
                id="table-1-nbEnf181"
                name="nbEnf181"
                data-cy="nbEnf181"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersDayU182')}
                id="table-1-nbPersDayU182"
                name="nbPersDayU182"
                data-cy="nbPersDayU182"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersArr183')}
                id="table-1-nbPersArr183"
                name="nbPersArr183"
                data-cy="nbPersArr183"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersDep184')}
                id="table-1-nbPersDep184"
                name="nbPersDep184"
                data-cy="nbPersDep184"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersAnn185')}
                id="table-1-nbPersAnn185"
                name="nbPersAnn185"
                data-cy="nbPersAnn185"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersNoshow186')}
                id="table-1-nbPersNoshow186"
                name="nbPersNoshow186"
                data-cy="nbPersNoshow186"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbDayU187')}
                id="table-1-nbChbDayU187"
                name="nbChbDayU187"
                data-cy="nbChbDayU187"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbArr188')}
                id="table-1-nbChbArr188"
                name="nbChbArr188"
                data-cy="nbChbArr188"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbDep189')}
                id="table-1-nbChbDep189"
                name="nbChbDep189"
                data-cy="nbChbDep189"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbAnn190')}
                id="table-1-nbChbAnn190"
                name="nbChbAnn190"
                data-cy="nbChbAnn190"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbNoshow191')}
                id="table-1-nbChbNoshow191"
                name="nbChbNoshow191"
                data-cy="nbChbNoshow191"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetChambre192')}
                id="table-1-revenuNetChambre192"
                name="revenuNetChambre192"
                data-cy="revenuNetChambre192"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeChambre193')}
                id="table-1-revenuTaxeChambre193"
                name="revenuTaxeChambre193"
                data-cy="revenuTaxeChambre193"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetChambreGlobal194')}
                id="table-1-revenuNetChambreGlobal194"
                name="revenuNetChambreGlobal194"
                data-cy="revenuNetChambreGlobal194"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeChambreGlobal195')}
                id="table-1-revenuTaxeChambreGlobal195"
                name="revenuTaxeChambreGlobal195"
                data-cy="revenuTaxeChambreGlobal195"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetBq196')}
                id="table-1-revenuNetBq196"
                name="revenuNetBq196"
                data-cy="revenuNetBq196"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeBq197')}
                id="table-1-revenuTaxeBq197"
                name="revenuTaxeBq197"
                data-cy="revenuTaxeBq197"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetBqGlobal198')}
                id="table-1-revenuNetBqGlobal198"
                name="revenuNetBqGlobal198"
                data-cy="revenuNetBqGlobal198"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeBqGlobal199')}
                id="table-1-revenuTaxeBqGlobal199"
                name="revenuTaxeBqGlobal199"
                data-cy="revenuTaxeBqGlobal199"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetExtra200')}
                id="table-1-revenuNetExtra200"
                name="revenuNetExtra200"
                data-cy="revenuNetExtra200"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeExtra201')}
                id="table-1-revenuTaxeExtra201"
                name="revenuTaxeExtra201"
                data-cy="revenuTaxeExtra201"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetExtraGlobal202')}
                id="table-1-revenuNetExtraGlobal202"
                name="revenuNetExtraGlobal202"
                data-cy="revenuNetExtraGlobal202"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeExtraGlobal203')}
                id="table-1-revenuTaxeExtraGlobal203"
                name="revenuTaxeExtraGlobal203"
                data-cy="revenuTaxeExtraGlobal203"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetTotal204')}
                id="table-1-revenuNetTotal204"
                name="revenuNetTotal204"
                data-cy="revenuNetTotal204"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeTotal205')}
                id="table-1-revenuTaxeTotal205"
                name="revenuTaxeTotal205"
                data-cy="revenuTaxeTotal205"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetTotalGlobal206')}
                id="table-1-revenuNetTotalGlobal206"
                name="revenuNetTotalGlobal206"
                data-cy="revenuNetTotalGlobal206"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeTotalGlobal207')}
                id="table-1-revenuTaxeTotalGlobal207"
                name="revenuTaxeTotalGlobal207"
                data-cy="revenuTaxeTotalGlobal207"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuChambre208')}
                id="table-1-prodRevenuChambre208"
                name="prodRevenuChambre208"
                data-cy="prodRevenuChambre208"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuBq209')}
                id="table-1-prodRevenuBq209"
                name="prodRevenuBq209"
                data-cy="prodRevenuBq209"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuExtra210')}
                id="table-1-prodRevenuExtra210"
                name="prodRevenuExtra210"
                data-cy="prodRevenuExtra210"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodRevenuTotal211')}
                id="table-1-prodRevenuTotal211"
                name="prodRevenuTotal211"
                data-cy="prodRevenuTotal211"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.prodChambreNbNuitees212')}
                id="table-1-prodChambreNbNuitees212"
                name="prodChambreNbNuitees212"
                data-cy="prodChambreNbNuitees212"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.techCreateDate213')}
                id="table-1-techCreateDate213"
                name="techCreateDate213"
                data-cy="techCreateDate213"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.techUpdateDate214')}
                id="table-1-techUpdateDate214"
                name="techUpdateDate214"
                data-cy="techUpdateDate214"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numLigne215')}
                id="table-1-numLigne215"
                name="numLigne215"
                data-cy="numLigne215"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.resort216')}
                id="table-1-resort216"
                name="resort216"
                data-cy="resort216"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.resvNameId217')}
                id="table-1-resvNameId217"
                name="resvNameId217"
                data-cy="resvNameId217"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.clientOId218')}
                id="table-1-clientOId218"
                name="clientOId218"
                data-cy="clientOId218"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeChb219')}
                id="table-1-typeChb219"
                name="typeChb219"
                data-cy="typeChb219"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.confirmationNo220')}
                id="table-1-confirmationNo220"
                name="confirmationNo220"
                data-cy="confirmationNo220"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.clientMdmId221')}
                id="table-1-clientMdmId221"
                name="clientMdmId221"
                data-cy="clientMdmId221"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nameId222')}
                id="table-1-nameId222"
                name="nameId222"
                data-cy="nameId222"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.parentResvNameId223')}
                id="table-1-parentResvNameId223"
                name="parentResvNameId223"
                data-cy="parentResvNameId223"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.contactId224')}
                id="table-1-contactId224"
                name="contactId224"
                data-cy="contactId224"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.agenceId225')}
                id="table-1-agenceId225"
                name="agenceId225"
                data-cy="agenceId225"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.agenceNom226')}
                id="table-1-agenceNom226"
                name="agenceNom226"
                data-cy="agenceNom226"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.societeId227')}
                id="table-1-societeId227"
                name="societeId227"
                data-cy="societeId227"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.groupeId228')}
                id="table-1-groupeId228"
                name="groupeId228"
                data-cy="groupeId228"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numBloc229')}
                id="table-1-numBloc229"
                name="numBloc229"
                data-cy="numBloc229"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeResv230')}
                id="table-1-typeResv230"
                name="typeResv230"
                data-cy="typeResv230"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutResv231')}
                id="table-1-statutResv231"
                name="statutResv231"
                data-cy="statutResv231"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDebutResv232')}
                id="table-1-dateDebutResv232"
                name="dateDebutResv232"
                data-cy="dateDebutResv232"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateFinResv233')}
                id="table-1-dateFinResv233"
                name="dateFinResv233"
                data-cy="dateFinResv233"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.truncDateDebutResv234')}
                id="table-1-truncDateDebutResv234"
                name="truncDateDebutResv234"
                data-cy="truncDateDebutResv234"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.truncDateFinResv235')}
                id="table-1-truncDateFinResv235"
                name="truncDateFinResv235"
                data-cy="truncDateFinResv235"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateAnnResv236')}
                id="table-1-dateAnnResv236"
                name="dateAnnResv236"
                data-cy="dateAnnResv236"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.pseudoRoomYn237')}
                id="table-1-pseudoRoomYn237"
                name="pseudoRoomYn237"
                data-cy="pseudoRoomYn237"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.createurResv238')}
                id="table-1-createurResv238"
                name="createurResv238"
                data-cy="createurResv238"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nomCreateurResv239')}
                id="table-1-nomCreateurResv239"
                name="nomCreateurResv239"
                data-cy="nomCreateurResv239"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGarantie240')}
                id="table-1-codeGarantie240"
                name="codeGarantie240"
                data-cy="codeGarantie240"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.flgDed241')}
                id="table-1-flgDed241"
                name="flgDed241"
                data-cy="flgDed241"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codePays242')}
                id="table-1-codePays242"
                name="codePays242"
                data-cy="codePays242"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libPays243')}
                id="table-1-libPays243"
                name="libPays243"
                data-cy="libPays243"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeNationalite244')}
                id="table-1-codeNationalite244"
                name="codeNationalite244"
                data-cy="codeNationalite244"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libNationalite245')}
                id="table-1-libNationalite245"
                name="libNationalite245"
                data-cy="libNationalite245"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeSource246')}
                id="table-1-codeSource246"
                name="codeSource246"
                data-cy="codeSource246"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libSource247')}
                id="table-1-libSource247"
                name="libSource247"
                data-cy="libSource247"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGrandSource248')}
                id="table-1-codeGrandSource248"
                name="codeGrandSource248"
                data-cy="codeGrandSource248"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeOrigine249')}
                id="table-1-codeOrigine249"
                name="codeOrigine249"
                data-cy="codeOrigine249"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libOrigine250')}
                id="table-1-libOrigine250"
                name="libOrigine250"
                data-cy="libOrigine250"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeMarche251')}
                id="table-1-codeMarche251"
                name="codeMarche251"
                data-cy="codeMarche251"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libMarche252')}
                id="table-1-libMarche252"
                name="libMarche252"
                data-cy="libMarche252"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeGrandMarche253')}
                id="table-1-codeGrandMarche253"
                name="codeGrandMarche253"
                data-cy="codeGrandMarche253"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libGrandMarche254')}
                id="table-1-libGrandMarche254"
                name="libGrandMarche254"
                data-cy="libGrandMarche254"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codePrix255')}
                id="table-1-codePrix255"
                name="codePrix255"
                data-cy="codePrix255"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.categPrix256')}
                id="table-1-categPrix256"
                name="categPrix256"
                data-cy="categPrix256"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.libPrix257')}
                id="table-1-libPrix257"
                name="libPrix257"
                data-cy="libPrix257"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numChb258')}
                id="table-1-numChb258"
                name="numChb258"
                data-cy="numChb258"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.descriptionTypeChb259')}
                id="table-1-descriptionTypeChb259"
                name="descriptionTypeChb259"
                data-cy="descriptionTypeChb259"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeTypeChb260')}
                id="table-1-codeTypeChb260"
                name="codeTypeChb260"
                data-cy="codeTypeChb260"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.classChb261')}
                id="table-1-classChb261"
                name="classChb261"
                data-cy="classChb261"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.caractChb262')}
                id="table-1-caractChb262"
                name="caractChb262"
                data-cy="caractChb262"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeChbDeReservation263')}
                id="table-1-typeChbDeReservation263"
                name="typeChbDeReservation263"
                data-cy="typeChbDeReservation263"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.descriptionTypeChbDeResv264')}
                id="table-1-descriptionTypeChbDeResv264"
                name="descriptionTypeChbDeResv264"
                data-cy="descriptionTypeChbDeResv264"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.codeTypeChbDeResv265')}
                id="table-1-codeTypeChbDeResv265"
                name="codeTypeChbDeResv265"
                data-cy="codeTypeChbDeResv265"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDeReservation266')}
                id="table-1-statutDeReservation266"
                name="statutDeReservation266"
                data-cy="statutDeReservation266"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.circuitDistribution267')}
                id="table-1-circuitDistribution267"
                name="circuitDistribution267"
                data-cy="circuitDistribution267"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.circuitDistribUserRegroup268')}
                id="table-1-circuitDistribUserRegroup268"
                name="circuitDistribUserRegroup268"
                data-cy="circuitDistribUserRegroup268"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.numCrs269')}
                id="table-1-numCrs269"
                name="numCrs269"
                data-cy="numCrs269"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.typeRefCrs270')}
                id="table-1-typeRefCrs270"
                name="typeRefCrs270"
                data-cy="typeRefCrs270"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.crsInsertDate271')}
                id="table-1-crsInsertDate271"
                name="crsInsertDate271"
                data-cy="crsInsertDate271"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateCreaResv272')}
                id="table-1-dateCreaResv272"
                name="dateCreaResv272"
                data-cy="dateCreaResv272"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.datePremier273')}
                id="table-1-datePremier273"
                name="datePremier273"
                data-cy="datePremier273"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutPremier274')}
                id="table-1-statutPremier274"
                name="statutPremier274"
                data-cy="statutPremier274"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDernier275')}
                id="table-1-dateDernier275"
                name="dateDernier275"
                data-cy="dateDernier275"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDernier276')}
                id="table-1-statutDernier276"
                name="statutDernier276"
                data-cy="statutDernier276"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.dateDernierPseudo277')}
                id="table-1-dateDernierPseudo277"
                name="dateDernierPseudo277"
                data-cy="dateDernierPseudo277"
                type="date"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.statutDernierPseudo278')}
                id="table-1-statutDernierPseudo278"
                name="statutDernierPseudo278"
                data-cy="statutDernierPseudo278"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.diffDtCreaAnn279')}
                id="table-1-diffDtCreaAnn279"
                name="diffDtCreaAnn279"
                data-cy="diffDtCreaAnn279"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.diffDtArrAnn280')}
                id="table-1-diffDtArrAnn280"
                name="diffDtArrAnn280"
                data-cy="diffDtArrAnn280"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.leadtime281')}
                id="table-1-leadtime281"
                name="leadtime281"
                data-cy="leadtime281"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.los282')}
                id="table-1-los282"
                name="los282"
                data-cy="los282"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.occupantsGroupe283')}
                id="table-1-occupantsGroupe283"
                name="occupantsGroupe283"
                data-cy="occupantsGroupe283"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbNuitee284')}
                id="table-1-nbNuitee284"
                name="nbNuitee284"
                data-cy="nbNuitee284"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbNuiteeNnDed285')}
                id="table-1-nbNuiteeNnDed285"
                name="nbNuiteeNnDed285"
                data-cy="nbNuiteeNnDed285"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbResvAnn286')}
                id="table-1-nbResvAnn286"
                name="nbResvAnn286"
                data-cy="nbResvAnn286"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbAdu287')}
                id="table-1-nbAdu287"
                name="nbAdu287"
                data-cy="nbAdu287"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbEnf288')}
                id="table-1-nbEnf288"
                name="nbEnf288"
                data-cy="nbEnf288"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersDayU289')}
                id="table-1-nbPersDayU289"
                name="nbPersDayU289"
                data-cy="nbPersDayU289"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersArr290')}
                id="table-1-nbPersArr290"
                name="nbPersArr290"
                data-cy="nbPersArr290"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersDep291')}
                id="table-1-nbPersDep291"
                name="nbPersDep291"
                data-cy="nbPersDep291"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersAnn292')}
                id="table-1-nbPersAnn292"
                name="nbPersAnn292"
                data-cy="nbPersAnn292"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbPersNoshow293')}
                id="table-1-nbPersNoshow293"
                name="nbPersNoshow293"
                data-cy="nbPersNoshow293"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbDayU294')}
                id="table-1-nbChbDayU294"
                name="nbChbDayU294"
                data-cy="nbChbDayU294"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbArr295')}
                id="table-1-nbChbArr295"
                name="nbChbArr295"
                data-cy="nbChbArr295"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbDep296')}
                id="table-1-nbChbDep296"
                name="nbChbDep296"
                data-cy="nbChbDep296"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbAnn297')}
                id="table-1-nbChbAnn297"
                name="nbChbAnn297"
                data-cy="nbChbAnn297"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.nbChbNoshow298')}
                id="table-1-nbChbNoshow298"
                name="nbChbNoshow298"
                data-cy="nbChbNoshow298"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetChambre299')}
                id="table-1-revenuNetChambre299"
                name="revenuNetChambre299"
                data-cy="revenuNetChambre299"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeChambre300')}
                id="table-1-revenuTaxeChambre300"
                name="revenuTaxeChambre300"
                data-cy="revenuTaxeChambre300"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetChambreGlobal301')}
                id="table-1-revenuNetChambreGlobal301"
                name="revenuNetChambreGlobal301"
                data-cy="revenuNetChambreGlobal301"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeChambreGlobal302')}
                id="table-1-revenuTaxeChambreGlobal302"
                name="revenuTaxeChambreGlobal302"
                data-cy="revenuTaxeChambreGlobal302"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetBq303')}
                id="table-1-revenuNetBq303"
                name="revenuNetBq303"
                data-cy="revenuNetBq303"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeBq304')}
                id="table-1-revenuTaxeBq304"
                name="revenuTaxeBq304"
                data-cy="revenuTaxeBq304"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetBqGlobal305')}
                id="table-1-revenuNetBqGlobal305"
                name="revenuNetBqGlobal305"
                data-cy="revenuNetBqGlobal305"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeBqGlobal306')}
                id="table-1-revenuTaxeBqGlobal306"
                name="revenuTaxeBqGlobal306"
                data-cy="revenuTaxeBqGlobal306"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetExtra307')}
                id="table-1-revenuNetExtra307"
                name="revenuNetExtra307"
                data-cy="revenuNetExtra307"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeExtra308')}
                id="table-1-revenuTaxeExtra308"
                name="revenuTaxeExtra308"
                data-cy="revenuTaxeExtra308"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuNetExtraGlobal309')}
                id="table-1-revenuNetExtraGlobal309"
                name="revenuNetExtraGlobal309"
                data-cy="revenuNetExtraGlobal309"
                type="text"
              />
              <ValidatedField
                label={translate('mono1ApplicationApp.table1.revenuTaxeExtraGlobal310')}
                id="table-1-revenuTaxeExtraGlobal310"
                name="revenuTaxeExtraGlobal310"
                data-cy="revenuTaxeExtraGlobal310"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/table-1" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Table1Update;
