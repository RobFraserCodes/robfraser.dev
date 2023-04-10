import SocialIcons from '@/app/components/subComponents/socialIcons';

const Head = () => {
  return (
    <div className="flex w-full p-16 shadow-lg mx-auto">
      <div className='flex justify-center w-full'>
      <div className="container grid grid-cols-5 gap-8">
        <div className="col-span-5 md:col-span-3">
          <p className="cv-headings">Rob Fraser</p>
          <p>As a highly motivated and detail-oriented professional, I have developed a strong foundation in web development and software engineering through years of hands-on experience. My passion for leveraging cutting-edge technologies to deliver seamless, innovative solutions has consistently driven me to exceed expectations in every project I undertake. With excellent communication and teamwork skills, I am eager to contribute to a dynamic, forward-thinking team where my expertise will make a significant impact.</p>
        </div>
        <div className="col-span-5 md:col-span-2 md:flex md:items-start md:justify-end">
          <div>
            <p className="text-xl font-semibold pb-4 pl-3">Contact Details</p>
            <p className='pb-2 pl-3'>07727777494</p>
            <p className='pb-2 pl-3'>hi@robfraser.dev</p>
            <SocialIcons fgColor="#333" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Head;