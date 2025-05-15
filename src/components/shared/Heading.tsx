
const Heading = ({heading}:{heading:string}) => {
  return (
    <div className="grid place-content-center">
        <h2 className="text-4xl inline-block mb-20 md:text-6xl font-bold  text-center border-b-2 border-[var(--accent)]">{heading}</h2>
    </div>
  )
}

export default Heading