import eventLocationImage from '../assets/images/eventLocation.png'
import faceBookImage from '../assets/images/faceBook.png'
import whatsAppImage from '../assets/images/whatsApp.png'
import linkedInImage from '../assets/images/linkedIn.png' 
import twitter from '../assets/images/twitter.png'

export default function EventDetail() {
    return (
        <div>
            <div className="bg-[url(./assets/images/eventDetails.png)] text-white relative min-h-[595px] mx-6 px-6 flex items-center justify-center bg-cover bg-center bg-no-repeat inset-0 bg-black opacity-40">

                <div className='w-[540px]'>
                    <button className='bg-[#7848F4] py-[10px] px-[10px]'><span>◀</span> Back</button>
                    <h2 className='text-[64px] leading-none'>Dream world wide in jakatra</h2>
                    <h3 className='text-4xl'>IIIT Sonepat</h3>
                    <h4 className=''>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</h4>
                    <h3 className='text-lg'><span></span> View Map</h3>
                </div>
                <div className='bg-white text-black w-[385px] min-h-[380px] px-[30px] pt-[30px] rounded'>
                    <h4 className='text-2xl '>Date & Time</h4>
                    <h5 className='text-lg pt-[18px] text-[#7848F4]'>Saturdat, March 18 2023, 9:30PM</h5>
                    <h5 className='pt-[18px]'>Add to calendar</h5>
                    <div className='grid gap-[15px] pt-[22px]'>
                        <button className='bg-[#7848F4] py-[15px]'>Book now</button>
                        <button className='bg-gray-300 py-[15px]'>Program promoter</button>
                    </div>
                    <h5 className='text-center pt-[20px]'>No refunds</h5>
                </div>
            </div>

            <div className='flex'>
                <div className='w-[600px]'>
                    <h2 className='text-2xl font-bold'>Description</h2>
                    <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
                    <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
                    <h2 className='text-2xl font-bold'>Hours</h2>
                    <p>Webnesday hour:<span className='font-semibold text-lg text-[#7848F4]'> 7PM - 10PM</span></p>
                    <p>Sunday hour:<span className='font-semibold text-lg text-[#7848F4]'> 7PM - 10PM</span></p>
                    <h2 className='text-2xl font-bold'>Organizer Contact</h2>
                    <p>Please go to <span className='underline'>www.sneakypeeks.com</span> and refer the FAQ section for more detail</p>
                </div>
                <div className='w-[480px]'>
                    <h2 className='text-2xl font-bold'>Event Location</h2>
                    <img
                    src={eventLocationImage}
                    alt="Event location map"
                    className='w-[480px] min-h-[260px]' />
                    <h2 className='font-semibold text-2xl'>Dream world wide in jakatra</h2>
                    <p>Dummy location generation model by RSU ... Our approach generates more realistic dummy locations </p>
                    <h2 className='text-2xl font-bold'>Tags</h2>

                    <ul className='flex gap-4 font-semibold whitespace-nowrap mb-4'>
                        <li className='border-0 p-2 rounded bg-gray-200'>Indonesia event</li>
                        <li className='border-0 p-2 rounded bg-gray-200'>Jasakaran event</li>
                        <li className='border-0 p-2 rounded bg-gray-200'>UI</li>
                        <li className='border-0 p-2 rounded bg-gray-200'>Jasakaran event</li>
                    </ul>

                    <ul className='flex gap-4 font-semibold whitespace-nowrap'>
                        <li className='border-0 p-2 rounded bg-gray-200'>Seminar</li>
                        <li className='border-0 p-2 rounded bg-gray-200'>Jasakaran event</li>
                    </ul>

                    <h2 className='text-2xl font-bold'>Share with friends</h2>
                    <div className='flex gap-5'>
                        <img 
                        src={faceBookImage} 
                        alt="Facebook image link" />

                        <img 
                        src={whatsAppImage} 
                        alt="WhatsApp image link" />

                        <img 
                        src={linkedInImage} 
                        alt="LinkedIn image link" />

                        <img 
                        src={twitter} 
                        alt="Twitter image link" />

                    </div>
            </div>

            </div>
        </div>
    );
}