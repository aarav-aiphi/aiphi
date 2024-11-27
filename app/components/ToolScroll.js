import Slider from 'react-infinite-logo-slider'

const Component = () => {
    
    return (
        <Slider
            width="250px"
            duration={10}
            pauseOnHover={false}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/logo1.jpg" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/logo2.jpg" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/logo3.jpg" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/logo4.jpg" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/logo5.jpg" alt="any3" className='w-36' />
            </Slider.Slide>
          
         
        </Slider>
    )
}              
                     
export default Component