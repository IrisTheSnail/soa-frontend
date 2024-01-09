import { useSelector } from "react-redux";
import { RootState } from "../../state/rootState";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { failure, fetchMissionsAction, success } from "../state/missionState";
import { Text, Table, TableData, Burger, Button, Flex } from "@mantine/core";
import { modals } from "@mantine/modals";
import { AddMissionModal } from "./AddMissionModal";


export const MissionManager: React.FC = () => {
  const {
    missions, isLoading, error
  } = useSelector(
    (rootState: RootState) => { return rootState.mission }
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMissionsAction())
  }, [])

  const tableData: TableData = {
    head: ["id", "name", "destination", "startdate", "enddate", "state", "transport", "idProf"],
    body: missions.map(mission => {
      return [ mission.id, mission.name, mission.destination, mission.startdate, mission.enddate, mission.state, mission.transport, mission.idProf ]
    }),
  };

  const onAddMissionConfirm = () => {

  }
  
  const onAddMissionClick = () => {
    modals.openConfirmModal({
      title: 'New mission',
      children: <AddMissionModal />,
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('New mission cancelled'),
      onConfirm: onAddMissionConfirm,
    })
  }  

  if(isLoading) return <>Loading...</>
  if(error) return <><Text c="red">{error}</Text></>

  return (
    <>
      <Flex direction="column" gap="xl" align="flex-end">
        <Button onClick={onAddMissionClick}>Add mission</Button>
        <Table data={tableData} />
      </Flex>
    </>
  );
};