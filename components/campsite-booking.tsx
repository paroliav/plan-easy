"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Star, CalendarIcon, Users, ChevronDown } from "lucide-react"
import { format } from "date-fns"

interface CampsiteBookingProps {
  price: number
  rating: number
  reviewCount: number
}

export function CampsiteBooking({ price, rating, reviewCount }: CampsiteBookingProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(2)
  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0

  return (
    <Card className="p-6 border-2">
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/ night</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-semibold">{rating}</span>
          <span className="text-muted-foreground">({reviewCount} reviews)</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs mb-2 block">CHECK-IN</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "MMM d") : "Add date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label className="text-xs mb-2 block">CHECKOUT</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "MMM d") : "Add date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div>
          <Label className="text-xs mb-2 block">GUESTS</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between bg-transparent">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {guests} guests
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Guests</span>
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="outline" onClick={() => setGuests(Math.max(1, guests - 1))}>
                      -
                    </Button>
                    <span className="w-8 text-center">{guests}</span>
                    <Button size="icon" variant="outline" onClick={() => setGuests(guests + 1)}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Button className="w-full mb-4" size="lg">
        Reserve
      </Button>

      <p className="text-center text-sm text-muted-foreground mb-6">You won't be charged yet</p>

      {nights > 0 && (
        <div className="space-y-2 pt-6 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              ${price} × {nights} nights
            </span>
            <span>${price * nights}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service fee</span>
            <span>${(price * nights * 0.1).toFixed(0)}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total</span>
            <span>${(price * nights * 1.1).toFixed(0)}</span>
          </div>
        </div>
      )}
    </Card>
  )
}
