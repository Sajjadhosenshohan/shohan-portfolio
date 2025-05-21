
const Heading = ({heading}:{heading:string}) => {
  return (
    <div className="grid place-content-center">
        <h2 className="text-4xl inline-block mb-14  md:mb-20  md:text-5xl lg:text-6xl font-bold  text-center border-b-1 pb-2 border-[var(--accent)]">{heading}</h2>
    </div>
  )
}

export default Heading