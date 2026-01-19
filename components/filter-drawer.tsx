"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FilterDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  filters: any
  onFiltersChange: (filters: any) => void
}

const STAY_TYPES = [
  { label: "Free camps", value: "free", count: 234 },
  { label: "Paid sites", value: "paid", count: 567 },
  { label: "DOC/NP sites (NZ)", value: "doc", count: 145 },
  { label: "Holiday/caravan parks", value: "holiday", count: 189 },
  { label: "Farm stays", value: "farm", count: 67 },
  { label: "Glamping", value: "glamping", count: 34 },
  { label: "Huts", value: "huts", count: 56 },
  { label: "Cabins", value: "cabins", count: 89 },
]

const AMENITIES = [
  { label: "Flush toilets", value: "flush-toilets", count: 456 },
  { label: "Compost toilets", value: "compost-toilets", count: 234 },
  { label: "Hot showers", value: "hot-showers", count: 334 },
  { label: "Cold showers", value: "cold-showers", count: 189 },
  { label: "Potable water", value: "water", count: 389 },
  { label: "Dump point", value: "dump", count: 178 },
  { label: "Power hookup", value: "power", count: 267 },
  { label: "WiFi", value: "wifi", count: 123 },
  { label: "Mobile reception", value: "mobile", count: 345 },
  { label: "Camp kitchen", value: "kitchen", count: 156 },
  { label: "BBQ facilities", value: "bbq", count: 289 },
  { label: "Laundry", value: "laundry", count: 98 },
  { label: "EV charging", value: "ev", count: 67 },
]

const VEHICLE_TYPES = [
  { label: "Tent only", value: "tent", count: 567 },
  { label: "Campervan", value: "campervan", count: 445 },
  { label: "Caravan", value: "caravan", count: 334 },
  { label: "Motorhome/RV", value: "motorhome", count: 289 },
  { label: "Big rig friendly", value: "bigrig", count: 156 },
  { label: "Drive-through sites", value: "drivethrough", count: 123 },
  { label: "2WD accessible", value: "2wd", count: 478 },
  { label: "4WD only", value: "4wd", count: 145 },
]

const ENVIRONMENTS = [
  { label: "Coastal/Beach", value: "coastal", count: 234 },
  { label: "Lakeside", value: "lake", count: 156 },
  { label: "Riverside", value: "river", count: 134 },
  { label: "Forest", value: "forest", count: 189 },
  { label: "Rainforest", value: "rainforest", count: 78 },
  { label: "Alpine", value: "alpine", count: 89 },
  { label: "Outback", value: "outback", count: 67 },
  { label: "Rural", value: "rural", count: 245 },
  { label: "Urban", value: "urban", count: 112 },
]

const ACTIVITIES = [
  { label: "Hiking/Great Walks", value: "hiking", count: 312 },
  { label: "Mountain biking", value: "mtb", count: 167 },
  { label: "Kayaking", value: "kayaking", count: 145 },
  { label: "Fishing", value: "fishing", count: 289 },
  { label: "Surfing", value: "surfing", count: 123 },
  { label: "Swimming", value: "swimming", count: 267 },
  { label: "4WD tracks", value: "4wd-tracks", count: 98 },
  { label: "Stargazing", value: "stargazing", count: 178 },
  { label: "Birdwatching", value: "birding", count: 134 },
]

const RULES = [
  { label: "Pet friendly", value: "pets", count: 345 },
  { label: "Family friendly", value: "family", count: 456 },
  { label: "Accessible facilities", value: "accessible", count: 178 },
  { label: "Fires allowed", value: "fires", count: 234 },
  { label: "Generators allowed", value: "generators", count: 289 },
  { label: "Booking required", value: "booking", count: 267 },
  { label: "Seasonal only", value: "seasonal", count: 123 },
]

const SERVICES = [
  { label: "Fuel station", value: "fuel", count: 234 },
  { label: "Groceries", value: "groceries", count: 289 },
  { label: "Restaurants/Cafes", value: "dining", count: 267 },
  { label: "Mechanics", value: "mechanic", count: 123 },
  { label: "Medical facilities", value: "medical", count: 156 },
]

export function FilterDrawer({ open, onOpenChange, filters, onFiltersChange }: FilterDrawerProps) {
  const handleReset = () => {
    onFiltersChange({
      stayTypes: [],
      amenities: [],
      priceRange: [0, 100],
      vehicleType: [],
      environment: [],
      activities: [],
      rules: [],
      services: [],
    })
  }

  const activeFilterCount =
    (filters.stayTypes?.length || 0) +
    (filters.amenities?.length || 0) +
    (filters.vehicleType?.length || 0) +
    (filters.environment?.length || 0) +
    (filters.activities?.length || 0) +
    (filters.rules?.length || 0) +
    (filters.services?.length || 0)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full sm:max-w-md">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Refine your search
                {activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFilterCount}
                  </Badge>
                )}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-180px)] mt-6">
          <div className="pr-4">
            <Accordion type="multiple" defaultValue={["stay", "amenities", "vehicle"]} className="w-full">
              {/* Stay Types */}
              <AccordionItem value="stay">
                <AccordionTrigger className="text-base font-semibold">Stay type</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {STAY_TYPES.map((type) => (
                      <div key={type.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={type.value} />
                          <Label htmlFor={type.value} className="cursor-pointer text-sm">
                            {type.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{type.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Price Range */}
              <AccordionItem value="price">
                <AccordionTrigger className="text-base font-semibold">Price range</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <Slider defaultValue={[0, 100]} max={100} step={5} className="w-full" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Free</span>
                      <span>$100+/night</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Amenities */}
              <AccordionItem value="amenities">
                <AccordionTrigger className="text-base font-semibold">Amenities</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {AMENITIES.map((amenity) => (
                      <div key={amenity.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={amenity.value} />
                          <Label htmlFor={amenity.value} className="cursor-pointer text-sm">
                            {amenity.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{amenity.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Vehicle Type */}
              <AccordionItem value="vehicle">
                <AccordionTrigger className="text-base font-semibold">Vehicle type</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {VEHICLE_TYPES.map((vehicle) => (
                      <div key={vehicle.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={vehicle.value} />
                          <Label htmlFor={vehicle.value} className="cursor-pointer text-sm">
                            {vehicle.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{vehicle.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Environment */}
              <AccordionItem value="environment">
                <AccordionTrigger className="text-base font-semibold">Environment</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {ENVIRONMENTS.map((env) => (
                      <div key={env.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={env.value} />
                          <Label htmlFor={env.value} className="cursor-pointer text-sm">
                            {env.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{env.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Activities */}
              <AccordionItem value="activities">
                <AccordionTrigger className="text-base font-semibold">Activities</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {ACTIVITIES.map((activity) => (
                      <div key={activity.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={activity.value} />
                          <Label htmlFor={activity.value} className="cursor-pointer text-sm">
                            {activity.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Rules & Requirements */}
              <AccordionItem value="rules">
                <AccordionTrigger className="text-base font-semibold">Rules & Requirements</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {RULES.map((rule) => (
                      <div key={rule.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={rule.value} />
                          <Label htmlFor={rule.value} className="cursor-pointer text-sm">
                            {rule.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{rule.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Nearby Services */}
              <AccordionItem value="services">
                <AccordionTrigger className="text-base font-semibold">Nearby Services</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {SERVICES.map((service) => (
                      <div key={service.value} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id={service.value} />
                          <Label htmlFor={service.value} className="cursor-pointer text-sm">
                            {service.label}
                          </Label>
                        </div>
                        <span className="text-xs text-muted-foreground">{service.count}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={handleReset}>
              Reset all
            </Button>
            <Button className="flex-1" onClick={() => onOpenChange(false)}>
              Show results
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
