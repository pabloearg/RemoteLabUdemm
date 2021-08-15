// @flow
import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import arbolIcon from '../../static/assets/img/icons/arbol.png';
import capacitorIcon from '../../static/assets/img/icons/cargaCapacitor.png';
import estadisticoIcon from '../../static/assets/img/icons/estadistico.png';
import kirchoffIcon from '../../static/assets/img/icons/kirchoff.png';
import inclinadoIcon from '../../static/assets/img/icons/pelota_plano_inclinado.png';
import ExperimentRow from './components/ExperimentRow';
import type {
  Experiment,
} from '../../types';
import Separator from '../../Components/Separator/Separator';

const Experimentos = [
  {
    id: '0',
    title: 'Caida Libre'
  },
  {
    id: '1',
    title: 'Carga y descarga'
  },
  {
    id: '2',
    title: 'Reporte de uso'
  },
  {
    id: '3',
    title: 'Kirchoff'
  },
  {
    id: '4',
    title: 'Plano inclinado'
  },
];

const Icons = {
  0: arbolIcon,
  1: capacitorIcon,
  2: estadisticoIcon,
  3: kirchoffIcon,
  4: inclinadoIcon,
};

const SelectExperiment = () => {
  const renderItem = ({ item }: {item: Experiment}) => {
    console.log('item: ', item);
    return (
      <ExperimentRow
        icon={Icons[item.id]}
        title={item.title}
        id={item.id}
      />
    );
  };
  return (
    <View style={{ padding: 28 }}>
      <FlatList
        renderItem={renderItem}
        data={Experimentos}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectExperiment;
