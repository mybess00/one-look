import PayCard from './PayCard'

export default function PayOptions ({ title, options }) {

  return (
    <div className="card bg-base-100 flex flex-col flex-nowrap gap-y-2 p-6 col-start-1 col-end-3 mobile:p-2">
      <h2 className="card-title text-center block">{title}</h2>
      {
        options.map((element) => {
          return  <PayCard id={element.id} name={element.name} content={element.content}/>
        })
      }
    </div>
  )
}