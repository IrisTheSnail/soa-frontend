import { Box, Flex, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates'

export function AddMissionModal() {
  const form = useForm({
    initialValues: {
      name: '',
      destination: '',
      startdate: '',
      enddate: '',
      transport: ''
    },
  });
  
  return <Flex maw={340} mx="auto" direction="column" gap="md">
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
  </Flex>
}