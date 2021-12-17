import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import { useSelector } from 'react-redux';
import ExperimentRow from './components/ExperimentRow';
import type {
  Experiment,
} from '../../types';
import Separator from '../../Components/Separator/Separator';
import { filter, find } from 'lodash';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';

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


const SelectExperiment = () => {
  const experiments = useSelector((state) => state?.config?.experimentsArray);
  const newAppointments: any[] = useSelector((state: any) => state?.appointments?.currentAppointments?.data);

  const [experimentsFree, setExperimentsFree] = React.useState<any>([])
  React.useEffect(() => {
    const _experiments = filter(experiments, (experiment) => {

      const exist = find(newAppointments, (_appointment) => _appointment.experimentId === experiment.uuid)
      return exist === undefined
    })
    setExperimentsFree(_experiments.length > 0 ? _experiments : null)
  }, [])

  console.log({ experiments });
  const renderItem = ({ item }: { item: Experiment }) => {
    console.log('item: ', item);
    return (
      <ExperimentRow
        experiment={item}
      />
    );
  };

  const getKey = (item) => item.uuid;

  if (experimentsFree === null) {
    return (
      <View style={{ paddingTop: 40 }}><TextHeadings type='h3' color='black' styleText={{ textAlign: "center" }}>
        {"No hay experimentos disponibles"}
      </TextHeadings>
      </View>)
  }

  return (
    <View style={{ padding: 28 }}>
      <FlatList
        keyExtractor={getKey}
        renderItem={renderItem}
        data={experimentsFree}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectExperiment;
