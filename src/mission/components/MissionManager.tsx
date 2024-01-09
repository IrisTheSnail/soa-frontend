import { useSelector } from "react-redux";
import { RootState } from "../../state/rootState";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { failure, fetchMissionsAction, success } from "../state/missionState";
import { Text, Table, TableData } from "@mantine/core";


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

  if(isLoading) return <>Loading...</>
  if(error) return <><Text c="red">{error}</Text></>

  return (
    <>
      <Table data={tableData} />
    </>
  );
};