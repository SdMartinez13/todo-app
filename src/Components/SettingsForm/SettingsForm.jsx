import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import form from '../../hooks/form.js';
import { Card, Text, Button, Switch, NumberInput } from '@mantine/core';

const SettingsForm = ({ children }) => {
  const { pageItems, setPageItems, showCompleted, setShowCompleted } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = form(showCompleted);

  return (
    <>

      <Card shadow="sm" p="lg" radius="md" >
        <form onSubmit={handleSubmit}>

          <Card.Section withBorder inheritPadding py="xs">
            <Text weight={800}>Update Settings</Text>
          </Card.Section>

          <Switch
            label="Show Completed ToDos"
            checked={showCompleted}
            onChange={(event) => setShowCompleted(event.currentTarget.showCompleted)}
          />

          <Text weight={500} inheritPadding py="md">Items Per Page</Text>
          <NumberInput
            value={pageItems}
            onChange={(val) => setPageItems(val)}
            placeholder="Items Per Page"
            label="Items Per Page"
          />

          <Text weight={500} inheritPadding py="md">Sort Keyword</Text>
          <input onChange={handleChange} name="sort" type="text" placeholder="difficulty" />

          <Button type="submit" variant="light" color="blue" fullWidth mt="md" radius="md">Show New Settings</Button>


        </form>
      </Card>



    </>
  )
}

export default SettingsForm;