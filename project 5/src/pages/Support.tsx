import { HeartHandshake, Mail, MessageCircle, Phone } from 'lucide-react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <HeartHandshake className="h-12 w-12 text-purple-600 mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-gray-800">24/7 Support</h1>
        <p className="text-gray-600">We're here to help whenever you need us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Phone className="mr-2 text-purple-600" />
            Emergency Contacts
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-800">Crisis Helpline</h3>
              <p className="text-red-600">080-25497777</p>
              <p className="text-sm text-red-700 mt-1">Available 24/7 for immediate support</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800">Mental Health Support</h3>
              <p className="text-purple-600">1800-599-0019</p>
              <p className="text-sm text-purple-700 mt-1">Professional counselors available</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="mr-2 text-purple-600" />
            Chat Support
          </h2>
          <div className="space-y-4">
            <button className="w-full p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Start Live Chat</span>
            </button>
            <p className="text-sm text-gray-600 text-center">
              Average response time: &lt; 1 minute
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Mail className="mr-2 text-purple-600" />
            Email Support
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
                rows={4}
                placeholder="Describe your concerns..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;