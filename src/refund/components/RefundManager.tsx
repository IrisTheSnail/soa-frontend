import { useSelector } from "react-redux";
import { RootState } from "../../state/rootState";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRefundsAction } from "../state/refundState";
import { Text, Table, TableData } from "@mantine/core";


export const RefundManager: React.FC = () => {
  const {
    refunds, isLoading, error
  } = useSelector(
    (rootState: RootState) => { return rootState.refund }
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRefundsAction())
  }, [])

  const tableData: TableData = {
      head: [
        "id",
        "idMission",
        "state",
        "frais",
        "idProf",
        "budgetInitial",
      ],
      body: refunds.map(refund => {
      return [ 
        refund.id,
        refund.idMission,
        refund.state,
        refund.frais,
        refund.idProf,
        refund.budgetInitial
      ]
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