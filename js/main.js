const properties = [

    {
      imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      status: "For Sale",
      tag: "Featured",
      price: "$450,000",
      location: "New York",
      title: "Luxury Apartment with City View",
      link: "property-details.html",
      description: "Modern 3-bedroom apartment with stunning city views, fully renovated with high-end finishes.",
      beds: 3,
      baths: 2,
      area: "1,500 sqft",
      listedAgo: "Listed 2 days ago",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      status: "For Sale",
      tag: "Featured",
      price: "$450,000",
      location: "New York",
      title: "Luxury Apartment with City View",
      link: "property-details.html",
      description: "Modern 3-bedroom apartment with stunning city views, fully renovated with high-end finishes.",
      beds: 3,
      baths: 2,
      area: "1,500 sqft",
      listedAgo: "Listed 2 days ago"
    }
  ];
  function renderPropertyCard(property) {
    const container = document.getElementById("properties-container");

    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
  <div class="card card-shadow">
    <div class="card listing-card h-100 border-0 shadow-sm">
      <div class="position-relative">
        <img src="${property.imageUrl}" class="card-img-top" alt="${property.title}">
        <span class="badge bg-success position-absolute top-0 start-0 m-3">${property.status}</span>
        <span class="badge bg-primary position-absolute top-0 end-0 m-3">${property.tag}</span>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between mb-2">
          <span class="text-primary fw-bold">${property.price}</span>
          <span class="text-muted"><i class="bi bi-geo-alt"></i> ${property.location}</span>
        </div>
        <h5 class="card-title">
          <a href="${property.link}" class="text-decoration-none text-dark">${property.title}</a>
        </h5>
        <p class="card-text text-muted">${property.description}</p>
        <div class="d-flex justify-content-between mt-3 font-sm">
          <span><i class="bi bi-house-door"></i> ${property.beds} Beds</span>
          <span><i class="bi bi-droplet"></i> ${property.baths} Baths</span>
          <span><i class="bi bi-rulers"></i> ${property.area}</span>
        </div>
      </div>
      <div class="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center font-sm">
        <span class="text-muted small">${property.listedAgo}</span>
        <a href="${property.link}" class="btn btn-sm btn-outline-primary">View Details</a>
      </div>
    </div>
  </div>
`;

    container.appendChild(col);
  }

  properties.forEach(renderPropertyCard);
