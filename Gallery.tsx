import './Gallery.css'

interface GalleryImage {
  label: string
  icon: string
}

const defaultImages: GalleryImage[] = [
  { label: 'Team Event', icon: '🎉' },
  { label: 'Competition', icon: '🏆' },
  { label: 'Workshop', icon: '📚' },
  { label: 'Social Night', icon: '🎭' },
  { label: 'Outdoor Trip', icon: '🏕️' },
  { label: 'Celebration', icon: '🎊' },
]

interface GalleryItemProps {
  image: GalleryImage
}

function GalleryItem({ image }: GalleryItemProps) {
  return (
    <div className="gallery-item">
      <span className="gallery-icon">{image.icon}</span>
      <div className="gallery-overlay">
        <span className="gallery-label">{image.label}</span>
      </div>
    </div>
  )
}

interface GalleryProps {
  title?: string
  images?: GalleryImage[]
}

function Gallery({ title = 'Photo Gallery', images = defaultImages }: GalleryProps) {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">{title}</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <GalleryItem key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function GalleryPreview() {
  return (
    <div className="preview-container">
      <Gallery />
    </div>
  )
}

export { Gallery, GalleryItem }
export type { GalleryImage }
