import React from 'react'
import './Price.scss'


function Price() {
  return (
    <div>
      <h1>Price</h1>
      <table>
        <tr>
            <td>Маникюр</td>
            <td>300</td>
        </tr>
        <tr>
            <td>Маникюр с покрытием</td>
            <td>450</td>
        </tr>
        <tr>
            <td>Наращивание</td>
            <td>300</td>
        </tr>
        <tr>
            <td>Педикюр</td>
            <td>300</td>
        </tr>
        <tr>
            <td>Педикюр с покрытием</td>
            <td>300</td>
        </tr>
        <tr>
            <td>Снятие гель лака</td>
            <td>300</td>
        </tr>
        <tr>
            <td>ремонт донаращивание</td>
            <td>300</td>
        </tr>
      </table>
      <h3>Скидка на первое посещение 15%</h3>
    </div>
  )
}

export default Price

