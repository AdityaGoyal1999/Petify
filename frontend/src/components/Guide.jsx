import { Box } from '@mui/joy'
import React from 'react'
import corgiImage from "../assets/corgi-img.jpg"

const Guide = () => {
  return (
    <section className="relative max-container padding-container mb-24">
        <Box className="relative w-full xl:w-3/4 h-[200px] mb-28 md:mb-0 md:h-[500px] overflow-hidden -z-10 rounded-3xl">
            <img 
                src={corgiImage}
                className="absolute -inset-y-1/3 object-cover object-center rounded-3xl"
            />
        </Box>
        <Box className="sm:flexCenter xl:flexEnd h-[290px] rounded-3xl -mt-28">
            <Box className="bg-blue-100 rounded-3xl sm:w-1/2 lg:w-1/3 h-full">
                <Box className="p-10">
                    <h4 className="bold-20 xl:bold-32 capitalize ">Unconditional love</h4>
                    <p className="mt-6">Get the unconditional love of pets. They're known to care, protect and pamper you. Make sure to get your daily serotonin boost with your furry pals.</p>
                </Box>
            </Box>
        </Box>
    </section>
  )
}

export default Guide