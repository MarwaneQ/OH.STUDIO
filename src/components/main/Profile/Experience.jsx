
import '../hero/hero.css'
function Experience({date,place,type,position}) {
  return (
    <div className='flex flex-col items-center text-center m-7'>
        <p className='text-[#7f7f7f]'>{date}</p>
        <h1 className='text-2xl my-2'>{place}</h1>
        <p className='text-[#7f7f7f]'>{type}</p>
        <ul className={`md:flex  md:justify-center mt-2`}>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] text-sm font-light">{position}</li>
          </ul>
    </div>
  )
}

export default Experience