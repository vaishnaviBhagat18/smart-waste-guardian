import React from 'react'

function ReuseIdeas({ activeTab }) {
  if (activeTab !== "reuse") return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Waste Reuse Ideas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plastic Bottle Planters */}
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <img
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Plastic bottles transformed into vertical garden planters&id=dfa6c76a-1a33-4740-9d3a-7e8cdad74665"
              alt="Plastic bottles transformed into vertical garden planters"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Plastic Bottle Planters</h3>
          <p className="mb-4">
            Turn plastic bottles into beautiful vertical gardens. Cut bottles in
            half, add soil and plants, and hang them on walls or fences.
          </p>
          <div className="text-sm text-muted-foreground">
            Difficulty: Easy • Materials: Plastic bottles, soil, plants
          </div>
        </div>

        {/* Glass Jar Storage */}
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <img
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Glass jars repurposed as storage containers with labels&id=dfa6c76a-1a33-4740-9d3a-7e8cdad74665"
              alt="Glass jars repurposed as storage containers with labels"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Glass Jar Storage</h3>
          <p className="mb-4">
            Clean glass jars can be used for storing food, organizing small
            items, or as decorative vases. Add labels for easy identification.
          </p>
          <div className="text-sm text-muted-foreground">
            Difficulty: Easy • Materials: Glass jars, labels
          </div>
        </div>

        {/* Fabric Tote Bags */}
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <img
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Fashionable tote bag made from recycled fabric&id=dfa6c76a-1a33-4740-9d3a-7e8cdad74665"
              alt="Fashionable tote bag made from recycled fabric"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fabric Tote Bags</h3>
          <p className="mb-4">
            Transform old clothes or fabric scraps into reusable shopping bags.
            Reduce plastic bag usage with stylish custom totes.
          </p>
          <div className="text-sm text-muted-foreground">
            Difficulty: Medium • Materials: Old fabric, sewing supplies
          </div>
        </div>

        {/* Broken Ceramic Mosaics */}
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <img
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Colorful mosaic artwork made from broken ceramics and glass&id=dfa6c76a-1a33-4740-9d3a-7e8cdad74665"
              alt="Colorful mosaic artwork made from broken ceramics and glass"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Broken Ceramic Mosaics</h3>
          <p className="mb-4">
            Create beautiful mosaic art from broken tiles, plates, or ceramics.
            Perfect for garden paths, tabletops, or wall decorations.
          </p>
          <div className="text-sm text-muted-foreground">
            Difficulty: Medium • Materials: Broken ceramics, adhesive, grout
          </div>
        </div>
      </div>
    </div>
  );
}

function Recycle() {
  // You can use <ReuseIdeas activeTab="reuse" /> here or elsewhere as needed
  return (
    <div>
      {/* Example usage: */}
      <ReuseIdeas activeTab="reuse" />
    </div>
  );
}

export default Recycle;