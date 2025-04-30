import { motion } from 'framer-motion'

export const TimelineSection = ({ section }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-pink-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-1">{section.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{section.date}</p>
      <img
        src={section.image}
        alt={section.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p>{section.text}</p>
    </motion.div>
  )
}
