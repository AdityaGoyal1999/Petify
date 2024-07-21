import React from 'react'
import logo from "../assets/logo.png"
import { FOOTER_CONTACT_INFO } from '../constants'

const Footer = () => {
  return (
    <footer className="mx-auto w-full bg-blue-100 bottom-0">
      <div className="pt-10 pb-5 max-container padding-container w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row mb-10">
          <a>
            <img src={logo} width={120}></img>
          </a>
          
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {
                  FOOTER_CONTACT_INFO.links.map((link) => (
                    <a
                      key={link.label}
                      href="/"
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                    </a>
                  ))
                }
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border border-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">Petlify | All rights reserved.</p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      { children }
    </div>
  )
}

export default Footer