import eventLocationImage from '../assets/images/eventLocation.png';
import faceBookImage from '../assets/images/faceBook.png';
import whatsAppImage from '../assets/images/whatsApp.png';
import linkedInImage from '../assets/images/linkedIn.png';
import twitter from '../assets/images/twitter.png';
import { ChevronLeft, MapPinCheck } from 'lucide-react';
import { useSearchParams } from 'react-router';
import useSWR from 'swr';
import { apiFetcher, imageBaseURL } from '../api/client';
import { useEffect } from 'react';

export default function EventDetail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const { data, isLoading, error } = useSWR(`/events/${id}`, apiFetcher);

    useEffect(() => {
        scrollTo(0, 0);
    }, [id]);

    if (isLoading) {
        return (
            <div>
                <p>loading event detail...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>something went wrong</p>
            </div>
        )
    }


    return (
        <div>
            <div
                style={{ backgroundImage: `url(${imageBaseURL}/${data.data.image})` }}
                className="md:mx-6 rounded text-white relative min-h-[595px] py-6 px-6 md:flex items-center justify-around md:gap-10 lg:gap-64 bg-cover bg-center bg-no-repeat">

                <div className='absolute inset-0 bg-black opacity-70'></div>

                <div className='relative z-10 w-full md:w-[540px] mb-12 md:mb-20 px-4 md:px-0'>

                    <button className='bg-[#7848F4] py-2 px-2 mb-16 rounded flex gap-2'><span><ChevronLeft /></span> Back</button>

                    <h2 className='text-4xl sm:text-5xl md:text-[64px] mb-8 sm:mb-12 break-words font-semibold'>{data.data.title} in {data.data.venue}</h2>
                    <h3 className='text-3xl sm:text-4xl mb-6 sm:mb-8 break-words'>{data.data.college.name}</h3>

                    <h4 className='mb-6 break-words'>{data.data.description}</h4>

                    <button className='text-lg flex gap-2'><span><MapPinCheck /></span> View Map</button>
                </div>

                <div className='relative z-10 bg-white text-black md:w-[385px] min-h-[380px] px-[30px] pt-[32px] rounded'>

                    <h4 className='text-2xl '>Date & Time</h4>

                    <h5 className='text-lg pt-[18px] text-[#7848F4]'>{data.data.start}</h5>

                    <h5 className='pt-[18px]'>Add to calendar</h5>

                    <div className='grid gap-[16px] pt-[22px]'>
                        <button className='bg-[#7848F4] py-[15px]'>Book now</button>
                        <button className='bg-gray-300 py-[15px]'>Program promoter</button>
                    </div>
                    <h5 className='text-center pt-[20px]'>No refunds</h5>
                </div>
            </div>

            <div className='w-full px-6 md:px-8 lg:px-2 md:flex justify-around mt-8'>
                <div className='w-full md:w-[600px] mb-8 md:mb-0'>
                    <h2 className='text-2xl font-bold mb-4'>Description</h2>
                    <p className='mb-2'>{data.data.description}</p>
                    <h2 className='text-2xl font-bold mt-6 mb-4'>Hours</h2>
                    <p>Webnesday hour:<span className='font-semibold text-lg text-[#7848F4]'> 7PM - 10PM</span></p>
                    <p>Sunday hour:<span className='font-semibold text-lg text-[#7848F4]'> 7PM - 10PM</span></p>
                    <h2 className='text-2xl font-bold mt-6 mb-4'>Organizer Contact</h2>
                    <p>Please go to <span className='text-[#7848F4]'>www.sneakypeeks.com</span> and refer the FAQ section for more detail</p>
                </div>
                <div className='w-full md:w-[480px]'>
                    <h2 className='text-2xl font-bold mb-4'>Event Location</h2>
                    <img
                        src={eventLocationImage}
                        alt="Event location map"
                        className='w-full md:w-[480px] min-h-[260px]' />
                    <h2 className='font-semibold text-2xl mt-6 mb-4'>{data.data.title} in {data.data.venue}</h2>
                    <p>Dummy location generation model by RSU ... Our approach generates more realistic dummy locations </p>
                    <h2 className='text-2xl font-bold mt-6 mb-4'>Tags</h2>
                    <div className='flex flex-wrap gap-2 text-sm mb-2'>
                        {data.data.tags.map((tag, index) => {
                            return (
                                <p key={index} className='border-0 p-2 rounded bg-gray-200'>{tag}</p>
                            );
                        })};


                    </div>

                    <h2 className='text-2xl font-bold my-6'>Share with friends</h2>
                    <div className='flex gap-5'>
                        <img
                            src={faceBookImage}
                            alt="Facebook image link"
                            className='w-10 h-10 md:w-12 md:h-12' />

                        <img
                            src={whatsAppImage}
                            alt="WhatsApp image link"
                            className='w-10 h-10 md:w-12 md:h-12' />

                        <img
                            src={linkedInImage}
                            alt="LinkedIn image link"
                            className='w-10 h-10 md:w-12 md:h-12' />

                        <img
                            src={twitter}
                            alt="Twitter image link"
                            className='w-10 h-10 md:w-12 md:h-12' />

                    </div>
                </div>

            </div>
        </div >
    );
}   