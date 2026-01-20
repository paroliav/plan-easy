"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Grid, X } from "lucide-react"

interface CampsiteGalleryProps {
  images: string[]
  name: string
}

export function CampsiteGallery({ images, name }: CampsiteGalleryProps) {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
      <div className="relative h-[60vh] grid grid-cols-4 gap-2 overflow-hidden">
        {/* Main Image */}
        <div
          className="col-span-4 md:col-span-2 relative cursor-pointer group"
          onClick={() => {
            setSelectedImage(0)
            setShowAll(true)
          }}
        >
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={`${name} - Main view`}
            fill
            className="object-cover group-hover:brightness-90 transition-all"
            priority
          />
        </div>

        {/* Grid Images */}
        <div className="hidden md:grid grid-rows-2 gap-2 col-span-2">
          {images.slice(1, 5).map((image, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer group overflow-hidden"
              onClick={() => {
                setSelectedImage(idx + 1)
                setShowAll(true)
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name} - View ${idx + 2}`}
                fill
                className="object-cover group-hover:brightness-90 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 right-4 gap-2"
          onClick={() => setShowAll(true)}
        >
          <Grid className="h-4 w-4" />
          Show all photos
        </Button>
      </div>

      {/* Full Gallery Modal */}
      <Dialog open={showAll} onOpenChange={setShowAll}>
        <DialogContent className="max-w-7xl h-[90vh] p-0">
          <DialogTitle className="sr-only">Photo gallery for {name}</DialogTitle>
          <div className="relative h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setShowAll(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="grid md:grid-cols-2 gap-4 p-8 h-full overflow-y-auto">
              {images.map((image, idx) => (
                <div key={idx} className="relative aspect-[4/3]">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${name} - View ${idx + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
