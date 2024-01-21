import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworkcontainer.sass'

const socialNetworks = [
  {link: "https://www.linkedin.com/in/luiz-ernandes-soares-416906223/" , name: "linkedin", icon: <FaLinkedinIn /> },
  { link: "https://github.com/LuizSoares1", name: "github", icon: <FaGithub /> },
  { link: "#", name: "instagram", icon: <FaInstagram /> },
]

const SocialNetworkContainer = () => {
    return (
        <>
            <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
                </a>
            ))}
            </section>
        </>
    )
}

export default SocialNetworkContainer