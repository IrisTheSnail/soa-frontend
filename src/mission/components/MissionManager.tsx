import { useSelector } from "react-redux";
import { RootState } from "../../state/rootState";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMissionsAction } from "../state/missionState";
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
    head: ["id", "name", "destination", "startdate", "enddate", "state", "transport", "idProf", "actions"],
    body: fetchState.missions.map(mission => {
      return [ mission.id, mission.name, mission.destination, mission.startdate, mission.enddate, mission.state, mission.transport, mission.idProf,
      <Flex direction="column" gap="xs">
        <Button>Validate</Button>
        <Button>Cancel</Button>
      </Flex> ]
    }),
  };

  const onAddMissionClick = () => {
    modals.open({
      title: <Text size="xl">New mission</Text>,
      children: <AddMissionModal />,
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