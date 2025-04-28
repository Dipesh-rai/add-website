// realstate products and pagination
const propertiesPerPage = 6;
    let currentPage = 1;
  
    const properties = [
      // Just add more if you want to test 9+ items
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        status: "For Sale",
        tag: "Featured",
        price: "$450,000",
        location: "New York",
        title: "Luxury Apartment with City View",
        link: "property-details.html",
        description: "Modern 3-bedroom apartment with stunning city views.",
        beds: 3,
        baths: 2,
        area: "1,500 sqft",
        listedAgo: "Listed 2 days ago"
      }
      // 🔁 Add more to test pagination!
    ];

  
    function renderPropertyCard(property) {
      const container = document.getElementById("properties-container");
  
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
  
      col.innerHTML = `
        <div class="card card-shadow">
          <div class="card listing-card h-100 border-0 placeholder-glow shadow-sm">
            <div class="position-relative placeholder-glow">
              <img src="${property.imageUrl}" class="card-img-top placeholder-glow" alt="${property.title}">
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
  
    function renderPage(page) {
      const container = document.getElementById("properties-container");
      container.innerHTML = "";
  
      const startIndex = (page - 1) * propertiesPerPage;
      const endIndex = startIndex + propertiesPerPage;
      const itemsToShow = properties.slice(startIndex, endIndex);
  
      itemsToShow.forEach(renderPropertyCard);
      updatePagination();
    }
  
    function updatePagination() {
      const pagination = document.querySelector(".pagination");
      pagination.innerHTML = "";
  
      const totalPages = Math.ceil(properties.length / propertiesPerPage);
  
      if (totalPages <= 1) {
        pagination.style.display = "none";
        return;
      } else {
        pagination.style.display = "flex";
      }
  
      // Prev Button
      const prevLi = document.createElement("li");
      prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
      prevLi.innerHTML = `<a class="page-link" href="#">Prev</a>`;
      prevLi.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
          currentPage--;
          renderPage(currentPage);
        }
      });
      pagination.appendChild(prevLi);
  
      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener("click", (e) => {
          e.preventDefault();
          currentPage = i;
          renderPage(currentPage);
        });
        pagination.appendChild(li);
      }
  
      // Next Button
      const nextLi = document.createElement("li");
      nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
      nextLi.innerHTML = `<a class="page-link" href="#">Next</a>`;
      nextLi.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
          currentPage++;
          renderPage(currentPage);
        }
      });
      pagination.appendChild(nextLi);
    }
  
    renderPage(currentPage);