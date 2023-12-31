import React, { useState } from "react";
import ReactPaginate from "react-paginate"; 
import { FacebookPost } from "@/app/util/types";
import { PATH_ROUTES } from "@/app/util/pages";
import { getFormatDate } from "@/app/util/getDateFormat";
import { BlogTypes } from "@/app/context/types/blog";
import { useBlogContext } from "@/app/context/blog-context";
import CustomPagination from "../paginator/Paginator";

export const BlogPosts = () => {
  const { state, dispatch }: any = useBlogContext();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4; 


  const hanleSetPostDetail = (post: FacebookPost): void => {
    dispatch({
      type: BlogTypes.SET_FACEBOOK_POST_DETAIL,
      payload: post,
    });
    setCurrentPage(0); 
  };

  const getCurrentPagePosts = () => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return state.facebookPostData?.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <article>
      <div style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page"> <a href={PATH_ROUTES.HOME_PATH} style={{ color: 'inherit' }}>Home</a> </li>
            <li className="breadcrumb-item" aria-current="page"> <a type="button" style={{ color: '#ffb11f' }}>Noticias</a></li>
          </ol>
        </nav>
      </div>
      {
        getCurrentPagePosts()?.map((post: FacebookPost, i: number) => {
          return (
            <div className="post-item-2 mt-3 animate__animated animate__fadeIn" key={`${post.created_time}/${i}`}>
              <div className="post-inner">
                <div className="post-thumb d-flex justify-content-center">
                  <a type="button" onClick={() => hanleSetPostDetail(post)}>
                    <img src={post.image.src} alt="post-image" />
                  </a>
                </div>
                <div className="post-content px-5">
                  <ul className="agri-ul post-date">
                    <li>
                      <span>Félix Menéndez</span>
                    </li>
                    <li>
                      <span>
                        A través de <a href={post.url} target="_blank">Facebook</a>
                      </span>
                    </li>
                  </ul>
                  <a type="button" onClick={() => hanleSetPostDetail(post)}>
                    <h3>{getFormatDate(post.created_time)}</h3>
                  </a>
                  <p>
                    {post.description}
                  </p>
                  <div className="d-flex flex-wrap justify-content-between more-com">
                    <div className="text-btn">
                      <a type="button" onClick={() => hanleSetPostDetail(post)}>
                        <span>
                          Ver post completo<i className="fa fa-angle-double-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="comment-visi">
                      <span>
                        <i className="far fa-comment"></i>
                        <a type="button" onClick={() => hanleSetPostDetail(post)}>{post.comments?.length ?? '0'} Comentarios</a>
                      </span>
                      <span  className="hart">
                        <i className="far fa-heart"></i>
                        <a type="button" onClick={() => hanleSetPostDetail(post)}>{post.reactions?.length ?? "0"} Likes</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="" style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <CustomPagination
           pageCount={Math.round(Math.ceil((state.facebookPostData?.length || 0) / postsPerPage))}
           onPageChange={handlePageChange}
        />
      </div>
    </article>
  );
};
