import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DashboardApiService from '../services/dashboardApi';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      contacted: [],
      potential: [],
      scheduled: [],
      completed: [],
    };
  }

  componentDidMount() {
    DashboardApiService.getClients().then((res) => {
      let indexes = {};
      this.setCustomers(
        res.map((customer, index) => {
          if (!indexes[customer.category]) {
            indexes[customer.category] = 0;
          }
          let newCustomer = { ...customer, index: indexes[customer.category] };
          indexes[customer.category] += 1;
          return newCustomer;
        })
      );
    });
  }

  setCustomers = (customers) => {
    const newContacted = customers
      .filter((customer) => customer.category === 'contacted')
      .sort((a, b) => a.index - b.index);
    const newPotential = customers
      .filter((customer) => customer.category === 'potentialClients')
      .sort((a, b) => a.index - b.index);
    const newScheduled = customers
      .filter((customer) => customer.category === 'scheduled')
      .sort((a, b) => a.index - b.index);
    const newCompleted = customers
      .filter((customer) => customer.category === 'completed')
      .sort((a, b) => a.index - b.index);
    this.setState({
      customers: customers,
      contacted: newContacted,
      potential: newPotential,
      scheduled: newScheduled,
      completed: newCompleted,
    });
  };

  handleDeleteClient(clientId) {
    //Submit request for Cleanup
    DashboardApiService.deleteClient(clientId).then(() => {
      let newCustomers = this.state.customers.filter(
        (customer) => customer.id !== clientId
      );
      this.setCustomers(newCustomers);
    });
  }

  handleOnDragEnd = (result) => {
    //mapping over all customers that all have their own indexes
    //accounting for if you move from one column to another and adjusting the indexes
    // of source and dest. to account for new customers entering and leaving

    //when moving within the same column determining which customers are affected
    // then move either up or down
    if (!result.destination) return;
    const promises = this.state.customers.map(async (customer) => {
      if (customer.id === Number(result.draggableId)) {
        if (result.destination.droppableId !== customer.category) {
          let { index, ...movedClient } = customer;
          movedClient.category = result.destination.droppableId;
          try {
            await DashboardApiService.moveClient(customer.id, movedClient);
            return {
              ...customer,
              category: result.destination.droppableId,
              index: result.destination.index,
            };
          } catch (error) {
            console.error(error);
            return customer;
          }
        } else {
          return {
            ...customer,
            category: result.destination.droppableId,
            index: result.destination.index,
          };
        }
      } else if (
        result.source.droppableId === result.destination.droppableId &&
        customer.category === result.source.droppableId
      ) {
        let newIndex = customer.index;
        let move = result.destination.index - result.source.index;
        if (move < 0) {
          if (
            customer.index >= result.destination.index &&
            customer.index <= result.source.index
          ) {
            newIndex += 1;
          }
        } else {
          if (
            customer.index >= result.source.index &&
            customer.index <= result.destination.index
          ) {
            newIndex -= 1;
          }
        }
        return { ...customer, index: newIndex };
      } else if (
        customer.category === result.destination.droppableId &&
        customer.index >= result.destination.index
      ) {
        return { ...customer, index: customer.index + 1 };
      } else if (
        customer.category === result.source.droppableId &&
        customer.index > result.source.index
      ) {
        return { ...customer, index: customer.index - 1 };
      } else {
        return customer;
      }
    });
    Promise.all(promises).then(this.setCustomers);
  };

  render() {
    return (
      <div>
        <nav>
          <h4 className='clean'>Clean Up</h4>
          <h4 className='lawn'>Lawn Service</h4>
          <h4 className='sod'>Sod Installation</h4>
        </nav>
        <section className='kanban'>
          <DragDropContext onDragEnd={this.handleOnDragEnd} className='kBox'>
            <div className='kbox'>
              <h4>Potential Clients</h4>

              <Droppable droppableId='potentialClients'>
                {(provided) => (
                  <ul
                    className='customers'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {this.state.potential.map(
                      ({ id, name, number, email, type, category }, index) => {
                        return (
                          <Draggable
                            key={id}
                            draggableId={`${id}`}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                className={type}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <p>
                                  {name}
                                  <br />
                                  {number}
                                  <br />
                                  {email}
                                </p>
                                <button
                                  onClick={() => this.handleDeleteClient(id)}
                                >
                                  Delete
                                </button>
                              </li>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
            <div className='kbox'>
              <h4>Contacted</h4>

              <Droppable droppableId='contacted'>
                {(provided) => (
                  <ul
                    className='customers'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {this.state.contacted.map(
                      ({ id, name, number, email, type, category }, index) => {
                        return (
                          <Draggable
                            key={id}
                            draggableId={`${id}`}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                className={type}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <p>
                                  {name}
                                  <br />
                                  {number}
                                  <br />
                                  {email}
                                </p>
                                <button
                                  onClick={() => this.handleDeleteClient(id)}
                                >
                                  Delete
                                </button>
                              </li>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>

            <div className='kbox'>
              <h4>Scheduled</h4>

              <Droppable droppableId='scheduled'>
                {(provided) => (
                  <ul
                    className='customers'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {this.state.scheduled.map(
                      ({ id, name, number, email, type, category }, index) => {
                        return (
                          <Draggable
                            key={id}
                            draggableId={`${id}`}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                className={type}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <p>
                                  {name}
                                  <br />
                                  {number}
                                  <br />
                                  {email}
                                </p>
                                <button
                                  onClick={() => this.handleDeleteClient(id)}
                                >
                                  Delete
                                </button>
                              </li>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
            <div className='kbox'>
              <h4>Completed</h4>

              <Droppable droppableId='completed'>
                {(provided) => (
                  <ul
                    className='customers'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {this.state.completed.map(
                      ({ id, name, number, email, type, category }, index) => {
                        return (
                          <Draggable
                            key={id}
                            draggableId={`${id}`}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                className={type}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <p>
                                  {name}
                                  <br />
                                  {number}
                                  <br />
                                  {email}
                                </p>
                                <button
                                  onClick={() => this.handleDeleteClient(id)}
                                >
                                  Delete
                                </button>
                              </li>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </section>
      </div>
    );
  }
}

export default AdminDashboard;
