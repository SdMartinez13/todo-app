import React from 'react';
import { useContext, useState } from 'react';
import { When } from 'react-if';
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


const List = ({ children , toggleComplete, deleteItem, list }) => {

  const { showCompleted, pageItems } = useContext(SettingsContext);
  const [page, setPage] = useState(1);
  const { classes } = useStyles();

  const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);

  console.log(list, "LIST!!!")
  return (

    <Box className={classes.box}>
      <div>
        {displayList.map(item => (
          <Card className={classes.card} p={0} mt={0} mb={10} key={item.id}>
            {/* <Group m={0} className={classes.list}> */}
              <div className='cardHeader' style={{ backgroundColor: '' }}>
                <div className={classes.cardHeaderStatus}>
                  <Badge onClick={()=> toggleComplete(item.id)}className={classes.badge} color={item.complete ? "green" : "red"} variant="solid">
                    {item.complete ? "complete" : "pending"}
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
                {/* <Button variant={item.complete ? 'subtle' : 'filled' } color={item.complete ? 'green' : 'blue'} onClick={() => toggleComplete(item.id)}>{item.complete ? 'Completed' : 'Complete'}</Button> */}
              </div>

              </div>

            {/* </Group> */}

          </Card>

        ))}
      </div>

      {!!list.length && (

      <When condition={listToRender.length > 0}>
        <Pagination
          page={page}
          onChange={setPage}
          total={pageCount}
          position="center"
          styles={(theme) => ({
            item: {
              '&[data-active]': {
                backgroundImage: theme.fn.gradient({ from: 'blue', to: 'blue' }),
              },
            },
          })}
        />
      </When>

      )}
    </Box>

  )
}


export default List;