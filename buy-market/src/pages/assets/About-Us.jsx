import React from 'react';
import githubLogo from './assets/github.svg';
import facebookLogo from './assets/facebook.svg';
import gmailLogo from './assets/gmail.svg';
import whatsappLogo from './assets/whatsapp.svg';

function AboutUs() {
  return (
    <div className="bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 text-center mb-8">Welcome to BUY-MARKET</h2>
        
        <section className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Apis_Mall, our mission is to provide a platfrom for the sale of agro-produce and products.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Empowering Farmers and your Entreprenuers:</strong> We aim to offer a wide range of produce and products.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Promoting Sustainability:</strong> We are committed to sustainability and environmental stewardship.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Educational Resources:</strong> Beyond selling products, we believe in sharing knowledge. We intend promoting the sustainable use of produce and products
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Why BUY_MARKET</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Passion:</strong> The passion to bring local organic produce and products have been an major factor factor, At Buy-Market, we pride in the African produce. Our team is dedicated to sharing our passion and knowledge with our customers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Quality Assurance:</strong> We source our products from trusted and certified  farmers  Every item in our inventory undergoes rigorous testing to ensure it meets ISO standards.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Customer-Centric Approach:</strong> We prioritize customer satisfaction above all else. we strive to provide exceptional service, reliable support, and prompt delivery of your orders.
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
            <li> Millet</li>
            <li>Onions</li>
            <li>Palm oil</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At BUY_MARKET, we believe in the power of community. Whether you're a Young farmer or a seasoned commercial farmer, we invite you to join our community of like-minded individuals who share a passion for farm produce and sustainable agriculture. Connect with us on social media, subscribe to our newsletter, and stay updated on the latest news, tips, and promotions.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a question or need assistance? Our customer service team is here to help. Reach out to us via email, phone, or through our website's live chat feature. We're always happy to assist you in any way we can.
          </p>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Anagha-lin" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="BUY-MARKET@mall@gmail.com" target="_blank" rel="noopener noreferrer">
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
