import { Button, Flex, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates'
import { useDispatch } from 'react-redux';
import { addMissionAction } from '../state/missionState';
import { modals } from "@mantine/modals";

export function AddMissionModal() {
  const assertNonEmpty = (value) => (/.+/.test(value) ? null : 'Invalid value')
  const form = useForm({
    initialValues: {
      name: '',
      destination: '',
      startdate: '',
      enddate: '',
      transport: ''
    },
    validate: {
      name: assertNonEmpty,
      destination: assertNonEmpty,
      startdate: assertNonEmpty,
      enddate: assertNonEmpty,
      transport: assertNonEmpty,
      
    }
  });

  const dispatch = useDispatch()

  const onAddMissionFormSubmit = (values: any) => {
    dispatch(addMissionAction(
      {
        id: 99,
        name: values.name!,
        destination: values.destination!,
        startdate: values.startdate!.toISOString(),
        enddate: values.enddate!.toISOString(),
        state: "coo coo",
        transport: values.transport!,
        idProf: 0
      }
    ))
    modals.closeAll()
  }
  
  return <form onSubmit={form.onSubmit(onAddMissionFormSubmit)}>
    <Flex maw={340} m="auto" direction="column" gap="md">
      <TextInput 
        label="Name" 
        placeholder="Name" 
        {...form.getInputProps('name')} 
      />
      <TextInput 
        label="Destination" 
        placeholder="Destination" 
        {...form.getInputProps('destination')} 
      />
      <Flex gap="md">
        <DateInput 
          label="Start date" 
          placeholder="Start date" 
          {...form.getInputProps('startdate')} 
        />
        <DateInput 
          label="End date" 
          placeholder="End date" 
          {...form.getInputProps('enddate')} 
        />
      </Flex>
      <TextInput 
        label="Transport" 
        placeholder="Transport" 
        {...form.getInputProps('transport')} 
      />
      <Button type="submit">Create</Button>
    </Flex>
  </form>
}