
// X-Large devices (large desktops, 1200px and up)
@media (max-width: 1200px) {}

// Large devices (desktops, 992px and up)
@media (max-width: 992px) {}

// Medium devices (tablets, 768px and up)
@media (max-width: 768px) {}



// small devices (moibile, 576px and up)
@media (max-width: 576px) {}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
    <!-- bootstrap-file -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
    <!-- bootstrap-icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- keenwheeler carousel -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

</head>

<body>
    <header>
        <div class="container">
            <div class="header-top">
                <div class="header-heading">Global State</div>
                <nav>
                    <ul class="d-flex align-items-center gap-3">
                        <li class=""><a href="index.html"><i class="bi bi-house-door"></i> Home </a></li>
                        <li class="active"><a href="realstate.html"><i class="bi bi-geo-alt-fill"></i> Real State <i
                                    class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="">Residental</a></li>
                                    <li><a href="">Commercial</a></li>
                                    <li><a href="">Industrial</a></li>
                                    <li><a href="">Land</a></li>
                                </ul>
                                </li>
                        <li><a href=""><i class="bi bi-map"></i> Travel and tours <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="">Holiday packages</a></li>
                                <li><a href="">Adventure Tours</a></li>
                                <li><a href="">Luxary Travel</a></li>
                                <li><a href="">Group Tours</a></li>
                            </ul>
                        </li>
                        <li><a href=""><i class="bi bi-person-fill"></i> Jobs <i class="bi bi-chevron-down"></i><a>
                            <ul>
                                <li><a href="">Full Time</a></li>
                                <li><a href="">Part Time</a></li>
                                <li><a href="">Remote</a></li>
                                <li><a href="">Internship</a></li>
                            </ul>
                        </li>
                        <li><a href=""><i class="bi bi-chat-right-text"></i> consultency <i
                                    class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="">Business</a></li>
                                    <li><a href="">Legal</a></li>
                                    <li><a href="">Financial</a></li>
                                    <li><a href="">IT Services</a></li>
                                </ul>
                                </li>
                        <li><a href=""><i class="bi bi-shop-window"></i> Furniture <i
                                    class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="">Living Room</a></li>
                                    <li><a href="">Bedroom</a></li>
                                    <li><a href="">Office</a></li>
                                    <li><a href="">Outdoor</a></li>
                                </ul>
                                </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>

                <div class="login">
                    <a href="" class="btn btn-outline-primary">Login</a>
                    <a hred="" class="text-white btn btn-primary">Sign up</a>
                </div>

            </div>
        </div>
    </header>


    <!-- Filter Section -->
    <section class="py-4 border-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-3 mb-md-0">
                    <p class="mb-0"><strong>1,543</strong> properties found</p>
                </div>
                <div class="col-md-6">
                    <div class="d-flex justify-content-md-end">
                        <div class="me-3">
                            <label for="sort-by" class="form-label mb-0 me-2">Sort by:</label>
                            <select class="form-select form-select-sm d-inline-block w-auto" id="sort-by">
                                <option selected>Featured</option>
                                <option>Price: High to Low</option>
                                <option>Price: Low to High</option>
                                <option>Newest</option>
                                <option>Bedrooms</option>
                                <option>Bathrooms</option>
                                <option>Square Feet</option>
                            </select>
                        </div>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-outline-secondary btn-sm active">
                                <i class="bi bi-grid"></i>
                            </button>
                            <button type="button" class="btn btn-outline-secondary btn-sm">
                                <i class="bi bi-list"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Properties Listing Section -->
    <section class="py-5">
        <div class="container">
            <div class="row">
                <!-- Filters Sidebar -->
                <div class="col-lg-3 mb-4 mb-lg-0">
                    <div class="card card-shadow mb-4">
                        <div class="card-body">
                            <h5 class="mb-3">Advanced Filters</h5>

                            <div class="mb-3">
                                <label for="bedrooms" class="form-label">Bedrooms</label>
                                <select class="form-select" id="bedrooms">
                                    <option selected>Any</option>
                                    <option>1+</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                    <option>4+</option>
                                    <option>5+</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="bathrooms" class="form-label">Bathrooms</label>
                                <select class="form-select" id="bathrooms">
                                    <option selected>Any</option>
                                    <option>1+</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                    <option>4+</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="square-feet" class="form-label">Square Feet</label>
                                <select class="form-select" id="square-feet">
                                    <option selected>Any</option>
                                    <option>500+ sq ft</option>
                                    <option>1,000+ sq ft</option>
                                    <option>1,500+ sq ft</option>
                                    <option>2,000+ sq ft</option>
                                    <option>2,500+ sq ft</option>
                                    <option>3,000+ sq ft</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="year-built" class="form-label">Year Built</label>
                                <select class="form-select" id="year-built">
                                    <option selected>Any</option>
                                    <option>2020+</option>
                                    <option>2010+</option>
                                    <option>2000+</option>
                                    <option>1990+</option>
                                    <option>1980+</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="card card-shadow mb-4">
                        <div class="card-body">
                            <h5 class="mb-3">Amenities</h5>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="air-conditioning">
                                <label class="form-check-label" for="air-conditioning">
                                    Air Conditioning
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="pool">
                                <label class="form-check-label" for="pool">
                                    Swimming Pool
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="garage">
                                <label class="form-check-label" for="garage">
                                    Garage
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="gym">
                                <label class="form-check-label" for="gym">
                                    Gym
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="fireplace">
                                <label class="form-check-label" for="fireplace">
                                    Fireplace
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="balcony">
                                <label class="form-check-label" for="balcony">
                                    Balcony
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="waterfront">
                                <label class="form-check-label" for="waterfront">
                                    Waterfront
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="pet-friendly">
                                <label class="form-check-label" for="pet-friendly">
                                    Pet Friendly
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="card card-shadow">
                        <div class="card-body">
                            <h5 class="mb-3">Property Status</h5>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="for-sale" checked>
                                <label class="form-check-label" for="for-sale">
                                    For Sale
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="for-rent" checked>
                                <label class="form-check-label" for="for-rent">
                                    For Rent
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" id="new-construction">
                                <label class="form-check-label" for="new-construction">
                                    New Construction
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="foreclosure">
                                <label class="form-check-label" for="foreclosure">
                                    Foreclosure
                                </label>
                            </div>

                            <div class="mt-4">
                                <button class="btn btn-primary w-100">Apply Filters</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Property Listings -->
                <div class="col-lg-9">
                    <!-- Featured Property Ad -->
                    <div class="card card-shadow bg-primary bg-opacity-10 mb-4">
                        <div class="card-body p-4">
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                                        class="img-fluid rounded" alt="Featured property">
                                </div>
                                <div class="col-md-6">
                                    <span class="badge bg-primary mb-2">Featured Property</span>
                                    <h5 class="mb-1">Luxury Waterfront Condos - Pre-Construction Pricing</h5>
                                    <p class="mb-2"><i class="bi bi-geo-alt text-primary"></i> Miami Beach, FL</p>
                                    <p class="mb-0">Exclusive waterfront condos with stunning ocean views. Limited time
                                        pre-construction pricing available.</p>
                                </div>
                                <div class="col-md-2 text-md-end mt-3 mt-md-0">
                                    <p class="text-primary fw-bold mb-2">From $599,000</p>
                                    <a href="#" class="btn btn-primary btn-sm">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row gy-3" id='properties-container'></div>
                </div>
            </div>

            <!-- Pagination -->
            <nav aria-label="Page navigation" class="mt-5">
                <ul class="pagination justify-content-center">
                   
                </ul>
            </nav>
        </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h3 class="mb-3">Get Property Alerts Delivered to Your Inbox</h3>
                    <p class="text-muted mb-4">Stay updated with the latest properties matching your criteria and
                        preferences.</p>
                    <form class="row g-3 justify-content-center">
                        <div class="col-md-8">
                            <input type="email" class="form-control form-control-lg" placeholder="Your email address">
                        </div>
                        <div class="col-md-auto">
                            <button type="submit" class="btn btn-primary btn-lg">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-top row">
                <div class="col-md-4">
                    <h2>AdSpot</h2>
                    <p>The #1 marketplace for all your needs. Find or sell homes, jobs, services, and more.</p>
                    <div class="d-flex gap-3 mt-3">
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-md-2">
                    <h2>Category</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href=""> Real-estate</a></li>
                        <li><a href=""> Jobs</a></li>
                        <li><a href=""> Blogs</a></li>
                        <li><a href=""> News</a></li>
                        <li><a href=""> Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h2>Newslatter</h2>
                    <p>Subscribe to our newsletter for the latest listings and updates. </p>
                    <div class="input-group mt-3">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <div>© 2025 AdSpot. All rights reserved.</div>
                <div>Designed with for our users</div>
            </div>
        </div>
    </footer>
    <script src="js/main.js"></script>
</body>

</html>