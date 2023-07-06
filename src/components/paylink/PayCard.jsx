import React from "react"
import Modal from "./Modal";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { ToastContainer, Toast } from "react-bootstrap";
import amex from '/images/icons/amex.svg'
import bch from '/images/icons/bch.svg'
import bnb from '/images/icons/bnb.svg'
import btc from '/images/icons/btc.svg'
import busd from '/images/icons/busd.svg'
import card from '/images/icons/card.svg'
import cashapp from '/images/icons/cashapp.svg'
import dash from '/images/icons/dash.svg'
import doge from '/images/icons/doge.svg'
import eth from '/images/icons/eth.svg'
import hive from '/images/icons/hive.svg'
import ltc from '/images/icons/ltc.svg'
import mastercard from '/images/icons/mastercard.svg'
import matic from '/images/icons/matic.svg'
import paypal from '/images/icons/paypal.svg'
import qvapay from '/images/icons/qvapay.svg'
import solana from '/images/icons/solana.svg'
import ton from '/images/icons/ton.svg'
import trx from '/images/icons/trx.svg'
import usdt from '/images/icons/usdt.svg'
import visa from '/images/icons/visa.svg'
import zec from '/images/icons/zec.svg'
import zelle from '/images/icons/zelle.svg'
import zinli from '/images/icons/zinli.svg'

export default function PayCard({ id, name, content }) {

  const payReference = {
    amex,
    bch,
    bnb,
    btc,
    busd,
    card,
    cashapp,
    dash,
    doge,
    eth,
    hive,
    ltc,
    mastercard,
    matic,
    paypal,
    qvapay,
    solana,
    ton,
    trx,
    usdt,
    visa,
    zec,
    zelle,
    zinli,
  }
  
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const copyInfo = () => {
    copy(content);
    toggleShow();
  };

  return (
    <>
      <ToastContainer position="bottom-end" className="z-10 success-toast">
        <Toast
          animation={true}
          autohide={true}
          delay="3000"
          bg="primary"
          onClose={toggleShow}
          show={show}
          className="mb-2.5 mr-2.5 p-2 card toast"
        >
          <Toast.Header closeButton={true} closeLabel="Close">
            <b className="font-bold">Copied to clipboard</b>
          </Toast.Header>
        </Toast>
      </ToastContainer>

      <Modal 
        title={name}
        id={id}
        content={content}
        picture={payReference[`${id}`]}
        copyFunction={copyInfo}/>

      <div className="flex flex-row flex-wrap justify-between items-center text-lg py-3 px-2 rounded-lg my-0 mx-6 bg-primary mobile:m-0">
        <div className="w-8"><img src={payReference[`${id}`]}/></div>
        <div className="payment-description">{name}</div>
        <div className="flex flex-row flex-nowrap justify-center gap-2">
          <div className="cursor-pointer text-xl" onClick={copyInfo}>
            <img src="/images/icons/copy.svg" alt="copy icon" className="w-5 h-5"/>
          </div>
          <label htmlFor={`modal-qr-${id}`} className="cursor-pointer text-xl">
            <img src="/images/icons/qrcode.svg" alt="qrcode icon" className="w-5 h-5"/>
          </label>
        </div>
      </div>
    </>
  )
}