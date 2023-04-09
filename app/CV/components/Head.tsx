const Head = () => {
  return (
    <div className='flex w-full px-12 py-8 shadow-md mx-auto'>
      <div className="container grid grid-cols-5 gap-8">
        <div className=" col-span-5 md:col-span-3">
          <p className="cv-headings">Rob Fraser</p>
          <p>As a highly motivated and detail-oriented professional, I have developed a strong foundation in web development and software engineering through years of hands-on experience. My passion for leveraging cutting-edge technologies to deliver seamless, innovative solutions has consistently driven me to exceed expectations in every project I undertake. With excellent communication and teamwork skills, I am eager to contribute to a dynamic, forward-thinking team where my expertise will make a significant impact.</p>
        </div>
        <div className=' justify-end col-span-2'>
          <p>Contact Details</p>
          <p>07727777494</p>
        </div>
      </div>
    </div>
  )
}

export default Head;