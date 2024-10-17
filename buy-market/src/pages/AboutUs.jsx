import React from 'react';
import githubLogo from './assets/github.svg';
import facebookLogo from './assets/facebook.svg';
import gmailLogo from './assets/gmail.svg';
import whatsappLogo from './assets/whatsapp.svg';

function AboutUs() {
  return (
    <div className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 text-center mb-8">
          Welcome to BUY-MARKET
        </h2>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At BUY-MARKET, our mission is to revolutionize online shopping by creating a seamless marketplace for both local and global products. We empower farmers, entrepreneurs, and consumers through easy access to a variety of goods, bridging the gap between producers and buyers.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Empowering Entrepreneurs:</strong> We provide an accessible platform for small businesses and local farmers to showcase and sell their products globally.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Promoting Sustainability:</strong> BUY-MARKET is committed to environmentally friendly practices by promoting sustainable products and minimizing waste.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Enhancing Online Shopping:</strong> We combine technology with user-centric design to deliver an intuitive, secure, and efficient e-commerce experience.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Why BUY-MARKET?</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Passion for Local Products:</strong> At BUY-MARKET, we celebrate and promote African products and support local farmers and producers. Our platform provides a marketplace for organic and indigenous goods.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Quality Assurance:</strong> We collaborate with trusted farmers and suppliers to ensure our products meet high standards. Every item undergoes quality checks to guarantee customer satisfaction.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Customer-Centric Approach:</strong> Our customers come first. BUY-MARKET is dedicated to providing excellent service, quick responses, and timely delivery.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Product Catalog</h3>
          <ul className="list-disc text-lg text-gray-700 flex flex-col items-center space-y-2">
            <li><strong>Cassava flakes</strong></li>
            <li><strong>Maize</strong></li>
            <li><strong>Locust bean</strong></li>
            <li><strong>Yam flour</strong></li>
            <li><strong>Plantain</strong></li>
            <li>Millet</li>
            <li>Onions</li>
            <li>Palm oil</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At BUY-MARKET, we believe in the power of community. Whether you're a young farmer or an established producer, join us to connect with like-minded individuals who are passionate about promoting sustainable agriculture. Stay updated with our latest news, tips, and promotions by connecting with us.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions or need assistance? Our support team is available to help. Reach out via email, phone, or live chat on our website. We are committed to providing prompt and effective solutions to meet your needs.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Anagha-lin" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://facebook.com/Linus Irefo Anagha" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="mailto:BUY-MARKET@mall.com" target="_blank" rel="noopener noreferrer">
              <img src={gmailLogo} alt="Gmail" className="h-8 w-8" />
            </a>
            <a href="https://wa.me/07060704682" target="_blank" rel="noopener noreferrer">
              <img src={whatsappLogo} alt="WhatsApp" className="h-8 w-8" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;

