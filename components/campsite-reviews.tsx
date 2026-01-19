"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Star, Shield, ThumbsUp } from "lucide-react"
import Image from "next/image"

interface CampsiteReviewsProps {
  rating: number
  reviewCount: number
}

// Mock reviews data
const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "March 2025",
    verified: true,
    localGuide: true,
    content:
      "Absolutely stunning location with direct beach access. The facilities were immaculate and the staff incredibly helpful. Perfect spot for families with kids.",
    helpful: 24,
    photos: ["/coastal-campsite-australia.jpg"],
  },
  {
    id: 2,
    author: "Mark T.",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "February 2025",
    verified: true,
    localGuide: false,
    content:
      "Great powered sites with plenty of space. Hot showers and clean amenities. The sunset views over the ocean are incredible.",
    helpful: 18,
    photos: [],
  },
  {
    id: 3,
    author: "Emma L.",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "January 2025",
    verified: true,
    localGuide: true,
    content:
      "Beautiful campground with excellent facilities. Only downside was it can get quite busy during peak season. Book ahead!",
    helpful: 12,
    photos: ["/mountain-caravan-park.jpg", "/forest-campsite-nz.jpg"],
  },
]

const ratingBreakdown = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
]

export function CampsiteReviews({ rating, reviewCount }: CampsiteReviewsProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

      {/* Rating Summary */}
      <Card className="p-6 mb-6 bg-card/50">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{rating}</div>
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating) ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">{reviewCount} reviews</div>
            </div>
          </div>

          <div className="space-y-2">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="text-sm w-12">{item.stars} star</div>
                <Progress value={item.percentage} className="flex-1" />
                <div className="text-sm text-muted-foreground w-12 text-right">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 bg-card/50">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{review.author}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="gap-1 h-5 text-xs">
                          <Shield className="h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                      {review.localGuide && (
                        <Badge variant="outline" className="h-5 text-xs">
                          Local Guide
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                {review.photos.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.photos.map((photo, idx) => (
                      <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`Review photo ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
