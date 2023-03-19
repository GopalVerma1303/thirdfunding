import React, { SVGProps } from 'react'
import { motion } from 'framer-motion'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
    description: string;
}

function FeatureCard({ Icon, title, description }: Props) {

    return (
        <article
            className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#22222d] p-10
         hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden
         '
        >
            {/* <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            >
                
            </motion.div> */}
            <div className='px-0 md:px-10 text-white'>
                <h4 className='flex items-center gap-2 text-4xl font-semibold py-5 text-[#4ACD8D]'><Icon className='text-[#4ACD8D] text-[40px]' /> {title}</h4>
                <p className='text-[12px] sm:text-base mt-1 text-start'>{description}</p>
            </div>
        </article>
    )
}

export default FeatureCard