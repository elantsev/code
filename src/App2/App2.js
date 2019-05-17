import React, { useState } from 'react'

let initialWorkers = [
  { id: 1, name: 'name1', surname: 'surname1', days: 5, daysSalary: 5 },
  { id: 2, name: 'name2', surname: 'surname2', days: 5, daysSalary: 2 },
  { id: 3, name: 'name3', surname: 'surname4', days: 23, daysSalary: 3 },
  { id: 4, name: 'name4', surname: 'surname323', days: 3, daysSalary: 5 },
]

export default function App2() {
  let [workers, setWorkers] = useState(initialWorkers)

  const handleChange = e => {
    let { name, value } = e.target
    let id = +e.target.parentElement.parentElement.id
    if (value[value.length - 1] !== '.' && isNaN(value)) return
    workers = workers.map(worker => {
      if (worker.id === id) worker[name] = value
      return worker
    })
    setWorkers(workers)
  }

  let total = (workers =>
    workers.reduce((acc, el) => acc + el.days * el.daysSalary, 0))(workers)

  return (
    <>
      <h2>workers</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>days</th>
            <th>daysSalary</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {workers.map(({ id, name, surname, days, daysSalary }) => (
            <tr key={id} id={id}>
              <td>{name}</td>
              <td>{surname}</td>
              <td>
                <input name="days" value={days} onChange={handleChange} />
              </td>
              <td>
                <input
                  name="daysSalary"
                  value={daysSalary}
                  onChange={handleChange}
                />
              </td>
              <td>{days * daysSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Суммарная зарплата всех работников: {total}</p>
    </>
  )
}
