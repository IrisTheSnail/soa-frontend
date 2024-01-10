import { useSelector } from "react-redux";
import { RootState } from "../../state/rootState";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMissionAction, fetchMissionsAction } from "../state/missionState";
import { Text, Table, TableData, Button, Flex } from "@mantine/core";
import { modals } from "@mantine/modals";
import { AddMissionModal } from "./AddMissionModal";
import { notifications } from "@mantine/notifications";


export const MissionManager: React.FC = () => {
  const { fetchState, addState } = useSelector(
    (rootState: RootState) => { return rootState.mission }
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMissionsAction())
  }, [])

  useEffect(() => {
    if(addState.error !== undefined){
      notifications.show({
        color: "red",
        message: addState.error
      })
    }
  }, [addState.error])

  const tableData: TableData = {
    head: ["id", "name", "destination", "startdate", "enddate", "state", "transport", "idProf"],
    body: fetchState.missions.map(mission => {
      return [ mission.id, mission.name, mission.destination, mission.startdate, mission.enddate, mission.state, mission.transport, mission.idProf ]
    }),
  };

  const onAddMissionConfirm = () => {
    console.log("confrm");
    dispatch(addMissionAction(
      {
        id: 99,
        name: "mission99",
        destination: "somewhere99",
        startdate: "tomorrow",
        enddate: "next month",
        state: "state",
        transport: "legs",
        idProf: 0
      }
    ))
  }

  const onAddMissionClick = () => {
    modals.openConfirmModal({
      title: <Text size="xl">New mission</Text>,
      children: <AddMissionModal />,
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('New mission cancelled'),
      onConfirm: onAddMissionConfirm,
    })
  }  

  if(fetchState.inProgress) return <>Loading...</>
  if(fetchState.error) return <><Text c="red">{fetchState.error}</Text></>

  return (
    <>
      <Flex direction="column" gap="xl" align="flex-end">
        <Button onClick={onAddMissionClick} disabled={addState.inProgress}>
        {
          addState.inProgress ? "Adding mission.." : "Add mission"
        }
        </Button>
        <Table data={tableData} />
      </Flex>
    </>
  );
};