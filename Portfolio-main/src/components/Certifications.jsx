import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    title: 'Cloud Computing',
    image: '/nptel.jpg',
    description: 'Explored the core concepts of cloud computing, including scalable resource management, security challenges, and future trends. Gained hands-on understanding of how cloud services like storage, servers, and applications are delivered and managed over the internet. Great for building a foundation in cloud platforms and research.',
    issuingOrganization: 'NPTEL',
    date: '2024',
    link: 'https://www.aws.training/Certification',
    Certificate: '/cloud.png', // Make sure the path is correct
  },
  {
    title: 'The World of Computer Networking',
    image: '/udemy.png', // Replace with actual image path
    description: 'Learned how the internet really works — from IP addresses and routers to DNS, NAT, TCP/UDP, and subnetting. Practiced real-world network analysis using Wireshark. Great foundation for CCNA and anyone working with modern networks.',
    issuingOrganization: 'Udemy',
    date: '2023',
    link: 'https://www.udemy.com/course/world-of-computer-networking/',
    Certificate: '/networking.png',
  },
  {
    title: 'Dynamic Programming, Greedy Algorithms',
    image: '/coursera.png',
    description: ' Create divide and conquer, dynamic programming, and greedy algorithms and Understand intractable problems, P vs NP and the use of integer programming solvers to tackle some of these problems.',
    issuingOrganization: 'Coursera',
    date: '2024',
    link: 'https://www.coursera.org/learn/server-side-nodejs',
    Certificate: '/DAA.png',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    image: '/udemy.png',
    description: 'In-depth, hands-on course covering core data structures like arrays, linked lists, stacks, queues, trees, graphs, and hashing. Focused on whiteboard explanations and line-by-line coding to build strong problem-solving and analytical skills.',
    issuingOrganization: 'Coursera',
    date: '2024',
    link: 'https://www.udemy.com/course/datastructurescncpp/',
    Certificate: '/DSA.png',
  },
];

const bubbles = [
  {
    name: 'XGBoost',
    color: 'bg-purple-600',
    x: [0, -20, 0],
    y: null,
    position: ' left-50',
  },
];

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/10 p-6 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:translate-y-[-10px] h-130">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-purple-400 mt-4">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {certificate.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-white">
                    {certificate.issuingOrganization}
                  </p>
                  <p className="text-sm text-white mt-2">{certificate.date}</p>
                  {certificate.Certificate && (
                    <button
                      onClick={() => openModal(certificate.Certificate)}
                      className="mt-4 text-purple-400 hover:underline"
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal (only image) */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-3xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage}
                  alt="Certificate"
                  className="rounded-xl w-full max-h-[80vh] object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-purple-400"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.position} w-[100px] h-[100px] ${bubble.color} text-white flex items-center justify-center text-xs font-semibold rounded-full shadow-xl opacity-80 z-10`}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: bubble.x || 0,
            y: bubble.y || 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          {bubble.name}
        </motion.div>
      ))}
    </section>
  );
};

export default Certificates;
