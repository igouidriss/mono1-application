import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, SORT } from 'app/shared/util/pagination.constants';
import { overrideSortStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities } from './table-4.reducer';

export const Table4 = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [sortState, setSortState] = useState(overrideSortStateWithQueryParams(getSortState(pageLocation, 'id'), pageLocation.search));

  const table4List = useAppSelector(state => state.table4.entities);
  const loading = useAppSelector(state => state.table4.loading);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        sort: `${sortState.sort},${sortState.order}`,
      }),
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?sort=${sortState.sort},${sortState.order}`;
    if (pageLocation.search !== endURL) {
      navigate(`${pageLocation.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [sortState.order, sortState.sort]);

  const sort = p => () => {
    setSortState({
      ...sortState,
      order: sortState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handleSyncList = () => {
    sortEntities();
  };

  const getSortIconByFieldName = (fieldName: string) => {
    const sortFieldName = sortState.sort;
    const order = sortState.order;
    if (sortFieldName !== fieldName) {
      return faSort;
    } else {
      return order === ASC ? faSortUp : faSortDown;
    }
  };

  return (
    <div>
      <h2 id="table-4-heading" data-cy="Table4Heading">
        <Translate contentKey="mono1ApplicationApp.table4.home.title">Table 4 S</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="mono1ApplicationApp.table4.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/table-4/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="mono1ApplicationApp.table4.home.createLabel">Create new Table 4</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {table4List && table4List.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="mono1ApplicationApp.table4.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('numLigne1')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numLigne1">Num Ligne 1</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne1')} />
                </th>
                <th className="hand" onClick={sort('resort2')}>
                  <Translate contentKey="mono1ApplicationApp.table4.resort2">Resort 2</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort2')} />
                </th>
                <th className="hand" onClick={sort('resvNameId3')}>
                  <Translate contentKey="mono1ApplicationApp.table4.resvNameId3">Resv Name Id 3</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId3')} />
                </th>
                <th className="hand" onClick={sort('clientOId4')}>
                  <Translate contentKey="mono1ApplicationApp.table4.clientOId4">Client O Id 4</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId4')} />
                </th>
                <th className="hand" onClick={sort('typeChb5')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeChb5">Type Chb 5</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb5')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo6')}>
                  <Translate contentKey="mono1ApplicationApp.table4.confirmationNo6">Confirmation No 6</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo6')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId7')}>
                  <Translate contentKey="mono1ApplicationApp.table4.clientMdmId7">Client Mdm Id 7</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId7')} />
                </th>
                <th className="hand" onClick={sort('nameId8')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nameId8">Name Id 8</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId8')} />
                </th>
                <th className="hand" onClick={sort('parentResvNameId9')}>
                  <Translate contentKey="mono1ApplicationApp.table4.parentResvNameId9">Parent Resv Name Id 9</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('parentResvNameId9')} />
                </th>
                <th className="hand" onClick={sort('contactId10')}>
                  <Translate contentKey="mono1ApplicationApp.table4.contactId10">Contact Id 10</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId10')} />
                </th>
                <th className="hand" onClick={sort('agenceId11')}>
                  <Translate contentKey="mono1ApplicationApp.table4.agenceId11">Agence Id 11</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId11')} />
                </th>
                <th className="hand" onClick={sort('agenceNom12')}>
                  <Translate contentKey="mono1ApplicationApp.table4.agenceNom12">Agence Nom 12</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom12')} />
                </th>
                <th className="hand" onClick={sort('societeId13')}>
                  <Translate contentKey="mono1ApplicationApp.table4.societeId13">Societe Id 13</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId13')} />
                </th>
                <th className="hand" onClick={sort('groupeId14')}>
                  <Translate contentKey="mono1ApplicationApp.table4.groupeId14">Groupe Id 14</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId14')} />
                </th>
                <th className="hand" onClick={sort('numBloc15')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numBloc15">Num Bloc 15</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc15')} />
                </th>
                <th className="hand" onClick={sort('typeResv16')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeResv16">Type Resv 16</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeResv16')} />
                </th>
                <th className="hand" onClick={sort('statutResv17')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutResv17">Statut Resv 17</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv17')} />
                </th>
                <th className="hand" onClick={sort('dateDebutResv18')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDebutResv18">Date Debut Resv 18</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutResv18')} />
                </th>
                <th className="hand" onClick={sort('dateFinResv19')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateFinResv19">Date Fin Resv 19</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinResv19')} />
                </th>
                <th className="hand" onClick={sort('truncDateDebutResv20')}>
                  <Translate contentKey="mono1ApplicationApp.table4.truncDateDebutResv20">Trunc Date Debut Resv 20</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateDebutResv20')} />
                </th>
                <th className="hand" onClick={sort('truncDateFinResv21')}>
                  <Translate contentKey="mono1ApplicationApp.table4.truncDateFinResv21">Trunc Date Fin Resv 21</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateFinResv21')} />
                </th>
                <th className="hand" onClick={sort('dateAnnResv22')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateAnnResv22">Date Ann Resv 22</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnnResv22')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn23')}>
                  <Translate contentKey="mono1ApplicationApp.table4.pseudoRoomYn23">Pseudo Room Yn 23</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn23')} />
                </th>
                <th className="hand" onClick={sort('createurResv24')}>
                  <Translate contentKey="mono1ApplicationApp.table4.createurResv24">Createur Resv 24</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv24')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv25')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nomCreateurResv25">Nom Createur Resv 25</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv25')} />
                </th>
                <th className="hand" onClick={sort('codeGarantie26')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGarantie26">Code Garantie 26</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGarantie26')} />
                </th>
                <th className="hand" onClick={sort('flgDed27')}>
                  <Translate contentKey="mono1ApplicationApp.table4.flgDed27">Flg Ded 27</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('flgDed27')} />
                </th>
                <th className="hand" onClick={sort('codePays28')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codePays28">Code Pays 28</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays28')} />
                </th>
                <th className="hand" onClick={sort('libPays29')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libPays29">Lib Pays 29</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays29')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite30')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeNationalite30">Code Nationalite 30</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite30')} />
                </th>
                <th className="hand" onClick={sort('libNationalite31')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libNationalite31">Lib Nationalite 31</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite31')} />
                </th>
                <th className="hand" onClick={sort('codeSource32')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeSource32">Code Source 32</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource32')} />
                </th>
                <th className="hand" onClick={sort('libSource33')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libSource33">Lib Source 33</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource33')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource34')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGrandSource34">Code Grand Source 34</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource34')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine35')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeOrigine35">Code Origine 35</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine35')} />
                </th>
                <th className="hand" onClick={sort('libOrigine36')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libOrigine36">Lib Origine 36</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine36')} />
                </th>
                <th className="hand" onClick={sort('codeMarche37')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeMarche37">Code Marche 37</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche37')} />
                </th>
                <th className="hand" onClick={sort('libMarche38')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libMarche38">Lib Marche 38</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche38')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche39')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGrandMarche39">Code Grand Marche 39</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche39')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche40')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libGrandMarche40">Lib Grand Marche 40</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche40')} />
                </th>
                <th className="hand" onClick={sort('codePrix41')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codePrix41">Code Prix 41</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix41')} />
                </th>
                <th className="hand" onClick={sort('categPrix42')}>
                  <Translate contentKey="mono1ApplicationApp.table4.categPrix42">Categ Prix 42</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix42')} />
                </th>
                <th className="hand" onClick={sort('libPrix43')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libPrix43">Lib Prix 43</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix43')} />
                </th>
                <th className="hand" onClick={sort('numChb44')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numChb44">Num Chb 44</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb44')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb45')}>
                  <Translate contentKey="mono1ApplicationApp.table4.descriptionTypeChb45">Description Type Chb 45</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb45')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb46')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeTypeChb46">Code Type Chb 46</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb46')} />
                </th>
                <th className="hand" onClick={sort('classChb47')}>
                  <Translate contentKey="mono1ApplicationApp.table4.classChb47">Class Chb 47</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb47')} />
                </th>
                <th className="hand" onClick={sort('caractChb48')}>
                  <Translate contentKey="mono1ApplicationApp.table4.caractChb48">Caract Chb 48</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('caractChb48')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation49')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeChbDeReservation49">Type Chb De Reservation 49</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation49')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv50')}>
                  <Translate contentKey="mono1ApplicationApp.table4.descriptionTypeChbDeResv50">Description Type Chb De Resv 50</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv50')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv51')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeTypeChbDeResv51">Code Type Chb De Resv 51</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv51')} />
                </th>
                <th className="hand" onClick={sort('statutDeReservation52')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDeReservation52">Statut De Reservation 52</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDeReservation52')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution53')}>
                  <Translate contentKey="mono1ApplicationApp.table4.circuitDistribution53">Circuit Distribution 53</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution53')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup54')}>
                  <Translate contentKey="mono1ApplicationApp.table4.circuitDistribUserRegroup54">Circuit Distrib User Regroup 54</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup54')} />
                </th>
                <th className="hand" onClick={sort('numCrs55')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numCrs55">Num Crs 55</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numCrs55')} />
                </th>
                <th className="hand" onClick={sort('typeRefCrs56')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeRefCrs56">Type Ref Crs 56</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeRefCrs56')} />
                </th>
                <th className="hand" onClick={sort('crsInsertDate57')}>
                  <Translate contentKey="mono1ApplicationApp.table4.crsInsertDate57">Crs Insert Date 57</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('crsInsertDate57')} />
                </th>
                <th className="hand" onClick={sort('dateCreaResv58')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateCreaResv58">Date Crea Resv 58</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateCreaResv58')} />
                </th>
                <th className="hand" onClick={sort('datePremier59')}>
                  <Translate contentKey="mono1ApplicationApp.table4.datePremier59">Date Premier 59</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datePremier59')} />
                </th>
                <th className="hand" onClick={sort('statutPremier60')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutPremier60">Statut Premier 60</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutPremier60')} />
                </th>
                <th className="hand" onClick={sort('dateDernier61')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDernier61">Date Dernier 61</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernier61')} />
                </th>
                <th className="hand" onClick={sort('statutDernier62')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDernier62">Statut Dernier 62</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernier62')} />
                </th>
                <th className="hand" onClick={sort('dateDernierPseudo63')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDernierPseudo63">Date Dernier Pseudo 63</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernierPseudo63')} />
                </th>
                <th className="hand" onClick={sort('statutDernierPseudo64')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDernierPseudo64">Statut Dernier Pseudo 64</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernierPseudo64')} />
                </th>
                <th className="hand" onClick={sort('diffDtCreaAnn65')}>
                  <Translate contentKey="mono1ApplicationApp.table4.diffDtCreaAnn65">Diff Dt Crea Ann 65</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtCreaAnn65')} />
                </th>
                <th className="hand" onClick={sort('diffDtArrAnn66')}>
                  <Translate contentKey="mono1ApplicationApp.table4.diffDtArrAnn66">Diff Dt Arr Ann 66</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtArrAnn66')} />
                </th>
                <th className="hand" onClick={sort('leadtime67')}>
                  <Translate contentKey="mono1ApplicationApp.table4.leadtime67">Leadtime 67</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leadtime67')} />
                </th>
                <th className="hand" onClick={sort('los68')}>
                  <Translate contentKey="mono1ApplicationApp.table4.los68">Los 68</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('los68')} />
                </th>
                <th className="hand" onClick={sort('occupantsGroupe69')}>
                  <Translate contentKey="mono1ApplicationApp.table4.occupantsGroupe69">Occupants Groupe 69</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('occupantsGroupe69')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee70')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbNuitee70">Nb Nuitee 70</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee70')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed71')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbNuiteeNnDed71">Nb Nuitee Nn Ded 71</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed71')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn72')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbResvAnn72">Nb Resv Ann 72</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn72')} />
                </th>
                <th className="hand" onClick={sort('nbAdu73')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbAdu73">Nb Adu 73</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAdu73')} />
                </th>
                <th className="hand" onClick={sort('nbEnf74')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbEnf74">Nb Enf 74</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnf74')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayU75')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersDayU75">Nb Pers Day U 75</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayU75')} />
                </th>
                <th className="hand" onClick={sort('nbPersArr76')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersArr76">Nb Pers Arr 76</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArr76')} />
                </th>
                <th className="hand" onClick={sort('nbPersDep77')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersDep77">Nb Pers Dep 77</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDep77')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn78')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersAnn78">Nb Pers Ann 78</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn78')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow79')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersNoshow79">Nb Pers Noshow 79</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow79')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayU80')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbDayU80">Nb Chb Day U 80</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayU80')} />
                </th>
                <th className="hand" onClick={sort('nbChbArr81')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbArr81">Nb Chb Arr 81</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArr81')} />
                </th>
                <th className="hand" onClick={sort('nbChbDep82')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbDep82">Nb Chb Dep 82</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDep82')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn83')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbAnn83">Nb Chb Ann 83</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn83')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow84')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbNoshow84">Nb Chb Noshow 84</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow84')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambre85')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetChambre85">Revenu Net Chambre 85</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambre85')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambre86')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeChambre86">Revenu Taxe Chambre 86</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambre86')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambreGlobal87')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetChambreGlobal87">Revenu Net Chambre Global 87</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambreGlobal87')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambreGlobal88')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeChambreGlobal88">Revenu Taxe Chambre Global 88</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambreGlobal88')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBq89')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetBq89">Revenu Net Bq 89</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBq89')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBq90')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeBq90">Revenu Taxe Bq 90</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBq90')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBqGlobal91')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetBqGlobal91">Revenu Net Bq Global 91</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBqGlobal91')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBqGlobal92')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeBqGlobal92">Revenu Taxe Bq Global 92</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBqGlobal92')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtra93')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetExtra93">Revenu Net Extra 93</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtra93')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtra94')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeExtra94">Revenu Taxe Extra 94</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtra94')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtraGlobal95')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetExtraGlobal95">Revenu Net Extra Global 95</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtraGlobal95')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtraGlobal96')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeExtraGlobal96">Revenu Taxe Extra Global 96</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtraGlobal96')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotal97')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetTotal97">Revenu Net Total 97</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotal97')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotal98')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeTotal98">Revenu Taxe Total 98</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotal98')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotalGlobal99')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetTotalGlobal99">Revenu Net Total Global 99</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotalGlobal99')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotalGlobal100')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeTotalGlobal100">Revenu Taxe Total Global 100</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotalGlobal100')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuChambre101')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuChambre101">Prod Revenu Chambre 101</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuChambre101')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuBq102')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuBq102">Prod Revenu Bq 102</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuBq102')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuExtra103')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuExtra103">Prod Revenu Extra 103</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuExtra103')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuTotal104')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuTotal104">Prod Revenu Total 104</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuTotal104')} />
                </th>
                <th className="hand" onClick={sort('prodChambreNbNuitees105')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodChambreNbNuitees105">Prod Chambre Nb Nuitees 105</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodChambreNbNuitees105')} />
                </th>
                <th className="hand" onClick={sort('techCreateDate106')}>
                  <Translate contentKey="mono1ApplicationApp.table4.techCreateDate106">Tech Create Date 106</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreateDate106')} />
                </th>
                <th className="hand" onClick={sort('techUpdateDate107')}>
                  <Translate contentKey="mono1ApplicationApp.table4.techUpdateDate107">Tech Update Date 107</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdateDate107')} />
                </th>
                <th className="hand" onClick={sort('numLigne108')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numLigne108">Num Ligne 108</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne108')} />
                </th>
                <th className="hand" onClick={sort('resort109')}>
                  <Translate contentKey="mono1ApplicationApp.table4.resort109">Resort 109</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort109')} />
                </th>
                <th className="hand" onClick={sort('resvNameId110')}>
                  <Translate contentKey="mono1ApplicationApp.table4.resvNameId110">Resv Name Id 110</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId110')} />
                </th>
                <th className="hand" onClick={sort('clientOId111')}>
                  <Translate contentKey="mono1ApplicationApp.table4.clientOId111">Client O Id 111</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId111')} />
                </th>
                <th className="hand" onClick={sort('typeChb112')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeChb112">Type Chb 112</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb112')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo113')}>
                  <Translate contentKey="mono1ApplicationApp.table4.confirmationNo113">Confirmation No 113</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo113')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId114')}>
                  <Translate contentKey="mono1ApplicationApp.table4.clientMdmId114">Client Mdm Id 114</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId114')} />
                </th>
                <th className="hand" onClick={sort('nameId115')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nameId115">Name Id 115</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId115')} />
                </th>
                <th className="hand" onClick={sort('parentResvNameId116')}>
                  <Translate contentKey="mono1ApplicationApp.table4.parentResvNameId116">Parent Resv Name Id 116</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('parentResvNameId116')} />
                </th>
                <th className="hand" onClick={sort('contactId117')}>
                  <Translate contentKey="mono1ApplicationApp.table4.contactId117">Contact Id 117</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId117')} />
                </th>
                <th className="hand" onClick={sort('agenceId118')}>
                  <Translate contentKey="mono1ApplicationApp.table4.agenceId118">Agence Id 118</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId118')} />
                </th>
                <th className="hand" onClick={sort('agenceNom119')}>
                  <Translate contentKey="mono1ApplicationApp.table4.agenceNom119">Agence Nom 119</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom119')} />
                </th>
                <th className="hand" onClick={sort('societeId120')}>
                  <Translate contentKey="mono1ApplicationApp.table4.societeId120">Societe Id 120</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId120')} />
                </th>
                <th className="hand" onClick={sort('groupeId121')}>
                  <Translate contentKey="mono1ApplicationApp.table4.groupeId121">Groupe Id 121</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId121')} />
                </th>
                <th className="hand" onClick={sort('numBloc122')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numBloc122">Num Bloc 122</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc122')} />
                </th>
                <th className="hand" onClick={sort('typeResv123')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeResv123">Type Resv 123</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeResv123')} />
                </th>
                <th className="hand" onClick={sort('statutResv124')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutResv124">Statut Resv 124</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv124')} />
                </th>
                <th className="hand" onClick={sort('dateDebutResv125')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDebutResv125">Date Debut Resv 125</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutResv125')} />
                </th>
                <th className="hand" onClick={sort('dateFinResv126')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateFinResv126">Date Fin Resv 126</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinResv126')} />
                </th>
                <th className="hand" onClick={sort('truncDateDebutResv127')}>
                  <Translate contentKey="mono1ApplicationApp.table4.truncDateDebutResv127">Trunc Date Debut Resv 127</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateDebutResv127')} />
                </th>
                <th className="hand" onClick={sort('truncDateFinResv128')}>
                  <Translate contentKey="mono1ApplicationApp.table4.truncDateFinResv128">Trunc Date Fin Resv 128</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateFinResv128')} />
                </th>
                <th className="hand" onClick={sort('dateAnnResv129')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateAnnResv129">Date Ann Resv 129</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnnResv129')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn130')}>
                  <Translate contentKey="mono1ApplicationApp.table4.pseudoRoomYn130">Pseudo Room Yn 130</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn130')} />
                </th>
                <th className="hand" onClick={sort('createurResv131')}>
                  <Translate contentKey="mono1ApplicationApp.table4.createurResv131">Createur Resv 131</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv131')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv132')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nomCreateurResv132">Nom Createur Resv 132</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv132')} />
                </th>
                <th className="hand" onClick={sort('codeGarantie133')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGarantie133">Code Garantie 133</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGarantie133')} />
                </th>
                <th className="hand" onClick={sort('flgDed134')}>
                  <Translate contentKey="mono1ApplicationApp.table4.flgDed134">Flg Ded 134</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('flgDed134')} />
                </th>
                <th className="hand" onClick={sort('codePays135')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codePays135">Code Pays 135</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays135')} />
                </th>
                <th className="hand" onClick={sort('libPays136')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libPays136">Lib Pays 136</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays136')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite137')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeNationalite137">Code Nationalite 137</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite137')} />
                </th>
                <th className="hand" onClick={sort('libNationalite138')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libNationalite138">Lib Nationalite 138</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite138')} />
                </th>
                <th className="hand" onClick={sort('codeSource139')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeSource139">Code Source 139</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource139')} />
                </th>
                <th className="hand" onClick={sort('libSource140')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libSource140">Lib Source 140</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource140')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource141')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGrandSource141">Code Grand Source 141</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource141')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine142')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeOrigine142">Code Origine 142</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine142')} />
                </th>
                <th className="hand" onClick={sort('libOrigine143')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libOrigine143">Lib Origine 143</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine143')} />
                </th>
                <th className="hand" onClick={sort('codeMarche144')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeMarche144">Code Marche 144</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche144')} />
                </th>
                <th className="hand" onClick={sort('libMarche145')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libMarche145">Lib Marche 145</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche145')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche146')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGrandMarche146">Code Grand Marche 146</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche146')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche147')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libGrandMarche147">Lib Grand Marche 147</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche147')} />
                </th>
                <th className="hand" onClick={sort('codePrix148')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codePrix148">Code Prix 148</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix148')} />
                </th>
                <th className="hand" onClick={sort('categPrix149')}>
                  <Translate contentKey="mono1ApplicationApp.table4.categPrix149">Categ Prix 149</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix149')} />
                </th>
                <th className="hand" onClick={sort('libPrix150')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libPrix150">Lib Prix 150</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix150')} />
                </th>
                <th className="hand" onClick={sort('numChb151')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numChb151">Num Chb 151</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb151')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb152')}>
                  <Translate contentKey="mono1ApplicationApp.table4.descriptionTypeChb152">Description Type Chb 152</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb152')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb153')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeTypeChb153">Code Type Chb 153</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb153')} />
                </th>
                <th className="hand" onClick={sort('classChb154')}>
                  <Translate contentKey="mono1ApplicationApp.table4.classChb154">Class Chb 154</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb154')} />
                </th>
                <th className="hand" onClick={sort('caractChb155')}>
                  <Translate contentKey="mono1ApplicationApp.table4.caractChb155">Caract Chb 155</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('caractChb155')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation156')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeChbDeReservation156">Type Chb De Reservation 156</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation156')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv157')}>
                  <Translate contentKey="mono1ApplicationApp.table4.descriptionTypeChbDeResv157">
                    Description Type Chb De Resv 157
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv157')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv158')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeTypeChbDeResv158">Code Type Chb De Resv 158</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv158')} />
                </th>
                <th className="hand" onClick={sort('statutDeReservation159')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDeReservation159">Statut De Reservation 159</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDeReservation159')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution160')}>
                  <Translate contentKey="mono1ApplicationApp.table4.circuitDistribution160">Circuit Distribution 160</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution160')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup161')}>
                  <Translate contentKey="mono1ApplicationApp.table4.circuitDistribUserRegroup161">
                    Circuit Distrib User Regroup 161
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup161')} />
                </th>
                <th className="hand" onClick={sort('numCrs162')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numCrs162">Num Crs 162</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numCrs162')} />
                </th>
                <th className="hand" onClick={sort('typeRefCrs163')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeRefCrs163">Type Ref Crs 163</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeRefCrs163')} />
                </th>
                <th className="hand" onClick={sort('crsInsertDate164')}>
                  <Translate contentKey="mono1ApplicationApp.table4.crsInsertDate164">Crs Insert Date 164</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('crsInsertDate164')} />
                </th>
                <th className="hand" onClick={sort('dateCreaResv165')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateCreaResv165">Date Crea Resv 165</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateCreaResv165')} />
                </th>
                <th className="hand" onClick={sort('datePremier166')}>
                  <Translate contentKey="mono1ApplicationApp.table4.datePremier166">Date Premier 166</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datePremier166')} />
                </th>
                <th className="hand" onClick={sort('statutPremier167')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutPremier167">Statut Premier 167</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutPremier167')} />
                </th>
                <th className="hand" onClick={sort('dateDernier168')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDernier168">Date Dernier 168</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernier168')} />
                </th>
                <th className="hand" onClick={sort('statutDernier169')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDernier169">Statut Dernier 169</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernier169')} />
                </th>
                <th className="hand" onClick={sort('dateDernierPseudo170')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDernierPseudo170">Date Dernier Pseudo 170</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernierPseudo170')} />
                </th>
                <th className="hand" onClick={sort('statutDernierPseudo171')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDernierPseudo171">Statut Dernier Pseudo 171</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernierPseudo171')} />
                </th>
                <th className="hand" onClick={sort('diffDtCreaAnn172')}>
                  <Translate contentKey="mono1ApplicationApp.table4.diffDtCreaAnn172">Diff Dt Crea Ann 172</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtCreaAnn172')} />
                </th>
                <th className="hand" onClick={sort('diffDtArrAnn173')}>
                  <Translate contentKey="mono1ApplicationApp.table4.diffDtArrAnn173">Diff Dt Arr Ann 173</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtArrAnn173')} />
                </th>
                <th className="hand" onClick={sort('leadtime174')}>
                  <Translate contentKey="mono1ApplicationApp.table4.leadtime174">Leadtime 174</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leadtime174')} />
                </th>
                <th className="hand" onClick={sort('los175')}>
                  <Translate contentKey="mono1ApplicationApp.table4.los175">Los 175</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('los175')} />
                </th>
                <th className="hand" onClick={sort('occupantsGroupe176')}>
                  <Translate contentKey="mono1ApplicationApp.table4.occupantsGroupe176">Occupants Groupe 176</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('occupantsGroupe176')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee177')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbNuitee177">Nb Nuitee 177</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee177')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed178')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbNuiteeNnDed178">Nb Nuitee Nn Ded 178</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed178')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn179')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbResvAnn179">Nb Resv Ann 179</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn179')} />
                </th>
                <th className="hand" onClick={sort('nbAdu180')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbAdu180">Nb Adu 180</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAdu180')} />
                </th>
                <th className="hand" onClick={sort('nbEnf181')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbEnf181">Nb Enf 181</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnf181')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayU182')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersDayU182">Nb Pers Day U 182</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayU182')} />
                </th>
                <th className="hand" onClick={sort('nbPersArr183')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersArr183">Nb Pers Arr 183</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArr183')} />
                </th>
                <th className="hand" onClick={sort('nbPersDep184')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersDep184">Nb Pers Dep 184</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDep184')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn185')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersAnn185">Nb Pers Ann 185</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn185')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow186')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersNoshow186">Nb Pers Noshow 186</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow186')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayU187')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbDayU187">Nb Chb Day U 187</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayU187')} />
                </th>
                <th className="hand" onClick={sort('nbChbArr188')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbArr188">Nb Chb Arr 188</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArr188')} />
                </th>
                <th className="hand" onClick={sort('nbChbDep189')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbDep189">Nb Chb Dep 189</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDep189')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn190')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbAnn190">Nb Chb Ann 190</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn190')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow191')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbNoshow191">Nb Chb Noshow 191</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow191')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambre192')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetChambre192">Revenu Net Chambre 192</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambre192')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambre193')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeChambre193">Revenu Taxe Chambre 193</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambre193')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambreGlobal194')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetChambreGlobal194">Revenu Net Chambre Global 194</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambreGlobal194')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambreGlobal195')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeChambreGlobal195">Revenu Taxe Chambre Global 195</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambreGlobal195')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBq196')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetBq196">Revenu Net Bq 196</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBq196')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBq197')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeBq197">Revenu Taxe Bq 197</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBq197')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBqGlobal198')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetBqGlobal198">Revenu Net Bq Global 198</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBqGlobal198')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBqGlobal199')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeBqGlobal199">Revenu Taxe Bq Global 199</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBqGlobal199')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtra200')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetExtra200">Revenu Net Extra 200</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtra200')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtra201')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeExtra201">Revenu Taxe Extra 201</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtra201')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtraGlobal202')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetExtraGlobal202">Revenu Net Extra Global 202</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtraGlobal202')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtraGlobal203')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeExtraGlobal203">Revenu Taxe Extra Global 203</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtraGlobal203')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotal204')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetTotal204">Revenu Net Total 204</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotal204')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotal205')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeTotal205">Revenu Taxe Total 205</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotal205')} />
                </th>
                <th className="hand" onClick={sort('revenuNetTotalGlobal206')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetTotalGlobal206">Revenu Net Total Global 206</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetTotalGlobal206')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeTotalGlobal207')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeTotalGlobal207">Revenu Taxe Total Global 207</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeTotalGlobal207')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuChambre208')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuChambre208">Prod Revenu Chambre 208</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuChambre208')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuBq209')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuBq209">Prod Revenu Bq 209</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuBq209')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuExtra210')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuExtra210">Prod Revenu Extra 210</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuExtra210')} />
                </th>
                <th className="hand" onClick={sort('prodRevenuTotal211')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodRevenuTotal211">Prod Revenu Total 211</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodRevenuTotal211')} />
                </th>
                <th className="hand" onClick={sort('prodChambreNbNuitees212')}>
                  <Translate contentKey="mono1ApplicationApp.table4.prodChambreNbNuitees212">Prod Chambre Nb Nuitees 212</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prodChambreNbNuitees212')} />
                </th>
                <th className="hand" onClick={sort('techCreateDate213')}>
                  <Translate contentKey="mono1ApplicationApp.table4.techCreateDate213">Tech Create Date 213</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreateDate213')} />
                </th>
                <th className="hand" onClick={sort('techUpdateDate214')}>
                  <Translate contentKey="mono1ApplicationApp.table4.techUpdateDate214">Tech Update Date 214</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdateDate214')} />
                </th>
                <th className="hand" onClick={sort('numLigne215')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numLigne215">Num Ligne 215</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numLigne215')} />
                </th>
                <th className="hand" onClick={sort('resort216')}>
                  <Translate contentKey="mono1ApplicationApp.table4.resort216">Resort 216</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resort216')} />
                </th>
                <th className="hand" onClick={sort('resvNameId217')}>
                  <Translate contentKey="mono1ApplicationApp.table4.resvNameId217">Resv Name Id 217</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvNameId217')} />
                </th>
                <th className="hand" onClick={sort('clientOId218')}>
                  <Translate contentKey="mono1ApplicationApp.table4.clientOId218">Client O Id 218</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientOId218')} />
                </th>
                <th className="hand" onClick={sort('typeChb219')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeChb219">Type Chb 219</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChb219')} />
                </th>
                <th className="hand" onClick={sort('confirmationNo220')}>
                  <Translate contentKey="mono1ApplicationApp.table4.confirmationNo220">Confirmation No 220</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('confirmationNo220')} />
                </th>
                <th className="hand" onClick={sort('clientMdmId221')}>
                  <Translate contentKey="mono1ApplicationApp.table4.clientMdmId221">Client Mdm Id 221</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientMdmId221')} />
                </th>
                <th className="hand" onClick={sort('nameId222')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nameId222">Name Id 222</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nameId222')} />
                </th>
                <th className="hand" onClick={sort('parentResvNameId223')}>
                  <Translate contentKey="mono1ApplicationApp.table4.parentResvNameId223">Parent Resv Name Id 223</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('parentResvNameId223')} />
                </th>
                <th className="hand" onClick={sort('contactId224')}>
                  <Translate contentKey="mono1ApplicationApp.table4.contactId224">Contact Id 224</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('contactId224')} />
                </th>
                <th className="hand" onClick={sort('agenceId225')}>
                  <Translate contentKey="mono1ApplicationApp.table4.agenceId225">Agence Id 225</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceId225')} />
                </th>
                <th className="hand" onClick={sort('agenceNom226')}>
                  <Translate contentKey="mono1ApplicationApp.table4.agenceNom226">Agence Nom 226</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('agenceNom226')} />
                </th>
                <th className="hand" onClick={sort('societeId227')}>
                  <Translate contentKey="mono1ApplicationApp.table4.societeId227">Societe Id 227</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('societeId227')} />
                </th>
                <th className="hand" onClick={sort('groupeId228')}>
                  <Translate contentKey="mono1ApplicationApp.table4.groupeId228">Groupe Id 228</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupeId228')} />
                </th>
                <th className="hand" onClick={sort('numBloc229')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numBloc229">Num Bloc 229</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numBloc229')} />
                </th>
                <th className="hand" onClick={sort('typeResv230')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeResv230">Type Resv 230</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeResv230')} />
                </th>
                <th className="hand" onClick={sort('statutResv231')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutResv231">Statut Resv 231</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutResv231')} />
                </th>
                <th className="hand" onClick={sort('dateDebutResv232')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDebutResv232">Date Debut Resv 232</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDebutResv232')} />
                </th>
                <th className="hand" onClick={sort('dateFinResv233')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateFinResv233">Date Fin Resv 233</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateFinResv233')} />
                </th>
                <th className="hand" onClick={sort('truncDateDebutResv234')}>
                  <Translate contentKey="mono1ApplicationApp.table4.truncDateDebutResv234">Trunc Date Debut Resv 234</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateDebutResv234')} />
                </th>
                <th className="hand" onClick={sort('truncDateFinResv235')}>
                  <Translate contentKey="mono1ApplicationApp.table4.truncDateFinResv235">Trunc Date Fin Resv 235</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('truncDateFinResv235')} />
                </th>
                <th className="hand" onClick={sort('dateAnnResv236')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateAnnResv236">Date Ann Resv 236</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateAnnResv236')} />
                </th>
                <th className="hand" onClick={sort('pseudoRoomYn237')}>
                  <Translate contentKey="mono1ApplicationApp.table4.pseudoRoomYn237">Pseudo Room Yn 237</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('pseudoRoomYn237')} />
                </th>
                <th className="hand" onClick={sort('createurResv238')}>
                  <Translate contentKey="mono1ApplicationApp.table4.createurResv238">Createur Resv 238</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createurResv238')} />
                </th>
                <th className="hand" onClick={sort('nomCreateurResv239')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nomCreateurResv239">Nom Createur Resv 239</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nomCreateurResv239')} />
                </th>
                <th className="hand" onClick={sort('codeGarantie240')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGarantie240">Code Garantie 240</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGarantie240')} />
                </th>
                <th className="hand" onClick={sort('flgDed241')}>
                  <Translate contentKey="mono1ApplicationApp.table4.flgDed241">Flg Ded 241</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('flgDed241')} />
                </th>
                <th className="hand" onClick={sort('codePays242')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codePays242">Code Pays 242</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePays242')} />
                </th>
                <th className="hand" onClick={sort('libPays243')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libPays243">Lib Pays 243</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPays243')} />
                </th>
                <th className="hand" onClick={sort('codeNationalite244')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeNationalite244">Code Nationalite 244</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeNationalite244')} />
                </th>
                <th className="hand" onClick={sort('libNationalite245')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libNationalite245">Lib Nationalite 245</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libNationalite245')} />
                </th>
                <th className="hand" onClick={sort('codeSource246')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeSource246">Code Source 246</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeSource246')} />
                </th>
                <th className="hand" onClick={sort('libSource247')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libSource247">Lib Source 247</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libSource247')} />
                </th>
                <th className="hand" onClick={sort('codeGrandSource248')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGrandSource248">Code Grand Source 248</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandSource248')} />
                </th>
                <th className="hand" onClick={sort('codeOrigine249')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeOrigine249">Code Origine 249</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeOrigine249')} />
                </th>
                <th className="hand" onClick={sort('libOrigine250')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libOrigine250">Lib Origine 250</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libOrigine250')} />
                </th>
                <th className="hand" onClick={sort('codeMarche251')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeMarche251">Code Marche 251</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeMarche251')} />
                </th>
                <th className="hand" onClick={sort('libMarche252')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libMarche252">Lib Marche 252</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libMarche252')} />
                </th>
                <th className="hand" onClick={sort('codeGrandMarche253')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeGrandMarche253">Code Grand Marche 253</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeGrandMarche253')} />
                </th>
                <th className="hand" onClick={sort('libGrandMarche254')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libGrandMarche254">Lib Grand Marche 254</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libGrandMarche254')} />
                </th>
                <th className="hand" onClick={sort('codePrix255')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codePrix255">Code Prix 255</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codePrix255')} />
                </th>
                <th className="hand" onClick={sort('categPrix256')}>
                  <Translate contentKey="mono1ApplicationApp.table4.categPrix256">Categ Prix 256</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('categPrix256')} />
                </th>
                <th className="hand" onClick={sort('libPrix257')}>
                  <Translate contentKey="mono1ApplicationApp.table4.libPrix257">Lib Prix 257</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('libPrix257')} />
                </th>
                <th className="hand" onClick={sort('numChb258')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numChb258">Num Chb 258</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numChb258')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChb259')}>
                  <Translate contentKey="mono1ApplicationApp.table4.descriptionTypeChb259">Description Type Chb 259</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChb259')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChb260')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeTypeChb260">Code Type Chb 260</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChb260')} />
                </th>
                <th className="hand" onClick={sort('classChb261')}>
                  <Translate contentKey="mono1ApplicationApp.table4.classChb261">Class Chb 261</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('classChb261')} />
                </th>
                <th className="hand" onClick={sort('caractChb262')}>
                  <Translate contentKey="mono1ApplicationApp.table4.caractChb262">Caract Chb 262</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('caractChb262')} />
                </th>
                <th className="hand" onClick={sort('typeChbDeReservation263')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeChbDeReservation263">Type Chb De Reservation 263</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeChbDeReservation263')} />
                </th>
                <th className="hand" onClick={sort('descriptionTypeChbDeResv264')}>
                  <Translate contentKey="mono1ApplicationApp.table4.descriptionTypeChbDeResv264">
                    Description Type Chb De Resv 264
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('descriptionTypeChbDeResv264')} />
                </th>
                <th className="hand" onClick={sort('codeTypeChbDeResv265')}>
                  <Translate contentKey="mono1ApplicationApp.table4.codeTypeChbDeResv265">Code Type Chb De Resv 265</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('codeTypeChbDeResv265')} />
                </th>
                <th className="hand" onClick={sort('statutDeReservation266')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDeReservation266">Statut De Reservation 266</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDeReservation266')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribution267')}>
                  <Translate contentKey="mono1ApplicationApp.table4.circuitDistribution267">Circuit Distribution 267</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribution267')} />
                </th>
                <th className="hand" onClick={sort('circuitDistribUserRegroup268')}>
                  <Translate contentKey="mono1ApplicationApp.table4.circuitDistribUserRegroup268">
                    Circuit Distrib User Regroup 268
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('circuitDistribUserRegroup268')} />
                </th>
                <th className="hand" onClick={sort('numCrs269')}>
                  <Translate contentKey="mono1ApplicationApp.table4.numCrs269">Num Crs 269</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numCrs269')} />
                </th>
                <th className="hand" onClick={sort('typeRefCrs270')}>
                  <Translate contentKey="mono1ApplicationApp.table4.typeRefCrs270">Type Ref Crs 270</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('typeRefCrs270')} />
                </th>
                <th className="hand" onClick={sort('crsInsertDate271')}>
                  <Translate contentKey="mono1ApplicationApp.table4.crsInsertDate271">Crs Insert Date 271</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('crsInsertDate271')} />
                </th>
                <th className="hand" onClick={sort('dateCreaResv272')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateCreaResv272">Date Crea Resv 272</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateCreaResv272')} />
                </th>
                <th className="hand" onClick={sort('datePremier273')}>
                  <Translate contentKey="mono1ApplicationApp.table4.datePremier273">Date Premier 273</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('datePremier273')} />
                </th>
                <th className="hand" onClick={sort('statutPremier274')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutPremier274">Statut Premier 274</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutPremier274')} />
                </th>
                <th className="hand" onClick={sort('dateDernier275')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDernier275">Date Dernier 275</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernier275')} />
                </th>
                <th className="hand" onClick={sort('statutDernier276')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDernier276">Statut Dernier 276</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernier276')} />
                </th>
                <th className="hand" onClick={sort('dateDernierPseudo277')}>
                  <Translate contentKey="mono1ApplicationApp.table4.dateDernierPseudo277">Date Dernier Pseudo 277</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('dateDernierPseudo277')} />
                </th>
                <th className="hand" onClick={sort('statutDernierPseudo278')}>
                  <Translate contentKey="mono1ApplicationApp.table4.statutDernierPseudo278">Statut Dernier Pseudo 278</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statutDernierPseudo278')} />
                </th>
                <th className="hand" onClick={sort('diffDtCreaAnn279')}>
                  <Translate contentKey="mono1ApplicationApp.table4.diffDtCreaAnn279">Diff Dt Crea Ann 279</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtCreaAnn279')} />
                </th>
                <th className="hand" onClick={sort('diffDtArrAnn280')}>
                  <Translate contentKey="mono1ApplicationApp.table4.diffDtArrAnn280">Diff Dt Arr Ann 280</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('diffDtArrAnn280')} />
                </th>
                <th className="hand" onClick={sort('leadtime281')}>
                  <Translate contentKey="mono1ApplicationApp.table4.leadtime281">Leadtime 281</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leadtime281')} />
                </th>
                <th className="hand" onClick={sort('los282')}>
                  <Translate contentKey="mono1ApplicationApp.table4.los282">Los 282</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('los282')} />
                </th>
                <th className="hand" onClick={sort('occupantsGroupe283')}>
                  <Translate contentKey="mono1ApplicationApp.table4.occupantsGroupe283">Occupants Groupe 283</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('occupantsGroupe283')} />
                </th>
                <th className="hand" onClick={sort('nbNuitee284')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbNuitee284">Nb Nuitee 284</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuitee284')} />
                </th>
                <th className="hand" onClick={sort('nbNuiteeNnDed285')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbNuiteeNnDed285">Nb Nuitee Nn Ded 285</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbNuiteeNnDed285')} />
                </th>
                <th className="hand" onClick={sort('nbResvAnn286')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbResvAnn286">Nb Resv Ann 286</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbResvAnn286')} />
                </th>
                <th className="hand" onClick={sort('nbAdu287')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbAdu287">Nb Adu 287</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbAdu287')} />
                </th>
                <th className="hand" onClick={sort('nbEnf288')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbEnf288">Nb Enf 288</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbEnf288')} />
                </th>
                <th className="hand" onClick={sort('nbPersDayU289')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersDayU289">Nb Pers Day U 289</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDayU289')} />
                </th>
                <th className="hand" onClick={sort('nbPersArr290')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersArr290">Nb Pers Arr 290</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersArr290')} />
                </th>
                <th className="hand" onClick={sort('nbPersDep291')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersDep291">Nb Pers Dep 291</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersDep291')} />
                </th>
                <th className="hand" onClick={sort('nbPersAnn292')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersAnn292">Nb Pers Ann 292</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersAnn292')} />
                </th>
                <th className="hand" onClick={sort('nbPersNoshow293')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbPersNoshow293">Nb Pers Noshow 293</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbPersNoshow293')} />
                </th>
                <th className="hand" onClick={sort('nbChbDayU294')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbDayU294">Nb Chb Day U 294</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDayU294')} />
                </th>
                <th className="hand" onClick={sort('nbChbArr295')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbArr295">Nb Chb Arr 295</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbArr295')} />
                </th>
                <th className="hand" onClick={sort('nbChbDep296')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbDep296">Nb Chb Dep 296</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbDep296')} />
                </th>
                <th className="hand" onClick={sort('nbChbAnn297')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbAnn297">Nb Chb Ann 297</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbAnn297')} />
                </th>
                <th className="hand" onClick={sort('nbChbNoshow298')}>
                  <Translate contentKey="mono1ApplicationApp.table4.nbChbNoshow298">Nb Chb Noshow 298</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('nbChbNoshow298')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambre299')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetChambre299">Revenu Net Chambre 299</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambre299')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambre300')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeChambre300">Revenu Taxe Chambre 300</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambre300')} />
                </th>
                <th className="hand" onClick={sort('revenuNetChambreGlobal301')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetChambreGlobal301">Revenu Net Chambre Global 301</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetChambreGlobal301')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeChambreGlobal302')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeChambreGlobal302">Revenu Taxe Chambre Global 302</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeChambreGlobal302')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBq303')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetBq303">Revenu Net Bq 303</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBq303')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBq304')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeBq304">Revenu Taxe Bq 304</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBq304')} />
                </th>
                <th className="hand" onClick={sort('revenuNetBqGlobal305')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetBqGlobal305">Revenu Net Bq Global 305</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetBqGlobal305')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeBqGlobal306')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeBqGlobal306">Revenu Taxe Bq Global 306</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeBqGlobal306')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtra307')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetExtra307">Revenu Net Extra 307</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtra307')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtra308')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeExtra308">Revenu Taxe Extra 308</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtra308')} />
                </th>
                <th className="hand" onClick={sort('revenuNetExtraGlobal309')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuNetExtraGlobal309">Revenu Net Extra Global 309</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuNetExtraGlobal309')} />
                </th>
                <th className="hand" onClick={sort('revenuTaxeExtraGlobal310')}>
                  <Translate contentKey="mono1ApplicationApp.table4.revenuTaxeExtraGlobal310">Revenu Taxe Extra Global 310</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('revenuTaxeExtraGlobal310')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {table4List.map((table4, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/table-4/${table4.id}`} color="link" size="sm">
                      {table4.id}
                    </Button>
                  </td>
                  <td>{table4.numLigne1}</td>
                  <td>{table4.resort2}</td>
                  <td>{table4.resvNameId3}</td>
                  <td>{table4.clientOId4}</td>
                  <td>{table4.typeChb5}</td>
                  <td>{table4.confirmationNo6}</td>
                  <td>{table4.clientMdmId7}</td>
                  <td>{table4.nameId8}</td>
                  <td>{table4.parentResvNameId9}</td>
                  <td>{table4.contactId10}</td>
                  <td>{table4.agenceId11}</td>
                  <td>{table4.agenceNom12}</td>
                  <td>{table4.societeId13}</td>
                  <td>{table4.groupeId14}</td>
                  <td>{table4.numBloc15}</td>
                  <td>{table4.typeResv16}</td>
                  <td>{table4.statutResv17}</td>
                  <td>
                    {table4.dateDebutResv18 ? (
                      <TextFormat type="date" value={table4.dateDebutResv18} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateFinResv19 ? <TextFormat type="date" value={table4.dateFinResv19} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {table4.truncDateDebutResv20 ? (
                      <TextFormat type="date" value={table4.truncDateDebutResv20} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.truncDateFinResv21 ? (
                      <TextFormat type="date" value={table4.truncDateFinResv21} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateAnnResv22 ? <TextFormat type="date" value={table4.dateAnnResv22} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.pseudoRoomYn23}</td>
                  <td>{table4.createurResv24}</td>
                  <td>{table4.nomCreateurResv25}</td>
                  <td>{table4.codeGarantie26}</td>
                  <td>{table4.flgDed27}</td>
                  <td>{table4.codePays28}</td>
                  <td>{table4.libPays29}</td>
                  <td>{table4.codeNationalite30}</td>
                  <td>{table4.libNationalite31}</td>
                  <td>{table4.codeSource32}</td>
                  <td>{table4.libSource33}</td>
                  <td>{table4.codeGrandSource34}</td>
                  <td>{table4.codeOrigine35}</td>
                  <td>{table4.libOrigine36}</td>
                  <td>{table4.codeMarche37}</td>
                  <td>{table4.libMarche38}</td>
                  <td>{table4.codeGrandMarche39}</td>
                  <td>{table4.libGrandMarche40}</td>
                  <td>{table4.codePrix41}</td>
                  <td>{table4.categPrix42}</td>
                  <td>{table4.libPrix43}</td>
                  <td>{table4.numChb44}</td>
                  <td>{table4.descriptionTypeChb45}</td>
                  <td>{table4.codeTypeChb46}</td>
                  <td>{table4.classChb47}</td>
                  <td>{table4.caractChb48}</td>
                  <td>{table4.typeChbDeReservation49}</td>
                  <td>{table4.descriptionTypeChbDeResv50}</td>
                  <td>{table4.codeTypeChbDeResv51}</td>
                  <td>{table4.statutDeReservation52}</td>
                  <td>{table4.circuitDistribution53}</td>
                  <td>{table4.circuitDistribUserRegroup54}</td>
                  <td>{table4.numCrs55}</td>
                  <td>{table4.typeRefCrs56}</td>
                  <td>
                    {table4.crsInsertDate57 ? (
                      <TextFormat type="date" value={table4.crsInsertDate57} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateCreaResv58 ? <TextFormat type="date" value={table4.dateCreaResv58} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {table4.datePremier59 ? <TextFormat type="date" value={table4.datePremier59} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.statutPremier60}</td>
                  <td>
                    {table4.dateDernier61 ? <TextFormat type="date" value={table4.dateDernier61} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.statutDernier62}</td>
                  <td>
                    {table4.dateDernierPseudo63 ? (
                      <TextFormat type="date" value={table4.dateDernierPseudo63} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{table4.statutDernierPseudo64}</td>
                  <td>{table4.diffDtCreaAnn65}</td>
                  <td>{table4.diffDtArrAnn66}</td>
                  <td>{table4.leadtime67}</td>
                  <td>{table4.los68}</td>
                  <td>{table4.occupantsGroupe69}</td>
                  <td>{table4.nbNuitee70}</td>
                  <td>{table4.nbNuiteeNnDed71}</td>
                  <td>{table4.nbResvAnn72}</td>
                  <td>{table4.nbAdu73}</td>
                  <td>{table4.nbEnf74}</td>
                  <td>{table4.nbPersDayU75}</td>
                  <td>{table4.nbPersArr76}</td>
                  <td>{table4.nbPersDep77}</td>
                  <td>{table4.nbPersAnn78}</td>
                  <td>{table4.nbPersNoshow79}</td>
                  <td>{table4.nbChbDayU80}</td>
                  <td>{table4.nbChbArr81}</td>
                  <td>{table4.nbChbDep82}</td>
                  <td>{table4.nbChbAnn83}</td>
                  <td>{table4.nbChbNoshow84}</td>
                  <td>{table4.revenuNetChambre85}</td>
                  <td>{table4.revenuTaxeChambre86}</td>
                  <td>{table4.revenuNetChambreGlobal87}</td>
                  <td>{table4.revenuTaxeChambreGlobal88}</td>
                  <td>{table4.revenuNetBq89}</td>
                  <td>{table4.revenuTaxeBq90}</td>
                  <td>{table4.revenuNetBqGlobal91}</td>
                  <td>{table4.revenuTaxeBqGlobal92}</td>
                  <td>{table4.revenuNetExtra93}</td>
                  <td>{table4.revenuTaxeExtra94}</td>
                  <td>{table4.revenuNetExtraGlobal95}</td>
                  <td>{table4.revenuTaxeExtraGlobal96}</td>
                  <td>{table4.revenuNetTotal97}</td>
                  <td>{table4.revenuTaxeTotal98}</td>
                  <td>{table4.revenuNetTotalGlobal99}</td>
                  <td>{table4.revenuTaxeTotalGlobal100}</td>
                  <td>{table4.prodRevenuChambre101}</td>
                  <td>{table4.prodRevenuBq102}</td>
                  <td>{table4.prodRevenuExtra103}</td>
                  <td>{table4.prodRevenuTotal104}</td>
                  <td>{table4.prodChambreNbNuitees105}</td>
                  <td>
                    {table4.techCreateDate106 ? (
                      <TextFormat type="date" value={table4.techCreateDate106} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.techUpdateDate107 ? (
                      <TextFormat type="date" value={table4.techUpdateDate107} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{table4.numLigne108}</td>
                  <td>{table4.resort109}</td>
                  <td>{table4.resvNameId110}</td>
                  <td>{table4.clientOId111}</td>
                  <td>{table4.typeChb112}</td>
                  <td>{table4.confirmationNo113}</td>
                  <td>{table4.clientMdmId114}</td>
                  <td>{table4.nameId115}</td>
                  <td>{table4.parentResvNameId116}</td>
                  <td>{table4.contactId117}</td>
                  <td>{table4.agenceId118}</td>
                  <td>{table4.agenceNom119}</td>
                  <td>{table4.societeId120}</td>
                  <td>{table4.groupeId121}</td>
                  <td>{table4.numBloc122}</td>
                  <td>{table4.typeResv123}</td>
                  <td>{table4.statutResv124}</td>
                  <td>
                    {table4.dateDebutResv125 ? (
                      <TextFormat type="date" value={table4.dateDebutResv125} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateFinResv126 ? <TextFormat type="date" value={table4.dateFinResv126} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {table4.truncDateDebutResv127 ? (
                      <TextFormat type="date" value={table4.truncDateDebutResv127} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.truncDateFinResv128 ? (
                      <TextFormat type="date" value={table4.truncDateFinResv128} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateAnnResv129 ? <TextFormat type="date" value={table4.dateAnnResv129} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.pseudoRoomYn130}</td>
                  <td>{table4.createurResv131}</td>
                  <td>{table4.nomCreateurResv132}</td>
                  <td>{table4.codeGarantie133}</td>
                  <td>{table4.flgDed134}</td>
                  <td>{table4.codePays135}</td>
                  <td>{table4.libPays136}</td>
                  <td>{table4.codeNationalite137}</td>
                  <td>{table4.libNationalite138}</td>
                  <td>{table4.codeSource139}</td>
                  <td>{table4.libSource140}</td>
                  <td>{table4.codeGrandSource141}</td>
                  <td>{table4.codeOrigine142}</td>
                  <td>{table4.libOrigine143}</td>
                  <td>{table4.codeMarche144}</td>
                  <td>{table4.libMarche145}</td>
                  <td>{table4.codeGrandMarche146}</td>
                  <td>{table4.libGrandMarche147}</td>
                  <td>{table4.codePrix148}</td>
                  <td>{table4.categPrix149}</td>
                  <td>{table4.libPrix150}</td>
                  <td>{table4.numChb151}</td>
                  <td>{table4.descriptionTypeChb152}</td>
                  <td>{table4.codeTypeChb153}</td>
                  <td>{table4.classChb154}</td>
                  <td>{table4.caractChb155}</td>
                  <td>{table4.typeChbDeReservation156}</td>
                  <td>{table4.descriptionTypeChbDeResv157}</td>
                  <td>{table4.codeTypeChbDeResv158}</td>
                  <td>{table4.statutDeReservation159}</td>
                  <td>{table4.circuitDistribution160}</td>
                  <td>{table4.circuitDistribUserRegroup161}</td>
                  <td>{table4.numCrs162}</td>
                  <td>{table4.typeRefCrs163}</td>
                  <td>
                    {table4.crsInsertDate164 ? (
                      <TextFormat type="date" value={table4.crsInsertDate164} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateCreaResv165 ? (
                      <TextFormat type="date" value={table4.dateCreaResv165} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.datePremier166 ? <TextFormat type="date" value={table4.datePremier166} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.statutPremier167}</td>
                  <td>
                    {table4.dateDernier168 ? <TextFormat type="date" value={table4.dateDernier168} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.statutDernier169}</td>
                  <td>
                    {table4.dateDernierPseudo170 ? (
                      <TextFormat type="date" value={table4.dateDernierPseudo170} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{table4.statutDernierPseudo171}</td>
                  <td>{table4.diffDtCreaAnn172}</td>
                  <td>{table4.diffDtArrAnn173}</td>
                  <td>{table4.leadtime174}</td>
                  <td>{table4.los175}</td>
                  <td>{table4.occupantsGroupe176}</td>
                  <td>{table4.nbNuitee177}</td>
                  <td>{table4.nbNuiteeNnDed178}</td>
                  <td>{table4.nbResvAnn179}</td>
                  <td>{table4.nbAdu180}</td>
                  <td>{table4.nbEnf181}</td>
                  <td>{table4.nbPersDayU182}</td>
                  <td>{table4.nbPersArr183}</td>
                  <td>{table4.nbPersDep184}</td>
                  <td>{table4.nbPersAnn185}</td>
                  <td>{table4.nbPersNoshow186}</td>
                  <td>{table4.nbChbDayU187}</td>
                  <td>{table4.nbChbArr188}</td>
                  <td>{table4.nbChbDep189}</td>
                  <td>{table4.nbChbAnn190}</td>
                  <td>{table4.nbChbNoshow191}</td>
                  <td>{table4.revenuNetChambre192}</td>
                  <td>{table4.revenuTaxeChambre193}</td>
                  <td>{table4.revenuNetChambreGlobal194}</td>
                  <td>{table4.revenuTaxeChambreGlobal195}</td>
                  <td>{table4.revenuNetBq196}</td>
                  <td>{table4.revenuTaxeBq197}</td>
                  <td>{table4.revenuNetBqGlobal198}</td>
                  <td>{table4.revenuTaxeBqGlobal199}</td>
                  <td>{table4.revenuNetExtra200}</td>
                  <td>{table4.revenuTaxeExtra201}</td>
                  <td>{table4.revenuNetExtraGlobal202}</td>
                  <td>{table4.revenuTaxeExtraGlobal203}</td>
                  <td>{table4.revenuNetTotal204}</td>
                  <td>{table4.revenuTaxeTotal205}</td>
                  <td>{table4.revenuNetTotalGlobal206}</td>
                  <td>{table4.revenuTaxeTotalGlobal207}</td>
                  <td>{table4.prodRevenuChambre208}</td>
                  <td>{table4.prodRevenuBq209}</td>
                  <td>{table4.prodRevenuExtra210}</td>
                  <td>{table4.prodRevenuTotal211}</td>
                  <td>{table4.prodChambreNbNuitees212}</td>
                  <td>
                    {table4.techCreateDate213 ? (
                      <TextFormat type="date" value={table4.techCreateDate213} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.techUpdateDate214 ? (
                      <TextFormat type="date" value={table4.techUpdateDate214} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{table4.numLigne215}</td>
                  <td>{table4.resort216}</td>
                  <td>{table4.resvNameId217}</td>
                  <td>{table4.clientOId218}</td>
                  <td>{table4.typeChb219}</td>
                  <td>{table4.confirmationNo220}</td>
                  <td>{table4.clientMdmId221}</td>
                  <td>{table4.nameId222}</td>
                  <td>{table4.parentResvNameId223}</td>
                  <td>{table4.contactId224}</td>
                  <td>{table4.agenceId225}</td>
                  <td>{table4.agenceNom226}</td>
                  <td>{table4.societeId227}</td>
                  <td>{table4.groupeId228}</td>
                  <td>{table4.numBloc229}</td>
                  <td>{table4.typeResv230}</td>
                  <td>{table4.statutResv231}</td>
                  <td>
                    {table4.dateDebutResv232 ? (
                      <TextFormat type="date" value={table4.dateDebutResv232} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateFinResv233 ? <TextFormat type="date" value={table4.dateFinResv233} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {table4.truncDateDebutResv234 ? (
                      <TextFormat type="date" value={table4.truncDateDebutResv234} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.truncDateFinResv235 ? (
                      <TextFormat type="date" value={table4.truncDateFinResv235} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateAnnResv236 ? <TextFormat type="date" value={table4.dateAnnResv236} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.pseudoRoomYn237}</td>
                  <td>{table4.createurResv238}</td>
                  <td>{table4.nomCreateurResv239}</td>
                  <td>{table4.codeGarantie240}</td>
                  <td>{table4.flgDed241}</td>
                  <td>{table4.codePays242}</td>
                  <td>{table4.libPays243}</td>
                  <td>{table4.codeNationalite244}</td>
                  <td>{table4.libNationalite245}</td>
                  <td>{table4.codeSource246}</td>
                  <td>{table4.libSource247}</td>
                  <td>{table4.codeGrandSource248}</td>
                  <td>{table4.codeOrigine249}</td>
                  <td>{table4.libOrigine250}</td>
                  <td>{table4.codeMarche251}</td>
                  <td>{table4.libMarche252}</td>
                  <td>{table4.codeGrandMarche253}</td>
                  <td>{table4.libGrandMarche254}</td>
                  <td>{table4.codePrix255}</td>
                  <td>{table4.categPrix256}</td>
                  <td>{table4.libPrix257}</td>
                  <td>{table4.numChb258}</td>
                  <td>{table4.descriptionTypeChb259}</td>
                  <td>{table4.codeTypeChb260}</td>
                  <td>{table4.classChb261}</td>
                  <td>{table4.caractChb262}</td>
                  <td>{table4.typeChbDeReservation263}</td>
                  <td>{table4.descriptionTypeChbDeResv264}</td>
                  <td>{table4.codeTypeChbDeResv265}</td>
                  <td>{table4.statutDeReservation266}</td>
                  <td>{table4.circuitDistribution267}</td>
                  <td>{table4.circuitDistribUserRegroup268}</td>
                  <td>{table4.numCrs269}</td>
                  <td>{table4.typeRefCrs270}</td>
                  <td>
                    {table4.crsInsertDate271 ? (
                      <TextFormat type="date" value={table4.crsInsertDate271} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.dateCreaResv272 ? (
                      <TextFormat type="date" value={table4.dateCreaResv272} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {table4.datePremier273 ? <TextFormat type="date" value={table4.datePremier273} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.statutPremier274}</td>
                  <td>
                    {table4.dateDernier275 ? <TextFormat type="date" value={table4.dateDernier275} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{table4.statutDernier276}</td>
                  <td>
                    {table4.dateDernierPseudo277 ? (
                      <TextFormat type="date" value={table4.dateDernierPseudo277} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{table4.statutDernierPseudo278}</td>
                  <td>{table4.diffDtCreaAnn279}</td>
                  <td>{table4.diffDtArrAnn280}</td>
                  <td>{table4.leadtime281}</td>
                  <td>{table4.los282}</td>
                  <td>{table4.occupantsGroupe283}</td>
                  <td>{table4.nbNuitee284}</td>
                  <td>{table4.nbNuiteeNnDed285}</td>
                  <td>{table4.nbResvAnn286}</td>
                  <td>{table4.nbAdu287}</td>
                  <td>{table4.nbEnf288}</td>
                  <td>{table4.nbPersDayU289}</td>
                  <td>{table4.nbPersArr290}</td>
                  <td>{table4.nbPersDep291}</td>
                  <td>{table4.nbPersAnn292}</td>
                  <td>{table4.nbPersNoshow293}</td>
                  <td>{table4.nbChbDayU294}</td>
                  <td>{table4.nbChbArr295}</td>
                  <td>{table4.nbChbDep296}</td>
                  <td>{table4.nbChbAnn297}</td>
                  <td>{table4.nbChbNoshow298}</td>
                  <td>{table4.revenuNetChambre299}</td>
                  <td>{table4.revenuTaxeChambre300}</td>
                  <td>{table4.revenuNetChambreGlobal301}</td>
                  <td>{table4.revenuTaxeChambreGlobal302}</td>
                  <td>{table4.revenuNetBq303}</td>
                  <td>{table4.revenuTaxeBq304}</td>
                  <td>{table4.revenuNetBqGlobal305}</td>
                  <td>{table4.revenuTaxeBqGlobal306}</td>
                  <td>{table4.revenuNetExtra307}</td>
                  <td>{table4.revenuTaxeExtra308}</td>
                  <td>{table4.revenuNetExtraGlobal309}</td>
                  <td>{table4.revenuTaxeExtraGlobal310}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/table-4/${table4.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/table-4/${table4.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        onClick={() => (window.location.href = `/table-4/${table4.id}/delete`)}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="mono1ApplicationApp.table4.home.notFound">No Table 4 S found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Table4;
