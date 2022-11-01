import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Card, Button, Text, Box, Pagination, Badge, createStyles } from '@mantine/core';
import './list.scss'


const useStyles = createStyles((theme) => ({
  card: {
    // backgroundColor: '',
    // borderBottom: '',
    // padding: 20,
    // color: 'white',
    // margin: 20,
    border: 'solid',
    borderColor: '#DFE3E6',
    // width: '100%',
  },
  box: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  badge: {
    border: 'solid',

  },
  cardHeaderStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',


  },

  cardFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '20px'
    // backgroundColor: 'blue',

  },
  cardText: {
    // backgroundColor: 'pink',
    display: 'flex',
  },
  cardBody: {
    padding: '20px'
  }
}))


const List = ({ children }) => {

  const { list, deleteItem, toggleComplete } = useContext(SettingsContext);
  const { classes } = useStyles();

  console.log(list, "LIST!!!")
  return (

    <Box className={classes.box}>
      <div>
        {list.map(item => (
          <Card className={classes.card} p={0} mt={0} mb={10} key={item.id}>
            {/* <Group m={0} className={classes.list}> */}
              <div className='cardHeader' style={{ backgroundColor: '' }}>
                <div className={classes.cardHeaderStatus}>
                  <Badge className={classes.badge} color="green" variant="solid">
                    Pending
                  </Badge>
                  <Text><small>Assigned to: {item.assignee}</small></Text>
                </div>

                <Button variant="subtle" color="gray" onClick={() => deleteItem(item.id)}>
                  x
                </Button>
              </div>

              <div className={classes.cardBody}>


              <div className={classes.cardText}>
                <Text>{item.text}</Text>
              </div>


              <div className={classes.cardFooter}>
                <Text><small>Difficulty: {item.difficulty}</small></Text>
                <Button variant={item.complete ? 'subtle' : 'filled' } color={item.complete ? 'green' : 'blue'} onClick={() => toggleComplete(item.id)}>{item.complete ? 'Completed' : 'Complete'}</Button>
              </div>

              </div>

            {/* </Group> */}

          </Card>

        ))}
      </div>

      {!!list.length && (

        <Pagination
          total={5}
          position="center"
          styles={(theme) => ({
            item: {
              '&[data-active]': {
                backgroundImage: theme.fn.gradient({ from: 'blue', to: 'blue' }),
              },
            },
          })}
        />
      )}
    </Box>

  )
}


export default List;