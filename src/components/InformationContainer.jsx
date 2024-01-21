import '../styles/components/informationcontainer.sass'

import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'

const InformationContainer = () => {
  return (
    <>
        <section id="information">
            <div className="info-card">
                <FaPhoneAlt id="phone-icon" />
                <div>
                <h3>Telefone</h3>
                <p>(21)99814-1999</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                <h3>E-mail</h3>
                <p>luizernandes49@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                <h3>Localização</h3>
                <p>Cabo Frio / RJ</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default InformationContainer