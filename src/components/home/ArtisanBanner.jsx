import { motion } from 'framer-motion'

const bannerImages = [
  {
    url: 'https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg',
    caption: 'Traditional Weaving',
    alt: 'An artisan working on a traditional handloom'
  },
  {
    url: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    caption: 'Pottery Making',
    alt: 'A potter creating earthen pots on a wheel'
  },
  {
    url: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg',
    caption: 'Traditional Crafts',
    alt: 'Close up of traditional handicraft work'
  }
]

export default function ArtisanBanner() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-[400px] lg:h-[500px]">
        {bannerImages.map((image, idx) => (
          <motion.div
            key={idx}
            className="relative h-full overflow-hidden"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          >
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            <img
              src={image.url}
              alt={image.alt}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
              onLoad={(e) => {
                e.target.style.opacity = 1;
              }}
              style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/1600x900/2a4365/ffffff?text=${encodeURIComponent(image.caption)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <motion.p
                  className="text-xl font-semibold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + idx * 0.2 }}
                >
                  {image.caption}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}