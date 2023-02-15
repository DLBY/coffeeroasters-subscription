import { collection } from '../data/collection'

export const Collection = () => {
  return (
    <section className="container mx-auto px-6">
      <div className=' '>
        <h2 className="text-center text-[40px] md:text-[96px] xl:text-[150px] leading-[72px] font-serif font-extrabold text-transparent bg-gradient-to-b from-[#83888f] to-[#FEFCF7] bg-clip-text mt-5 md:mt-10 mb-[13px] md:-mb-4">our collection</h2>
        <div className="grid grid-cols-1 justify-items-center gap-8 md:gap-[30px] xl:grid-cols-4 mx-auto w-[80%]" >
          {collection.map((item) => (
            <div className='flex flex-col md:flex-row xl:flex-col items-center xl:justify-center text-center md:text-left first:mt-0 mt-12 md:mt-0 md:gap-[36px]'>
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className="w-[200px] h-[151px] md:w-[255px] md:h-[193px]"
              />
              <div className="flex flex-col mt-6 md:mt-0 xl:text-center">
                <h3 key={item.id} className="font-serif text-darkGreyBlue text-2xl">{item.name}</h3>
                <p key={item.id} className="text-base text-darkGreyBlue mt-4 md:mt-[24px] xl:mt-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
