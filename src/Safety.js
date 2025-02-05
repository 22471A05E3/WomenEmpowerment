import React from 'react';
import './Safety1.css'; // Import the CSS for styling
import Navbar from './Navbar';

const Safety = () => {
  const tips = [
    {
      id: 1,
      title: "Be Aware of Your Surroundings",
      description:
        "Always stay alert to your surroundings. Avoid distractions such as your phone when walking in public areas.",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241009/pngtree-international-women-s-empowerment-image_16354799.jpg" // Replace with actual image URL
    },
    {
      id: 2,
      title: "Trust Your Instincts",
      description:
        "If something doesn’t feel right, trust your gut feelings. Leave the area or seek help immediately.",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241021/pngtree-colors-of-black-empowerment-image_16434039.jpg" // Replace with actual image URL
    },
    {
      id: 3,
      title: "Keep Your Phone Charged",
      description:
        "Ensure your phone is always fully charged, especially when you are out. Have emergency contacts accessible.",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241203/pngtree-portrayal-of-empowerment-featuring-a-raised-black-fist-breaking-free-from-image_16728139.jpg" // Replace with actual image URL
    },
    {
      id: 4,
      title: "Share Your Location",
      description:
        "Share your location with a friend or family member when you’re heading to an unfamiliar place.",
      img: "https://lotstoread.com/wp-content/uploads/2020/05/Women-Safety-in-the-society-1200x900.jpg" // Replace with actual image URL
    },
    {
      id: 5,
      title: "Use Safe Transportation Options",
      description:
        "Always use trusted transportation options, such as registered taxis or rideshare apps, and never accept rides from strangers.",
      img: "https://boldnewsonline.com/wp-content/uploads/2023/01/sexual-violence.jpg" // Replace with actual image URL
    },
    {
      id: 6,
      title: "Avoid Walking Alone at Night",
      description:
        "If possible, avoid walking alone during late hours. Stick to well-lit and populated areas.",
      img: "https://t3.ftcdn.net/jpg/05/70/91/94/240_F_570919440_mBlQvCKP0q8R54ottYakcWy1yVsGRPlK.jpg" // Replace with actual image URL
    },
    {
      id: 7,
      title: "Keep Self-Defense Tools Handy",
      description:
        "Carry self-defense tools like pepper spray or a personal alarm to increase your safety in dangerous situations.",
      img: "https://t4.ftcdn.net/jpg/07/47/95/77/240_F_747957797_devHAOErXJzhy15SSM1g6CoqJyO2cC7O.jpg" // Replace with actual image URL
    },
    {
      id: 8,
      title: "Avoid Sharing Personal Information",
      description:
        "Be cautious about sharing personal details, such as your address or routine, with strangers, especially online.",
      img: "https://t3.ftcdn.net/jpg/05/62/78/22/240_F_562782273_8wKos2KwiVWRgypas5TnydOQgShHaeH1.jpg" // Replace with actual image URL
    },
    {
      id: 9,
      title: "Stay Calm in Emergencies",
      description:
        "If you’re ever in an emergency situation, try to stay calm and think clearly. Call the authorities immediately.",
      img: "https://t4.ftcdn.net/jpg/06/07/52/17/240_F_607521703_8PKU6UngJHSIpVXAyBbFFCoAjwE8PdZG.jpg" // Replace with actual image URL
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className='backimg'>
        <div className="safety-tips">
          <h2>Safety Tips for Women</h2>
          <div className="card-container2">
            {tips.map((tip) => (
              <div key={tip.id} className="card2">
                <div className="card-image1" style={{ backgroundImage: `url(${tip.img})` }}></div>
                <div className="card-content">
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;
