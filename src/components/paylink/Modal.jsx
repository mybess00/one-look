import QRCode  from "qrcode.react";

export default function Modal ({ title, id, content, picture, copyFunction }) {
 
  return (
    <>
      <input type="checkbox" id={`modal-qr-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative"> 
          <label htmlFor={`modal-qr-${id}`} className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex flex-col items-center my-1.5">
          <QRCode value={content} size='200'
            imageSettings={{
              src: `${picture}`,
              x: undefined,
              y: undefined,
              height: 36,
              width: 36,
              excavate: true,
            }}/>
            <button className="btn btn-primary gap-2 btn-sm mt-6 px-10" onClick={copyFunction}>
              <img src="/images/icons/copy.svg" alt="copy icon" className="w-3.5 h-3.5"/> Copy
            </button>
          </div>          
        </div>
      </div>
    </>
  )
}