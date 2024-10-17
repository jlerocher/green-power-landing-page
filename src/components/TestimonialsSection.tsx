import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    quote: 'GreenPower\'s solar solutions have significantly reduced our energy costs and carbon footprint. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    role: 'Sustainability Director, EcoFirm',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    quote: 'The wind energy systems provided by GreenPower have transformed our energy consumption. We\'re proud to be part of the green revolution.',
  },
  {
    name: 'Mike Johnson',
    role: 'Operations Manager, IndustryCo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    quote: 'GreenPower\'s custom energy solutions have optimized our operations. Their expertise and support are unmatched.',
  },
  {
    name: 'Sarah Lee',
    role: 'Environmental Scientist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    quote: 'As a researcher, I\'m impressed by GreenPower\'s commitment to innovation. Their solutions are making a real difference.',
  },
  {
    name: 'David Chen',
    role: 'City Planner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    quote: 'GreenPower has been instrumental in our city\'s transition to renewable energy. Their expertise is invaluable.',
  },
  {
    name: 'Emma Watson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    quote: 'Installing GreenPower\'s solar panels was the best decision for our home. We\'re saving money and helping the environment.',
  },
];

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;