import React from 'react'
import { BlogComponent } from '../components/blog/BlogComponent'

const page = () => {
  const { FACEBOOK_TOKEN = '', FACEBOOK_PAGE_ID = '', INSTAGRAM_TOKEN = ''} = process.env;

  return (
        <div>
            {/* <!-- Blog Section Start Here --> */}
      <div className="blog-section blog-single padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <BlogComponent keys={{ FACEBOOK_TOKEN, FACEBOOK_PAGE_ID, INSTAGRAM_TOKEN }}/>
          </div>
        </div>
      </div>
      {/* <!-- Blog Section ENding Here --> */}
      <script src="/assets/js/jquery.js"></script>
      <script src="/assets/js/fontawesome.min.js"></script>
      <script src="/assets/js/waypoints.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/wow.min.js"></script>
      <script src="/assets/js/swiper.min.js"></script>
      <script src="/assets/js/jquery.countdown.min.js"></script>
      <script src="/assets/js/jquery.counterup.min.js"></script>
      <script src="/assets/js/isotope.pkgd.min.js"></script>
      <script src="/assets/js/lightcase.js"></script>
      <script src="/assets/js/functions.js"></script>
        </div>
  )
}

export default page
