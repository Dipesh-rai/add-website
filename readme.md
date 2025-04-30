
// X-Large devices (large desktops, 1200px and up)
@media (max-width: 1200px) {}

// Large devices (desktops, 992px and up)
@media (max-width: 992px) {}

// Medium devices (tablets, 768px and up)
@media (max-width: 768px) {}



// small devices (moibile, 576px and up)
@media (max-width: 576px) {}

  .banner-article {
        display: grid;
        grid-template-columns: 7fr 5fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px;

        .first-banner {
            grid-row: span 2;
            aspect-ratio: 1 / 0;
            overflow: hidden;
            padding: 0;

            .responsive {

                .banner-part {
                    position: relative;

                    img {
                        aspect-ratio: 10 / 6;
                        object-fit: cover;
                        width: 100%;
                    }

                    .banner-items {
                        position: absolute;
                        bottom:20px;
                        left: 10px;
                        padding: 0 30px 0 20px;
                        width:100%;
                        span{
                            font-size:var(--font-sm);
                        }
                       .responsive-heading{
                        font-size:var(--font-xl);
                        color:white;
                        font-weight:600;
                       }

                        p {
                            color:white;
                        }
                        button{
                            width:100% !important;
                            border-radius:30px !important;
                        }
                    }
                }

                .owl-prev, .owl-next {
                    height:50px;
                    width:50px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #ffffff3a !important;
                    padding: 10px;
                    border-radius: 50%;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                    cursor: pointer;
                  }
                  
                  .owl-prev:hover, .owl-next:hover {
                    background: #869791 !important;
                  }
                  
                  .owl-prev svg, .owl-next svg {
                    fill: none;
                    stroke: #333;
                    stroke-width: 2;
                    transition: stroke 0.3s ease;
                  }
                  
                  .owl-prev:hover svg, .owl-next:hover svg {
                    stroke: #fff;
                  }
                  
                  /* Position arrows */
                  .owl-prev {
                    left: 20px;
                  }
                  
                  .owl-next {
                    right: 20px;
                  }
                  
                  /* Style for dots */
                  .owl-dots {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                  }
                  .owl-dots{
                    bottom:-20px !important;
                  }
                  .owl-dots .owl-dot {
                    background: #8a8888 !important;
                    border: 1px solid #333;
                    margin: 20px 5px 0px 0px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    display: inline-block;
                    transition: background 0.3s ease;
                  }
                  
                  .owl-dots .owl-dot.active {
                    background: #333 !important;
                  }
                  
            }


        }

        .side-banner {
            position: relative;

            img {
               size:auto;
            }

            .side-article {
                position: absolute;
                top: 50%;
                left:50%;
                transform: translate(-50%,-50%);
                color: white;
                text-align:center;
                font-weight: 500;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: white;
                button {
                    margin-inline: auto;
                    font-size: var(--font-sm);
                }

            }
            .side-article-destination {
                position: absolute;
                top: 50%;
                left:10px;
                width:50%;
                transform: translateY(-50%);
                color: white;
                text-align:center;
                font-weight: 500;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: white;
                font-size:var(--font-md);
                button {
                    margin-inline: auto;
                    font-size: var(--font-sm);
                }

            }
        }
    }