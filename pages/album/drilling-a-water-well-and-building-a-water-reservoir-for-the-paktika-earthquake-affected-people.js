import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Layout from '@/components/layout'

export default function ArjWaterProject() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <section className='pt-20 pb-14'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='mb-12 text-center'>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-accents_6'>
                  Drilling a water well and building a water reservoir for the Paktika
                  earthquake-affected people
                </h2>
                <div className='pt-2 text-lg'>Project Photos</div>
              </div>
            </div>
          </div>
          <div className='row justify-center'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/1.jpg'
                      alt=''
                      onClick={() => setIndex(0)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/2.jpg'
                      alt=''
                      onClick={() => setIndex(1)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/3.jpg'
                      alt=''
                      onClick={() => setIndex(2)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/4.jpg'
                      alt=''
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/5.jpg'
                      alt=''
                      onClick={() => setIndex(4)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/6.jpg'
                      alt=''
                      onClick={() => setIndex(5)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/7.jpg'
                      alt=''
                      onClick={() => setIndex(6)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/8.jpg'
                      alt=''
                      onClick={() => setIndex(7)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_water_supply/9.jpg'
                      alt=''
                      onClick={() => setIndex(8)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={[
          {
            src: '/images/projects/arj_water_supply/1.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/2.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/3.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/4.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/5.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/6.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/7.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/9.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_water_supply/9.jpg',
            alt: 'image 1',
          },
          // ...
        ]}
      />
    </>
  )
}

ArjWaterProject.getLayout = (page) => {
  return (
    <Layout
      title='Album | Drilling a water well and building a water reservoir for the Paktika
      earthquake-affected people - Arj Social Organization'
      page='arj-water-project'
      canonical='https://arj.org.af/album/drilling-a-water-well-and-building-a-water-reservoir-for-the-paktika-earthquake-affected-people'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
