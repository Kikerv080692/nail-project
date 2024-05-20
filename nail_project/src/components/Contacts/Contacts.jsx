import React from 'react'
import instagram from '../../images/instagram_icon.png'
import facebook from '../../images/facebook.png'
import telegram from '../../images/telegram.png'
import './Contacts.scss'

function Footer() {
  return (
    <footer>
      <h1>Contacts</h1>
      <div className="contacts-img">
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={telegram} alt="telegram" />
      </div>
    </footer>
  )
}

export default Footer
